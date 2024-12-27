import { useEffect, useContext, useState, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from '@/context/AuthContext';
import PropTypes from 'prop-types';
import { RestAPI } from '@/config/Api';
const FACEBOOK_APP_ID = "2344916755863155";
const FB_SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
const FB_SDK_VERSION = 'v18.0';
const SocialLogin = ({ handleLogin, onError }) => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [loginStatus, setLoginStatus] = useState(isAuthenticated);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFBSDKLoaded, setIsFBSDKLoaded] = useState(false);
  const handleError = useCallback((errorMessage) => {
    const formattedError = errorMessage || 'An unexpected error occurred';
    setError(formattedError);
    onError?.(formattedError);
  }, [onError]);
  const loadFBSDK = useCallback(() => {
    if (document.getElementById('facebook-jssdk')) return;
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = FB_SDK_URL;
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: FB_SDK_VERSION
      });
      setIsFBSDKLoaded(true);
    };
    script.onerror = () => handleError('Failed to load Facebook SDK');
    document.head.appendChild(script);
  }, [handleError]);
  useEffect(() => {
    loadFBSDK();
    return () => {
      const script = document.getElementById('facebook-jssdk');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [loadFBSDK]);
  useEffect(() => {
    if (!isFBSDKLoaded) return;
    const checkLoginStatus = async () => {
      try {
        const response = await new Promise((resolve) => {
          window.FB.getLoginStatus(resolve);
        });
        
        if (response.status === 'connected') {
          await handleFacebookAuthResponse(response.authResponse);
        }
      } catch (error) {
        handleError('Failed to check login status');
      }
    };
    checkLoginStatus();
  }, [isFBSDKLoaded, handleError]);
  const handleAuthSuccess = useCallback(async (token, email, userName) => {
    setLoginStatus(true);
    login(token, email);
    localStorage.setItem('userName', userName);
    handleLogin(true);
  }, [login, handleLogin]);
  const handleFacebookAuthResponse = async (authResponse) => {
    try {
      const { accessToken, userID } = authResponse;
      const response = await axios.post(`${RestAPI}/auth/facebook-login`, {
        accessToken,
        userID
      });
      const { token, userName, email } = response.data;
      await handleAuthSuccess(token, email, userName);
    } catch (error) {
      handleError(error.response?.data?.message || 'Failed to authenticate with Facebook');
    }
  };
  const handleSocialLogin = async (provider, scope, apiEndpoint) => {
    if (!isFBSDKLoaded) {
      handleError(`${provider} SDK is not loaded yet. Please try again.`);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const loginResponse = await new Promise((resolve) => {
        window.FB.login(resolve, {
          scope,
          auth_type: 'rerequest',
          return_scopes: true
        });
      });
      if (loginResponse.status === 'connected') {
        const { accessToken, userID } = loginResponse.authResponse;
        let authData = { accessToken, userID };
        if (provider === 'Instagram') {
          const accountsResponse = await new Promise((resolve) => {
            window.FB.api('/me/accounts', { access_token: accessToken }, resolve);
          });
          if (accountsResponse.error) {
            throw new Error(accountsResponse.error.message);
          }
          authData.accounts = accountsResponse.data;
        }
        const response = await axios.post(`${RestAPI}${apiEndpoint}`, authData);
        const { token, userName, email } = response.data;
        await handleAuthSuccess(token, email, userName);
      } else if (loginResponse.status === 'not_authorized') {
        handleError(`Please authorize this application to access your ${provider} account.`);
      } else {
        handleError(`Could not log in to ${provider}.`);
      }
    } catch (error) {
      handleError(error.message || `Failed to authenticate with ${provider}`);
    } finally {
      setLoading(false);
    }
  };
  const handleFacebookLogin = () => 
    handleSocialLogin('Facebook', 'email,public_profile', '/auth/facebook-login');
  const handleInstagramLogin = () => 
    handleSocialLogin('Instagram', 'instagram_basic,instagram_content_publish,pages_show_list', '/auth/instagram-login');
  if (loginStatus) return null;
  return (
    <div className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {loading ? (
        <div className="flex justify-center">
          <div className="w-6 h-6 border-2 border-primary rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3 mt-3">
          <button
            onClick={handleFacebookLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Continue with Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.989 4.388 10.952 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.952 24 17.989 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Continue with Facebook
          </button>
          <button
            onClick={handleInstagramLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Continue with Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Continue with Instagram
          </button>
        </div>
      )}
    </div>
  );
};
SocialLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  onError: PropTypes.func,
};
export default SocialLogin;