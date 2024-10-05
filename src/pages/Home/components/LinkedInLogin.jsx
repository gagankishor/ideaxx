import React, { useState } from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

const LinkedInLogin = () => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { linkedInLogin } = useLinkedIn({
    clientId: 'YOUR_LINKEDIN_CLIENT_ID',
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      setCode(code);
      setErrorMessage('');
      // console.log('Authorization Code:', code);
      // Here you can send the code to your server to exchange for an access token
    },
    onError: (error) => {
      setCode('');
      setErrorMessage(error.errorMessage || 'LinkedIn login failed');
      console.error('LinkedIn Login Error:', error);
    },
  });
  
  return (
    <div>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Sign in with LinkedIn"
        style={{ maxWidth: '180px', cursor: 'pointer',position:'unset', marginTop:'15px' }}
      />
      {code && <div>Authorization Code: {code}</div>}
      {errorMessage && <div>Error: {errorMessage}</div>}
    </div>
  );
};

export default LinkedInLogin;
