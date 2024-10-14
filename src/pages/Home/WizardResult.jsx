import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import { FaArrowAltCircleRight, FaRobot } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SpeedTestGauge from "./components/wizard/NivoSpeedomeetr";
Chart.register(ArcElement, Tooltip, Legend);

const WizardResult = () => {
  const [aiContent, setAiContent] = useState(""); // Final content to be typed
  const [displayedText, setDisplayedText] = useState(""); // Typing effect text
  const [loading, setLoading] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // To prevent re-typing
  const location = useLocation();
  const { data } = location.state || {};

  const parseJSON = (jsonString) => {
    try {
      let cleanedString = jsonString
        .replace(/\n/g, "")
        .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
        .replace(/\\"/g, '"') // Unescape quotes
        .replace(/\+-/g, "");
      return JSON.parse(cleanedString);
    } catch (error) {
      return jsonString;
    }
  };

  const uniqueValueProposition = parseJSON(data?.UniqueValuePropositionData);
  const TeamAndResourcesData = parseJSON(data?.TeamAndResourcesData);
  const RevenueModelData = parseJSON(data?.RevenueModelData);
  const CompetitiveLandscapeData = parseJSON(data?.CompetitiveLandscapeData);
  const TimeToMarketData = parseJSON(data?.TimeToMarketData);

  // console.log(uniqueValueProposition);
  // console.log(TeamAndResourcesData);
  // console.log(CompetitiveLandscapeData);
  // console.log(RevenueModelData);
  // console.log(TimeToMarketData);

  const fullAiContent = `
  ${data.resultText} 
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

        if (currentIndex >= aiContent.length) {
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
        backgroundColor: ["#4caf50", "#e0e0e0"],
        hoverBackgroundColor: ["#4caf50", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // Makes it a ring
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
            {/* Market Potential */}
            <div
              className="overview-item"
              style={{ marginTop: "50px", position: "relative" }}
            >
              <p style={{ display: "inline-block", marginRight: "5px" }}>
                Market Potential{" "}
                <div className="tooltip">
                  ?
                  <span className="tooltip-text">
                    This is the description of Market Potential. It shows the
                    potential of the market to grow.
                  </span>
                </div>
              </p>

              {/* Tooltip Container */}

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${data?.marketPotential}%` }}
                ></div>
              </div>
              <span>{data?.marketPotential} %</span>
            </div>

            {/* Unique Value Proposition */}
            <div className="overview-item">
              <p>
                Unique Value Proposition{" "}
                <div className="tooltip">
                  ?
                  <span className="tooltip-text">
                    This is the description of Market Potential. It shows the
                    potential of the market to grow.
                  </span>
                </div>
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: uniqueValueProposition?.finalScore }}
                ></div>
              </div>
              <span>{uniqueValueProposition?.finalScore}</span>
            </div>

            {/* Revenue Model */}
            <div className="overview-item">
              <p>
                Revenue Model
                <div className="tooltip">
                  ?
                  <span className="tooltip-text">
                    This is the description of Market Potential. It shows the
                    potential of the market to grow.
                  </span>
                </div>
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: RevenueModelData?.finalScore }}
                ></div>
              </div>
              <span>{RevenueModelData?.finalScore}</span>
            </div>

            {/* Competitive Landscape */}
            <div className="overview-item">
              <p>
                Competitive Landscape<div className="tooltip">
                  ?
                  <span className="tooltip-text">
                    This is the description of Market Potential. It shows the
                    potential of the market to grow.
                  </span>
                </div>
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: CompetitiveLandscapeData?.finalScore }}
                ></div>
              </div>
              <span>{CompetitiveLandscapeData?.finalScore}</span>
            </div>

            {/* Team & Resources */}
            <div className="overview-item">
              <p>
                Team & Resources<div className="tooltip">?<span className="tooltip-text">
                    This is the description of Market Potential. It shows the
                    potential of the market to grow.
                  </span>
                </div>
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${TeamAndResourcesData}%` }}
                ></div>
              </div>
              <span>{TeamAndResourcesData}%</span>
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
            <span>{data?.InvestmentLevelData}</span>
          </div>
          <div className="info-item">
            <strong>Time to Market</strong>
            <span> {TimeToMarketData ? TimeToMarketData.totalTTM : "0"} </span>
          </div>
          <div className="info-item">
            <strong>Expected ROI</strong>
            <span>{data?.ExpectedROIData?.split(":")[1]?.trim() || ""}</span>
          </div>
          <div className="info-item">
            <strong>Market Share</strong>
            <span>{data?.MarketShareData}</span>
          </div>
        </div>
      </div>
      <div className="business-check-container">
        <div className="ai-generated-content">
          <h3>
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
                <input type="checkbox" /> Clarify the Unique Value Proposition
                (UVP).
              </span>
              <span style={{ color: "orange" }}>Important!</span>
            </li>
            <li>
              <span>
                <input type="checkbox" /> Improve the scalability of the
                business model.
              </span>
              <span>Tip!</span>
            </li>
            <li>
              <span>
                <input type="checkbox" /> Analyze the competitive landscape
                further.
              </span>
              <span>Tip!</span>
            </li>
            <li>
              <span>
                <input type="checkbox" /> Identify additional potential
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
