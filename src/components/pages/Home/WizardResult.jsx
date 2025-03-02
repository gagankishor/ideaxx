"use client";
// import { useLocation } from "next/link";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import {
  FaArrowAltCircleRight,
  FaAward,
  FaBalanceScale,
  FaChartLine,
  FaCoins,
  FaGift,
  FaGlobe,
  FaHeart,
  FaLightbulb,
  FaRobot,
  FaTwitter,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
// import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { PiQuestion } from "react-icons/pi";
import { FaArrowRight, FaFacebook, FaRegLightbulb } from "react-icons/fa6";
import Link from "next/link";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoBusiness } from "react-icons/io5";
// import { BiSolidZap } from "react-icons/bi";
import LightingCard from "@/components/wizard-result/LightingCard";
import PropTypes from "prop-types";
import AnimatedText from "@/components/wizard-result/AnimatedText";
// import { Store } from "lucide-react";
import Modal from "react-modal";

Chart.register(ArcElement, Tooltip, Legend);
const CircularProgress = ({
  percentage,
  color,
  size = 120,
  strokeWidth = 8,
  children,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="rgba(0,0,0,0.1)"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
const WizardResult = () => {
  const [aiContent, setAiContent] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem("wizardResultData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  if (!data) {
    console.warn("No wizard result data found in localStorage.");
  }
  const parseJSON = (jsonString) => {
    try {
      let cleanedString = jsonString
        .replace(/\n/g, "")
        .replace(/\s{2,}/g, " ")
        .replace(/\\"/g, '"')
        .replace(/\+-/g, "");
      return JSON.parse(cleanedString);
    } catch (error) {
      return jsonString;
    }
  };
  const getBarColor2 = (score) => {
    if (score <= 50) return "red";
    if (score <= 70) return "orange";
    if (score <= 90) return "green";
    if (score <= 100) return "#4FADEA";
    return "blue";
  };
  const getBarColor = (score) => {
    if (score <= 50) return "linear-gradient(to right, #FE0000, #FE0000)";
    if (score <= 52) return "linear-gradient(to right, #FE0000, #FF8E11)";
    if (score <= 54)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 56)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 58)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 60)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 62)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 64)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 66)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 68)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)";
    if (score <= 70)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 72)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 74)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 76)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 78)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 80)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 82)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 84)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 86)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 88)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)";
    if (score <= 90)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
    if (score <= 92)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
    if (score <= 94)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
    if (score <= 96)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
    if (score <= 98)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
    if (score <= 100)
      return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
    return "linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)";
  };
  const uniqueValueProposition = parseJSON(data?.UniqueValuePropositionData);
  const TeamAndResourcesData = parseJSON(data?.TeamAndResourcesData);
  const RevenueModelData = parseJSON(data?.RevenueModelData);
  const CompetitiveLandscapeData = parseJSON(data?.CompetitiveLandscapeData);
  const TimeToMarketData = parseJSON(data?.TimeToMarketData);
  const MarketShareData = parseJSON(data?.MarketShareData);
  const InvestmentLevelData = parseJSON(data?.InvestmentLevelData);
  const ExpectedROIData = parseJSON(data?.ExpectedROIData);
  const textForTipData = parseJSON(data?.textForTipData);
  const fullAiContent = `
  ${data?.resultText} 
  `;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    if (!loading && aiContent === "") {
      setAiContent(fullAiContent);
    }
  }, [loading]);
  useEffect(() => {
    let currentIndex = 0;
    if (aiContent && !isTypingComplete) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + aiContent[currentIndex]);
        currentIndex++;
        if (currentIndex >= aiContent.length - 1) {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 20);
      return () => clearInterval(typingInterval);
    }
  }, [aiContent, isTypingComplete]);
  const bardata = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [data?.success_percentage, 100 - data?.success_percentage],
        backgroundColor: [
          `${getBarColor2(parseFloat(data?.success_percentage))}`,
          "#e0e0e0",
        ],
        hoverBackgroundColor: ["#4caf50", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };
  const totalMarketScrore =
    (parseFloat(data?.marketPotential) +
      parseFloat(uniqueValueProposition?.finalScore?.replace("%", "")) +
      parseFloat(RevenueModelData?.finalScore?.replace("%", "")) +
      parseFloat(CompetitiveLandscapeData?.finalScore?.replace("%", "")) +
      parseFloat(TeamAndResourcesData)) /
    5;
  const totalMarketScrore2 =
    parseFloat(totalMarketScrore) +
    parseFloat(
      parseFloat(((20 - parseFloat(TeamAndResourcesData) / 5) * 60) / 100) +
        parseFloat(
          ((20 -
            parseFloat(uniqueValueProposition?.finalScore?.replace("%", "")) /
              5) *
            60) /
            100
        ) +
        parseFloat(
          ((20 -
            parseFloat(RevenueModelData?.finalScore?.replace("%", "")) / 5) *
            60) /
            100
        ) +
        parseFloat(
          ((20 -
            parseFloat(CompetitiveLandscapeData?.finalScore?.replace("%", "")) /
              5) *
            60) /
            100
        ) +
        parseFloat(((20 - parseFloat(data?.marketPotential) / 5) * 60) / 100)
    );
  const bardata2 = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [
          parseFloat(totalMarketScrore),
          100 - parseFloat(totalMarketScrore),
        ],
        backgroundColor: [
          `${getBarColor2(parseFloat(totalMarketScrore))}`,
          "#e0e0e0",
        ],
        hoverBackgroundColor: ["#4caf50", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };
  const bardata3 = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [
          parseFloat(totalMarketScrore2),
          100 - parseFloat(totalMarketScrore2),
        ],
        backgroundColor: [
          `${getBarColor2(parseFloat(totalMarketScrore2))}`,
          "#e0e0e0",
        ],
        hoverBackgroundColor: ["#4caf50", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };
  const [expandedItems, setExpandedItems] = useState({});
  const handleToggle = (index) => {
    setExpandedItems((prev) => ({
      [index]: !prev[index],
    }));
  };
  const metrics = {
    lighting: {
      percentage: parseFloat(data?.success_percentage)?.toFixed(2),
      value:
        parseFloat(data?.success_percentage) < 33
          ? "Low"
          : parseFloat(data?.success_percentage) < 66
          ? "Moderate"
          : "High",
      unit: "",
      color: getBarColor2(data?.success_percentage),
    },
    global: {
      percentage: totalMarketScrore,
      value:
        totalMarketScrore < 33
          ? "Bad"
          : totalMarketScrore < 66
          ? "Moderate"
          : "Good",
      color: getBarColor2(totalMarketScrore),
    },
    instant: {
      percentage: totalMarketScrore2,
      value:
        totalMarketScrore2 < 33
          ? "Bad"
          : totalMarketScrore2 < 66
          ? "Moderate"
          : "Good",
      unit: "W",
      color: getBarColor2(totalMarketScrore2),
    },
    costs: {
      last30Days: "11 045,00",
      today: "211,43",
    },
    consumption: {
      last30Days: "64 996,03",
      today: "1012,18",
      trendUp: "-1.64%",
      trendDown: "+11.02%",
    },
  };
  const consumptions = [
    {
      percentage: 75,
      currentWatts: `${data?.totalMarketSize} potential users`,
      title: "Target Market Size",
      imageUrl: "/result-page/Layer5.webp",
    },
    {
      percentage: 60,
      currentWatts: InvestmentLevelData?.chosenInvestmentLevel,
      title: "Investment Level",
      imageUrl: "/result-page/Layer7.webp",
    },
    {
      percentage: 90,
      currentWatts: TimeToMarketData ? TimeToMarketData?.totalTTM : "0",
      title: "Time to Market",
      imageUrl: "/result-page/Layer8.webp",
    },
    {
      percentage: 50,
      currentWatts:
        `${ExpectedROIData?.expectedROI} for ${ExpectedROIData?.timeFrame}` ||
        `${data?.ExpectedROIData}`,
      title: "Expected ROI",
      imageUrl: "/result-page/Layer6.webp",
    },
    {
      percentage: 50,
      currentWatts: MarketShareData?.chosenOutcome || MarketShareData,
      title: "Market Share",
      imageUrl: "/result-page/Layer1.webp",
    },
  ];
  // console.log(data);
  const [taskCompletion, setTaskCompletion] = useState(false);
  const [motivationalCardOpen, setMotivationalCardOpen] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareModalOpen2, setShareModalOpen2] = useState(false);
  const onRequestTaskCompletion = () => {
    setTaskCompletion(false);
  };
  const handleOpenTaskCompletionCard = () => {
    setTaskCompletion(true);
    setMotivationalCardOpen(false);
  };
  const onMotivationalCardClose = () => {
    setMotivationalCardOpen(false);
  };
  const handleOpenMotivationalCard = () => {
    setMotivationalCardOpen(true);
  };
  const onCloseCongratulations = () => {
    setShowCongratulations(false);
  };
  const handleOpenCongratulationsCard = () => {
    setShowCongratulations(true);
    onRequestTaskCompletion(false);
    setShareModalOpen(false);
  };
  const handleShareAchievement = () => {
    setShareModalOpen(true);
    setMotivationalCardOpen(false);
  };
  const handleShareAchievement2 = () => {
    setShareModalOpen2(true);
    setMotivationalCardOpen(false);
  };
  const handleCloseShareModal = () => {
    setShareModalOpen(false);
  };

  const handleCloseShareModal2 = () => {
    setShareModalOpen2(false);
  };
  const tasks = [
    {
      title: "Daily Check-in Task",
      description: "Login daily to this button game page",
      points: "+1",
      button: "Claim Now",
      onclickButton: handleOpenCongratulationsCard,
    },
    {
      title: "Share Your Result",
      description: "Share your result and get 2 free test ",
      points: "+2",
      button: "Share Result",
      onclickButton: handleShareAchievement2,
    },
    {
      title: "Referral Task",
      description: "Refer a friend via the link",
      points: "+3",
      button: "Invite Friends",
      onclickButton: handleShareAchievement,
    },
  ];
  const socialShareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://idxsolana.io&title=Empower Your Business with IDX on Solana&description=Streamline operations, enhance security, and drive efficiency with our AI-driven blockchain solution. Trusted by 200+ companies and over 1,000 customers!&picture=https://idxsolana.io/ideaX_aa.jpg`,
    twitter: `https://twitter.com/intent/tweet?text=Empower Your Business with IDX on Solana! 🚀 Leverage AI and blockchain to streamline operations and enhance security. Trusted by 200+ companies. Check it out: https://idxsolana.io&hashtags=Blockchain,Solana,AI,Startups`,
    whatsapp: `https://api.whatsapp.com/send?text=Unlock the power of AI-driven blockchain technology with IDX on Solana! 🌐 Streamline your business, enhance security, and save costs. Trusted by 200+ companies! Learn more at https://idxsolana.io`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://idxsolana.io&title=Empower Your Business with IDX on Solana&summary=Streamline operations, enhance security, and drive efficiency with our AI-driven blockchain solution. Trusted by 200+ companies and over 1,000 customers!&source=IdeaX`,
    facebookR: `https://www.facebook.com/sharer/sharer.php?u=https://idxsolana.io/wizard-result&title=Empower Your Business with IDX on Solana&description=Streamline operations, enhance security, and drive efficiency with our AI-driven blockchain solution. Trusted by 200+ companies and over 1,000 customers!&picture=https://idxsolana.io/ideaX_aa.jpg`,
    twitterR: `https://twitter.com/intent/tweet?text=Empower Your Business with IDX on Solana! 🚀 Leverage AI and blockchain to streamline operations and enhance security. Trusted by 200+ companies. Check it out: https://idxsolana.io/wizard-result&hashtags=Blockchain,Solana,AI,Startups`,
    whatsappR: `https://api.whatsapp.com/send?text=Unlock the power of AI-driven blockchain technology with IDX on Solana! 🌐 Streamline your business, enhance security, and save costs. Trusted by 200+ companies! Learn more at https://idxsolana.io/wizard-result`,
    linkedinR: `https://www.linkedin.com/sharing/share-offsite/?url=https://idxsolana.io/wizard-result&title=Empower Your Business with IDX on Solana&summary=Streamline operations, enhance security, and drive efficiency with our AI-driven blockchain solution. Trusted by 200+ companies and over 1,000 customers!&source=IdeaX`,
  };
  const handleShare = (platform) => {
    window.open(socialShareLinks[platform], "_blank");
    handleOpenCongratulationsCard();
  };
  return (
    <>
      <div className=" py-5">
        <h2 className=" mb-0 text-center">Results Summary Overview</h2>
        <p className="">
          Slight changes may occur in the results depending on market trends.
        </p>
      </div>
      <div className="grid max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 py-4 bg-white text-gray-800">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-600 mb-4">Idea Score</h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
            <CircularProgress
              percentage={metrics.lighting.percentage}
              color={metrics.lighting.color}
              size={120}
              strokeWidth={14}
            >
              <div className="text-center">
                <FaRegLightbulb
                  className="mx-auto mb-2 text-[#686868]"
                  size={34}
                />
              </div>
            </CircularProgress>
            <div className="mt-4 sm:mt-0 sm:ml-5 flex flex-col justify-between text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold">
                <AnimatedText score={metrics.lighting.percentage} /> %
              </div>
              <div className="mt-auto">
                <div className="text-sm text-gray-500">Success Chance</div>
                <div className="text-2xl">{metrics.lighting.value}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-[1px] w-full my-5"></div>
          <div className="space-y-4">
            <div className=" flex flex-col justify-between md:flex-row">
              <div className="w-[50%]">
                <div className=" ">
                  <div className="text-sm text-gray-600">Idea</div>
                  <div className="text-xl">
                    {parseInt(data?.phase1) == 1
                      ? "It is still an idea"
                      : parseInt(data?.phase1) == 3
                      ? "I made a plan for it"
                      : "I already started"}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-xl">
                    {parseInt(data?.phase5) == 1
                      ? "Less than 1 Lakh "
                      : parseInt(data?.phase5) == 2
                      ? "1 Lakh ₹ - 10 Lakh ₹"
                      : parseInt(data?.phase5) == 3
                      ? "10 Lakh ₹ - 50 Lakh ₹"
                      : parseInt(data?.phase5) == 4
                      ? "50 Lakh ₹ - 1 Crore ₹"
                      : "More than 1 Crore ₹"}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">
                    current job related to idea
                  </div>
                  <div className="text-xl">
                    {parseInt(data?.phase4) == 5 ? "Yes" : "No"}
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <div>
                  <div className="text-sm text-gray-600">
                    Experience with your idea
                  </div>
                  <div className="text-xl">
                    {parseInt(data?.phase6) == 0
                      ? "No experience"
                      : parseInt(data?.phase6) == 3
                      ? "1 - 3 Years"
                      : parseInt(data?.phase6) == 4
                      ? "3 - 5 Years"
                      : "More than 5 years"}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Country</div>
                  <div className="text-xl">{data?.country}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-600 mb-4">Market Score</h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
            <CircularProgress
              percentage={metrics.global.percentage}
              color={metrics.global.color}
              size={120}
              strokeWidth={14}
            >
              <div className="text-center bg-white">
                <img
                  src="/result-page/image.webp"
                  className="mx-auto w-10 bg-white  "
                  alt="idea graph icon"
                  size={24}
                />
                {/* <img src="" alt="" size={34}/> */}
                {/* <Store className="mx-auto mb-2 text-[#686868]" size={34} /> */}
              </div>
            </CircularProgress>
            <div className="mt-4 sm:mt-0 sm:ml-5 flex flex-col justify-between text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold">
                <AnimatedText score={metrics.global.percentage} /> %
              </div>
              <div className="mt-auto">
                <div className="text-sm text-gray-500">Market Status</div>
                <div className="text-2xl">{metrics.global.value}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-[1px] w-full my-5"></div>
          <div className="space-y-4">
            <div className=" flex flex-col justify-between md:flex-row">
              <div className="w-[50%]">
                <div className=" ">
                  <div className="text-sm text-gray-600">Market Potential</div>
                  <div className="text-xl">
                    {parseFloat(data?.marketPotential) / 5} %
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">
                    Unique Value Proposition
                  </div>
                  <div className="text-xl">
                    {parseFloat(
                      uniqueValueProposition?.finalScore?.replace("%", "")
                    ) / 5}{" "}
                    %
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Team & Resources</div>
                  <div className="text-xl">
                    {parseFloat(TeamAndResourcesData) / 5} %
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <div>
                  <div className="text-sm text-gray-600">
                    Competitive Landscape
                  </div>
                  <div className="text-xl">
                    {(
                      parseFloat(
                        CompetitiveLandscapeData?.finalScore?.replace("%", "")
                      ) / 5
                    ).toFixed(2)}{" "}
                    %
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Revenue Model</div>
                  <div className="text-xl">
                    {parseFloat(
                      RevenueModelData?.finalScore?.replace("%", "")
                    ) / 5}{" "}
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-600 mb-4">Score With Ideax</h2>
          <div className="flex justify-center">
            <CircularProgress
              percentage={metrics.instant.percentage}
              size={250}
              color={metrics.instant.color}
              strokeWidth={35}
            >
              <div className="text-center">
                <img
                  src="/result-page/Layer9.webp"
                  className="mx-auto w-28  text-[#686868]"
                  alt="idea graph icon"
                  size={60}
                />
              </div>
            </CircularProgress>
          </div>
          <div className="mt-5">
            <div className="text-4xl md:text-5xl font-bold text-center">
              <AnimatedText score={metrics.instant.percentage} />%
            </div>
            <div className="text-xl mt-2 text-center">
              {metrics.instant.value}
              <span className="text-sm ml-1"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] m-auto ">
        <section
          id="market"
          className="business-check-container border-gray-300 border  m-auto mt-10 flex flex-col-reverse lg:flex-row lg:mx-10 p-5"
        >
          <div className=" w-[100%]">
            <div className=" text-left ">
              <h2 className=" mb-0 text-left">Market Research Analytics</h2>
              <p className="text-left">
                Slight changes may occur in the results depending on market
                trends.
              </p>
            </div>
            <div className="business-overview items-center">
              <div className="overview-left md:pr-10">
                <div
                  className="overview-item"
                  style={{ marginTop: "20px", position: "relative" }}
                >
                  <p>Market Potential </p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${data?.marketPotential}%`,
                        background: getBarColor(
                          parseFloat(data?.marketPotential) || 0
                        ),
                      }}
                    ></div>
                  </div>
                  <span>{data?.marketPotential} %</span>
                  <div className="tooltip" style={{ color: "gray" }}>
                    <PiQuestion size={18} />
                    <span className="tooltip-text">
                      Total demand for a product or service within a target
                      market, indicating growth opportunities and revenue
                      potential.
                    </span>
                  </div>
                </div>
                <div className="overview-item">
                  <p>Unique Value Proposition </p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: uniqueValueProposition?.finalScore,
                        background: getBarColor(
                          parseFloat(
                            uniqueValueProposition?.finalScore?.replace("%", "")
                          ) || 0
                        ),
                      }}
                    ></div>
                  </div>
                  <span>{uniqueValueProposition?.finalScore}</span>
                  <div className="tooltip" style={{ color: "gray" }}>
                    <PiQuestion size={18} />
                    <span className="tooltip-text">
                      Distinct benefit offered to customers, differentiating the
                      business from competitors and solving key problems
                      effectively.
                    </span>
                  </div>
                </div>
                <div className="overview-item">
                  <p>Revenue Model</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: RevenueModelData?.finalScore,
                        background: getBarColor(
                          parseFloat(
                            RevenueModelData?.finalScore?.replace("%", "")
                          ) || 0
                        ),
                      }}
                    ></div>
                  </div>
                  <span>{RevenueModelData?.finalScore}</span>
                  <div className="tooltip" style={{ color: "gray" }}>
                    <PiQuestion size={18} />
                    <span className="tooltip-text">
                      Strategy for generating income, detailing pricing
                      structure, sales approaches, and various revenue streams
                      for sustainability.
                    </span>
                  </div>
                </div>
                <div className="overview-item">
                  <p>Competitive Landscape</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: CompetitiveLandscapeData?.finalScore,
                        background: getBarColor(
                          parseFloat(
                            CompetitiveLandscapeData?.finalScore?.replace(
                              "%",
                              ""
                            )
                          ) || 0
                        ),
                      }}
                    ></div>
                  </div>
                  <span>{CompetitiveLandscapeData?.finalScore}</span>
                  <div className="tooltip" style={{ color: "gray" }}>
                    <PiQuestion size={18} />
                    <span className="tooltip-text">
                      Analysis of competitors, market share, strengths, and
                      weaknesses, identifying opportunities and challenges for
                      differentiation in business.
                    </span>
                  </div>
                </div>
                <div className="overview-item">
                  <p>Team & Resources</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${TeamAndResourcesData}%`,
                        background: getBarColor(
                          parseFloat(TeamAndResourcesData) || 0
                        ),
                      }}
                    ></div>
                  </div>
                  <span>{TeamAndResourcesData}%</span>
                  <div className="tooltip" style={{ color: "gray" }}>
                    <PiQuestion size={18} />
                    <span className="tooltip-text">
                      Key personnel and assets required for successful
                      execution, essential for achieving business goals and
                      long-term growth.
                    </span>
                  </div>
                </div>
              </div>
              <div className="overview-right " style={{ margin: "0px" }}>
                {[
                  {
                    href: "#market",
                    data: bardata2,
                    score: totalMarketScrore.toFixed(2),
                    label: "Market Score",
                    points: [
                      {
                        id: 1,
                        label: `${parseFloat(TeamAndResourcesData) / 5}%`,
                        position: " top-60 -left-10 md:top-7 md:-left-36",
                        bgColor: "linear-gradient(135deg, #6162FA, #9E43E9)",
                        icon: <FaUsers />,
                        rowDir: "md:flex-row-reverse",
                        textDir: "text-left md:text-right",
                        text: "Team & Resources",
                        toolDir: "left-full",
                      },
                      {
                        id: 2,
                        label: `${
                          parseFloat(
                            uniqueValueProposition?.finalScore?.replace("%", "")
                          ) / 5
                        }%`,
                        position: " top-60 -right-10 md:top-7 md:-right-36",
                        bgColor: "linear-gradient(135deg, #8749EC, #BD42CE)",
                        icon: <FaAward />,
                        rowDir: "md:flex-row",
                        textDir: "text-left md:text-left",
                        text: "Unique Value Proposition",
                        toolDir: "right-full",
                      },
                      {
                        id: 5,
                        label: `${
                          parseFloat(
                            RevenueModelData?.finalScore?.replace("%", "")
                          ) / 5
                        }%`,
                        position:
                          "top-72 mt-3 -left-10  md:top-3/4 md:-translate-y-1/4  md:-left-24",
                        bgColor: "linear-gradient(135deg, #616BFC, #BD42CE)",
                        mgIcon: "md:-mr-20",

                        icon: <FaChartLine />,
                        rowDir: "md:flex-col",
                        textDir: "text-left  md:text-right",
                        text: "Revenue Model",
                        toolDir: "left-full",
                      },
                      {
                        id: 6,
                        label: `${(
                          parseFloat(
                            CompetitiveLandscapeData?.finalScore?.replace(
                              "%",
                              ""
                            )
                          ) / 5
                        ).toFixed(2)}%`,
                        position:
                          "top-72 mt-3 z-0 -right-10  md:top-3/4 md:-translate-y-1/4   md:-right-24 ",
                        bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
                        mgIcon: "md:-ml-20",
                        icon: <FaBalanceScale />,
                        rowDir: "md:flex-col",
                        textDir: "text-left  md:text-left",
                        text: "Competitive Landscape",
                        toolDir: "right-full",
                      },
                      {
                        id: 4,
                        label: `${parseFloat(data?.marketPotential) / 5}%`,
                        position:
                          "top-80 mt-12 -left-10 md:mt-0 md:-top-14 md:left-3 ",
                        bgColor: "linear-gradient(135deg, #6a11cb, #2575fc) ",
                        icon: <IoBusiness />,
                        rowDir: "md:flex-col-reverse",
                        textDir: "text-left  md:text-center",
                        text: "Market Potential",
                        toolDir: "left-full",
                      },
                    ],
                  },
                ].map((item, index) => {
                  const radius = 40;
                  const circumference = 2 * Math.PI * radius;
                  const offset =
                    circumference - (item.score / 100) * circumference;
                  return (
                    <div
                      href={item.href}
                      key={index}
                      className={`circular-progress   flex flex-col items-center w-full md:w-1/3 p-5 md:min-w-[380px] ${
                        index !== 0
                          ? "xl-custom:border-l-2 xl-custom:border-gray-300"
                          : ""
                      }`}
                      style={{ textAlign: "center" }}
                    >
                      <div className="relative  flex justify-center items-center">
                        <div>
                          {item?.points.map((point) => (
                            <div
                              key={point.id}
                              className={`absolute ${point.position} text-center flex ${point.rowDir} justify-center items-center  gap-2 mx-6`}
                            >
                              <div
                                className={`w-6 h-6 ${point.bgColor} ${point.mgIcon} text-white   rounded-full flex items-center  justify-center shadow-lg`}
                                style={{
                                  background: point.bgColor,
                                }}
                              >
                                <div
                                  className="tooltip"
                                  style={{ color: "white", marginLeft: "0" }}
                                >
                                  {point.icon}
                                  <span
                                    className={`tooltip-text2  ${point?.toolDir}`}
                                  >
                                    Distinct benefit offered to customers,
                                    differentiating the business from
                                    competitors and solving key problems
                                    effectively.
                                  </span>
                                </div>
                              </div>
                              <div className="">
                                <h4
                                  className={`text-xs ${point.textDir} font-black text-gray-600`}
                                >
                                  {point.label}
                                </h4>
                                <p
                                  className={`text-[12px] ${point.textDir} text-left m-0 w-[100px]`}
                                >
                                  {point.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <svg
                          // width="150"
                          // height="150"
                          viewBox="0 0 120 120" // Increased the viewBox size
                          className="w-5/6  md:w-40 lg:w-40 mb-32 md:mb-4"
                        >
                          <circle cx="60" cy="60" r={radius} fill="white" />
                          <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            fill="none"
                            stroke="#cac8fa"
                            strokeWidth="8"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="60"
                            fill="none"
                            stroke="#DBDBDD"
                            strokeWidth="2"
                            strokeDasharray="2 4"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="30"
                            fill="none"
                            stroke="#DBDBDD"
                            strokeWidth="2"
                            strokeDasharray="2 4"
                          />
                          <defs>
                            <linearGradient
                              id="gradientStroke"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                style={{ stopColor: "#BD42CE", stopOpacity: 1 }}
                              />
                              <stop
                                offset="50%"
                                style={{ stopColor: "#8749EC", stopOpacity: 1 }}
                              />
                              <stop
                                offset="100%"
                                style={{ stopColor: "#616BFC", stopOpacity: 1 }}
                              />
                            </linearGradient>
                          </defs>
                          <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            fill="none"
                            stroke="url(#gradientStroke)"
                            strokeWidth="8"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)"
                          />
                          <text
                            x="60"
                            y="65"
                            textAnchor="middle"
                            fontSize="15"
                            fill="black"
                          >
                            <AnimatedText score={item?.score} />%
                          </text>
                        </svg>
                      </div>
                      <p className="mt-10 mb-0 text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                        {/* {item.label} */}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="business-additional-info">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {consumptions.map((consumption, index) => (
                  <LightingCard key={index} consumption={consumption} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="idea"
          className="business-check-container border-gray-300 border  m-auto mt-10 p-10 lg:mx-10"
        >
          <div>
            <h2
              style={{
                display: "flex",
                gap: "10px",
              }}
              className=" mb-0 justify-start text-left"
            >
              Your Idea Overview{" "}
              <FaRobot size={28} style={{ color: "var(--main-color)" }} />
            </h2>
            <p className=" text-left">Based on the description you provided</p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-start h-full justify-around">
            <div className=" min-w-[60%] ">
              <div className="m-auto">
                {loading ? (
                  <p>Loading AI-generated insights...</p>
                ) : (
                  <p className="text-justify  text-[14px] md:text-[14px]">
                    {displayedText}
                  </p>
                )}
              </div>
            </div>
            <div className="overview-right h-full">
              {[
                {
                  href: "#idea",
                  data: bardata,
                  score: data?.success_percentage,
                  label: "Idea Score",
                  points: [
                    {
                      id: 1,
                      label: `${parseInt(data?.phase1) * 3.17}%`,
                      position: " top-60 -left-10 md:top-7 md:-left-36",
                      bgColor: "linear-gradient(135deg, #6162FA, #9E43E9)",
                      icon: <FaLightbulb />,
                      rowDir: "md:flex-row-reverse",
                      textDir: "text-left md:text-right",
                      text: "IDEA",
                      toolDir: "left-full",
                    },
                    {
                      id: 2,
                      label: `${parseInt(data?.phase2) * 3.17}%`,
                      position: " top-60 -right-10 md:top-7 md:-right-36",
                      bgColor: "linear-gradient(135deg, #8749EC, #BD42CE)",
                      icon: <FaCoins />,
                      rowDir: "md:flex-row",
                      textDir: "text-left md:text-left",
                      text: "Investment",
                      toolDir: "right-full",
                    },
                    {
                      id: 5,
                      label: `${parseInt(data?.phase5) * 3.17}%`,
                      position:
                        "top-72 mt-3 -left-10  md:top-3/4 md:-translate-y-1/4  md:-left-24",
                      bgColor: "linear-gradient(135deg, #616BFC, #BD42CE)",
                      mgIcon: "md:-mr-20",
                      icon: <HiBuildingOffice />,
                      rowDir: "md:flex-col",
                      textDir: "text-left md:text-right",
                      text: "Current Job related",
                      toolDir: "left-full",
                    },
                    {
                      id: 6,
                      label: `${parseInt(data?.phase6) * 3.17}%`,
                      position:
                        "top-72 mt-3 -right-10  md:top-3/4 md:-translate-y-1/4   md:-right-24 ",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
                      mgIcon: "md:-ml-20",
                      icon: <FaAward />,
                      rowDir: "md:flex-col",
                      textDir: "text-left md:text-left",
                      text: "Experience",
                      toolDir: "right-full",
                    },
                    {
                      id: 4,
                      label: `${Math.round(data?.phase7 * 3.17)}%`,
                      position:
                        "top-80 mt-14 -left-10 md:mt-0 md:-top-14 md:left-3",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
                      icon: <FaGlobe />,
                      rowDir: "md:flex-col-reverse",
                      textDir: "text-left md:text-center",
                      text: "Country",
                      toolDir: "left-[20%]",
                      toolDirLg: "lg:right-full lg:left-unset",
                    },
                  ],
                },
              ].map((item, index) => {
                const radius = 40;
                const circumference = 2 * Math.PI * radius;
                const offset =
                  circumference - (item.score / 100) * circumference;

                return (
                  <div
                    href={item.href}
                    key={index}
                    className={`circular-progress   flex flex-col items-center w-full md:w-1/3 p-5 md:min-w-[380px] ${
                      index !== 0
                        ? "xl-custom:border-l-2 xl-custom:border-gray-300"
                        : ""
                    }`}
                    style={{ textAlign: "center" }}
                  >
                    <div className="relative  flex justify-center items-center">
                      <div>
                        {item?.points.map((point) => (
                          <div
                            key={point.id}
                            className={`absolute ${point.position} text-center flex ${point.rowDir} justify-center items-center  gap-2 mx-6`}
                          >
                            <div
                              className={`w-6 h-6 ${point.bgColor} ${point.mgIcon} text-white   rounded-full flex items-center  justify-center shadow-lg`}
                              style={{
                                background: point.bgColor,
                              }}
                            >
                              <div
                                className="tooltip"
                                style={{ color: "white", marginLeft: "0" }}
                              >
                                {point.icon}
                                <span
                                  className={`tooltip-text2 ${
                                    point?.toolDir || ""
                                  } ${point?.toolDirLg || ""}`}
                                >
                                  Distinct benefit offered to customers,
                                  differentiating the business from competitors
                                  and solving key problems effectively.
                                </span>
                              </div>
                            </div>
                            <div className="">
                              <h4
                                className={`text-xs ${point.textDir} font-black text-gray-600`}
                              >
                                {point.label}
                              </h4>
                              <p
                                className={`text-[12px] ${point.textDir} text-left m-0 w-[100px]`}
                              >
                                {point.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <svg
                        // width="150"
                        // height="150"
                        viewBox="0 0 120 120" // Increased the viewBox size
                        className="w-5/6  md:w-40 lg:w-40 mb-32 md:mb-4"
                      >
                        <circle cx="60" cy="60" r={radius} fill="white" />
                        <circle
                          cx="60"
                          cy="60"
                          r={radius}
                          fill="none"
                          stroke="#cac8fa"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="60"
                          fill="none"
                          stroke="#DBDBDD"
                          strokeWidth="2"
                          strokeDasharray="2 4"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="30"
                          fill="none"
                          stroke="#DBDBDD"
                          strokeWidth="2"
                          strokeDasharray="2 4"
                        />
                        <defs>
                          <linearGradient
                            id="gradientStroke"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: "#BD42CE", stopOpacity: 1 }}
                            />
                            <stop
                              offset="50%"
                              style={{ stopColor: "#8749EC", stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#616BFC", stopOpacity: 1 }}
                            />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="60"
                          cy="60"
                          r={radius}
                          fill="none"
                          stroke="url(#gradientStroke)"
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          transform="rotate(-90 60 60)"
                        />
                        <text
                          x="60"
                          y="65"
                          textAnchor="middle"
                          fontSize="15"
                          fill="black"
                        >
                          <AnimatedText score={item?.score} />%
                        </text>
                      </svg>
                    </div>
                    <div className="description-box-parent">
                      <h4 className=" text-left mt-12">
                        Your idea description
                      </h4>

                      <textarea
                        placeholder="Describe your idea in few line ..."
                        value={data?.idea_description || ""}
                        className="description-box "
                        aria-label="Description box"
                        rows="4"
                        readOnly
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="ideax"
          className="business-check-container border-gray-300 border  m-auto mt-10 lg:mx-10 "
        >
          <div>
            <h2 className=" mb-0 text-left">How you can improve your idea</h2>
            <p className="text-left">
              You can increase your idea&rsquo;s success odds by using ideax.
            </p>
          </div>
          <div className="flex flex-col-reverse  lg:flex-row justify-between ">
            <div className=" w-full lg:mr-[10px]">
              <div className="business-improvements">
                <ul>
                  {textForTipData?.map((item, index) => (
                    <li
                      key={index}
                      className={`p-4 border-b flex flex-col rounded-md ${
                        item.label === "Important!"
                          ? "bg-yellow-50"
                          : "bg-gray-50"
                      } hover:bg-gray-100 cursor-pointer`}
                      onClick={() => handleToggle(index)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item?.title}</span>
                        <span
                          className={`${
                            item.label === "Important!"
                              ? "text-orange-500"
                              : "text-gray-500"
                          } ml-4 flex flex-row justify-center items-center gap-2`}
                        >
                          {" "}
                          Tip
                          <FaArrowRight />
                        </span>
                      </div>
                      {expandedItems[index] && (
                        <div className="mt-2 text-sm text-gray-600 pl-5">
                          {item?.description}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overview-right h-full">
              {[
                {
                  href: "#ideax",
                  data: bardata3,
                  score: totalMarketScrore2.toFixed(2),
                  label: "Score with Ideax",
                  points: [
                    {
                      id: 1,
                      label: `${(
                        parseFloat(TeamAndResourcesData) / 5 +
                        ((20 - parseFloat(TeamAndResourcesData) / 5) * 60) / 100
                      ).toFixed(2)}%`,
                      position: " top-60 -left-10 md:top-7 md:-left-36",
                      bgColor: "linear-gradient(135deg, #6162FA, #9E43E9)",
                      icon: <FaChartLine />,
                      rowDir: "md:flex-row-reverse",
                      textDir: "text-left md:text-right",
                      text: "Team & Resources",
                      toolDir: "left-full",
                    },
                    {
                      id: 2,
                      label: `${(
                        parseFloat(
                          uniqueValueProposition?.finalScore?.replace("%", "")
                        ) /
                          5 +
                        ((20 -
                          parseFloat(
                            uniqueValueProposition?.finalScore?.replace("%", "")
                          ) /
                            5) *
                          60) /
                          100
                      ).toFixed(2)}%`,
                      position: " top-60 -right-10 md:top-7 md:-right-36",
                      bgColor: "linear-gradient(135deg, #8749EC, #BD42CE)",
                      icon: <FaAward />,
                      rowDir: "md:flex-row",
                      textDir: "text-left md:text-left",
                      text: "Unique Value Proposition",
                      toolDir: "right-full",
                    },
                    {
                      id: 5,
                      label: `${(
                        parseFloat(
                          RevenueModelData?.finalScore?.replace("%", "")
                        ) /
                          5 +
                        ((20 -
                          parseFloat(
                            RevenueModelData?.finalScore?.replace("%", "")
                          ) /
                            5) *
                          60) /
                          100
                      ).toFixed(2)}%`,
                      position:
                        "top-72 mt-3 -left-10  md:top-3/4 md:-translate-y-1/4  md:-left-24",
                      bgColor: "linear-gradient(135deg, #616BFC, #BD42CE)",
                      mgIcon: "md:-mr-20",
                      icon: <FaUsers />,
                      rowDir: "md:flex-col",
                      textDir: "text-left  md:text-right",
                      text: "Revenue Model",
                      toolDir: "left-full",
                    },
                    {
                      id: 6,
                      label: `${(
                        parseFloat(
                          CompetitiveLandscapeData?.finalScore?.replace("%", "")
                        ) /
                          5 +
                        ((20 -
                          parseFloat(
                            CompetitiveLandscapeData?.finalScore?.replace(
                              "%",
                              ""
                            )
                          ) /
                            5) *
                          60) /
                          100
                      ).toFixed(2)}%`,
                      position:
                        "top-72 mt-3 -right-10  md:top-3/4 md:-translate-y-1/4   md:-right-24 ",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
                      mgIcon: "md:-ml-20",
                      icon: <FaBalanceScale />,
                      rowDir: "md:flex-col",
                      textDir: "text-left  md:text-left",
                      text: "Competitive Landscape",
                      toolDir: "right-full",
                    },
                    {
                      id: 4,
                      label: `${(
                        parseFloat(data?.marketPotential) / 5 +
                        ((20 - parseFloat(data?.marketPotential) / 5) * 60) /
                          100
                      ).toFixed(2)}%`,
                      position:
                        "top-80 mt-12 -left-10 md:mt-0 md:-top-14 md:left-3 ",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc) ",
                      icon: <FaGlobe />,
                      rowDir: "md:flex-col-reverse",
                      textDir: "text-left  md:text-center",
                      text: "Market Potential",
                      toolDir: "left-full",
                    },
                  ],
                },
              ].map((item, index) => {
                const radius = 40;
                const circumference = 2 * Math.PI * radius;
                const offset =
                  circumference - (item.score / 100) * circumference;
                return (
                  <div
                    href={item.href}
                    key={index}
                    className={`circular-progress   flex flex-col items-center w-full md:w-1/3 p-5 pr-0 md:min-w-[380px] ${
                      index !== 0
                        ? "xl-custom:border-l-2 xl-custom:border-gray-300"
                        : ""
                    }`}
                    style={{ textAlign: "center" }}
                  >
                    <div className="relative  flex justify-center items-center">
                      <div>
                        {item?.points.map((point) => (
                          <div
                            key={point.id}
                            className={`absolute ${point.position} text-center flex ${point.rowDir} justify-center items-center  gap-2 mx-6`}
                          >
                            <div
                              className={`w-6 h-6 ${point.bgColor} ${point.mgIcon} text-white   rounded-full flex items-center  justify-center shadow-lg`}
                              style={{
                                background: point.bgColor,
                              }}
                            >
                              <div
                                className="tooltip"
                                style={{ color: "white", marginLeft: "0" }}
                              >
                                {point.icon}
                                <span
                                  className={`tooltip-text2  ${point?.toolDir}`}
                                >
                                  Distinct benefit offered to customers,
                                  differentiating the business from competitors
                                  and solving key problems effectively.
                                </span>
                              </div>
                            </div>
                            <div className="">
                              <h4
                                className={`text-xs ${point.textDir} font-black text-gray-600`}
                              >
                                {point.label}
                              </h4>
                              <p
                                className={`text-[12px] ${point.textDir} text-left m-0 w-[100px]`}
                              >
                                {point.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <svg
                        viewBox="0 0 120 120"
                        className="w-5/6  md:w-40 lg:w-40 mb-32 md:mb-4"
                      >
                        <circle cx="60" cy="60" r={radius} fill="white" />
                        <circle
                          cx="60"
                          cy="60"
                          r={radius}
                          fill="none"
                          stroke="#cac8fa"
                          strokeWidth="8"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="60"
                          fill="none"
                          stroke="#DBDBDD"
                          strokeWidth="2"
                          strokeDasharray="2 4"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="30"
                          fill="none"
                          stroke="#DBDBDD"
                          strokeWidth="2"
                          strokeDasharray="2 4"
                        />
                        <defs>
                          <linearGradient
                            id="gradientStroke"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: "#BD42CE", stopOpacity: 1 }}
                            />
                            <stop
                              offset="50%"
                              style={{ stopColor: "#8749EC", stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#616BFC", stopOpacity: 1 }}
                            />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="60"
                          cy="60"
                          r={radius}
                          fill="none"
                          stroke="url(#gradientStroke)"
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          transform="rotate(-90 60 60)"
                        />
                        <text
                          x="60"
                          y="65"
                          textAnchor="middle"
                          fontSize="15"
                          fill="black"
                        >
                          <AnimatedText score={item?.score} />%
                        </text>
                      </svg>
                    </div>
                    <p className="mt-16 max-w-[300px] text-justify mb-0 text-base md:text-lg lg:text-sm font-thin text-gray-800">
                      Enhance your idea&rsquo;s success with interactive
                      demonstrations, a user-friendly mobile responsive, social
                      media integration, and personalized recommendations.
                      Simplify processes, maximize engagement, and create a
                      unique value for customers.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
      </div>
      <div className="bg-black text-center py-10 px-4 sm:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-10 lg:max-w-6xl mx-auto">
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-blue-500 	">
            Take the first step{" "}
          </span>
          <span className="font-semibold">towards</span> making your idea to a
          reality, <span className="font-semibold">launch</span> your idea now.
        </h1>
        <div className="btns-container mt-10 flex md:flex-row justify-center gap-5">
          <button
            className="btn flex items-center mt-7 justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mx-0"
            style={{ fontSize: "14px" }}
            onClick={handleOpenMotivationalCard}
          >
            Get More Free Test <FaArrowAltCircleRight />
          </button>
          <Link
            className="btn flex items-center mt-7 justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mx-0"
            style={{ fontSize: "14px" }}
            href="/plan-details"
          >
            Launch Your Idea <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
      <Modal
        isOpen={taskCompletion}
        onRequestClose={onRequestTaskCompletion}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 pt-20 flex items-center justify-center z-50"
      >
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Earn More Attempts
          </h2>
          <p className="text-sm text-gray-600 mb-4 text-left">
            Complete the following tasks to earn more attempts!
          </p>
          <div className="space-y-6">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-2 flex justify-between items-center"
              >
                <div className=" flex flex-row">
                  <div className="p-4">
                    <FaGift />
                  </div>
                  <div>
                    <h3 className="text-lg text-left font-semibold text-gray-800">
                      {task.title}
                    </h3>
                    <p className="text-sm text-left text-gray-600">
                      {task.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#6161FF] font-bold block mb-2">
                    {task.points}
                  </span>
                  <button
                    className="bg-[#6161FF] hover:bg-[#4F4FDD] text-white font-medium py-1 px-3 rounded text-sm"
                    onClick={task.onclickButton}
                  >
                    {task.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={onRequestTaskCompletion}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={motivationalCardOpen}
        onRequestClose={onMotivationalCardClose}
        className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      >
        <div className="relative">
          <div className="flex justify-center mb-4">
            <img src="/result-page/congrechuletion.webp" width={100} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Don&rsquo;t Give Up!
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            You have tried so hard to achieve your goals.
          </p>
          <div className="flex flex-col gap-5 justify-between  items-center mt-6">
            <button
              className="bg-[#417CF5] hover:bg-[#3574f3] text-white font-bold py-2 px-4 rounded"
              onClick={handleOpenTaskCompletionCard}
            >
              Get More Attempts
            </button>
            <button
              className=" bg-[#919191] hover:bg-[#417CF5] text-black hover:text-white  font-bold py-2 px-4 rounded"
              onClick={handleShareAchievement}
            >
              Share Achievement
            </button>
          </div>
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={onMotivationalCardClose}
            aria-label="Close"
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
      </Modal>
      <Modal
        isOpen={showCongratulations}
        onRequestClose={onCloseCongratulations}
        className="bg-gray-900 text-center rounded-lg p-6 max-w-xs mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="flex flex-col items-center space-y-4">
          <span className="text-3xl">
            <FaHeart className=" text-[#6161FF] " />
            {/* <img src="" alt="congrechuletion for reward" />  */}
          </span>
          <h2 className="text-xl font-semibold text-black">Congratulations!</h2>
          <p className="text-sm text-gray-400">
            You have claimed 1 additional attempt!
          </p>
          <button
            onClick={onCloseCongratulations}
            className="bg-[#6161FF] hover:bg-[#4F4FDD] text-white font-semibold py-2 px-6 rounded-lg"
          >
            Got it
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={shareModalOpen}
        onRequestClose={handleCloseShareModal}
        className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Result </h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleShare("facebook")}
              className="bg-[#6161FF] text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-700"
            >
              <FaFacebook className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="bg-blue-400 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-600"
            >
              <FaTwitter className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              className="bg-green-500 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-green-600"
            >
              <FaWhatsapp className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={handleCloseShareModal}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={shareModalOpen2}
        onRequestClose={handleCloseShareModal2}
        className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Refer firend </h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleShare("facebookR")}
              className="bg-[#6161FF] text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-700"
            >
              <FaFacebook className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleShare("twitterR")}
              className="bg-blue-400 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-600"
            >
              <FaTwitter className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleShare("whatsappR")}
              className="bg-green-500 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-green-600"
            >
              <FaWhatsapp className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={handleCloseShareModal2}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};
CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  children: PropTypes.node,
};
export default WizardResult;