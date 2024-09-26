import { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { RestAPI } from "../../config/Api";
import { isAuthenticated, userToken } from "../../config/Auth";
import axios from "axios";
import LoginWithGoogle from "./components/LoginWithGoogle";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosWithAuth from "../../config/useAxiosWithAuth";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./Wizard.css";
import LinkedInLogin from "./components/LinkedInLogin";
import { AuthContext } from "../../config/AuthContext";
const steps = [
  {
    title: "It all starts with an idea",
    description:
      "Here we want to know about your idea, whether it has already started or you are still thinking about it ?",
    choices: [
      { id: "i1a", label: "It is still an idea", value: "1" },
      { id: "i1b", label: "I made a plan for it", value: "3" },
      { id: "i1c", label: "I already started", value: "5" },
    ],
  },
  {
    title: "You can always find time",
    description:
      "What is your current job type so we can find how much time do you have to devote to your idea",
    choices: [
      { id: "i2e", label: "Do nothing", value: "1" },
      { id: "i2a", label: "Full-time job", value: "2" },
      { id: "i2b", label: "Part time", value: "3" },
      { id: "i2c", label: "Freelance", value: "4" },
      { id: "i2d", label: "Self employed", value: "5" },
    ],
  },
  // {
  //   title: "What is your project type?",
  //   description:
  //     "Numerous types of projects exist, Select the type of project that is closest to your idea.",
  //   choices: [
  //     { id: "i3a", label: "Related to IT Services", value: "Related to IT Services" },
  //     { id: "i3b", label: "Building a brand", value: "Building a brand" },
  //     {
  //       id: "i3c",
  //       label: "Profession (Engineer, Doctor, Teacher, Photographer, Etc...)",
  //       value: "Profession (Engineer, Doctor, Teacher, Photographer, Etc...)",
  //     },
  //     { id: "i3d", label: "Marketing Services", value: "Marketing Services" },
  //     { id: "i3e", label: "Retailer", value: "Retailer" },
  //     { id: "i3f", label: "Wholesaler", value: "Wholesaler" },
  //     { id: "i3g", label: "Restaurant and Food", value: "Restaurant and Food" },
  //     { id: "i3h", label: "Entertainment", value: "Entertainment" },
  //     { id: "i3i", label: "Other", value: "Other" },
  //   ],
  // },
  {
    title: "What is your project type?",
    description:
      "Numerous types of projects exist, Select the type of project that is closest to your idea.",
    choices: [
      { id: "i3a", label: "Services", value: "Services" },
      { id: "i3b", label: "Retail", value: "Retail" },
      {
        id: "i3c",
        label: "Technology",
        value: "Technology",
      },
      { id: "i3d", label: "Health and Wellness", value: "Health and Wellness" },
      { id: "i3e", label: "Hospitality", value: "Hospitality" },
      { id: "i3f", label: "Entertainment", value: "Entertainment" },
      { id: "i3g", label: "Manufacturing", value: "Manufacturing" },
      { id: "i3h", label: "Finance", value: "Finance" },
      { id: "i3i", label: "Real Estate", value: "Real Estate" },
      { id: "i3j", label: "Education", value: "Education" },
      { id: "i3k", label: "Transportation", value: "Transportation" },
      { id: "i3l", label: "Environmental and Energy", value: "Environmental and Energy" },
      { id: "i3m", label: "Legal and Compliance", value: "Legal and Compliance" },
      { id: "i3n", label: "Social and Community", value: "Social and Community" },
      { id: "i3o", label: "Communication", value: "Communication" },
      { id: "i3p", label: "Automotive", value: "Automotive" },
      { id: "i3q", label: "Agriculture and Farming", value: "Agriculture and Farming" },
      { id: "i3r", label: "Innovation and Technology", value: "Innovation and Technology" },
      { id: "i3s", label: "Beauty and Personal Care", value: "Beauty and Personal Care" },
      { id: "i3t", label: "Training and Development", value: "Training and Development" },
    ],
  },
  {
    title: "Is your current job somehow related to your idea?",
    description:
      "We’d like to understand if there’s any connection between your current job and your project.",
    choices: [
      { id: "i6a", label: "Yes", value: "5" },
      { id: "i6b", label: "No", value: "2" },
    ],
  },
  {
    title: "What is your investment plan for your idea?",
    description:
      "While every type of business has its own financing needs, Your idea can always be started on a small budget.",
    choices: [
      { id: "i4a", label: "less than 1,00,000 ₹", value: "1" },
      { id: "i4b", label: "1,00,000 ₹ - 10,00,000 ₹", value: "2" },
      { id: "i4c", label: "10,00,000 ₹ - 50,00,000 ₹", value: "3" },
      { id: "i4d", label: "50,00,000 ₹ - 1,00,00,000 ₹", value: "4" },
      { id: "i4e", label: "more than 1,00,00,000 ₹", value: "5" },
    ],
  },
  {
    title: "What is your work or business experience?",
    description:
      "If you’ve previously worked in any job or business, please share how many years of experience you have in that field.",
    choices: [
      { id: "i5a", label: "No experience", value: "0" },
      { id: "i5b", label: "1 - 3 Years", value: "3" },
      { id: "i5c", label: "3 - 5 Years", value: "4" },
      { id: "i5d", label: "More than 5 years", value: "5" },
    ],
  },

  {
    title: "Your project location",
    description:
      "Where are you willing to present your idea or do your project?",
    choices: [
      { id: "i7a", label: "INDIA", value: "5_a" },
      { id: "i7b", label: "USA", value: "5_b" },
      { id: "i7c", label: "CHINA", value: "5_c" },
      { id: "i7d", label: "JAPAN", value: "5_d" },
      { id: "i7e", label: "GERMANY", value: "5_e" },
      { id: "i7f", label: "UK", value: "5_f" },
      { id: "i7g", label: "FRANCE", value: "5_g" },
      { id: "i7h", label: "ITALY", value: "5_h" },
      { id: "i7i", label: "BRAZIL", value: "5_i" },
      { id: "i7j", label: "CANADA", value: "5_j" },
      { id: "i7k", label: "RUSSIA", value: "5_l" },
      { id: "i7l", label: "SWITZERLAND", value: "5_m" },
    ],

    options: [{}],
  },
  {
    title: "Tell us more about your idea",
    description: "Describe your idea in few line",
    choices: [{ id: "i8a", label: "India", value: "5" }],

    options: [{}],
  },
  {
    title: " Email Address",
    description: "Confirm your email Address on ideax",
  },
];

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [result, setResult] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingmailLogin, setLoadingmailLogin] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");

  const [status, setStatus] = useState(isAuthenticated);
  const [emailLoginModalOpen, setEmailLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [showError, setShowError] = useState(false); // To control when to show the error

  const handleBlur = () => {
    if (formData.description.length < 50) {
      setShowError(true);
    } else {
      setShowError(false); 
    }
  };
  let n = step != 8 ? (isAuthenticated ? 7 : 8) : 8;
  const isStepValid = () => {
    const currentStepData = formData[`step${step + 1}`];
    if (step === 7) {
      return formData.description && formData.description.trim().length > 50;
    }
    return currentStepData !== undefined && currentStepData !== "";
  };
  const nextStep = () => {
    if (isStepValid()) {
      setStep((step) => step + 1);
    } else {
      let textmassge = "Please make a selection before proceeding."
      if(step === 7 ){
        textmassge = "Please describe your idea in at least 50 characters."
      }
      Swal.fire({
        title: "Info",
        text: textmassge,
        icon: "info",
        confirmButtonText: "OK",
      });
    }
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleChoiceChange = (value) => {
    console.log(value,step
    )
    setSelectedOption(value);
    setFormData((prevData) => ({ ...prevData, [`step${step + 1}`]: value }));
    console.log(formData)
    setIsNextDisabled(false);
  };
  const handleGoogleLogin = (status) => {
    setStatus(status);
    Swal.fire({
      title: "Success",
      text: "Login successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      Swal.fire({
        title: "Error",
        text: "Please Login First",
        icon: "error",
        confirmButtonText: "OK",
      });
    } 
    else if(step === 7 &&!isStepValid()){
      Swal.fire({
        title: "Info",
        text: "Please describe your idea in at least 50 characters.",
        icon: "info",
        confirmButtonText: "OK",
      });
    } 
    else {
      setLoading(true);

      const payloadFormData = new FormData();
      payloadFormData.append("phase1", formData.step1 || "");
      payloadFormData.append("phase2", formData.step2 || "");
      payloadFormData.append("phase3", formData.step3 || "");
      payloadFormData.append("phase4", formData.step4 || "");
      payloadFormData.append("phase5", formData.step5 || "");
      payloadFormData.append("phase6", formData.step6 || "");
      payloadFormData.append("phase7", formData.step7 || "5");
      payloadFormData.append("idea_description", formData.description || "");
      payloadFormData.append("idea_name", "Google");

      const loggedToken = userToken();
      const endpoint = `${RestAPI}/wizard`;

      try {
        const response = await axiosInstance({
          method: "post",
          url: endpoint,
          data: payloadFormData,
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "multipart/form-data",
          },
        });
        const data = response.data;

        
        if(response.data.message){
          setResult(data);
          setLoading(false);
          navigate('/plan-details');
          Swal.fire({
            title: "Success",
            text: response.data.message ,
            icon: "success",
            confirmButtonText: "OK",
          });
        }else{
          Swal.fire({
            title: "Error",
            text: response.data.error ,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while processing your request",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
      finally{
        setLoading(false);

      }
    }
  };
  const openEmailLoginModal = () => {
    setEmailLoginModalOpen(true);
  };

  const closeEmailLoginModal = () => {
    setEmailLoginModalOpen(false);
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoadingmailLogin(true)
    try {
      const response = await axios.post(`${RestAPI}/auth/login`, {
        email,
        password,
      });
      if (response.data) {
        setLoadingmailLogin(false)
        login(response.data.token);
        localStorage.setItem("userName", response.data?.userName);
        handleGoogleLogin(true);
        closeEmailLoginModal();
      } else {
        setLoadingmailLogin(false)

        Swal.fire({
          title: "Error",
          text: "An error occurred while logging in.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoadingmailLogin(false)
      Swal.fire({
        title: "Error",
        text: "An error occurred while logging in.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="wizard">
      <div className="container">
        <div className="box">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <motion.img
                src={`/wizard/${step + 1}.webp`}
                alt={`Step ${step + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wizard-image step-1"
              />
            ) : step === 5 ? (
              <motion.img
                src={`/wizard/${step + 1}.webp`}
                alt={`Step ${step + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wizard-image step-5"
              />
            ) : step === 4 ? (
              <motion.img
                src={`/wizard/${step + 1}.webp`}
                alt={`Step ${step + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wizard-image step-4"
              />
            ) : step === 3 ? (
              <motion.img
                src={`/wizard/${step + 1}.webp`}
                alt={`Step ${step + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wizard-image step-3"
              />
            ) : (
              <motion.img
                src={`/wizard/${step + 1}.webp`}
                alt={`Step ${step + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wizard-image step-1"
              />
            )}

            <div className="content">
              <div className="left">
                <div className="text">
                  <h2>{steps[step].title}</h2>
                  <p>{steps[step].description}</p>
                </div>
                <div className="choices">
                  {step === 8 ? (
                    <div className="final-step">
                      {!isAuthenticated && (
                        <div className="login-methods-buttons">
                          <LoginWithGoogle handleLogin={handleGoogleLogin} />{" "}
                          <LinkedInLogin />
                          <button
                            type="button"
                            className="btn"
                            onClick={openEmailLoginModal}
                          >
                            Login with Email
                          </button>
                        </div>
                      )}
                    </div>
                  ) : step === 6 ? (
                    <select
                      onChange={(e) => handleChoiceChange(e.target.value)}
                      value={selectedOption} 
                    >
                      {" "}
                      <option value="">Select Country</option>
                      {steps[step].choices.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                      {additionalOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    steps[step].choices.map((choice) => (
                      <div className="custom-check" key={choice.id}>
                        {step === 7 ? (
                          <div className="description-box-parent">
                          <textarea
                            placeholder="Provide detailed information or notes here..."
                            value={formData.description || ""}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                            className="description-box"
                            aria-label="Description box"
                            rows="5"
                            maxLength="250"
                            minLength="50"
                            onBlur={handleBlur}
                          />
                          <div className="description-info">
                            <small>
                              {formData.description?.length || 0}/250 characters written
                            </small>
                            <small>
                              {250 - (formData.description?.length || 0)} characters remaining
                            </small>
                            
                          </div>
                          {showError && formData.description.length < 50 && (
                            <small className="error-message" style={{ color: 'red' }}>
                              Please describe your idea in at least 50 characters.
                            </small>
                          )}
                        </div>
                        
                        ) : (
                          <>
                            <input
                              id={choice.id}
                              type="radio"
                              value={choice.value}
                              checked={
                                formData[`step${step + 1}`] === choice.value
                              }
                              onChange={() => handleChoiceChange(choice.value)}
                            />
                            <label htmlFor={choice.id}>{choice.label}</label>
                          </>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="right">
                {step < n && (
                  <button
                    disabled={isNextDisabled}
                    type="button"
                    onClick={nextStep}
                    className="btn"
                    style={{textAlign:'center'}}
                  >
                    Next &lt;
                  </button>
                )}
                {loading ? (
                  <div className="spinner-parent">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  step === n && (
                    <button
                      type="submit"
                      className="btn generate"
                      disabled={!isAuthenticated}
                    >
                      Generate <BsStars />
                    </button>
                  )
                )}
                {step > 0 && (
                  <button type="button" onClick={prevStep} className="btn prev" style={{textAlign:'center'}}>
                    &gt; Back 
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={emailLoginModalOpen}
        onRequestClose={closeEmailLoginModal}
        contentLabel="Email Login"
        ariaHideApp={false}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Login with Email</h2>
          <form onSubmit={handleEmailLogin} className="modal-form">
            <div className="form-group">
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="button-contener">
              {loadingmailLogin ?<div className="spinner" style={{marginTop:'20px'}}></div>: (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              )}
              <button
                onClick={closeEmailLoginModal}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
//  : (
//   <div>
//     <h3>Result:</h3>
//     {result.data &&  result.data.map((paragraph, index) => (
//       <p key={index}>{paragraph}</p> // Rendering each paragraph
//     ))}
//     <p>Success Percentage: {result.success_percentage}%</p>{" "}
//     {/* Rendering the success percentage */}
//   </div>
// )
