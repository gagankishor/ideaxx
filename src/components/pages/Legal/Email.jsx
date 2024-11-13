import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { SideBar } from "../../components/Sidebar";
import { RiMailLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { IdeaContext } from "../../config/ideaDataContext";


export const Email = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const otpSent = false;
  const { ideaData } = useContext(IdeaContext);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("email",email );
    data.append("ideaId", ideaData?.id);
    

    try {
      
      Swal.fire({
        title: "Success",
        text: "Legal information saved successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Failed to save legal information.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    console.log(`Verifying OTP: ${enteredOtp}`);
    // Code to verify OTP goes here
  };

  return (
    <>
      <Helmet>
        <title>Email Verification | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiMailLine />
            Email Verification
          </h1>
          <form className="form" style={{ maxWidth: "500px" }}>
            <h3>Verify Your Email</h3>
            <div className="input-group">
              <label>Email Address</label>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => {
                    // e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  { loading?<div className="spinner"></div>:''
                  }Save
                  {/* {otpSent ? "Resend OTP" : "Send OTP"} */}
                </button>
              </div>
              {otpSent && (
                <>
                  <p>OTP has been sent to your email</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        maxLength="1"
                        style={{ width: '45px', textAlign: 'center' }} // Add text-align for better UX
                        onKeyUp={(e) => {
                          if (e.target.value.length === 1 && index < otp.length - 1) {
                            document.getElementById(`otp-input-${index + 1}`).focus();
                          }
                        }}
                        id={`otp-input-${index}`}
                      />
                    ))}
                  </div>
                  <button
                    className="btn btn-verify"
                    onClick={(e) => {
                      e.preventDefault();
                      handleVerifyOtp();
                    }}
                    disabled={otp.some((digit) => !digit)}
                  >
                    Verify OTP
                  </button>
                  <p>Didn&rsquo;t get OTP? Resend after 10 sec</p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
