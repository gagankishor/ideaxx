import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import { FaArrowAltCircleRight, FaRobot } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
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
      .replace(/\n/g, '')  // Remove all newline characters
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
      .replace(/\\"/g, '"')  // Unescape quotes
      .replace(/\+-/g, ''); 
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
  
  console.log(uniqueValueProposition);
  console.log(TeamAndResourcesData);
  console.log(CompetitiveLandscapeData);
  console.log(RevenueModelData);
  console.log(TimeToMarketData);
  
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
        data: [data.success_percentage, 100 - data.success_percentage],
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
            <div className="overview-item" style={{ marginTop: "50px" }}>
              <p>Market Potential</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: data?.marketPotential }}></div>
              </div>
              <span>{data?.marketPotential}</span>
            </div>
            <div className="overview-item">
              <p>Unique Value Proposition</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: uniqueValueProposition?.finalScore }}></div>
              </div>
              <span>{uniqueValueProposition?.finalScore}</span>
            </div>

            <div className="overview-item">
              <p>Revenue Model</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: RevenueModelData?.finalScore }}></div>
              </div>
              <span>{RevenueModelData.finalScore}</span>
            </div>
            <div className="overview-item">
              <p>Competitive Landscape</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: CompetitiveLandscapeData?.finalScore }}></div>
              </div>
              <span>{CompetitiveLandscapeData.finalScore}</span>
            </div>
            <div className="overview-item">
              <p>Team & Resources</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: TeamAndResourcesData?.finalScore }}></div>
              </div>
              <span>{TeamAndResourcesData?.finalScore}</span>
            </div>
          </div>
          <div className="overview-right">
            <div className="business-score-circle">
              <Doughnut data={bardata} options={options} />
              <div className="doughnut-center">
                <p className="circle-text">{data.success_percentage}%</p>
                <p>Business Idea Score</p>
              </div>
            </div>
          </div>
        </div>
        <div className="business-additional-info">
          <div className="info-item" >
            <strong>Target Market Size</strong>
            <span>{data?.totalMarketSize} potential users</span>
          </div>
          <div className="info-item">
            <strong>Estimated Budget</strong>
            <span>$50,000 - $100,000</span>
          </div>
          <div className="info-item">
            <strong>Time to Market</strong>
            <span> {TimeToMarketData ?TimeToMarketData?.match(/\d+/):'0'} Month</span>
          </div>
          <div className="info-item">
            <strong>Expected ROI</strong>
            <span>12 months</span>
          </div>
          <div className="info-item">
            <strong>Partnerships</strong>
            <span>3 major partnerships</span>
          </div>
        </div>
        <div className="business-improvements">
          <h3>Task list of Business Idea Improvements</h3>
          <ul>
            <li className="important">
              <span>
                <input type="checkbox" style={{ marginRight: "5px" }} /> Clarify
                the Unique Value Proposition (UVP).
              </span> <span className="" style={{color:'orange'}}>Important!</span>
            </li>
            <li>
              <span>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                Improve the scalability of the business model.
              </span><span>Tip!</span>
            </li>
            <li>
              <span>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                 Analyze the competitive landscape further.
              </span><span>Tip!</span>
            </li>
            <li>
              <span>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                Identify additional potential partnerships.
              </span>{" "}
              <span>Tip!</span>
            </li>
          </ul>
        </div>
      </div>
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
    </>
  );
};
export default WizardResult;