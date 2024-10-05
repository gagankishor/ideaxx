import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Swal from "sweetalert2";
import { RestAPI } from "../../../config/Api";

const EmailSignUpModal = ({ emailLoginModalOpen, setEmailLoginModalOpen }) => {
  // States
  const [email, setEmail] = useState("");
  const [isOtpSent, setisOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [lodingOtpSent, setLodingOtpSent] = useState(false); // Loading state for sending OTP
  const [loadingmailLogin, setLoadingMailLogin] = useState(false); // Loading state for login
  const [canResend, setCanResend] = useState(false); // For resend OTP functionality
  const [secondsLeft, setSecondsLeft] = useState(300); // Countdown for resend OTP
  const [resendOTPLodaing, setResendOTPLodaing] = useState(false); // Loading state for resend OTP
  const [lodding, setLoading] = useState(false);
  // Handle OTP Input Change
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value; 
    setOtp(newOtp);
  };
  // const handleOtpChange = (e, index) => {
  //   const value = e.target.value;
  //   if (/^[0-9]$/.test(value)) {
  //     const newOtp = [...otp];
  //     newOtp[index] = value;
  //     setOtp(newOtp);
  //   }
  // };
  const closeEmailLoginModal = () => {
    setEmailLoginModalOpen(false);
    setisOtpSent(false);
  };
  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear interval when component unmounts or timer ends
    } else {
      setCanResend(true); // Enable resend once the timer reaches 0
    }
  }, [secondsLeft]);
  // Handle Send OTP
  const handleSendOtp = async () => {
    setLodingOtpSent(true);
    const payload = { email };
    try {
      const response = await axios.post(`${RestAPI}/otp/generate`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.message) {
        setisOtpSent(true);
        // Reset OTP fields and set the timer for resend OTP
        setOtp(Array(6).fill(""));
        setCanResend(false);
        setSecondsLeft(60);
        // Swal.fire({
        //   title: "Success",
        //   text: response.data.message,
        //   icon: "success",
        //   confirmButtonText: "OK",
        // });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to generate OTP. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text:
          error.response?.data?.message ||
          "An error occurred while generating OTP.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error generating OTP:", error);
    } finally {
      setLodingOtpSent(false);
    }
  };

  // Handle Email Login after OTP verification (mockup function)
  const handleEmailLogin2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${RestAPI}/auth/login-email-otp`, {
        email,
        otp: otp.join(""),
      });
      if (response.data.status) {

        Swal.fire({
            title: "Success",
            text: response?.data?.message,
            icon: "success",
            confirmButtonText: "OK",
          });
          setEmailLoginModalOpen(false)
      } else {
        Swal.fire({
          title: "Error",
          text: response.data.message || "An error occurred while logging in.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while logging in.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  };

  return (
    <Modal
      isOpen={emailLoginModalOpen}
      onRequestClose={closeEmailLoginModal}
      contentLabel="Email SignUp"
      ariaHideApp={false}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        {lodding && (
          <div className="spinner2-overlay">
            <div className="spinner2"></div>
          </div>
        )}
        <h2 className="modal-title">Sign Up with Email</h2>
        <form onSubmit={(e) => e.preventDefault()} className="modal-form">
          {isOtpSent ? (
            <>
              <p className="otp-message">
                You're almost there! We have sent an OTP to{" "}
                <span style={{ fontWeight: "600" }}>{email}.</span> Please check
                your email for the OTP.
              </p>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="tel"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="otp-input"
                    id={`otp-input-${index}`}
                    onKeyDown={(e) => {
                      // Block any non-numeric keys except navigation keys
                      if (
                        !/[0-9]/.test(e.key) &&
                        e.key !== "Backspace" &&
                        e.key !== "Delete" &&
                        e.key !== "ArrowRight" &&
                        e.key !== "ArrowLeft"
                      ) {
                        e.preventDefault();
                      } else if (
                        e.key === "ArrowRight" &&
                        index < otp.length - 1
                      ) {
                        // Move to next field on right arrow
                        document
                          .getElementById(`otp-input-${index + 1}`)
                          .focus();
                      } else if (e.key === "ArrowLeft" && index > 0) {
                        // Move to previous field on left arrow
                        document
                          .getElementById(`otp-input-${index - 1}`)
                          .focus();
                      } else if (e.key === "Backspace") {
                        if (e.target.value === "") {
                          // If the current input is empty, move focus to previous field
                          if (index > 0) {
                            document
                              .getElementById(`otp-input-${index - 1}`)
                              .focus();
                          }
                        } else {
                          // Clear the current input value on backspace
                          handleOtpChange({ target: { value: "" } }, index);
                        }
                      } else if (e.key === "Delete") {
                        // Clear the current input value on delete
                        handleOtpChange({ target: { value: "" } }, index);
                      }
                    }}
                    onKeyUp={(e) => {
                      // Automatically move to the next field on valid input
                      if (
                        e.target.value.length === 1 &&
                        index < otp.length - 1 &&
                        e.key !== "ArrowRight" &&
                        e.key !== "ArrowLeft" &&
                        e.key !== "Backspace"
                      ) {
                        document
                          .getElementById(`otp-input-${index + 1}`)
                          .focus();
                      }
                    }}
                  />
                ))}
              </div>
              <div>
                <p>Resend OTP in: {formatTime(secondsLeft)}</p>
                {canResend ? (
                  <button
                    onClick={() => {} /* handleResendClick logic */}
                    className="btn"
                    style={{ margin: "auto" }}
                  >
                    Resend OTP
                  </button>
                ) : (
                  <button disabled className="btn" style={{ margin: "auto" }}>
                    Resend OTP
                  </button>
                )}
                {resendOTPLodaing && (
                  <div className="spinner2-overlay">
                    <div className="spinner2"></div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                className="form-label"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#333",
                }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setisOtpSent(false);
                }}
                required
                className="form-input"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#007bff")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
            </div>
          )}

          <div className="button-container">
            {isOtpSent ? (
              loadingmailLogin ? (
                <div className="spinner2-overlay">
                  <div className="spinner2"></div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleEmailLogin2}
                  className="btn"
                >
                  Sign Up
                </button>
              )
            ) : lodingOtpSent ? (
              <div className="spinner2-overlay">
                <div className="spinner2"></div>
              </div>
            ) : (
              <button type="button" onClick={handleSendOtp} className="btn">
                Send OTP
              </button>
            )}
            <button
              type="button"
              onClick={closeEmailLoginModal}
              className="btn"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EmailSignUpModal;
