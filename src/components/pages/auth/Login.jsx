"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { RestAPI } from "../../../config/Api";
import { Helmet } from "react-helmet";
import "./Login.css";
import { FaEdit } from "react-icons/fa";
import LoginWithGoogle from "../Home/components/LoginWithGoogle";
import LinkedInLogin from "../Home/components/LinkedInLogin";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(300);
  const { isAuthenticated, login } = useContext(AuthContext);
  // if (isAuthenticated) {
  //   // window.location.href = "/";
  //   // console.log(isAuthenticated);
  // }
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };
  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [secondsLeft]);
  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${RestAPI}/otp/generate`, { email });
      if (response.data.message) {
        setIsOtpSent(true);
        setOtp(Array(6).fill(""));
        setCanResend(false);
        setSecondsLeft(300);
      } else {
        Swal.fire(
          "Error",
          "Failed to generate OTP. Please try again.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Error generating OTP",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${RestAPI}/auth/login-email-otp`, {
        email,
        otp: otp.join(""),
      });
      if (response.data.status) {
        await login(response.data.token, response.data.email);
        // window.location.href = "/";
        Swal.fire("Success", response?.data?.message, "success");
      } else {
        Swal.fire(
          "Error",
          response.data.message || "Error logging in.",
          "error"
        );
      }
    } catch {
      Swal.fire("Error", "An error occurred while logging in.", "error");
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async (status) => {
    // console.log(status);
    // if (status) {
    //   console.log(status);
    //   // window.location.href = "/";
    // }
  };
  const handleLinkedInLogin = async (status)=>{
    console.log(status)
  }
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>ideax | Log in</title>
      </Helmet>
      <div className="login-overlay">
        <div className="login-container">
          {loading && (
            <div className="spinner2-overlay">
              <div className="spinner2"></div>
            </div>
          )}
          <div className="login-content">
            <h2 className="login-title">Sign Up with Email</h2>
            <form onSubmit={(e) => e.preventDefault()} className="login-form">
              {isOtpSent ? (
                <>
                  <p className="otp-message ">
                    You&apos;re almost there! We have sent an OTP to{" "}
                    <span
                      className="flex flex-row justify-center"
                      style={{ fontWeight: "600" }}
                    >
                      {email}.
                      <FaEdit
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsOtpSent(false)}
                      />
                    </span>
                  </p>
                  <div className="otp-container ">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="tel"
                        value={digit}
                        id={`otp-input-${index}`} // Assign a unique id to each input
                        onChange={(e) => handleOtpChange(e, index)}
                        maxLength="1"
                        inputMode="numeric"
                        className="otp-input1 shadow-sm w-[45px] md:w-[60px]"
                        onKeyDown={(e) => {
                          // Allow only numeric values and navigation keys
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
                            // If the current input is empty, move to the previous field
                            if (e.target.value === "") {
                              if (index > 0) {
                                document
                                  .getElementById(`otp-input-${index - 1}`)
                                  .focus();
                              }
                            } else {
                              // Clear the current input on backspace
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

                  <p>Resend OTP in: {formatTime(secondsLeft)}</p>
                  {canResend && (
                    <button
                      onClick={handleSendOtp}
                      className="btn"
                      style={{ margin: "auto" }}
                    >
                      Resend OTP
                    </button>
                  )}
                </>
              ) : (
                <div className="form-group" style={{ margin: "unset" }}>
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>
              )}
              <div className="button-container text-center flex justify-center items-center mt-5">
                {isOtpSent ? (
                  <button onClick={handleEmailLogin} className="btn  ">
                    Sign Up
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={handleSendOtp}
                      className="btn"
                      style={{ marginBottom: "15px", margin: "15px auto" }}
                    >
                      Send OTP
                    </button>
                    <LoginWithGoogle handleLogin={handleGoogleLogin} />{" "}
                    <LinkedInLogin handleLogin={handleLinkedInLogin}/>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;