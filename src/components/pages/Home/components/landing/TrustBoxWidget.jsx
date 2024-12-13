import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TrustBoxWidget = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      review: "Great service and excellent support!",
      rating: 5,
      date: "Dec 1, 2024",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Amazing experience! Highly recommend.",
      rating: 4,
      date: "Nov 28, 2024",
    },
    {
      id: 3,
      name: "Emily Johnson",
      review: "Good quality, but delivery was delayed.",
      rating: 3,
      date: "Nov 20, 2024",
    },
  ]);
  const [reviewCount, setReviewCount] = useState(0);
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

  useEffect(() => {
    // Fetch reviews from Trustpilot API
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://api.trustpilot.com/v1/business-units/6758a7a09ddbaeac9eae7c5a/reviews",
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY`,
            },
          }
        );
        const data = await response.json();
        setReviews(data.reviews || []);
        setReviewCount(data.numberOfReviews || 0);
      } catch (error) {
        console.error("Error fetching Trustpilot reviews:", error);
      }
    };

    fetchReviews();
  }, []);
  
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
      <div>
        <h3>Total Reviews: {reviewCount}</h3>
      </div>

      {/* Display reviews */}
      <div>
        <h4>Latest Reviews:</h4>
        <ul>
          {reviews.slice(0, 5).map((review) => (
            <li key={review.id}>
              <p><strong>{review.title}</strong></p>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 py-8 px-4 sm:px-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Customer Reviews</h2>
      
      {/* Average Rating */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex space-x-1 text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-xl" />
          ))}
        </div>
        <span className="ml-2 text-lg text-gray-700">(4.8/5)</span>
      </div>
      {/* Reviews */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-3">
              <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700">
                {review.name[0]}
              </div>
              <div>
                <h3 className="font-medium">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="flex space-x-1 mb-2 text-yellow-500">
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} className="text-sm" />
              ))}
              {[...Array(5 - review.rating)].map((_, index) => (
                <FaStar key={index + review.rating} className="text-sm text-gray-300" />
              ))}
            </div>
            <p className="text-gray-700 text-sm">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default TrustBoxWidget;