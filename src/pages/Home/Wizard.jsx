import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { RestAPI } from "../../config/Api";
import { isAuthenticated, userToken } from "../../config/Auth";
import axios from "axios";
import LoginWithGoogle from "./components/LoginWithGoogle";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const steps = [
  {
    title: "It all starts with an idea",
    description:
      "Here we want to know about your idea, whether it has already started or you are still thinking about it.",
    choices: [
      { id: "i1a", label: "It is still an idea", value: "1" },
      { id: "i1b", label: "It has already started", value: "2" },
      { id: "i1c", label: "Other", value: "3" },
    ],
  },
  {
    title: "You can always find time",
    description:
      "What is your current job type so we can find how much time do you have to devote to your idea",
    choices: [
      { id: "i2a", label: "Full-time job", value: "1" },
      { id: "i2b", label: "Part time", value: "2" },
      { id: "i2c", label: "Free lance", value: "3" },
      { id: "i2d", label: "Self employed", value: "4" },
    ],
  },
  {
    title: "What is your project type?",
    description:
      "Numerous types of projects exist, Select the type of project that is closest to your idea.",
    choices: [
      { id: "i3a", label: "Related to IT Services", value: "1" },
      { id: "i3b", label: "Building a brand", value: "2" },
      {
        id: "i3c",
        label: "Profession (Engineer, Doctor, Teacher, Photographer, Etc...)",
        value: "3",
      },
      { id: "i3d", label: "Marketing Services", value: "4" },
      { id: "i3e", label: "Retailer", value: "5" },
      { id: "i3f", label: "Wholesaler", value: "6" },
      { id: "i3g", label: "Restaurant and Food", value: "7" },
      { id: "i3h", label: "Entertainment", value: "8" },
      { id: "i3i", label: "Other", value: "9" },
    ],
  },
  {
    title: "Is your current job somehow related to your idea?",
    description:
      "We want to know if you have any connection between your current job and your project",
    choices: [
      { id: "i6a", label: "Yes", value: "1" },
      { id: "i6b", label: "No", value: "2" },
    ],
  },
  {
    title: "What is your investment plan for your idea?",
    description:
      "While every type of business has its own financing needs, Your idea can always be started on a small budget.",
    choices: [
      { id: "i4a", label: "Less than 2,000$", value: "1" },
      { id: "i4b", label: "2,000$ - 10,000$", value: "2" },
      { id: "i4c", label: "10,000$ - 50,000$", value: "3" },
      { id: "i4d", label: "50,000$ - 100,000$", value: "4" },
      { id: "i4e", label: "More than 100,000$", value: "5" },
    ],
  },
  {
    title: "What is your work or business experience?",
    description:
      "If you ever worked in any job or business before, tell us how many years of experience do you have.",
    choices: [
      { id: "i5a", label: "No experience", value: "1" },
      { id: "i5b", label: "1 - 3 Years", value: "2" },
      { id: "i5c", label: "3 - 5 Years", value: "3" },
      { id: "i5d", label: "More than 5 years", value: "4" },
    ],
  },

  {
    title: "Your project location",
    description:
      "Where are you willing to present your idea or do your project?",
    choices: [
      { id: "i7a", label: "India", value: "5" },
      { id: "i7b", label: "Us", value: "5 " },
    ],

    options: [{}],
  },
  {
    title: "Tell us more about your idea",
    description: "Describe your idea in few line",
    choices: [{ id: "i7a", label: "India", value: "5" }],

    options: [{}],
  },
  {
    title: " Email Verify",
    description: "Confirm your emailAddress on ideax",
  },
];

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [result, setResult] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(isAuthenticated());
  const isAuth = isAuthenticated();

  let n = step != 8 ? (isAuth ? 7 : 8) : 8;
  const isStepValid = () => {
    const currentStepData = formData[`step${step + 1}`];
    // Validate if a selection is made for the current step
    if (step === 7) {
      // Check if the description box is filled on step 7
      return formData.description && formData.description.trim().length > 0;
    }
    return currentStepData !== undefined && currentStepData !== "";
  };
  const nextStep = () => {
    if (isStepValid()) {
      setStep((step) => step + 1);
    } else {
      // toast.error("Please make a selection before proceeding.")
      Swal.fire({
        title: "Info",
        text: "Please make a selection before proceeding.",
        icon: "info",
        confirmButtonText: "OK",
      });
      // alert("Please make a selection before proceeding.");
    }
    // setStep((step) => step + 1);

    // setIsNextDisabled(true);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
    // setIsNextDisabled(false); // Enable the next button when going back
  };

  const handleChoiceChange = (value) => {
    setFormData((prevData) => ({ ...prevData, [`step${step + 1}`]: value }));
    setIsNextDisabled(false);
  };
  const handleGoogleLogin = (status) => {
    setStatus(status);
    // alert("login successful")
    toast.success("Login successful");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
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
      const response = await axios({
        method: "post",
        url: endpoint,
        data: payloadFormData,
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${loggedToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const data = response.data;

      setResult(data);
      setLoading(false);
      toast.success(response.data.massage);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="wizard">
      <div className="container">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="box">
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <motion.img
                  src={`/wizard/${step + 1}.jpg`}
                  alt={`Step ${step + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="wizard-image step-1"
                />
              ) : step === 5 ? (
                <motion.img
                  src={`/wizard/${step + 1}.jpg`}
                  alt={`Step ${step + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="wizard-image step-5"
                />
              ) : step === 4 ? (
                <motion.img
                  src={`/wizard/${step + 1}.jpg`}
                  alt={`Step ${step + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="wizard-image step-4"
                />
              ) : step === 3 ? (
                <motion.img
                  src={`/wizard/${step + 1}.jpg`}
                  alt={`Step ${step + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="wizard-image step-3"
                />
              ) : (
                <motion.img
                  src={`/wizard/${step + 1}.jpg`}
                  alt={`Step ${step + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
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
                        <h3>Email Verification</h3>
                        <p>Confirm your email address on Google.</p>
                        <LoginWithGoogle handleLogin={handleGoogleLogin} />{" "}
                        <p>Start your dream business</p>
                      </div>
                    ) : step === 6 ? (
                      <select
                        onChange={(e) => handleChoiceChange(e.target.value)}
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
                            <>
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
                                maxLength="500"
                              />
                              <small className="description-info">
                                You can enter up to 500 characters.
                              </small>
                            </>
                          ) : (
                            <>
                              <input
                                id={choice.id}
                                type="radio"
                                value={choice.value}
                                checked={
                                  formData[`step${step + 1}`] === choice.value
                                }
                                onChange={() =>
                                  handleChoiceChange(choice.value)
                                }
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
                    >
                      Next <IoIosArrowForward />
                    </button>
                  )}
                  {step === n && (
                    <button
                      type="submit"
                      className="btn generate"
                      disabled={!status}
                    >
                      Generate <BsStars />
                    </button>
                  )}
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn prev"
                    >
                      <IoIosArrowBack /> Back
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
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
