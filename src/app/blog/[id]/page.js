"use client"; // Ensure the component runs on the client side
import ArticleCard from "@/components/blogs/ArticleCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { RestAPI } from "@/config/Api";
import { FaEye, FaThumbsUp } from "react-icons/fa";

const websiteEssentials = [
  {
    title: "The Mindset of a Successful Entrepreneur ...",
    category: "Entrepreneurship",
    imageUrl: "/blog/3/image3.webp",
    hrefUrl: "/blog/1",
  },
  {
    title: "Top Business Trends to Watch in 2024 ...",
    category: "Business Trends",
    imageUrl: "/blog/2/image3.webp",
    hrefUrl: "/blog/2",
  },
  {
    title: "How AI is Shaping the Future of Entrepreneurship",
    category: "Entrepreneurship",
    imageUrl: "/blog/4/image3.webp",
    hrefUrl: "/blog/3",
  },
];

const BlogDetails = () => {
  const params = useParams();
  const blogId = params?.id;

  const [blog, setBlog] = useState(null);
  const [blogData, setBlogData] = useState({
    views: 0,
    likes: 0,
    reviews: [],
  });
  // const [review, setReview] = useState("");
  // const [showReviews, setShowReviews] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  // const [showAddReview, setShowAddReview] = useState(false);

  // Fetch blog content from static data
  useEffect(() => {
    if (!blogId) return;
    const fetchBlog = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        setBlog(data[blogId]);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };
    fetchBlog();
  }, [blogId]);

  // Fetch blog data and increment views
  useEffect(() => {
    if (!blogId) return;
    const fetchBlogData = async () => {
      try {
        const { data } = await axios.post(`${RestAPI}/view/${blogId}`);
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogData();
  }, [blogId]);

  // Handle like button click
  const handleLike = async () => {
    try {
      setIsLiked(true);
      const { data } = await axios.post(`${RestAPI}/like/${blogId}`);
      setBlogData(data);
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  // Handle review submission
  // const handleReviewSubmit = async () => {
  //   try {
  //     const { data } = await axios.post(`${RestAPI}/review/${blogId}`, {
  //       user: "Anonymous",
  //       comment: review,
  //     });
  //     setBlogData(data);
  //     setReview(""); // Clear input
  //   } catch (error) {
  //     console.error("Error submitting the review:", error);
  //   }
  // };

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold mb-4">Blog Details</h1>
  <p className="text-gray-700 mb-2">Views: {blogData.views}</p>
  <p className="text-gray-700 mb-4">Likes: {blogData.likes}</p>
  <button
    onClick={handleLike}
    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
  >
    Like
  </button>
  <div className="mt-6">
    <button
      onClick={() => setShowReviews((prev) => !prev)}
      className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
    >
      {showReviews ? "Hide Reviews" : "View Reviews"}
    </button>

    {showReviews && (
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-3">Reviews</h2>
        <ul className="space-y-2">
          {blogData.reviews.length > 0 ? (
            blogData.reviews.map((r, index) => (
              <li key={index} className="border-b pb-2">
                <p className="text-gray-800 font-medium">{r.user}</p>
                <p className="text-gray-600">{r.comment}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </ul>
      </div>
    )}
  </div>
  <div className="mt-6">
    <button
      onClick={() => setShowAddReview((prev) => !prev)}
      className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200"
    >
      {showAddReview ? "Cancel" : "Add Review"}
    </button>
    {showAddReview && (
      <div className="mt-4">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Leave a review"
          className="w-full p-2 border rounded-md mb-2"
        />
        <button
          onClick={handleReviewSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>
    )}
  </div>
</div> */}

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-row justify-between items-center gap-10">
            <p className="text-sm text-left text-gray-600 flex-1">
              {blog.heading}
            </p>
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-sm">{blogData.views}</span>
                <FaEye />
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <span className="text-sm">{blogData.likes}</span>
                <button
                  onClick={!isLiked ? handleLike : null}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors  ${
                    isLiked
                      ? "text-blue-600 cursor-not-allowed"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                  disabled={isLiked}
                  aria-label={
                    isLiked ? "You already liked this post" : "Like this post"
                  }
                >
                  <FaThumbsUp />
                  {/* <span className="text-sm">{isLiked ? "Liked" : "Like"}</span> */}
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          {blog.imageUrl && (
            <img src={blog.imageUrl} alt={blog.title} className="rounded-md" />
          )}
          {blog.para && (
            <p className="text-gray-700 text-left mt-4">{blog.para}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {blog.content.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {section.header && (
                <p className="text-gray-700 text-left font-semibold text-lg">
                  {section.header}
                </p>
              )}
              {section.image && (
                <img
                  src={section.image}
                  alt={`Section ${sectionIndex + 1}`}
                  className="rounded-md w-full max-w-xl"
                />
              )}
              {section.text && (
                <p className="text-gray-700 text-left">{section.text}</p>
              )}
              {section.subContent?.map((feature, featureIndex) => (
                <div key={featureIndex} className="space-y-4">
                  {feature.header && (
                    <p className="text-gray-700 text-left font-semibold">
                      {feature.header}
                    </p>
                  )}
                  {feature.image && (
                    <img
                      src={feature.image}
                      alt={`Feature ${featureIndex + 1}`}
                      className="rounded-md max-w-xl"
                    />
                  )}
                  {feature.text && (
                    <p className="text-gray-700 text-left">{feature.text}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="bg-gray-50 mx-5 md:mx-20 py-12">
          <div className="max-w-full mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
              {websiteEssentials.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  category={article.category}
                  imageUrl={article.imageUrl}
                  hrefUrl={article.hrefUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
