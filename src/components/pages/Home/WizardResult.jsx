"use client";
// import { useLocation } from "next/link";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import { FaRobot } from "react-icons/fa";
// import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { PiQuestion } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
Chart.register(ArcElement, Tooltip, Legend);
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
  console.log("_______________", data);
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
  // console.log("MarketShareData",MarketShareData)
  const fullAiContent = `
  ${data?.resultText} 
  `;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate AI "thinking" for 2 seconds
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
  // const options = {
  //   cutout: "70%",
  //   responsive: true,
  //   plugins: {
  //     tooltip: {
  //       enabled: true,
  //     },
  //     legend: {
  //       display: false,
  //     },
  //   },
  // };
  const totalMarketScrore =
    (parseFloat(data?.marketPotential) +
      parseFloat(uniqueValueProposition?.finalScore?.replace("%", "")) +
      parseFloat(RevenueModelData?.finalScore?.replace("%", "")) +
      parseFloat(CompetitiveLandscapeData?.finalScore?.replace("%", "")) +
      parseFloat(TeamAndResourcesData)) /
    5;
  // const totalMarketScrore = 35.24;
  const totalMarketScrore2 = 85.24;
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
  // const radius = 40; // Radius of the circle
  // const circumference = 2 * Math.PI * radius; // Circumference of the circle
  // const offset = circumference - (48 / 100) * circumference;
  return (
    <div className="max-w-[1400px] m-auto ">
      <div className="mt-5 border-gray-300 border rounded-lg w-[94%] mx-auto p-5">
        <div>
          <h2 className="mb-0 text-center text-lg md:text-xl lg:text-2xl">
            Your Idea Outlook
          </h2>
          <p className="text-sm md:text-base text-center">
            Slight changes may occur in the results depending on market trends.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="flex flex-col md:flex-row justify-between w-full md:w-11/12 lg:w-10/12 mx-auto my-5 md:my-8">
            {[
              {
                href: "#idea",
                data: bardata2,
                score: totalMarketScrore,
                label: "Idea Score",
              },
              {
                href: "#market",
                data: bardata,
                score: data?.success_percentage,
                label: "Market Score",
              },
              {
                href: "#ideax",
                data: bardata3,
                score: totalMarketScrore2,
                label: "Score with Ideax",
              },
            ].map((item, index) => {
              const radius = 40;
              const color =
                item.score > 80 ? "green" : item.score > 50 ? "orange" : "red";
              const backgroundColor =
                item.score > 80
                  ? "#d4edda"
                  : item.score > 50
                  ? "#fff3cd"
                  : "#f8d7da";
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (item.score / 100) * circumference;

              return (
                <a
                  href={item.href}
                  key={index}
                  className="circular-progress flex flex-col items-center w-full md:w-1/3"
                  style={{ textAlign: "center" }}
                >
                  <svg
                    width="150"
                    height="150"
                    viewBox="0 0 100 100"
                    className="w-3/4 sm:w-2/3 md:w-3/4 lg:w-full"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r={radius} // Slightly larger than the main circle radius
                      fill={backgroundColor} // Light background color
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#fde8e8"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke={color}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Percentage Text */}
                    <text
                      x="50"
                      y="55"
                      textAnchor="middle"
                      fontSize="15"
                      fill="black"
                    >
                      {item.score}%
                    </text>
                  </svg>
                  <p className="mt-2 text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="mt-1 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 ease-in-out"
                  >
                    More Details &rarr;
                  </a>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <section>
        <div className="mt-10 border border-gray-300 rounded-lg w-[94%]  mx-auto p-8 bg-white shadow-lg flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 ">
          {/* Left Text Section */}
          <div>
            <h3 className="text-2xl font-light text-gray-800 leading-relaxed text-center md:text-left">
              Take the first step <span className="font-semibold">towards</span>{" "}
              making your idea to a reality,{" "}
              <span className="font-semibold">launch</span> your idea now.
            </h3>
          </div>

          {/* Button Section */}
          <div className="btns-container">
            <button className="btn">Launch Your Idea</button>
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
            Slight changes may occur in the results depending on market trends.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
          <div className=" ">
            <div className="ai-generated-content">
              {/* <div className="w-full pt-5 pb-5 flex justify-center items-center text-left"></div> */}
              {loading ? (
                <p>Loading AI-generated insights...</p>
              ) : (
                <p className="text-justify">{displayedText}</p>
              )}
            </div>
          </div>
          <div className="overview-right">
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
                data: bardata2,
                score: totalMarketScrore,
                label: "Idea Score",
              },
            ].map((item, index) => {
              // Determine radius and color based on the score
              const radius = 40;
              const color =
                item.score > 80 ? "green" : item.score > 50 ? "orange" : "red"; // Example color logic
              const backgroundColor =
                item.score > 80
                  ? "#d4edda"
                  : item.score > 50
                  ? "#fff3cd"
                  : "#f8d7da";
              // Calculate circle properties
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (item.score / 100) * circumference;

              return (
                <div
                  key={index}
                  className="circular-progress flex flex-col justify-center items-center"
                  style={{ textAlign: "center" }}
                >
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius} 
                      fill={backgroundColor} 
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#fde8e8"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke={color}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text
                      x="50"
                      y="55"
                      textAnchor="middle"
                      fontSize="15"
                      fill="black"
                    >
                      {item.score}%
                    </text>
                  </svg>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#000",
                      fontSize: "1.4rem",
                    }}
                    className=" text-2xl"
                  >
                    {item.label}
                  </p>
                  <p className=" lg:max-w-[200px] text-justify">
                    An online store offering a diverse range of toys suitable
                    for all age groups.&quot; holds great potential. Now that you&quot;ve
                    started planning and preparation also Balancing a job and an
                    idea can be tough. Try dedicating specific time slots, even
                    short ones
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="market"
        className="business-check-container border-gray-300 border  m-auto mt-10 flex flex-col-reverse lg:flex-row lg:mx-10 p-5"
      >
        <div className=" w-[100%]">
          <h2 className=" mb-0 text-center">
            Overview of Market Research for the Idea
          </h2>
          <p className="">
            Slight changes may occur in the results depending on market trends.
          </p>
          <div className="business-overview items-center">
            <div className="overview-left pr-10">
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
                    Strategy for generating income, detailing pricing structure,
                    sales approaches, and various revenue streams for
                    sustainability.
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
                          CompetitiveLandscapeData?.finalScore?.replace("%", "")
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
                    Key personnel and assets required for successful execution,
                    essential for achieving business goals and long-term growth.
                  </span>
                </div>
              </div>
            </div>
            <div className="overview-right " style={{ margin: "0px" }}>
              {[
                {
                  href: "#market",
                  data: bardata,
                  score: data?.success_percentage,
                  label: "Market Score",
                },
              ].map((item, index) => {
                // Determine radius and color based on the score
                const radius = 40;
                const color =
                  item.score > 80
                    ? "green"
                    : item.score > 50
                    ? "orange"
                    : "red"; // Example color logic
                const backgroundColor =
                  item.score > 80
                    ? "#d4edda"
                    : item.score > 50
                    ? "#fff3cd"
                    : "#f8d7da";
                // Calculate circle properties
                const circumference = 2 * Math.PI * radius;
                const offset =
                  circumference - (item.score / 100) * circumference;

                return (
                  <div
                    key={index}
                    className="circular-progress"
                    style={{ textAlign: "center" }}
                  >
                    <svg width="200" height="200" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill={backgroundColor}
                      />
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#fde8e8"
                        strokeWidth="8"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Percentage Text */}
                      <text
                        x="50"
                        y="55"
                        textAnchor="middle"
                        fontSize="15"
                        fill={color}
                      >
                        {item.score}%
                      </text>
                    </svg>
                    <p
                      style={{
                        marginTop: "10px",
                        color: "#000",
                        fontSize: "1.4rem",
                      }}
                      className=" text-2xl"
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="business-additional-info">
            <div className="info-item">
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
            </div>
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
            Slight changes may occur in the results depending on market trends.
          </p>
        </div>
        <div className="flex flex-col-reverse  lg:flex-row justify-between ">
          <div className=" w-full ">
            <div className="business-improvements">
              <ul>
                {[
                  {
                    text: "Clarify the Unique Value Proposition (UVP).",
                    label: "Important!",
                    detail:
                      "Describe your unique benefit more clearly.Consider aspects that allow growth without adding proportional resources.Consider aspects that allow growth without adding proportional resources.Consider aspects that allow growth without adding proportional resources.Consider aspects that allow growth without adding proportional resources.Consider aspects that allow growth without adding proportional resources.",
                  },
                  {
                    text: "Improve the scalability of the business model.",
                    label: "Tip!",
                    detail:
                      "Consider aspects that allow growth without adding proportional resources.",
                  },
                  {
                    text: "Analyze the competitive landscape further.",
                    label: "Tip!",
                    detail: "Research competitors to refine your positioning.",
                  },
                  {
                    text: "Identify additional potential partnerships.",
                    label: "Tip!",
                    detail:
                      "Think about partners who can enhance your offerings or market reach.",
                  },
                ].map((item, index) => (
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
                      <span className="font-medium">{item.text}</span>
                      <span
                        className={`${
                          item.label === "Important!"
                            ? "text-orange-500"
                            : "text-gray-500"
                        } ml-4 flex flex-row justify-center items-center gap-2`}
                      >
                        {item.label}
                        <FaArrowRight />
                      </span>
                    </div>
                    {expandedItems[index] && (
                      <div className="mt-2 text-sm text-gray-600 pl-5">
                        {item.detail}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overview-right ">
            {[
              {
                href: "#ideax",
                data: bardata3,
                score: totalMarketScrore2,
                label: "Score with Ideax",
              },
            ].map((item, index) => {
              const radius = 40;
              const color =
                item.score > 80 ? "green" : item.score > 50 ? "orange" : "red";
              const backgroundColor =
                item.score > 80
                  ? "#d4edda"
                  : item.score > 50
                  ? "#fff3cd"
                  : "#f8d7da";
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (item.score / 100) * circumference;
              return (
                <div
                  key={index}
                  className="circular-progress"
                  style={{ textAlign: "center" }}
                >
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius} // Slightly larger than the main circle radius
                      fill={backgroundColor} // Light background color
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#fde8e8"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke={color}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Percentage Text */}
                    <text
                      x="50"
                      y="55"
                      textAnchor="middle"
                      fontSize="15"
                      fill={color}
                    >
                      {item.score}%
                    </text>
                  </svg>
                  <p
                    style={{
                      marginTop: "10px",
                      color: "#000",
                      fontSize: "1.4rem",
                    }}
                    className=" text-2xl"
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default WizardResult;
