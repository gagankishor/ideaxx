// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./WizardResult.css";
// import { FaArrowAltCircleRight, FaRobot } from "react-icons/fa";
// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// Chart.register(ArcElement, Tooltip, Legend);

// const WizardResult = () => {
//   const [aiContent, setAiContent] = useState(""); // Final content to be typed
//   const [displayedText, setDisplayedText] = useState(""); // Typing effect text
//   const [loading, setLoading] = useState(true);
//   const [isTypingComplete, setIsTypingComplete] = useState(false); // To prevent re-typing

//   const fullAiContent = `
//    Every remarkable success starts with a simple idea, and your '"Please provide a detailed and concise description of your idea."' holds great potential. It's time to start planning and working on it. Don't worry; we're here to guide you through each step of building your idea. Get excited, because you never know where your idea might take you!

//    Also Balancing a job and an idea can be tough. Try dedicating specific time slots, even short ones, for your idea each day. Look for ways to streamline tasks, collaborate, and seek support when needed. Small, consistent efforts add up over time. This is what we will help you with.

//    Anyway With a budget between 1,00,000 ₹ - 10,00,000 ₹, starting small is a wise approach. Embrace lean strategies, focusing on essential aspects, and explore cost-effective methods to bring your idea to life. Leverage creativity, make gradual investments, and utilize available resources to kick-start your idea. You're in the perfect place for this, as we offer no-cost steps and tools, saving you a lot of time and money required to bring your idea to reality.

//    We support you for Selecting 'Services' offers a wide landscape with ample room for innovation. This vast sector welcomes a multitude of new ideas, making it an excellent choice for your business endeavors.

//    And because Your current job aligning with your idea is a real advantage. Your existing expertise in this field sets a strong foundation for your new venture.

//    Overall Establishing your business in one of the top 10 economies in the world offers numerous advantages. It provides access to a robust infrastructure, a large consumer base, sophisticated technology, and a well-established market. Moreover, it often ensures better government support, stable regulations, access to skilled labor, and increased opportunities for growth and expansion, ultimately fostering a conducive environment for your business success.
//   `;

//   useEffect(() => {
//     // Simulate loading delay before starting the typing effect
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Simulate AI "thinking" for 2 seconds
//   }, []);

//   useEffect(() => {
//     if (!loading && aiContent === "") {
//       setAiContent(fullAiContent); // Once "AI" is ready, set the content to be typed
//     }
//   }, [loading]);

//   useEffect(() => {
//     let currentIndex = 0;

//     if (aiContent && !isTypingComplete) {
//       const typingInterval = setInterval(() => {
//         setDisplayedText((prevText) => prevText + aiContent[currentIndex]);
//         currentIndex++;

//         if (currentIndex >= aiContent.length) {
//           clearInterval(typingInterval); // Stop typing once all characters are displayed
//           setIsTypingComplete(true); // Mark typing as complete
//         }
//       }, 20); // Typing speed in milliseconds

//       return () => clearInterval(typingInterval); // Clean up
//     }
//   }, [aiContent, isTypingComplete]);
//   const data = {
//     labels: ["Score", "Remaining"],
//     datasets: [
//       {
//         data: [80, 20], // 80% score, 20% remaining
//         backgroundColor: ["#4caf50", "#e0e0e0"], // Green for score, gray for remaining
//         hoverBackgroundColor: ["#4caf50", "#e0e0e0"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     cutout: "70%", // Makes it a ring
//     responsive: true,
//     plugins: {
//       tooltip: {
//         enabled: false, // Hides tooltips since it's a simple static score
//       },
//       legend: {
//         display: false, // Hide legend for simplicity
//       },
//     },
//   };

//   return (
//     <>
//       <div className="business-check-container">
//         <h2>Overview of the Business Idea Check</h2>

//         {/* Business Overview Section */}
//         <div className="business-overview">
//           <div className="overview-left">
//             <div className="overview-item" style={{ marginTop: "50px" }}>
//               <p>Market Potential</p>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "85%" }}></div>
//               </div>
//               <span>85%</span>
//             </div>

//             <div className="overview-item">
//               <p>Unique Value Proposition</p>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "90%" }}></div>
//               </div>
//               <span>90%</span>
//             </div>

//             <div className="overview-item">
//               <p>Revenue Model</p>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "75%" }}></div>
//               </div>
//               <span>75%</span>
//             </div>

//             <div className="overview-item">
//               <p>Competitive Landscape</p>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "70%" }}></div>
//               </div>
//               <span>70%</span>
//             </div>

//             <div className="overview-item">
//               <p>Scalability</p>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "65%" }}></div>
//               </div>
//               <span>65%</span>
//             </div>

//             <div className="overview-item">
//               <p>Team & Resources</p>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: "78%" }}></div>
//               </div>
//               <span>78%</span>
//             </div>
//           </div>

//           <div className="overview-right">
//             <div className="business-score-circle">
//               <Doughnut data={data} options={options} />
//               <div className="doughnut-center">
//                 <p className="circle-text">80%</p>
//                 <p>Business Idea Score</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className="business-additional-info">
//           <div className="info-item" >
//             <strong>Target Market Size</strong>
//             <span>500,000+ potential users</span>
//           </div>
//           <div className="info-item">
//             <strong>Estimated Budget</strong>
//             <span>$50,000 - $100,000</span>
//           </div>
//           <div className="info-item">
//             <strong>Time to Market</strong>
//             <span>6 months</span>
//           </div>
//           <div className="info-item">
//             <strong>Expected ROI</strong>
//             <span>12 months</span>
//           </div>
//           <div className="info-item">
//             <strong>Partnerships</strong>
//             <span>3 major partnerships</span>
//           </div>
//         </div>

//         {/* Business Improvements */}
//         <div className="business-improvements">
//           <h3>Task list of Business Idea Improvements</h3>
//           <ul>
//             <li className="important">
//               <span>
//                 <input type="checkbox" style={{ marginRight: "5px" }} /> Clarify
//                 the Unique Value Proposition (UVP).
//               </span> <span className="" style={{color:'orange'}}>Important!</span>
//             </li>
//             <li>
//               <span>
//                 <input type="checkbox" style={{ marginRight: "5px" }} />
//                 Improve the scalability of the business model.
//               </span><span>Tip!</span>
//             </li>
//             <li>
//               <span>
//                 <input type="checkbox" style={{ marginRight: "5px" }} />
//                  Analyze the competitive landscape further.
//               </span><span>Tip!</span>
//             </li>
//             <li>
//               <span>
//                 <input type="checkbox" style={{ marginRight: "5px" }} />
//                 Identify additional potential partnerships.
//               </span>{" "}
//               <span>Tip!</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="ai-generated-content">
//         <h3>
//           Your Idea Overview{" "}
//           <FaRobot size={28} style={{ color: "var(--main-color)" }} />
//         </h3>
//         {loading ? (
//           <p>Loading AI-generated insights...</p>
//         ) : (
//           <p>{displayedText}</p>
//         )}
//       </div>
//     </>
//   );
// };
// export default WizardResult;

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./WizardResult.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
const WizardResult = () => {
  const location = useLocation();
  const { data } = location.state || {};
  // Function to format the received text
  const formatText = (text) => {
    if (!text) return "";
    return text;
  };
  const paragraphs = formatText(data).split("\n\n");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    if (currentParagraphIndex < paragraphs.length) {
      let i = 0;
      const paragraph = paragraphs[currentParagraphIndex];
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + paragraph.charAt(i));
        i++;
        if (i === paragraph.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplayedText((prev) => prev + "\n\n");
            setCurrentParagraphIndex(currentParagraphIndex + 1);
          }, 100);
        }
      }, 10);

      return () => clearInterval(typingInterval);
    }
  }, [currentParagraphIndex]);
  return (
    <>
      <div
        className="wizard-result-container"
        style={{ minHeight: "calc(100vh - 124px)" }}
      >
        <div
          className="percentage-bar-container"
          style={{
            marginBottom: "20px",
            width: "100%",
            height: "20px",
            backgroundColor: "#eee",
            borderRadius: "10px",
          }}
        >
         
        </div>
        <h1>Here is your business plan overview</h1>
        <div
          className="typed-text"
          dangerouslySetInnerHTML={{ __html: displayedText }}
        />
        <div className="btns-container">
          <Link className="btn" to="/plan-details" style={{ margin: "auto" }}>
            Our Plans <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WizardResult;
