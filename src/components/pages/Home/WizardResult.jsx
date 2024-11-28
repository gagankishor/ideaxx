"use client";
// import { useLocation } from "next/link";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import {
  FaAward,
  FaBalanceScale,
  FaChartLine,
  FaCoins,
  FaGlobe,
  FaLightbulb,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
// import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { PiQuestion } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoBusiness } from "react-icons/io5";
import { Activity, Zap } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import LightingCard from "@/components/wizard-result/LightingCard";

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
  // const location = useLocation();
  // const { data } = location.state || {};
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("wizardResultData");
    if (storedData) {
      setData(JSON.parse(storedData)); // or handle as needed
    }
  }, []);

  // Check for presence of data
  if (!data) {
    console.warn("No wizard result data found in localStorage.");
  }
  // console.log("_______________", data);
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
    if (score <= 100) return "blue";
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
  console.log(textForTipData);
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
  // const successPercentage = parseFloat(data?.success_percentage || 0);
  // const totalMarketScrore2 = (
  //   totalMarketScrore +
  //   ((100 - (
  //     parseFloat(data?.marketPotential || 0) +
  //     parseFloat(RevenueModelData?.finalScore?.replace("%", "") || 0) +
  //     parseFloat(CompetitiveLandscapeData?.finalScore?.replace("%", "") || 0) +
  //     parseFloat(TeamAndResourcesData || 0)
  //   ) / 4) * 60) / 100
  // ).toFixed(2);
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
  // console.log(
  //   "this is score",
  //   parseFloat(totalMarketScrore) ,
  //     ((((20-(parseFloat(TeamAndResourcesData)/5))*60)/100)).toFixed(1) ,
  //     (((20-(parseFloat(RevenueModelData?.finalScore?.replace("%", ""))/5))*60)/100).toFixed(1),
  //     (((20-(parseFloat(CompetitiveLandscapeData?.finalScore?.replace("%", ""))/5))*60)/100).toFixed(1),
  //     (((20-(parseFloat(data?.marketPotential)/5))*60)/100).toFixed(1),
  //     (parseFloat((((20-(parseFloat(TeamAndResourcesData)/5))*60)/100)) +
  //     parseFloat(((20-(parseFloat(RevenueModelData?.finalScore?.replace("%", ""))/5))*60)/100)+
  //     parseFloat(((20-(parseFloat(CompetitiveLandscapeData?.finalScore?.replace("%", ""))/5))*60)/100)+
  //     parseFloat(((20-(parseFloat(data?.marketPotential)/5))*60)/100))
  // );
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
      ...prev,
      [index]: !prev[index],
    }));
  };
  const colors = {
    blue: {
      outer: "#56BEEE",
      inner: "#0055BB",
      innermost: "#003388",
      text: "#00C2FF",
    },
    orange: {
      outer: "#FF9500",
      inner: "#FF7B00",
      innermost: "#CC5500",
      text: "#FFB340",
    },
    green: {
      outer: "#AED442",
      inner: "#28B14A",
      innermost: "#1F8A3A",
      text: "#4DE17A",
    },
    red: {
      outer: "#FF453A",
      inner: "#D93A31",
      innermost: "#B32E27",
    },
    background: "#1C1C1E",
    centerCircle: "#2C2C2E",
  };

  const renderCircleSegment = (startAngle, endAngle, radius, color) => {
    const centerX = 200;
    const centerY = 200;

    const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return (
      <path
        d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
        fill={color}
        style={{ opacity: 0.9 }}
      />
    );
  };

  const renderText = (text, angle, radius, color, size = "14px") => {
    const centerX = 200;
    const centerY = 200;
    const textAngle = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(textAngle);
    const y = centerY + radius * Math.sin(textAngle);

    return (
      <text
        x={x}
        y={y}
        fill={color}
        style={{
          fontSize: size,
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${angle + 90}, ${x}, ${y})`}
      >
        {text}
      </text>
    );
  };
  const consumption = {
    percentage: 48.5,
    currentWatts: 1323,
  };
  const metrics = {
    lighting: {
      percentage: parseFloat(data?.success_percentage).toFixed(2),
      value: "50",
      unit: "Hz",
      color: "rgb(239, 68, 68)",
    },
    global: { percentage: totalMarketScrore, value: "89 991", color: "rgb(239, 68, 68)" },
    instant: {
      percentage: totalMarketScrore2,
      value: "8820",
      unit: "W",
      color: "rgb(234, 179, 8)",
    },
    costs: {
      last30Days: "11 045,00",
      today: "211,43",
    },
    consumption: {
      last30Days: "64 996,03",
      today: "1012,18",
      trendUp: "+11.64%",
      trendDown: "-1.02%",
    },
  };
  const consumptions = [
    {
      percentage: 75, // 75% of maximum capacity
      currentWatts: `${data?.totalMarketSize} potential users`, // Current consumption in watts
      title:'Target Market Size'

    },
    {
      percentage: 60,
      currentWatts: InvestmentLevelData?.chosenInvestmentLevel,
      title:'Investment Level'

    },
    {
      percentage: 90,
      currentWatts: TimeToMarketData ? TimeToMarketData?.totalTTM : "0",
      title:'Time to Market'

    },
    {
      percentage: 50,
      currentWatts: `${ExpectedROIData?.expectedROI} for ${ExpectedROIData?.timeFrame}` ||
                    `${data?.ExpectedROIData}`,
      title:'Expected ROI'

    },
    {
      percentage: 50,
      currentWatts: MarketShareData?.chosenOutcome || MarketShareData,
      title:'Market Share'
    },
  ];
{/* <div className="info-item">
                <strong>Target Market Size</strong>
                <span>{data?.totalMarketSize} potential users</span>
              </div>
              <div className="info-item">
                <strong>Investment Level</strong>
                <span>{InvestmentLevelData?.chosenInvestmentLevel}</span>
              </div>
              <div className="info-item">
                <strong>Time to Market</strong>
                <span>
                  {" "}
                  {TimeToMarketData ? TimeToMarketData?.totalTTM : "0"}{" "}
                </span>
              </div>
              <div className="info-item">
                <strong>Expected ROI</strong>
                <span>
                  {`${ExpectedROIData?.expectedROI} for ${ExpectedROIData?.timeFrame}` ||
                    `${data?.ExpectedROIData}`}
                </span>
              </div>
              <div className="info-item">
                <strong>Market Share</strong>
                <span>{MarketShareData?.chosenOutcome || MarketShareData}</span>
              </div> */}
  // const radius = 40; // Radius of the circle
  // const circumference = 2 * Math.PI * radius; // Circumference of the circle
  // const offset = circumference - (48 / 100) * circumference;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-4 bg-white text-gray-800">
        {/* Lighting Consumption */}
        <div className="flex flex-col gap-6 ">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-sm text-gray-600 mb-4">
              Idea Score
            </h2>
            <div className="flex justify-start">
              <CircularProgress
                percentage={metrics.lighting.percentage}
                color={metrics.lighting.color}
                size={120}
                strokeWidth={14}
              >
                <div className="text-center">
                  {/* <Zap className="mx-auto mb-2" size={24} /> */}
                  <BiSolidZap
                    className="mx-auto mb-2 text-[#686868]"
                    size={34}
                  />
                </div>
              </CircularProgress>
              <div className=" px-5 flex flex-col justify-between">
                <div className="text-5xl font-bold mb-1">
                  {metrics.lighting.percentage}%
                </div>
                <div>
                  <div className="text-sm text-gray-500 text-left">NOW</div>
                  <div className="text-2xl text-left">
                    {metrics.lighting.value}
                    <span className="text-sm ml-1 ">
                      {metrics.lighting.unit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-sm text-gray-600 mb-4">ENERGY COSTS</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">
                  PRICE (LAST 30 DAYS)
                </div>
                <div className="text-2xl">{metrics.costs.last30Days} Euros</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">PRICE (TODAY)</div>
                <div className="text-2xl ">{metrics.costs.today} Euros</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Consumption */}
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-600 mb-4">
            Market Score
          </h2>
          <div className="flex justify-start mb-4">
            <CircularProgress
              percentage={metrics.global.percentage}
              color={metrics.global.color}
              size={120}
              strokeWidth={14}
            >
              <div className="text-center">
                {/* <Zap className="mx-auto mb-2" size={24} /> */}
                <BiSolidZap className="mx-auto mb-2 text-[#686868]" size={34} />
              </div>
            </CircularProgress>
            <div className="px-5 flex flex-col justify-between ">
              {/* First text at the top */}
              <div className="text-5xl font-bold">
                {metrics.global.percentage}%
              </div>
              {/* Second text at the bottom */}
              <div className="text-2xl">{metrics.global.value}</div>
            </div>
          </div>
          <div className=" bg-gray-200 h-[1px] w-full my-5"></div>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600">LAST 30 DAYS</div>
              <div className="text-xl">
                {metrics.consumption.last30Days} kWh
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">TODAY</div>
              <div className="text-xl">{metrics.consumption.today} kWh</div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-sm text-gray-600">TREND</div>
                <div className="text-red-500">
                  {metrics.consumption.trendUp} ▼
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">TREND</div>
                <div className="text-green-500">
                  {metrics.consumption.trendDown} ▲
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instant Consumption */}
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-600 mb-4">
           Score With Ideax
          </h2>
          <div className="flex justify-center">
            <CircularProgress
              percentage={metrics.instant.percentage}
              size={250}
              color={metrics.instant.color}
              strokeWidth={35}
            >
              <div className="text-center">
                {/* <Zap className="mx-auto mb-2 text-[#686868]" size={24} /> */}
                <BiSolidZap className="mx-auto mb-2 text-[#686868]" size={34} />
              </div>
            </CircularProgress>
          </div>
          <div className=" mt-5">
            <div className="text-3xl font-bold text-center">
              {metrics.instant.percentage}%
            </div>
            <div className="text-xl mt-2 text-center">
              {metrics.instant.value}
              <span className="text-sm ml-1">{metrics.instant.unit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] m-auto ">
        {/* <div className="fixed bottom-3 w-full z-50 sm:hidden flex justify-center items-center">
          <div className="mx-10 text-center w-[96%] text-xl rounded-lg h-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-medium flex items-center justify-center">
            Launch Your Idea Free
          </div>

        </div> */}

        <section
          id="market"
          className="business-check-container border-gray-300 border  m-auto mt-10 flex flex-col-reverse lg:flex-row lg:mx-10 p-5"
        >
          <div className=" w-[100%]">
            <h2 className=" mb-0 text-center">
              Overview of Market Research for the Idea
            </h2>
            <p className="">
              Slight changes may occur in the results depending on market
              trends.
            </p>
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
                    {/* <BsFillQuestionCircleFill size={20} /> */}
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
                    {/* <FcQuestions size={20} /> */}
                    <PiQuestion size={18} />
                    <span className="tooltip-text">
                      Distinct benefit offered to customers, differentiating the
                      business from competitors and solving key problems
                      effectively.
                    </span>
                  </div>
                </div>
                {/* Revenue Model */}
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
                    {/* <BsQuestionDiamondFill size={20} /> */}
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
                    score: totalMarketScrore,
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
                      },
                      {
                        id: 6,
                        label: `${
                          parseFloat(
                            CompetitiveLandscapeData?.finalScore?.replace(
                              "%",
                              ""
                            )
                          ) / 5
                        }%`,
                        position:
                          "top-72 mt-3 -right-10  md:top-3/4 md:-translate-y-1/4   md:-right-24 ",
                        bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
                        mgIcon: "md:-ml-20",
                        icon: <FaBalanceScale />,
                        rowDir: "md:flex-col",
                        textDir: "text-left  md:text-left",
                        text: "Competitive Landscape",
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
                                {point.icon}
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
                            cx="60" // Adjusted center for better alignment
                            cy="60" // Adjusted center for better alignment
                            r={radius}
                            fill="none"
                            stroke="url(#gradientStroke)" // Reference the gradient here
                            strokeWidth="8"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)" // Adjusted rotation origin
                          />
                          {/* Percentage Text */}
                          <text
                            x="60" // Adjusted to match the new center position
                            y="65" // Adjusted to match the new center position
                            textAnchor="middle"
                            fontSize="15"
                            fill="black"
                          >
                            {item.score}%
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
               <div className="flex flex-wrap gap-2">
                {consumptions.map((consumption, index) => (
                  <LightingCard key={index} consumption={consumption} />
                ))}
              </div>

              {/* <div className="info-item">
                <strong>Target Market Size</strong>
                <span>{data?.totalMarketSize} potential users</span>
              </div>
              <div className="info-item">
                <strong>Investment Level</strong>
                <span>{InvestmentLevelData?.chosenInvestmentLevel}</span>
              </div>
              <div className="info-item">
                <strong>Time to Market</strong>
                <span>
                  {" "}
                  {TimeToMarketData ? TimeToMarketData?.totalTTM : "0"}{" "}
                </span>
              </div>
              <div className="info-item">
                <strong>Expected ROI</strong>
                <span>
                  {`${ExpectedROIData?.expectedROI} for ${ExpectedROIData?.timeFrame}` ||
                    `${data?.ExpectedROIData}`}
                </span>
              </div>
              <div className="info-item">
                <strong>Market Share</strong>
                <span>{MarketShareData?.chosenOutcome || MarketShareData}</span>
              </div> */}
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
              className=" mb-0 justify-center"
            >
              Your Idea Overview{" "}
              <FaRobot size={28} style={{ color: "var(--main-color)" }} />
            </h2>
            <p className=" ">
              Slight changes may occur in the results depending on market
              trends.
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-start h-full justify-around">
            <div className=" lg:mr-[10px] ">
              <div className="m-auto">
                {/* <div className="w-full pt-5 pb-5 flex justify-center items-center text-left"></div> */}
                {loading ? (
                  <p>Loading AI-generated insights...</p>
                ) : (
                  <p className="text-justify p-2 text-[14px] md:text-[14px]">
                    {displayedText}
                  </p>
                )}
              </div>
            </div>
            <div className="overview-right h-full">
              {/* <div className="business-score-circle">
            <Doughnut data={bardata2} options={options} />
            <div className="doughnut-center">
              <p className="circle-text">{totalMarketScrore}%</p>
              <p>Idea Score</p>
            </div>
          </div> */}
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
                    },
                    {
                      id: 4,
                      label: `${parseInt(data?.phase7) * 3.17}%`,
                      position:
                        "top-80 mt-14 -left-10 md:mt-0 md:-top-14 md:left-3 ",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc) ",
                      icon: <FaGlobe />,
                      rowDir: "md:flex-col-reverse",
                      textDir: "text-left md:text-center",
                      text: "Country",
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
                              {point.icon}
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
                          cx="60" // Adjusted center for better alignment
                          cy="60" // Adjusted center for better alignment
                          r={radius}
                          fill="none"
                          stroke="url(#gradientStroke)" // Reference the gradient here
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          transform="rotate(-90 60 60)" // Adjusted rotation origin
                        />
                        {/* Percentage Text */}
                        <text
                          x="60" // Adjusted to match the new center position
                          y="65" // Adjusted to match the new center position
                          textAnchor="middle"
                          fontSize="15"
                          fill="black"
                        >
                          {item.score}%
                        </text>
                      </svg>
                    </div>
                    <p className="mt-16 max-w-[300px] text-justify mb-0 text-base md:text-sm lg:text-sm font-thin text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi reiciendis, obcaecati consequatur recusandae
                      cupiditate illum.
                    </p>
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
            <h2 className=" mb-0 text-center">How you can improve your idea</h2>
            <p className="">
              Slight changes may occur in the results depending on market
              trends.
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
                {/* <div>{textForTipData}</div> */}
              </div>
            </div>
            <div className="overview-right h-full">
              {[
                {
                  href: "#ideax",
                  data: bardata3,
                  score: totalMarketScrore2,
                  label: "Score with Ideax",
                  points: [
                    {
                      id: 1,
                      label: `${(
                        parseFloat(TeamAndResourcesData) / 5 +
                        ((20 - parseFloat(TeamAndResourcesData) / 5) * 60) / 100
                      ).toFixed(1)}%`,
                      position: " top-60 -left-10 md:top-7 md:-left-36",
                      bgColor: "linear-gradient(135deg, #6162FA, #9E43E9)",
                      icon: <FaChartLine />,
                      rowDir: "md:flex-row-reverse",
                      textDir: "text-left md:text-right",
                      text: "Team & Resources",
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
                      ).toFixed(1)}%`,
                      position: " top-60 -right-10 md:top-7 md:-right-36",
                      bgColor: "linear-gradient(135deg, #8749EC, #BD42CE)",
                      icon: <FaAward />,
                      rowDir: "md:flex-row",
                      textDir: "text-left md:text-left",
                      text: "Unique Value Proposition",
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
                      ).toFixed(1)}%`,
                      position:
                        "top-72 mt-3 -left-10  md:top-3/4 md:-translate-y-1/4  md:-left-24",
                      bgColor: "linear-gradient(135deg, #616BFC, #BD42CE)",
                      mgIcon: "md:-mr-20",
                      icon: <FaUsers />,
                      rowDir: "md:flex-col",
                      textDir: "text-left  md:text-right",
                      text: "Revenue Model",
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
                      ).toFixed(1)}%`,
                      position:
                        "top-72 mt-3 -right-10  md:top-3/4 md:-translate-y-1/4   md:-right-24 ",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc)",
                      mgIcon: "md:-ml-20",
                      icon: <FaBalanceScale />,
                      rowDir: "md:flex-col",
                      textDir: "text-left  md:text-left",
                      text: "Competitive Landscape",
                    },
                    {
                      id: 4,
                      label: `${(
                        parseFloat(data?.marketPotential) / 5 +
                        ((20 - parseFloat(data?.marketPotential) / 5) * 60) /
                          100
                      ).toFixed(1)}%`,
                      position:
                        "top-80 mt-12 -left-10 md:mt-0 md:-top-14 md:left-3 ",
                      bgColor: "linear-gradient(135deg, #6a11cb, #2575fc) ",
                      icon: <FaGlobe />,
                      rowDir: "md:flex-col-reverse",
                      textDir: "text-left  md:text-center",
                      text: "Market Potential",
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
                              {point.icon}
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
                          cx="60" // Adjusted center for better alignment
                          cy="60" // Adjusted center for better alignment
                          r={radius}
                          fill="none"
                          stroke="url(#gradientStroke)" // Reference the gradient here
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          transform="rotate(-90 60 60)" // Adjusted rotation origin
                        />
                        {/* Percentage Text */}
                        <text
                          x="60" // Adjusted to match the new center position
                          y="65" // Adjusted to match the new center position
                          textAnchor="middle"
                          fontSize="15"
                          fill="black"
                        >
                          {item.score}%
                        </text>
                      </svg>
                    </div>
                    <p className="mt-16 max-w-[300px] text-justify mb-0 text-base md:text-lg lg:text-sm font-thin text-gray-800">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium nemo eveniet sequi? Dolorem at est libero
                      reprehenderit.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="mt-10 border border-gray-300 rounded-lg w-[94%]  mx-auto p-8 bg-white flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 ">
            {/* Left Text Section */}
            <div>
              <h3 className="text-2xl font-light text-gray-800 leading-relaxed text-center md:text-left">
                Take the first step{" "}
                <span className="font-semibold">towards</span> making your idea
                to a reality, <span className="font-semibold">launch</span> your
                idea now.
              </h3>
            </div>
            {/* Button Section */}
            <div className="btns-container">
              <Link href="/plan-details" passHref>
                <button className="btn min-w-[170px]">Launch Your Idea</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default WizardResult;
