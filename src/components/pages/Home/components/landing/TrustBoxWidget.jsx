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
    <div className=" flex flex-row justify-between">
      <div>
        <a
          href="https://www.trustpilot.com/review/idxsolana.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
            alt="trustpilot logo"
            className=" w-40"
          />
        </a>
        <div>
          <h3 className=" text-left text-white">Excellent</h3>
          <div><img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" /></div>
          <div>
            <p className=" text-left text-white">TrustScore 4.5 | 1204 reviews </p>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://solscan.io/token/BKzTtgn5th95fAF6m6XcDq211kzaUqwCnsqtWrE2gFWX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/2425083/7e2bad3748d02a0a138d5d99e41e30cf_e6f761f96626d2de01e5c3d68481b670.jpg?width=564"
            className=" w-40"
          />
          <p className=" text-white">SOLSCAN</p>
        </a>
        {/* <div>
          <h3 className=" text-left text-white">Excellent</h3>
          <div><img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" /></div>
          <div>
            <p className=" text-left text-white">TrustScore 4.5 | 1204 reviews </p>
          </div>
        </div> */}
      </div>
      <div>
        <a
          href="https://www.geckoterminal.com/solana/pools/6CQSpRdGtNWEbLhKpx7DAw7FDAm3g7wvjtsvaTKWBwxo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://play-lh.googleusercontent.com/umqXwUBwJ4CrLTHUuHh-1gks_IimHTYbM1h5-9__jZa3euhkC-9IlLtM6GW3-j88Oh-J"
            alt="trustpilot logo"
            className=" w-40"
          />
          <p className=" text-white">gecko terminal</p>
        </a>
        {/* <div>
          <h3 className=" text-left text-white">Excellent</h3>
          <div><img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" /></div>
          <div>
            <p className=" text-left text-white">TrustScore 4.5 | 1204 reviews </p>
          </div>
        </div> */}
      </div>
      <div>
        <a
          href="https://www.trustpilot.com/review/idxsolana.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.seeklogo.com/logo-png/52/1/dex-screener-logo-png_seeklogo-527276.png?v=638686514610000000"
            alt="trustpilot logo"
            className=" w-40"
          />
          <p className=" text-white">DEX SCREENER</p>
        </a>
        {/* <div>
          <h3 className=" text-left text-white">Excellent</h3>
          <div><img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="" /></div>
          <div>
            <p className=" text-left text-white">TrustScore 4.5 | 1204 reviews </p>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};
export default TrustBoxWidget;