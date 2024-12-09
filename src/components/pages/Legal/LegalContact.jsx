import  { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { SideBar } from "../../components/Sidebar";
import { RiSeoLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { IdeaContext } from "../../config/ideaDataContext";

export const LegalContact = () => {
  const [permanentNumber, setPermanentNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [permanentOtp, setPermanentOtp] = useState(new Array(4).fill(""));
  const [secondaryOtp, setSecondaryOtp] = useState(new Array(4).fill(""));
  const [showSecondary, setShowSecondary] = useState(false);
  const otpSentForPermanent = false;
  const otpSentForSecondary = false;
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [loading, setLoading] = useState(false);
    const { ideaData} = useContext(IdeaContext);

  const handleOtpChange = (e, index, isPermanent) => {
    const newOtp = isPermanent ? [...permanentOtp] : [...secondaryOtp];
    newOtp[index] = e.target.value;
    isPermanent ? setPermanentOtp(newOtp) : setSecondaryOtp(newOtp);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("permanentContactNumber", countryCode + permanentNumber);
    data.append("ideaId", ideaData?.id);
    data.append(
      "secondaryNumber",
      secondaryNumber ? countryCode + secondaryNumber : null
    );

    try {
      // const response = await axios.post(
      //   `${RestAPI}/save-legal-information`,
      //   data,
      //   {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   }
      // );
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
  const handleVerifyOtp = (isPermanent) => {
    const otp = isPermanent ? permanentOtp.join("") : secondaryOtp.join("");
    console.log(`Verifying OTP: ${otp}`);
  };
  return (
    <>
      <Helmet>
        <title>Contact Information | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Contact Information
          </h1>
          <form className="form" style={{ maxWidth: "500px" }}>
            <h3>Contact Information</h3>
            <div className="input-group">
              <label>Permanent Contact Number</label>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  style={{ width: "80px" }}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1 </option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  maxLength={10}
                  value={permanentNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setPermanentNumber(value);
                    }
                  }}
                  placeholder="Enter 10-digit number"
                  style={{ flex: 1 }}
                />
                {/* <button
                  type="button"
                  className="btn"
                  onClick={(e) => handleSubmit(e)}
                  
                >Save
                </button> */}
              </div>
              {otpSentForPermanent && (
                <>
                  <p>OTP has been sent to your number</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    {permanentOtp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index, true)}
                        maxLength="1"
                        style={{ width: "45px", textAlign: "center" }} // Add text-align for better UX
                        onKeyUp={(e) => {
                          if (
                            e.target.value.length === 1 &&
                            index < secondaryOtp.length - 1
                          ) {
                            // Focus on the next input
                            document
                              .getElementById(`otp-input-${index + 1}`)
                              .focus();
                          }
                        }}
                        id={`otp-input-${index}`} // Unique ID for each input
                      />
                    ))}
                  </div>
                  <button
                    className="btn btn-verify"
                    onClick={(e) => {
                      e.preventDefault();
                      handleVerifyOtp(true);
                    }}
                    disabled={permanentOtp.some((digit) => !digit)}
                  >
                    Verify OTP
                  </button>
                  <p>Didn&rsquo;t get OTP? Resend after 10 sec</p>
                </>
              )}
            </div>

            {showSecondary && (
              <div className="input-group" style={{ marginTop: "20px" }}>
                <label>Secondary Contact Number</label>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{ width: "80px" }}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1 </option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    {/* Add more country codes as needed */}
                  </select>

                  <input
                    type="tel"
                    maxLength={10}
                    value={secondaryNumber}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (/^\d*$/.test(value)) {
                        setSecondaryNumber(value);
                      }
                    }}
                    placeholder="Enter 10-digit number"
                    style={{ flex: 1 }}
                  />
                  {/* <button
                    className="btn"
                    onClick={(e) => handleSubmit(e)}
                  >Save
                  </button> */}
                </div>
                {otpSentForSecondary && (
                  <>
                    <p>OTP has been sent to your number</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      {secondaryOtp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          value={digit}
                          onChange={(e) => handleOtpChange(e, index, false)}
                          maxLength="1"
                          style={{ width: "45px", textAlign: "center" }} // Add text-align for better UX
                          onKeyUp={(e) => {
                            if (
                              e.target.value.length === 1 &&
                              index < secondaryOtp.length - 1
                            ) {
                              // Focus on the next input
                              document
                                .getElementById(`otp-input-${index + 1}`)
                                .focus();
                            }
                          }}
                          id={`otp-input-${index}`} // Unique ID for each input
                        />
                      ))}
                    </div>
                    <button
                      className="btn btn-verify"
                      onClick={(e) => {
                        e.preventDefault();
                        handleVerifyOtp(false);
                      }}
                      disabled={secondaryOtp.some((digit) => !digit)}
                    >
                      Verify OTP
                    </button>
                    <p>Didn&rsquo;t get OTP? Resend after 10 sec</p>
                  </>
                )}
              </div>
            )}

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSecondary(!showSecondary);
                  setSecondaryNumber(null);
                }}
              >
                {showSecondary
                  ? "- Remove secondary number"
                  : "+ Add secondary number"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={(e) => handleSubmit(e)}
                // disabled={!permanentNumber}
              >
                Save{loading ? <div className="spinner"></div> : ""}
                {/* {otpSentForPermanent ? "Save" : "Send OTP"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
