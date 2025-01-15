"use client";
// import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { RestAPI } from "../../../config/Api";
import axios from "axios";
import LoginWithGoogle from "./components/LoginWithGoogle";
import Swal from "sweetalert2";
import useAxiosWithAuth from "../../../config/useAxiosWithAuth";

import Modal from "react-modal";
import "./Wizard.css";
import LinkedInLogin from "./components/LinkedInLogin";
import { AuthContext } from "../../../context/AuthContext";
import { CiMail } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { useRouter } from "next/navigation";
import ReferralPopup from "./components/wizard/ReferralPopup";
import Image from "next/image";
// import MotivationalCard from "./components/wizard/MotivationalCard";
// import TaskCompletionInterface from "./components/wizard/TaskCompletionInterface";

export default function Wizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingmailLogin, setLoadingmailLogin] = useState(false);
  const { isAuthenticated, login } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [emailLoginModalOpen, setEmailLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const axiosInstance = useAxiosWithAuth();
  const [showError, setShowError] = useState(null);
  const [isOtpSent, setisOtpSent] = useState(false);
  const [lodingOtpSent, setLodingOtpSent] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [taskCompletion, setTaskCompletion] = useState(false);
  const [motivationalCardOpen, setMotivationalCardOpen] = useState(false);

  const [previousValue, setPreviousValue] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(300); // 300 seconds = 5 minutes
  const [canResend, setCanResend] = useState(false);
  const [countriesChoices, setCountriesChoices] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${RestAPI}/countries`); // Replace with your API endpoint
        // setCountries(response.data.data);
        const countries = response.data.data;
        const transformedChoices = countries.map((country, index) => ({
          id: `iaq7${String.fromCharCode(97 + index)}`, // Generates IDs like i7a, i7b, etc.
          countryId: country.id, // Assuming country ID is available in country data
          label: country.country.toUpperCase(), // Capitalizes the country name
          value: `${country.score}`, // Assuming score is available in country data
        }));
        // console.log(transformedChoices)
        setCountriesChoices(transformedChoices);
      } catch (err) {
        console.log(err);
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
        "We’d like to hear about your idea! Have you already started working on it, or are you still in the planning phase?",
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
        { id: "i4a", label: "Less than 1K USD", value: "1" },
        { id: "i4b", label: "1K - 10K USD", value: "2" },
        { id: "i4c", label: "10K - 50K USD", value: "3" },
        { id: "i4d", label: "50K USD – 100K USD", value: "4" },
        { id: "i4e", label: "More than 100K", value: "5" },
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
      title:
        "What is your estimated daily availability for working on your idea, in hours?",
      description: "",
      choices: [
        { id: "i9a", label: "Less than 1 hour", value: "1" },
        { id: "i9b", label: "1 to 2 hours", value: "2" },
        { id: "i9c", label: "3 to 4 hours", value: "3" },
        { id: "i9d", label: "5 to 6 hours", value: "4" },
        { id: "i9e", label: "More than 6 hours", value: "5" },
      ],
      bgColor: "#F69679",
    },
    {
      title:
        "In your opinion, what is the estimated ideal timeframe for developing your idea?",
      description: "",
      choices: [
        {
          id: "i8a",
          label:
            "Less than 3 months - For very fast-paced or smaller scale projects.",
          value: "1",
        },
        {
          id: "i8b",
          label:
            "3 to 6 months - Suitable for moderately complex projects that require some research and development.",
          value: "2",
        },
        {
          id: "i8c",
          label:
            "6 to 12 months - A common timeframe for more involved projects, allowing for thorough planning, development, and initial testing.",
          value: "3",
        },
      ],
      bgColor: "#F69679",
    },
    {
      title: "Tell us more about your idea",
      description:
        "Please describe your idea in 50 to 250 letters. What is your idea? Who is it designed for? What makes it unique or special?",
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
  let n = 10;
  // let n = step != 8 ? (isAuthenticated ? 7 : 8) : 8;
  const isStepValid = async () => {
    const currentStepData = formData[`step${step + 1}`];
    if (step === 9) {
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
            if (!formData?.description || formData.description.length < 50) {
              Swal.fire({
                title: "Info",
                text: "Please enter atlest 50 charecter text.",
                icon: "info",
                confirmButtonText: "OK",
              });
            } else {
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
            }
          } else if (formData?.description < 50) {
            Swal.fire({
              title: "Info",
              text: "Please enter atlest 50 charecter text.",
              icon: "info",
              confirmButtonText: "OK",
            });
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
      if (step === 9) {
        textmassge = showError;
      } else {
        Swal.fire({
          title: "Info",
          text: textmassge,
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    }
  };
  const prevStep = () => {
    setStep((step) => step - 1);
  };
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };
  const handleChoiceChange = (value) => {
    // console.log(value, step);
    setSelectedOption(value);
    setFormData((prevData) => ({ ...prevData, [`step${step + 1}`]: value }));
    // console.log(formData);
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
    } else if (step === 9 && !(await isStepValid())) {
      // Swal.fire({
      //   title: "Info",
      //   text: showError,
      //   icon: "info",
      //   confirmButtonText: "OK",
      // });
    } else {
      setLoading(true);
      const payloadFormData = new FormData();
      payloadFormData.append("idea_stage", formData.step1 || "");
        payloadFormData.append("work_status", formData.step2 || "");
        payloadFormData.append("project_type", formData.step3 || "");
        payloadFormData.append("job_relation", formData.step4 || "");
        payloadFormData.append("investment_plan", formData.step5 || "");
        payloadFormData.append("work_experience", formData.step6 || "");
        payloadFormData.append("project_location", formData.step7 || "5");
        payloadFormData.append("daily_hours", formData.step8 || "5");
        payloadFormData.append("timeframe", formData.step9 || "5");
      payloadFormData.append("idea_description", formData.description || "");
      payloadFormData.append("idea_name", "Google");
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
        if (response.data.message) {
          // setResult(data);
          setLoading(false);
          // navigate("/plan-details");
          localStorage.setItem(
            "wizardResultData",
            JSON.stringify(response.data.data)
          );
          router.push("/wizard-result");
          // redirect('/wizard-result')
          // router.push({
          //   pathname: '/wizard-result',
          //   query: { data: JSON.stringify(data.data) }, // Encode the data as a string
          // });
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
              // window.location.href = "/plan-details";
              console.log(result);
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
  const handleGoogleLogin = async () => {
    setIsOpenLogin(false);
    setLoading(true);
    const payloadFormData = new FormData();
    payloadFormData.append("idea_stage", formData.step1 || "");
        payloadFormData.append("work_status", formData.step2 || "");
        payloadFormData.append("project_type", formData.step3 || "");
        payloadFormData.append("job_relation", formData.step4 || "");
        payloadFormData.append("investment_plan", formData.step5 || "");
        payloadFormData.append("work_experience", formData.step6 || "");
        payloadFormData.append("project_location", formData.step7 || "5");
        payloadFormData.append("daily_hours", formData.step8 || "5");
        payloadFormData.append("timeframe", formData.step9 || "5");
    payloadFormData.append("idea_description", formData.description || "");
    payloadFormData.append("idea_name", "Google");
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
      if (response.data.message) {
        // setResult(data);
        setLoading(false);
        localStorage.setItem(
          "wizardResultData",
          JSON.stringify(response.data.data)
        );
        router.push("/wizard-result");
        // router.push({
        //   pathname: '/wizard-result',
        //   query: { data: JSON.stringify(data.data) },
        // });
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
            // window.location.href = "/plan-details";
            console.log(result);
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
  const onRequestTaskCompletion = () => {
    setTaskCompletion(false);
  };
  const onMotivationalCardClose = () => {
    setMotivationalCardOpen(false);
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
        payloadFormData.append("idea_stage", formData.step1 || "");
        payloadFormData.append("work_status", formData.step2 || "");
        payloadFormData.append("project_type", formData.step3 || "");
        payloadFormData.append("job_relation", formData.step4 || "");
        payloadFormData.append("investment_plan", formData.step5 || "");
        payloadFormData.append("work_experience", formData.step6 || "");
        payloadFormData.append("project_location", formData.step7 || "5");
        payloadFormData.append("daily_hours", formData.step8 || "5");
        payloadFormData.append("timeframe", formData.step9 || "5");
        payloadFormData.append("idea_description", formData.description || "");
        payloadFormData.append("idea_name", "Google");
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
          if (response.data.message) {
            // setResult(data);
            setLoading(false);
            setIsOpenLogin(false);
            localStorage.setItem(
              "wizardResultData",
              JSON.stringify(response.data.data)
            );
            router.push("/wizard-result");
            // router.push({
            //   pathname: '/wizard-result',
            //   query: { data: JSON.stringify(data.data) },
            // });
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
    setLodingOtpSent(true);
    const payload = { email };
    try {
      const response = await axios.post(`${RestAPI}/otp/generate`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 && response.data.message) {
        setisOtpSent(true);
        setCanResend(false);
        setSecondsLeft(300);
        // Swal.fire({
        //   title: "Success",
        //   text: response.data.message,
        //   icon: "success",
        //   confirmButtonText: "OK",
        // });
      } else if (response.status === 204) {
        Swal.fire({
          title: "Error",
          text: "Your email is not registered",
          icon: "error",
          confirmButtonText: "OK",
        });
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
                    {step === 10 ? (
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
                                width: "240px",
                                borderRadius: "5px",
                                textAlign: "center",
                                height: "45px",
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
                                  backgroundColor: "#f0f8ff",
                                  padding: "10px 15px",
                                  borderRadius: "8px",
                                  maxWidth: "fit-content",
                                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
                            {/* <button
                              type="button"
                              onClick={() => setIsPopupOpen(true)}
                              className="p-3 mt-10 bg-blue-500 text-white rounded-lg"
                            >
                              Refer and get more free test
                            </button> */}
                            {/* <TaskCompletionInterface/> */}
                            {/* <MotivationalCard isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}/> */}
                            <ReferralPopup
                              isOpen={isPopupOpen}
                              onClose={() => setIsPopupOpen(false)}
                            />
                          </div>
                        )}
                      </div>
                    ) : step === 6 ? (
                      <select
                        onChange={(e) => handleChoiceChange(e.target.value)}
                        value={selectedOption}
                      >
                        <option value="">Select Country</option>
                        {steps[step].choices.map((option) => (
                          <option key={option.id} value={option.countryId}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      steps[step].choices.map((choice) => (
                        <div className="custom-check" key={choice.id}>
                          {step === 9 ? (
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
                                  style={{
                                    color: "black",
                                    fontSize: "12px",
                                    fontWeight: "300",
                                  }}
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
                                  ) : formData?.description?.length < 50 ? (
                                    showError
                                  ) : (
                                    " "
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
            <Image
              src={`/wizard4/${step + 1}.webp`}
              alt="wizard 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={taskCompletion}
        onRequestClose={onRequestTaskCompletion}
        className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Earn more attempts
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Daily Check-in Task
                </h3>
                <p className="text-gray-600">Login to the home page</p>
              </div>
              <span className="text-yellow-500 font-bold">+1</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Trading Task
                </h3>
                <p className="text-gray-600">
                  Accumulate at least $5,000 equivalent in trading volume
                </p>
              </div>
              <span className="text-yellow-500 font-bold">+2</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Refer a Friend
                </h3>
                <p className="text-gray-600">
                  Refer a friend to join the platform
                </p>
              </div>
              <span className="text-yellow-500 font-bold">+3</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Sharing Task
                </h3>
                <p className="text-gray-600">
                  Share your achievement with your friends
                </p>
              </div>
              <span className="text-yellow-500 font-bold">+1</span>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onRequestTaskCompletion}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={motivationalCardOpen}
        onRequestClose={onMotivationalCardClose}
        className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      >
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                Don&rsquo;t give up!
              </h2>
              <p className="text-gray-600 mt-2">
                You have tried so hard to achieve your goals.
              </p>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                  Get More Attempts
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                  Share my achievement
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={onMotivationalCardClose}
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Modal>
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
            className="email-login-btn mt-12"
            style={{ marginTop: "12px", width: "240px" }}
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
                  You&apos;re almost there! We have sent an OTP to{" "}
                  <span style={{ fontWeight: "600" }}>{email} .</span> Please
                  check your email for the OTP.
                </p>
                {/* eslint-disable react/no-unescaped-entities */}
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
                {/* eslint-enable react/no-unescaped-entities */}

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
