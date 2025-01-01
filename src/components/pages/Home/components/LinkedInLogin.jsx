"use client";
// import { RestAPI } from '@/config/Api';
// import { AuthContext } from '@/context/AuthContext';
// import axios from 'axios';
import PropTypes from 'prop-types';
// import { useContext } from 'react';
// import { useLinkedIn } from 'react-linkedin-login-oauth2';
// import Swal from 'sweetalert2';
const LinkedInLogin = () => {
  // const { login } = useContext(AuthContext);
  // const { linkedInLogin } = useLinkedIn({
  //   redirectUri: `${window.location.origin}/linkedin`,
  //   clientId: '86exe2qff6nxy9',
  //   scope: 'openid profile email',
  //   onSuccess: async (code) => {
  //     console.log('Authorization code:', code);
  //     try {
  //       const response = await axios.post(`${RestAPI}/auth/login-with-linkedin`, { code });
  //       const { token, userName, email } = response.data;
  //       console.log('API Response:', response.data);

  //       // Save token and user data
  //       login(token, email);
  //       localStorage.setItem('userName', userName);

  //       // Trigger success handler
  //       handleLogin(true);
  //     } catch (error) {
  //       console.error('API Error:', error.response?.data || error.message);
  //       Swal.fire({
  //         title: 'Error',
  //         text: 'LinkedIn login failed. Please try again.',
  //         icon: 'error',
  //         confirmButtonText: 'OK',
  //       });
  //     }
  //   },
  //   onError: (error) => {
  //     console.error('LinkedIn Login Error:', error);
  //     Swal.fire({
  //       title: 'Error',
  //       text: error.errorMessage || 'An unknown error occurred.',
  //       icon: 'error',
  //       confirmButtonText: 'OK',
  //     });
  //   },
  // });
  // const handleLoginfun = () => {
  //   try {
  //     console.log('Login triggered');
  //     linkedInLogin();
  //   } catch (error) {
  //     console.error('Login Error:', error);
  //   }
  // };
  const handleLinkedInLogin = () => {
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?${new URLSearchParams({
      response_type: 'code',
      redirect_uri: `${window.location.origin}/linkedin`,
      client_id: '86exe2qff6nxy9',
      scope: 'openid profile email',
      // state: 'random_state_string', // Should be randomly generated and verified
    })}`;
    window.location.href = linkedInAuthUrl;
  };
  return (
    <div onClick={handleLinkedInLogin} style={{ cursor: 'pointer' }}>
      <img 
        src="/linkedin.png"
        alt="Sign in with LinkedIn"
        style={{
          maxWidth: '240px',
          cursor: 'pointer',
          marginTop: '15px',
        }}
      />
    </div>
  );
};
LinkedInLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
export default LinkedInLogin;