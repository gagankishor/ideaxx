"use client"; // Ensure the component runs on the client side
import ArticleCard from "@/components/blogs/ArticleCard";
import { useEffect, useState } from "react";
const articles = [
  {
    title:
      "Unlock Integrity in Every Task with One Core Platform, Powered by AI In a world that ...",
    category: "Integrity",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c", // Unsplash image
    hrefUrl: "blog/2",
  },
  {
    title:
      "One Core Platform, Powered by AI, for All Your Work in Innovation, Unlock the future of ...",
    category: "Innovation",
    imageUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df", // Unsplash image
    hrefUrl: "blog/3",
  },
  {
    title: "How to create a powerful landing page in 8 easy steps",
    category: "Marketing Insights",
    imageUrl: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
  },
  {
    title: "What is web design? A comprehensive guide",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
  },
  {
    title: "18 outstanding website examples that will inspire you",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "How to design a website with AI in 2024",
    category: "AI Knowledge Hub",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];
const editorsPick = [
  {
    title: "Mastering Data Analysis: A Guide for Beginners",
    category: "Data Science",
    imageUrl: "https://images.unsplash.com/photo-1518085250887-2f903c200fee",
  },
  {
    title: "Top Tools for Data Visualization in 2024",
    category: "Data Science",
    imageUrl: "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c", // Data visualization image
  },
  {
    title: "The Role of AI in Data Science: What You Need to Know",
    category: "AI & Data Science",
    imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93", // AI and data science image
  },
];
const businessStrategies = [
  {
    title: "5 Proven Strategies for Scaling Your Startup",
    category: "Business Strategies",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", // Startup scaling image
  },
  {
    title: "How to Create a Business Plan That Attracts Investors",
    category: "Business Strategies",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", // Business planning image
  },
  {
    title: "Top Marketing Tactics to Boost Your Brand’s Visibility",
    category: "Business Strategies",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", // Marketing strategy image
  },
];

const websiteEssentials = [
  {
    title: "The Ultimate Guide to Building a Personal Portfolio Website",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1518085250887-2f903c200fee", // Portfolio website image
  },
  {
    title: "10 Tips for Optimizing Website Performance",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312", // Website performance optimization image
  },
  {
    title: "Essential SEO Techniques to Improve Your Site’s Ranking",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", // SEO techniques image
  },
];
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blogs");
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Fallback to empty
      });
  }, []);
  return (
    <div className=" max-w-full bg-gray-50 ">
      <div className="bg-gray-50 pt-10 md:min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl items-center">
          {/* Left Section */}
          {blogs.length > 0 ? (
            <div>
              <p className="text-sm text-left font-light uppercase mb-2">
                {/* {blogs[1]?.category || "Category"} */}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blogs[1]?.title || "Default Title"}
              </h1>
              <p className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl text-left mb-6">
                {blogs[1]?.para || "Default description text."}
              </p>
              <a
                href="/blog/1"
                className="font-semibold hover:underline leading-9 flex items-center underline"
              >
                Read more <span className="ml-2 text-xl">&rarr;</span>
              </a>
            </div>
          ) : (
            <p>Loading blogs...</p>
          )}

          {/* Right Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d" // Replace with your actual image path
              alt="AI Knowledge Hub"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className=" bg-black max-w-full mx-5 md:mx-20 h-[1px]"></div>
      <div className="bg-gray-50 mx-5 md:mx-20 py-12">
        <div className="max-w-full  mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Top Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                category={article.category}
                imageUrl={article.imageUrl}
                hrefUrl={article?.hrefUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white min-h-screen py-24 flex items-center justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  items-center">
          {/* Left Section (Image) */}
          <div className="">
            <img
              src="https://static.wixstatic.com/media/a77aa0_ecf711f8f32f441fbeeab5c2af48a580~mv2.png/v1/fill/w_550,h_608,al_c,q_85,enc_auto/a77aa0_ecf711f8f32f441fbeeab5c2af48a580~mv2.png" // Replace with your actual image path
              alt="AI Knowledge Hub"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section (Text) */}
          <div className="px-12 flex flex-col justify-center ">
            <p className="uppercase   text-gray-50 font-thin text-xl mt-10 md:mt-0 mb-5">
              AI Knowledge Hub
            </p>
            <h1 className="text-3xl lg:text-3xl text-center  font-normal mb-4">
              Your always up-to-date guide to Wix’s AI tools
            </h1>
            <p className="text-lg text-white text-center mb-6">
              View the full menu of Wix’s AI tools for web design, site
              creation, marketing, and more.
            </p>
            <button className="inline-flex mx-auto items-center px-6 py-3 border border-white text-white rounded-full  hover:bg-white hover:text-black transition">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-black max-w-full mt-20 mx-5 md:mx-20 h-[1px]"></div>
      <div className="bg-gray-50 mx-5 md:mx-20 py-12">
        <div className="max-w-full  mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Editor&lsquo;s Pick
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
            {editorsPick.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                category={article.category}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#262CBE] py-20 md:py-48">
        <div className=" flex justify-center flex-col  items-center">
          <h3 className="text-white text-4xl md:text-7xl md:w-[50%]">
            Create a website that can do it all
          </h3>
          <button className="inline-flex font-medium mt-10 bg-white mx-auto items-center px-6 py-3 border border-white text-[#262CBE] rounded-full  hover:bg-white hover:text-black transition">
            Start Now
          </button>
        </div>
      </div>
      <div className=" bg-black max-w-full mt-20 mx-5 md:mx-20 h-[1px]"></div>
      <div className="bg-gray-50 mx-5 md:mx-20 py-12">
        <div className="max-w-full  mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Business Strategies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
            {businessStrategies.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                category={article.category}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-black max-w-full  mx-5 md:mx-20 h-[1px]"></div>
      <div className="bg-gray-50 mx-5 md:mx-20 py-12">
        <div className="max-w-full  mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Website Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
            {websiteEssentials.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                category={article.category}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
