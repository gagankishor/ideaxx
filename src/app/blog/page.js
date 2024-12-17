"use client"; // Ensure the component runs on the client side
import ArticleCard from "@/components/blogs/ArticleCard";
import { useEffect, useState } from "react";
const articles = [
  {
    title:
      "The Mindset of a Successful Entrepreneur ...",
    category: "Entrepreneurship",
    imageUrl: "/blog/2/image.webp", // Unsplash image
    hrefUrl: "/blog/2",
  },
  {
    title:
      "Top Business Trends to Watch in 2024 ...",
    category: "Business Trends",
    imageUrl: "/blog/3/image2.webp", // Unsplash image
    hrefUrl: "/blog/3",
  },
  {
    title: "How AI is Shaping the Future of Entrepreneurship",
    category: "Entrepreneurship",
    imageUrl: "/blog/4/image1.webp",
    hrefUrl: "/blog/4",

  },
  {
    title: "The Rise of Online Businesses: Opportunities and Challenges",
    category: "Opportunities and Challenges",
    imageUrl: "/blog/5/image.webp",
    hrefUrl: "/blog/5",

  },
  // {
  //   title: "Transforming Businesses with Virtual Business Management",
  //   category: "Virtual Business Management",
  //   imageUrl: "/blog/image2.jpg", // Startup scaling image
  //   hrefUrl: "blog/6",

  // },
  
];
const editorsPick = [
  {
    title: "The Mindset of a Successful Entrepreneur ...",
    category: "Entrepreneurship",
    imageUrl: "/blog/3/image3.webp",
    hrefUrl: "/blog/1",
  },
  {
    title: "Top Business Trends to Watch in 2024 ...",
    category: "Business Trends",
    imageUrl: "/blog/2/image3.webp", // Data visualization image
    hrefUrl: "/blog/2",
  },
  {
    title: "How AI is Shaping the Future of Entrepreneurship",
    category: "Entrepreneurship",
    imageUrl: "/blog/4/image3.webp", // AI and data science image
    hrefUrl: "/blog/3",
  },
];
const businessStrategies = [
  {
    title: "Transforming Businesses with Virtual Business Management",
    category: "Virtual Business Management",
    imageUrl: "/blog/image2.jpg", // Startup scaling image
    hrefUrl: "/blog/6",

  },
  {
    title: "The Rise of Online Businesses: Opportunities and Challenges",
    category: "Opportunities and Challenges",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    hrefUrl: "/blog/4",

  },
  {
    title: "The Mindset of a Successful Entrepreneur ...",
    category: "Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", 
    hrefUrl: "/blog/1",

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
          {/* Left Section */}
          
            <div>
              <p className="text-sm text-left font-light uppercase mb-2">
                {/* {blogs[1]?.category || "Category"} */}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blogs[1]?.title || "Default Title"}
              </h1>
              <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-left mb-6">
                {blogs[1]?.para || "Default description text."}
              </p>
              <a
                href="/blog/1"
                className="font-semibold hover:underline leading-9 flex items-center underline"
              >
                Read more <span className="ml-2 text-xl">&rarr;</span>
              </a>
            </div>
          

          {/* Right Section */}
          <div className="relative">
            <img
              src="/blog/1/image.png" // Replace with your actual image path
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
          {/* Left Section (Image) */}
          <div className="">
            <img
              src="/blog/image.webp" // Replace with your actual image path
              alt="AI Knowledge Hub"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Section (Text) */}
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
            Editor&lsquo;s Pick
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
