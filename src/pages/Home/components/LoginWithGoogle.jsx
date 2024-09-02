import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { RestAPI } from '../../../config/Api';
import { isAuthenticated } from '../../../config/Auth';
import Swal from 'sweetalert2';
// import jwtDecode from 'jwt-decode';
const LoginWithGoogle = ({ handleLogin }) => {
  const [user, setUser] = useState(null);
  const [loginStasus,setLoginStatus]=useState(isAuthenticated())
  const [loading,setLoading]=useState(false)
  // let loginStasus = isAuthenticated()
  const handleSuccess = async (response) => {
    try {
      setLoading(true)
        const res = await axios.post(`${RestAPI}/auth/login-with-google`, {
          token: response.credential,
        });
        const responseStatus = true;
        handleLogin(responseStatus);

        const { token, userName } = res.data;
        // console.log(res.data)
        // alert(response.data)
        setLoginStatus(true)
        localStorage.setItem("token", token);
        localStorage.setItem("userName", userName);
        setLoading(false)

        // window.location.href = "/dashboard";
        // setLoading(false);
        // Handle success, e.g., store the token and user information
      } catch (error) {
        console.error('Google login failed:', error);
        // alert('Google login failed');
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
    // Handle login failure here, e.g., display an error message
  };

  return (
    <>{loading ? (
      <div className="spinner"></div>
    ) :!loginStasus?
    <GoogleOAuthProvider clientId="852076800262-vr2pscp25e4vmddb054istrou9dbp4me.apps.googleusercontent.com">
      {/* <div className="login-page"> */}
        {/* <h2>Login with Google</h2> */}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
          />
      {/* </div> */}
    </GoogleOAuthProvider>:<></>
}</>
  );
};

export default LoginWithGoogle;