import { useEffect } from "react";
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
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
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
      {/* TrustBox widget - Review Collector */}
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
      {/* End TrustBox widget */}

      {/* Display review count */}
      
     
    </div>
  );
};
export default TrustBoxWidget;