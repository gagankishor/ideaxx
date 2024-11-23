import { Suspense, useContext, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types'; // Import for prop validation
import { RestAPI } from '@/config/Api';
import { AuthContext } from '@/context/AuthContext';

const LoginWithGoogle = ({ handleLogin }) => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [loginStatus, setLoginStatus] = useState(isAuthenticated);
  const [loading, setLoading] = useState(false);

  const handleSuccess = async (response) => {
    try {
      setLoading(true);
      const res = await axios.post(`${RestAPI}/auth/login-with-google`, {
        token: response.credential,
      });
      const responseStatus = true;
      handleLogin(responseStatus); // Call the prop function with status
      const { token, userName, email } = res.data;
      setLoginStatus(true);
      login(token, email);
      localStorage.setItem('userName', userName);
      setLoading(false);
    } catch (error) {
      console.error('Google login failed:', error);
      Swal.fire({
        title: 'Error',
        text: 'Google login failed',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      setLoading(false);
    }
  };

  const handleFailure = (error) => {
    Swal.fire({
      title: 'Error',
      text: error,
      icon: 'error',
      confirmButtonText: 'OK',
    });
    console.error('Login failed:', error);
  };

  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : !loginStatus ? (
        <div style={{ maxWidth: '180px' }}>
          <Suspense fallback={<div className="spinner"></div>}>
            <GoogleOAuthProvider clientId="247324430690-su30irnnm41cuahimdjllo6foo0rqoq0.apps.googleusercontent.com">
              <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
            </GoogleOAuthProvider>
          </Suspense>
        </div>
      ) : null}
    </>
  );
};

// Prop validation
LoginWithGoogle.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginWithGoogle;
