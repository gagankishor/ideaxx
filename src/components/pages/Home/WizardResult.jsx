"use client"
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
  console.log("_______________",data)
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
    if (score <= 50) return 'linear-gradient(to right, #FE0000, #FE0000)';
    if (score <= 52) return 'linear-gradient(to right, #FE0000, #FF8E11)';
    if (score <= 54) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 56) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 58) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 60) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 62) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 64) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 66) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 68) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C)';
    if (score <= 70) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 72) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 74) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 76) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 78) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 80) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 82) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 84) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 86) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 88) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D)';
    if (score <= 90) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
    if (score <= 92) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
    if (score <= 94) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
    if (score <= 96) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
    if (score <= 98) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
    if (score <= 100) return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
    return 'linear-gradient(to right, #FE0000, #FF8E11, #FFC21C, #01CC3D, #1CC7FF)';
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

        if (currentIndex >= aiContent.length-1) {
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
        backgroundColor: [`${getBarColor2(parseFloat(data?.success_percentage))}`, "#e0e0e0"],
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
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="business-check-container">
        <h2>Overview of the Business Idea Check</h2>

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
                <PiQuestion size={20} />

                <span className="tooltip-text">
                  Total demand for a product or service within a target market,
                  indicating growth opportunities and revenue potential.
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
                <PiQuestion size={20} />

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
                <PiQuestion size={20} />
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
                <PiQuestion size={20} />
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
                  style={{ width: `${TeamAndResourcesData}%`,background: getBarColor(
                    parseFloat(
                      TeamAndResourcesData
                    ) || 0
                  ), }}
                ></div>
              </div>
              <span>{TeamAndResourcesData}%</span>
              <div className="tooltip" style={{ color: "gray" }}>
                <PiQuestion size={20} />
                <span className="tooltip-text">
                  Key personnel and assets required for successful execution,
                  essential for achieving business goals and long-term growth.
                </span>
              </div>
            </div>
          </div>
          <div className="overview-right">
                        
            <div className="business-score-circle">
              <Doughnut data={bardata} options={options} />
              <div className="doughnut-center">
                <p className="circle-text">{data?.success_percentage}%</p>
                <p>Idea Score</p>
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
            <span> {TimeToMarketData ? TimeToMarketData?.totalTTM : "0"} </span>
          </div>
          <div className="info-item">
            <strong>Expected ROI</strong>
            <span>{`${ExpectedROIData?.expectedROI} for ${ExpectedROIData?.timeFrame}`  || `${data?.ExpectedROIData}`}</span>
          </div>
          <div className="info-item">
            <strong>Market Share</strong>
            <span>{MarketShareData?.chosenOutcome ||MarketShareData }</span>
          </div>
        </div>
      </div>
      <div className="business-check-container">
        <div className="ai-generated-content">
          <h3 style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"10px"}}>
            Your Idea Overview{" "}
            <FaRobot size={28} style={{ color: "var(--main-color)" }} />
          </h3>
          {loading ? (
            <p>Loading AI-generated insights...</p>
          ) : (
            <p>{displayedText}</p>
          )}
        </div>
      </div>
      <div className="business-check-container">
        <div className="business-improvements">
          <h3>How you can improve your idea</h3>
          <ul>
            <li className="important">
              <span>
                {/* <input type="checkbox" /> */}
                 Clarify the Unique Value Proposition
                (UVP).
              </span>
              <span style={{ color: "orange" }}>Important!</span>
            </li>
            <li>
              <span>
                {/* <input type="checkbox" /> */}
                 Improve the scalability of the
                business model.
              </span>
              <span>Tip!</span>
            </li>
            <li>
              <span>
                {/* <input type="checkbox" /> */}
                 Analyze the competitive landscape
                further.
              </span>
              <span>Tip!</span>
            </li>
            <li>
              <span>
                {/* <input type="checkbox" /> */}
                 Identify additional potential
                partnerships.
              </span>
              <span>Tip!</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default WizardResult;
