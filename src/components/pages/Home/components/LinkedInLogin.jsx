// import React from 'react';
import { RestAPI } from '@/config/Api';
import { AuthContext } from '@/context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import Swal from 'sweetalert2';

const LinkedInLogin = () => {
  const {  login } = useContext(AuthContext);

  const { linkedInLogin } = useLinkedIn({
    // redirectUri: 'http://localhost:3000/linkedin',
    redirectUri: 'https://ideax.in/linkedin',
    
    clientId: '86exe2qff6nxy9', // Replace with your actual LinkedIn Client ID
    scope: 'openid profile email', // Requested scopes for authorization
    onSuccess: async (code) => {
      try {
        // setLoading(true);
        const res = await axios.post(`${RestAPI}/auth/login-with-linkedin`, { code });
        // const responseStatus = true;
        // handleLogin(responseStatus); // Call the prop function with status
        const { token, userName, email } = res.data;
        // setLoginStatus(true);
        login(token, email);
        localStorage.setItem('userName', userName);
        // setLoading(false);
      } catch (error) {
        console.error('LinkedIn login failed:', error);
        Swal.fire({
          title: 'Error',
          text: 'LinkedIn login failed',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        // setLoading(false);               
      }
    },
    onError: (error) => {
      console.error('LinkedIn Login Error:', error?.errorMessage || 'Login failed');
    },
  });

  const handleLogin = () => {
    linkedInLogin(); // Initiates LinkedIn login process
  };

  return (
    <div onClick={handleLogin} style={{ cursor: 'pointer' }}>
      <img
        src="/linkedin.png"
        alt="Sign in with LinkedIn"
        style={{
          maxWidth: '180px',
          cursor: 'pointer',
          marginTop: '15px',
        }}
      />
    </div>
  );
};

export default LinkedInLogin;

// AQWAg3LVrcuHodhYKVeyuQRd5rOzKMyhjji05StWmiq9vF6EIB5ea31-mR-oZH1uN9AeaqZuzHFLIHmcA9Opt6re9KIskWNT__olbQfv18IqLdyk_qXIhyODcI1DqVleoqZEAeMAZfN_4WoseXDCTyJpu-Q2VsFcGuMLTZHgGA9Pkp4zPv5LFF-n5biqj8fII8sv6xzw4fdSMU-k-puKlSOTaHplmzrMYioRCZEPGmAChROIjyVJT_j03EXmuSYVK10t6EayWwGdzYhxXKL0zAtBRXiwHGeCIwQc4nCOEZiftpr8z3h9Bzi19pdNsX32l3KUZePEvldS7iKhVgLls0b-UNig8A
// AQWSprcPgvLgXKiTEB_ylrdNJXkAxravEueoPmgvZejU7So1WavtuBNHzdZYdJQAyMGKl6hCbLS1VixVezpNjUYV2PldLgJd-_qA1nN2eJsQQb0DQ0jlO0-bujbpM8gG_X76VQdcCFWXHmithNSHmYG6NZ2T4VOw6lOhMB9RepTlIkB2HXkANC9E7UFylzWgOhNh28fuKgusnEX_iInI4_79jcz7GvGnYhMawv-QjJxmdu8cVJxi3mDHb3Se-bBhWtN-tMrtfFbGcgzy10ryIRQ117qJXP2_3DhfEQc08DpFfLG_eVGMsz04Ib6LddJrt17RluGqNqJNEN9TdAwKvjazTtYJhg
// import Image from "next/image";
// import { useLinkedIn } from "react-linkedin-login-oauth2";
// const LinkedInLogin = () => {
//   const { linkedInLogin } = useLinkedIn({
//     clientId: "86exe2qff6nxy9",
//     redirectUri: `${typeof window === "object" && window.location.origin}/linkedin`,
//     scope: "r_liteprofile r_emailaddress", // Add required scopes here
//     onSuccess: (code) => console.log("Authorization Code:", code),
//     onError: (error) => alert("Privacy Policy",error),
//   });
//   return (
//     <div
//       onClick={linkedInLogin}
//       style={{
//         display: "inline-block",
//         cursor: "pointer",
//       }}
//     >
//       <Image
//         src="/linkedin.png"
//         alt="Sign in with LinkedIn"
//         width={180}
//         height={45}
//       />
//     </div>
//   );
// };
// export default LinkedInLogin;