import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { SideBar } from '../../components/Sidebar'

import { RiSeoLine } from "react-icons/ri";
import { EnterpriseLaunch } from "../../components/EnterpriseLaunch";

export const RegistrationCertificate = () => {
  
  const [permanentNumber, setPermanentNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [showSecondary, setShowSecondary] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    // Logic to send OTP here
  };

  const handleVerify = () => {
    // Logic to verify OTP
    console.log("Verifying OTP:", otp.join(""));
  }
  return (
    <>
      <Helmet>
        <title> Registration Certificate | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Registration Certificate
          </h1>
          <div className="form">
          <div className="row">
            <div className="col">
              <img src="/RegistrationCertificate.png" alt="" />
            </div>
            <div className="col" style={{display:'flex' ,justifyContent:'center' , flexDirection:'column',alignItems:'center'}}>
              <div>

            <label htmlFor="">
              
              Apply for your business RC
              </label>
              <button type="button" className="btn" style={{margin:'auto'}}>Apply
              </button>
              </div>
              <EnterpriseLaunch/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
