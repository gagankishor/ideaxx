import { useContext, useEffect, useState } from "react";
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
import { CiMail } from "react-icons/ci";
import { FaRedo } from "react-icons/fa";
import { FaVirus } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [result, setResult] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingmailLogin, setLoadingmailLogin] = useState(false);
  const { isAuthenticated, logout, login, setIsAuthenticated } =
    useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [status, setStatus] = useState(isAuthenticated);
  const [emailLoginModalOpen, setEmailLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();
  // const [otp, setOtp] = useState("");
  const [showError, setShowError] = useState(null);
  const [isOtpSent, setisOtpSent] = useState(false);
  const [lodingOtpSent, setLodingOtpSent] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [previousValue, setPreviousValue] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(300); // 300 seconds = 5 minutes
  const [canResend, setCanResend] = useState(false);
  const [countriesChoices, setCountriesChoices] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${RestAPI}/countries`); // Replace with your API endpoint
        // setCountries(response.data.data);
        const countries = response.data.data;
        const transformedChoices = countries.map((country, index) => ({
          id: `iaq7${String.fromCharCode(97 + index)}`, // Generates IDs like i7a, i7b, etc.
          label: country.country.toUpperCase(), // Capitalizes the country name
          value: `${country.id}`, // Assuming score is available in country data
        }));
        setCountriesChoices(transformedChoices)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);
  const steps = [             
    {
      title: "It all starts with an idea",
      description:
        "We'd love to hear about your idea! Have you already started working on it, or are you still in the planning phase?",
      choices: [
        { id: "i1a", label: "It is still an idea", value: "1" },
        { id: "i1b", label: "I made a plan for it", value: "3" },
        { id: "i1c", label: "I already started", value: "5" },
      ],
      bgColor: "#6161FF",
    },
    {
      title: "You can always find time",
      description: "How would you describe your current work status? Are you: ",
      choices: [
        { id: "i2e", label: "Unemployed", value: "1" },
        { id: "i2a", label: "Working full-time", value: "2" },
        { id: "i2b", label: "Working part-time", value: "3" },
        { id: "i2c", label: "Freelancing", value: "4" },
        { id: "i2d", label: "Self-employed", value: "5" },
      ],
      bgColor: "#A36209",
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
        {
          id: "i3a",
          label: "Services",
          value: "Services",
          subOption:
            "Consulting Services, Professional Services, Personal Services",
        },
        {
          id: "i3b",
          label: "Retail",
          value: "Retail",
          subOption: "Retail Sales, Wholesale Distribution, E-commerce",
        },
        {
          id: "i3c",
          label: "Technology",
          value: "Technology",
          subOption: "IT Services, Software Development, Tech Innovations",
        },
        {
          id: "i3d",
          label: "Health and Wellness",
          value: "Health and Wellness",
          subOption: "Healthcare Services, Wellness and Fitness, Personal Care",
        },
        {
          id: "i3e",
          label: "Hospitality",
          value: "Hospitality",
          subOption:
            "Restaurants and Food Services, Travel and Tourism, Accommodation Services",
        },
        {
          id: "i3f",
          label: "Entertainment",
          value: "Entertainment",
          subOption:
            "Gaming and Entertainment, Media and Arts, Event Management",
        },
        {
          id: "i3g",
          label: "Manufacturing",
          value: "Manufacturing",
          subOption: "Production and Manufacturing, Industrial Services",
        },
        {
          id: "i3h",
          label: "Finance",
          value: "Finance",
          subOption:
            "Financial Services, Banking and Investment, Accounting Services",
        },
        {
          id: "i3i",
          label: "Real Estate",
          value: "Real Estate",
          subOption: "Real Estate Services, Property Management",
        },
        {
          id: "i3j",
          label: "Education",
          value: "Education",
          subOption: "Educational Services, E-learning Platforms",
        },
        {
          id: "i3k",
          label: "Transportation",
          value: "Transportation",
          subOption: "Logistics and Supply Chain,  Transportation Services",
        },
        {
          id: "i3l",
          label: "Environmental and Energy",
          value: "Environmental and Energy",
          subOption: "Sustainability Services, Renewable Energy Solutions",
        },
        {
          id: "i3m",
          label: "Legal and Compliance",
          value: "Legal and Compliance",
          subOption: "Legal Services, Regulatory and Compliance",
        },
        {
          id: "i3n",
          label: "Social and Community",
          value: "Social and Community",
          subOption: "Non-profit Organizations, Community Services",
        },
        {
          id: "i3o",
          label: "Communication",
          value: "Communication",
          subOption: "Telecommunication Services, Media and Broadcasting",
        },
        {
          id: "i3p",
          label: "Automotive",
          value: "Automotive",
          subOption: "Automotive Services, Vehicle Dealerships",
        },
        {
          id: "i3q",
          label: "Agriculture and Farming",
          value: "Agriculture and Farming",
          subOption: "Agricultural Services, Farming and Horticulture",
        },
        {
          id: "i3r",
          label: "Innovation and Technology",
          value: "Innovation and Technology",
          subOption: "Tech Innovations, AI and Automation",
        },
        {
          id: "i3s",
          label: "Beauty and Personal Care",
          value: "Beauty and Personal Care",
          subOption: "Beauty and Grooming Services, Personal Care Products",
        },
        {
          id: "i3t",
          label: "Training and Development",
          value: "Training and Development",
          subOption: "Skill Development Services, Vocational Training",
        },
        { id: "i3u", label: "Other", value: "Other", subOption: "" },
      ],
      bgColor: "#5ECC73",
    },
    {
      title: "Is your current job somehow related to your idea?",
      description:
        "We’d like to understand if there’s any connection between your current job and your project.",
      choices: [
        { id: "i6a", label: "Yes", value: "5" },
        { id: "i6b", label: "No", value: "2" },
      ],
      bgColor: "#F9CC48",
    },
    {
      title: "What is your investment plan for your idea?",
      description:
        "While every type of business has its own financing needs, Your idea can always be started on a small budget.",
      choices: [
        { id: "i4a", label: "Less than 1 Lakh ₹", value: "1" },
        { id: "i4b", label: "1 Lakh ₹ - 10 Lakh ₹", value: "2" },
        { id: "i4c", label: "10 Lakh ₹ - 50 Lakh ₹", value: "3" },
        { id: "i4d", label: "50 Lakh ₹ - 1 Crore ₹", value: "4" },
        { id: "i4e", label: "More than 1 Crore ₹", value: "5" },
      ],
      bgColor: "#00AEEF",
    },
    {
      title: "What is your work or business experience?",
      description:
        "If you’ve previously worked in any job or business, please share how many years of experience you have in that field.",
      choices: [
        { id: "i5a", label: "No experience", value: "0a" },
        { id: "i5b", label: "1 - 3 Years", value: "3a" },
        { id: "i5c", label: "3 - 5 Years", value: "4a" },
        { id: "i5d", label: "More than 5 years", value: "5a" },
      ],
      bgColor: "#F69679",
    },
    {
      title: "Your project location",
      description:
        "Where are you willing to present your idea or do your project?",
      choices: countriesChoices,
      options: [{}],
      bgColor: "#0D004C",
    },
    {
      title: "Tell us more about your idea",
      description: "Describe your idea in few line (minimun 50 characters  )",
      choices: [{ id: "i8a", label: "India", value: "5" }],
      bgColor: "#8781BD",

      options: [{}],
    },
    {
      title: " Email Address",
      description: !isAuthenticated
        ? "Confirm your email Address on ideax"
        : "Your Email is verified",
      bgColor: "#8781BD",
    },
  ];
  const handleBlur = async () => {
    try {
      if (
        formData?.description?.length < 50 ||
        formData?.description === undefined ||
        formData?.description === null
      ) {
        setShowError("Please describe your idea in at least 50 characters.");
      } else {
        setShowError(null);
        
      }
    } catch (error) {
      console.error("Error validating text:", error);
      setShowError("There was an error validating your text.");
    }
  };
  let n = 8;
  // let n = step != 8 ? (isAuthenticated ? 7 : 8) : 8;
  const isStepValid = async () => {
    const currentStepData = formData[`step${step + 1}`];
    if (step === 7) {
      if (showError != null) {
        Swal.fire({
          title: "Info",
          text: showError,
          icon: "info",
          confirmButtonText: "OK",
        });
      } else if (showError === null) {
        
        try {
          if (previousValue !== formData?.description) {
            setShowError("Checking...");
            const response = await axios.post(`${RestAPI}/ai/text-checker`, {
              text: formData.description,
            });
            if (response.data.data.isvalid === false) {
              setShowError("Please enter valid text.");
              Swal.fire({
                title: "Info",
                text: "Please enter valid text.",
                icon: "info",
                confirmButtonText: "OK",
              });
              return false;
            } else {
              setShowError(null);
              return showError === null;
            }
          } else {
            setPreviousValue(formData?.description);
          }
        } catch (e) {
          setShowError("Server Error");

          return false;
        }
      } else {
        return false;
      }
    }
    return currentStepData !== undefined && currentStepData !== "";
  };
  const nextStep = async () => {
    if (await isStepValid()) {
      setStep((step) => step + 1);
    } else {
      let textmassge = "Please make a selection before proceeding.";
      if (step === 7) {
        textmassge = showError;
      }
      else {

        Swal.fire({
          title: "Info",
          text: textmassge,
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    }
  };
  const loggedToken = userToken();

  const prevStep = () => {
    setStep((step) => step - 1);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };
  const handleKeyDown = (e) => {
    // Allow only numbers, backspace, and delete keys
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  };

  const handleChoiceChange = (value) => {
    console.log(value, step);
    setSelectedOption(value);
    setFormData((prevData) => ({ ...prevData, [`step${step + 1}`]: value }));
    console.log(formData);
    setIsNextDisabled(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      setIsOpenLogin(true);
      // Swal.fire({
      //   title: "Error",
      //   text: "Please Signup First",
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });
    } else if (step === 7 && !(await isStepValid())) {
      // Swal.fire({
      //   title: "Info",
      //   text: showError,
      //   icon: "info",
      //   confirmButtonText: "OK",
      // });
    } else {
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
        if (response.data.message) {
          setResult(data);
          setLoading(false);
          // navigate("/plan-details");
          navigate("/wizard-result", { state: { data: data.data } });

          // Swal.fire({
          //   title: "Success",
          //   text: response.data.message,
          //   icon: "success",
          //   confirmButtonText: "OK",
          // });
        } else {
          Swal.fire({
            title: "Error",
            text: response.data.error,
            icon: "error",
            confirmButtonText:
              response.data.error ===
              "Maximum limit reached. You can only create 2 plans."
                ? "View Plan"
                : "OK",
          }).then((result) => {
            if (
              result.isConfirmed &&
              response.data.error ===
                "Maximum limit reached. You can only create 2 plans."
            ) {
              // Redirect to plan details if the button is "View Plan"
              window.location.href = "/plan-details"; // Use history.push('/plan-detail') if you're using react-router
            }
            // else{
            //   window.location.href = "/"
            // }
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
      } finally {
        setLoading(false);
      }
    }
  };
  const handleGoogleLogin = async (status) => {
    setStatus(status);
    setIsOpenLogin(false);
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
      if (response.data.message) {
        setResult(data);
        setLoading(false);
        navigate("/wizard-result", { state: { data: data.data } });
      } else {
        Swal.fire({
          title: "Error",
          text: response.data.error,
          icon: "error",
          confirmButtonText:
            response.data.error ===
            "Maximum limit reached. You can only create 3 plans."
              ? "View Plan"
              : "OK",
        }).then((result) => {
          if (
            result.isConfirmed &&
            response.data.error ===
              "Maximum limit reached. You can only create 3 plans."
          ) {
            // Redirect to plan details if the button is "View Plan"
            window.location.href = "/plan-details"; // Use history.push('/plan-detail') if you're using react-router
          }
          // else{
          //   window.location.href = "/"
          // }
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
    } finally {
      setLoading(false);
    }
    // Swal.fire({
    //   title: "Success",
    //   text: "Signed up successfully",
    //   icon: "success",
    //   confirmButtonText: "OK",
    // });
  };
  const openEmailLoginModal = () => {
    setIsOpenLogin(false);
    setEmailLoginModalOpen(true);
  };
  const onRequestClose = () => {
    setIsOpenLogin(false);
  };
  const closeEmailLoginModal = () => {
    setEmailLoginModalOpen(false);
    setisOtpSent(false);
    setOtp(new Array(6).fill(""));
  };
  const handleEmailLogin2 = async (e) => {
    e.preventDefault();
    setIsOpenLogin(false);
    setLoadingmailLogin(true);
    try {
      const response = await axios.post(`${RestAPI}/auth/login-email-otp`, {
        email,
        otp: otp.join(""),
      });
      if (response.data.status) {
        setLoadingmailLogin(false);
        await login(response.data.token, response.data.email);
        localStorage.setItem("userName", response.data?.userName);
        // handleGoogleLogin(true);
        closeEmailLoginModal();
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
          if (response.data.message) {
            setResult(data);
            setLoading(false);
            setIsOpenLogin(false);
            navigate("/wizard-result", { state: { data: data.data } });
          } else {
            Swal.fire({
              title: "Error",
              text: response.data.error,
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
        } finally {
          setLoading(false);
        }
      } else {
        setLoadingmailLogin(false);
        Swal.fire({
          title: "Error",
          text: response.data.message || "An error occurred while logging in.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoadingmailLogin(false);
      Swal.fire({
        title: "Error",
        text: "An error occurred while logging in.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const handleSendOtp = async () => {
    setLodingOtpSent(true); // Corrected spelling from setLodingOtpSent
    const payload = { email };
    try {
      const response = await axios.post(`${RestAPI}/otp/generate`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.message) {
        setisOtpSent(true);
        setCanResend(false);
        setSecondsLeft(300);
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
      // Stop loading after the request completes
      setLodingOtpSent(false);
    }
  };
  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); 
    } else {
      setCanResend(true); 
    }
  }, [secondsLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const [resendOTPLodaing, setResendOTPLodaing] = useState(false);
  const handleResendClick = async () => {
    setResendOTPLodaing(true);
    setSecondsLeft(300);
    setCanResend(false);
    await handleSendOtp();
    setResendOTPLodaing(false);
  };
  return (
    <div className="wizard">
      <div className="container">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="content">
              <div
                className="left"
                // style={{ width: "100%", marginLeft: "40px" }}
              >
                <div className="text">
                  <h2>{steps[step].title}</h2>
                  <p>{steps[step].description}</p>
                </div>
                <div className="left-contenner" style={{ display: "flex" }}>
                  <div
                    className="choices"
                    // style={{
                    //   overflowY: "scroll",
                    //   width: "60%",
                    //   maxHeight: "270px",
                    // }}
                  >
                    {step === 8 ? (
                      <div className="final-step">
                        {!isAuthenticated ? (
                          <div className="login-methods-buttons">
                            <LoginWithGoogle handleLogin={handleGoogleLogin} />{" "}
                            <LinkedInLogin />
                            <button
                              type="button"
                              onClick={openEmailLoginModal}
                              style={{
                                backgroundColor: "white",
                                color: "#3c4043",
                                fontSize: "14px",
                                width: "180px",
                                borderRadius: "5px",
                                textAlign: "center",
                                height: "35px",
                                border: "1px solid #dadce0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "unset",
                                marginTop: "6px",
                                cursor: "pointer",
                                fontFamily: `"Google Sans",arial,sans-serif`,
                                fontWeight: "500",
                                padding: "12px 0px",
                                flexGrow: "1",
                                letterSpacing: "0.25px",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <CiMail
                                size={25}
                                style={{ marginRight: "2px", width: "20%" }}
                              />
                              {/* Added margin for spacing */}
                              <span
                                style={{
                                  fontWeight: "500",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                SignUp with Email
                              </span>
                            </button>
                          </div>
                        ) : (
                          <div>
                            {localStorage?.getItem("email") && (
                              <div
                                className="email-container"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: "#f0f8ff", // Light background for better contrast
                                  padding: "10px 15px", // Padding for spacing
                                  borderRadius: "8px",
                                  maxWidth: "fit-content",
                                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {localStorage.getItem("email")}
                                </span>
                                <MdVerified
                                  color="green"
                                  size={24}
                                  style={{ marginLeft: "10px" }}
                                />
                              </div>
                            )}
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
                                placeholder="Describe your idea in few line ..."
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
                                // minLength="50"
                                onBlur={handleBlur}
                                // onMouseLeave={handleBlur}
                              />
                              <div className="description-info">
                                <small
                                  style={{ color: "black", fontWeight: "300" }}
                                >
                                  {formData.description?.length || 0}/250
                                  characters written |{" "}
                                  {250 - (formData.description?.length || 0)}{" "}
                                  characters remaining
                                </small>
                              </div>
                              {showError && (
                                <small
                                  className="error-message"
                                  style={{ color: "red" }}
                                >
                                  {showError == "Checking..." ? (
                                    <div className="checking-animation">
                                      Checking<span className="dot">.</span>
                                      <span className="dot">.</span>
                                      <span className="dot">.</span>
                                      <div className="spinner2-overlay">
                                        <div className="spinner2"></div>
                                      </div>
                                    </div>
                                  ) : ( formData?.description?.length < 50?
                                    showError:" "
                                  )}
                                </small>
                              )}
                              {/* {showError != null &&
                                formData.description.length < 50 && (
                                  <small
                                    className="error-message"
                                    style={{ color: "red" }}
                                  >
                                    {showError}
                                    Please describe your idea in at least 50
                                    characters.
                                  </small>
                                )} */}
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
                                onChange={() =>
                                  handleChoiceChange(choice.value)
                                }
                              />
                              <label htmlFor={choice.id}>
                                <span>
                                  {choice.label}{" "}
                                  <span style={{ fontSize: "12px" }}>
                                    <br />
                                    {choice.subOption &&
                                      `${choice.subOption}...`}
                                  </span>
                                </span>
                              </label>
                            </>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                  <div className="right">
                    {step < n && (
                      <button
                        disabled={isNextDisabled}
                        type="button"
                        onClick={nextStep}
                        className="btn"
                        style={{ textAlign: "center" }}
                      >
                        Next &lt;
                      </button>
                    )}
                    {loading ? (
                      <div className="spinner2-overlay">
                        <div className="spinner2"></div>
                      </div>
                    ) : (
                      // <div className="spinner-parent" style={{margin:"auto"}}>
                      //   <div className="spinner" style={{margin:"auto"}}></div>
                      // </div>
                      step === n && (
                        <button
                          type="submit"
                          className="btn generate"
                          // disabled={!isAuthenticated}
                        >
                          Generate <BsStars />
                        </button>
                      )
                    )}
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn prev"
                        style={{ textAlign: "center" }}
                      >
                        &gt; Back
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            className="image-continner"
            style={{
              backgroundColor: steps[0].bgColor,
              // backgroundColor: "var(--main-color)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* <img
              src={`wizard4/${step + 1}.jpg`}
              alt=""
              style={{
                width: step === 5 ? "100%" : step === 8 ? "90%" : "120%",
                top:
                  step === 5
                    ? "-75px"
                    : step === 6
                    ? "-185px"
                    : step === 8
                    ? "-100px"
                    : "-145px",
                position: "absolute",
              }}
            /> */}
            <img
              src={`wizard4/${step + 1}.jpg`}
              alt=""
              style={{
                width:  "100%",
                
                  
                position: "absolute",
              }}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenLogin}
        onRequestClose={onRequestClose}
        className="login-modal-content"
        overlayClassName="login-modal-overlay"
      >
        <p>Please Signup First</p>

        <div className="login-methods-buttons2" style={{ marginTop: "30px" }}>
          <LoginWithGoogle handleLogin={handleGoogleLogin} />
          <LinkedInLogin />
          <button
            type="button"
            onClick={openEmailLoginModal}
            className="email-login-btn"
          >
            <CiMail size={25} style={{ marginRight: "8px" }} />
            SignUp with Email
          </button>
        </div>

        <button onClick={onRequestClose} className="close-modal-btn">
          OK
        </button>
      </Modal>
      <Modal
        isOpen={emailLoginModalOpen}
        onRequestClose={closeEmailLoginModal}
        contentLabel="Email SignUp"
        ariaHideApp={false}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Sign Up with Email</h2>
          <form onSubmit={(e) => e.preventDefault()} className="modal-form">
            {isOtpSent ? (
              <>
                <p className="otp-message">
                  You're almost there! We have sent an OTP to{" "}
                  <span style={{ fontWeight: "600" }}>{email} .</span> Please
                  check your email for the OTP.
                </p>
                <div className="otp-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)}
                      maxLength="1"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="otp-input"
                      id={`otp-input-${index}`}
                      onKeyDown={(e) => {
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
                          document
                            .getElementById(`otp-input-${index + 1}`)
                            .focus();
                        } else if (e.key === "ArrowLeft" && index > 0) {
                          document
                            .getElementById(`otp-input-${index - 1}`)
                            .focus();
                        } else if (e.key === "Backspace") {
                          if (!e.target.value && index > 0) {
                            document
                              .getElementById(`otp-input-${index - 1}`)
                              .focus();
                          } else if (index === 0) {
                            e.preventDefault();
                          }
                        }
                      }}
                      onKeyUp={(e) => {
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
                      onClick={handleResendClick}
                      className="btn "
                      style={{ margin: "auto" }}
                    >
                      Resend OTP
                    </button>
                  ) : (
                    // <button disabled className="btn" style={{ margin: "auto" }}>
                    //   Resend OTP
                    // </button>
                    <></>
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
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#007bff")} // Blue border on focus
                  onBlur={(e) => (e.target.style.borderColor = "#ccc")} // Revert to gray border on blur
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
              <button onClick={closeEmailLoginModal} className="btn">
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
