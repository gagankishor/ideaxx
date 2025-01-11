"use client";
import ArticleCard from "@/components/blogs/ArticleCard";
import { useEffect, useState } from "react";
const articles = [
  {
    title:
      "The Mindset of a Successful Entrepreneur ...",
    category: "Entrepreneurship",
    imageUrl: "/blog/2/image.webp",
    hrefUrl: "/blog/the_mindset_of_a_successful_entrepreneur",
  },
  {
    title:
      "Top Business Trends to Watch in 2024 ...",
    category: "Business Trends",
    imageUrl: "/blog/3/image2.webp",
    hrefUrl: "/blog/top_business_trends_to_watch_in_2025",
  },
  {
    title: "How AI is Shaping the Future of Entrepreneurship",
    category: "Entrepreneurship",
    imageUrl: "/blog/4/image1.webp",
    hrefUrl: "/blog/how_AI_is_shaping_the_future_of_entrepreneurship",
  },
  {
    title: "The Rise of Online Businesses: Opportunities and Challenges",
    category: "Opportunities and Challenges",
    imageUrl: "/blog/5/image.webp",
    hrefUrl: "/blog/the_rise_of_online_businesses_opportunities_and_challenges",
  },
  // {
  //   title: "Transforming Businesses with Virtual Business Management",
  //   category: "Virtual Business Management",
  //   imageUrl: "/blog/image2.jpg", // Startup scaling image
  //   hrefUrl: "blog/6",
  // },
  {
    title: "Transforming Businesses with Virtual Business Management",
    category: "Virtual Business Management",
    imageUrl: "/blog/image2.jpg",
    hrefUrl: "/blog/transforming_businesses_with_virtual_business_management",
  },
];
const editorsPick = [
  {
    title: "IDX Token Price: Real-Time Updates...",
    category: "IDX Token ",
    imageUrl: "/blog/3/image3.webp",
    hrefUrl: "/blog/stay_updated_with_the_latest_IDX_token_price_movements",
  },
  {
    title: "How to Purchase IDX Token...",
    category: "IDX Tokens",
    imageUrl: "/blog/2/image3.webp",
    hrefUrl: "/blog/unlock_the_potential_of_blockchain_with_IDX_token",
  },
  {
    title: "Revolutionizing Business Management with Advanced Technology...",
    category: "Entrepreneurship",
    imageUrl: "/blog/4/image3.webp",
    hrefUrl: "/blog/unleashing_innovation_with_the_IDEAX_platform",
  },
];
const businessStrategies = [
  {
    title: "Enterprise Blockchain Solutions",
    category: "Blockchain",
    imageUrl: "/blog/image2.jpg",
    hrefUrl: "/blog/transforming_business_operations_with_advanced_blockchain_technology",
  },
  {
    title: "Redefining Speed and Security in Blockchain Transactions",
    category: "Solana IDX Token",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    hrefUrl: "/blog/redefining_speed_and_security_in_blockchain_transactions",

  },
  {
    title: "Powering Business Innovation on the Blockchain...",
    category: "IDX Cryptocurrency",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", 
    hrefUrl: "/blog/powering_business_innovation_on_the_blockchain",
  },
];
// const websiteEssentials = [
//   {
//     title: "The Ultimate Guide to Building a Personal Portfolio Website",
//     category: "Website Essentials",
//     imageUrl: "https://images.unsplash.com/photo-1518085250887-2f903c200fee", 
//   },
//   {
//     title: "10 Tips for Optimizing Website Performance",
//     category: "Website Essentials",
//     imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312", // Website performance optimization image
//   },
//   {
//     title: "Essential SEO Techniques to Improve Your Site’s Ranking",
//     category: "Website Essentials",
//     imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", // SEO techniques image
//   },
// ];
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className=" max-w-full bg-gray-50 ">
      <div className="bg-gray-50 pt-10 md:min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl items-center">
            <div>
              <p className="text-sm text-left font-light uppercase mb-2">
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blogs[1]?.title || "10 Questions to Ask Yourself Before Starting Your Business"}
              </h1>
              <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-left mb-6">
                {blogs[1]?.para || "Starting a business is one of the most rewarding yet challenging journeys you can embark on. It requires a mix of creativity, strategy, and determination. Whether you're a young entrepreneur with a big dream or someone exploring your first business idea, asking the right questions can make all the difference. Here’s a deeper dive into the ten essential questions to guide you as you lay the groundwork for your entrepreneurial success."}
              </p>
              <a
                href="/blog/before_starting_your_business"
                aria-label={blogs[1]?.title || "Questions to Ask Yourself Before"}
                className="font-semibold hover:underline leading-9 flex items-center underline"
              >
                Read more <span className="ml-2 text-xl">&rarr;</span>
              </a>
            </div>
          <div className="relative">
            <img
              src="/blog/1/image.png"
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
      <div className="bg-[#010407] text-white min-h-screen  flex items-center justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  items-center">
          <div className="">
            <img
              src="/blog/image.webp"
              alt="AI Knowledge Hub"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-12 flex flex-col justify-center ">
            <p className="uppercase   text-gray-50 font-thin text-xl mt-10 md:mt-0 mb-5">
             AI Business Idea Checker
            </p>
            <h1 className="text-3xl lg:text-3xl text-center  font-normal mb-4">
            Your ultimate assistant for evaluating and refining business ideas.
            </h1>
            <p className="text-lg text-white text-center mb-6">
            Discover the potential of your business concepts with AI-powered analysis, suggestions, and insights tailored to your needs.
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
          IDX Solana
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
            {editorsPick.map((article, index) => (
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
      <div className="bg-[#262CBE] py-20 md:py-48">
        <div className=" flex justify-center flex-col  items-center">
          <h3 className="text-white text-4xl md:text-7xl md:w-[50%]">
            Create a business plan and start now
          </h3>
          <button className="inline-flex  mt-10 bg-white mx-auto items-center px-6 py-3 border border-white text-[#262CBE] font-bold rounded-full  hover:bg-white hover:text-black transition">
            Test Your Idea
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
                hrefUrl={article?.hrefUrl}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className=" bg-black max-w-full  mx-5 md:mx-20 h-[1px]"></div> */}
      {/* <div className="bg-gray-50 mx-5 md:mx-20 py-12">
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
      </div> */}
    </div>
  );
};
export default Blogs;