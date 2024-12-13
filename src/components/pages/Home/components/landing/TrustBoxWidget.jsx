import { useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

const TrustBoxWidget = () => {
  // const [reviews, setReviews] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     review: "Great service and excellent support!",
  //     rating: 5,
  //     date: "Dec 1, 2024",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     review: "Amazing experience! Highly recommend.",
  //     rating: 4,
  //     date: "Nov 28, 2024",
  //   },
  //   {
  //     id: 3,
  //     name: "Emily Johnson",
  //     review: "Good quality, but delivery was delayed.",
  //     rating: 3,
  //     date: "Nov 20, 2024",
  //   },
  // ]);
  // const [reviewCount, setReviewCount] = useState(0);
  // const reviews = ;

  useEffect(() => {
    // Dynamically load the Trustpilot script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // useEffect(() => {
  //   // Fetch reviews from Trustpilot API
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.trustpilot.com/v1/business-units/6758a7a09ddbaeac9eae7c5a/reviews",
  //         {
  //           headers: {
  //             Authorization: `Bearer YOUR_API_KEY`,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setReviews(data.reviews || []);
  //       setReviewCount(data.numberOfReviews || 0);
  //     } catch (error) {
  //       console.error("Error fetching Trustpilot reviews:", error);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  return (
    <div>
      {/* End TrustBox widget */}

      {/* Display review count */}

      <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md max-w-xs bg-white mx-auto">
        {/* Trustpilot Header */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0l3.09 7.26H24L15.545 11.79 18.635 24 12 17.89 5.365 24l3.09-12.21L0 7.26h8.91z" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">Trustpilot</h3>
        </div>

        {/* Star Ratings */}
        <div className="flex items-center space-x-1 mt-2">
          <FaStar className="text-green-500 w-5 h-5" />
          <FaStar className="text-green-500 w-5 h-5" />
          <FaStar className="text-green-500 w-5 h-5" />
          <FaStar className="text-green-500 w-5 h-5" />
          <FaStarHalfAlt className="text-green-500 w-5 h-5" />
        </div>

        {/* TrustScore and Reviews */}
        <div className="text-sm text-gray-600 mt-2">
          <span className="font-bold text-gray-800">TrustScore 4.7</span> |{" "}
          <span className="font-bold text-gray-800">36,106 reviews</span>
        </div>
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="6758a7a09ddbaeac9eae7c5a"
          data-style-height="52px"
          data-style-width="100%"
        >
          <a
            href="https://www.trustpilot.com/review/idxsolana.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
};
export default TrustBoxWidget;
