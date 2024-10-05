import React, { Suspense, useContext, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { RestAPI } from '../../../config/Api';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../config/AuthContext';
import { div } from 'framer-motion/client';
const LoginWithGoogle = ({ handleLogin }) => {
  const [user, setUser] = useState(null);
  const { isAuthenticated, logout, login  } = useContext(AuthContext);
  const [loginStasus,setLoginStatus]=useState(isAuthenticated)
  const [loading,setLoading]=useState(false)

  const handleSuccess = async (response) => {
    try {
      setLoading(true)
        const res = await axios.post(`${RestAPI}/auth/login-with-google`, {
          token: response.credential,
        });
        const responseStatus = true;
        handleLogin(responseStatus);
        const { token, userName,email } = res.data;
        console.log(token)
        setLoginStatus(true)
        login(token,email)
        localStorage.setItem("userName", userName);
        setLoading(false)
      } catch (error) {
        console.error('Google login failed:', error);
        Swal.fire({
          title: "error",
          text: "Google login failed",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
  };

  const handleFailure = (error) => {
    alert(error)
    Swal.fire({
      title: "error",
      text: error,
      icon: "error",
      confirmButtonText: "OK",
    });
    console.log(error)
    console.error('Login failed:', error);
  };

  return (
    <>{loading ? (
      <div className="spinner"></div>
    ) :!loginStasus?
    <div style={{maxWidth:"180px"}}>

    <Suspense fallback={<div className="spinner"></div>}>

    <GoogleOAuthProvider clientId="852076800262-vr2pscp25e4vmddb054istrou9dbp4me.apps.googleusercontent.com">
      {/* <div className="login-page"> */}
        {/* <h2>Login with Google</h2> */}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
          />
      {/* </div> */}
    </GoogleOAuthProvider>
    </Suspense>
    </div>

    :<></>
}</>
  );
};

export default LoginWithGoogle;