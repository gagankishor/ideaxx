"use client";
// import { useLocation } from "next/link";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import { FaRobot } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { PiQuestion } from "react-icons/pi";
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
  const options = {
    cutout: "70%",
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };
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
  return (
    <div className="max-w-[1400px] m-auto ">
      
      <div className="flex flex-row gap-5 mt-5 border-gray-300 shadow-md   w-[94%] mx-auto ">
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
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="overview-right w-1/3 flex flex-col items-center justify-center p-5    transition-transform transform hover:scale-105 "
          >
            <div className="business-score-circle relative flex items-center justify-center bg-gradient-to-r from-main-highlight to-bg-second rounded-full p-2">
              <Doughnut data={item.data} options={options} />
              <div className="doughnut-center absolute flex flex-col items-center justify-center">
                <p className="circle-text font-semibold text-lg">
                  {item.score}%
                </p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <section
        id="idea"
        className="business-check-container m-10 flex flex-col-reverse lg:flex-row items-center justify-around p-5"
      >
        <div className=" w-[60%]">
          <div className="ai-generated-content">
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Your Idea Overview{" "}
              <FaRobot size={28} style={{ color: "var(--main-color)" }} />
            </h3>
            <div className="w-full pt-5 pb-5 flex justify-center items-center"></div>
            {loading ? (
              <p>Loading AI-generated insights...</p>
            ) : (
              <p>{displayedText}</p>
            )}
          </div>
        </div>
        <div className="overview-right">
          <div className="business-score-circle">
            <Doughnut data={bardata2} options={options} />
            <div className="doughnut-center">
              <p className="circle-text">{totalMarketScrore}%</p>
              <p>Idea Score</p>
            </div>
          </div>
        </div>
      </section>
      <section id="market" className="business-check-container m-10 flex flex-col-reverse lg:flex-row p-5">
        <div  className=" w-[60%]">
          <h2 className=" mb-0">Overview of Market Research for the Idea</h2>
          <p className=" text-left">
            Slight changes may occur in the results depending on market trends.
          </p>
          <div className="business-overview">
            <div className="overview-left">
              <div
                className="overview-item"
                style={{ marginTop: "50px", position: "relative" }}
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
        <div className="overview-right">
          <div className="business-score-circle">
            <Doughnut data={bardata} options={options} />
            <div className="doughnut-center">
              <p className="circle-text">{data?.success_percentage}%</p>
              <p>Market Score</p>
            </div>
          </div>
        </div>
      </section>
      <section id="ideax" className="business-check-container m-10 flex flex-col-reverse lg:flex-row p-5">
        <div className=" w-[60%]">
          <div className="business-improvements">
            <h3>How you can improve your idea</h3>
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
                  className={`p-4 border-b flex flex-col ${
                    item.label === "Important!" ? "bg-yellow-50" : "bg-gray-50"
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
                      } ml-4`}
                    >
                      {item.label}
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
        <div className="overview-right">
          <div className="business-score-circle">
            <Doughnut data={bardata3} options={options} />
            <div className="doughnut-center">
              <p className="circle-text">{totalMarketScrore2}%</p>
              <p>Score with Ideax</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WizardResult;
