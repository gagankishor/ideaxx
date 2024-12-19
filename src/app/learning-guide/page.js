"use client";
import LearningGuideSearch from "@/components/learningGuidePageComponent/LearningGuideSearch";
import SubscribeModal from "@/components/pages/Home/SubscribeModal";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const LearningGuidePage = () => {
  const tutorials = [
    {
      title: "How to get started in the Ideax Studio editor",
      duration: "5m",
      image:
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=308&h=197&q=80", // Laptop workspace
    },
    {
      title: "How to create Animations & Interactions",
      duration: "4m",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=308&h=197&q=80", // Creative desktop with animations concept
    },
    {
      title: "Build along to create a half sticky, half scrolling design",
      duration: "2m",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=308&h=197&q=80", // Coding and design setup
    },
  ];

  const items = [
    {
      title: "Visual Identity",
      studio: "Visual Identity",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // Yellow background
      logo: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGxvZ298ZW58MHx8fHwxNjM2NTU3MTc2&ixlib=rb-1.2.1&q=80&w=40", // Replace with actual logo URL
    },
    {
      title: "Nasir Studio",
      studio: "Nasir Studio",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1", // Yellow workspace items
      logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGxvZ298ZW58MHx8fHwxNjM2NTU3MTc2&ixlib=rb-1.2.1&q=80&w=40", // Replace with actual logo URL
    },
    {
      title: "Anzo Studio",
      studio: "Anzo Studio",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d", // Coffee and notepad on yellow background
      logo: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxvZ298ZW58MHx8fHwxNjM2NTU3MTc2&ixlib=rb-1.2.1&q=80&w=40", // Replace with actual logo URL
    },
    {
      title: "Creative Hub",
      studio: "Creative Hub",
      image: "https://images.unsplash.com/photo-1526040652367-ac003a0475fe", // Creative desk setup with yellow tones
      logo: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxsb2dvfGVufDB8fHx8MTYzNjU1NzE3Ng&ixlib=rb-1.2.1&q=80&w=40", // Replace with actual logo URL
    },
    {
      title: "Design Works",
      studio: "Design Works",
      image:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=308&h=197&q=80", // Yellow background with plants
      logo: "https://via.placeholder.com/40x40", // Replace with actual logo URL
    },
    {
      title: "Inspire Studio",
      studio: "Inspire Studio",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d", // Minimalistic workspace with yellow accents
      logo: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxsb2dvfGVufDB8fHx8MTYzNjU1NzE3Ng&ixlib=rb-1.2.1&q=80&w=40", // Replace with actual logo URL
    },
  ];
  // const [query, setQuery] = useState("");

  // const handleSearch = () => {
  //   if (query.trim() !== "") {
  //     // Replace this with your actual search logic
  //     console.log(`Searching for: ${query}`);
  //     // Example: You could call an API or filter a list based on the query
  //   }
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //   }
  // };
  const [showSubscribe, setShowSubscribe] = useState(false);
  const onSubscribeClose = () => {
    setShowSubscribe(false);
  };
  const handelShowSubscribe = () => {
    setShowSubscribe(true);
  };
  return (
    <>
      <SubscribeModal isOpen={showSubscribe} onRequestClose={onSubscribeClose}/>
      <LearningGuideSearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 p-4 bg-white max-w-full lg:px-20 mx-auto">
        {/* Main Card (First Card): Stacks on mobile, spans 2 columns and 2 rows on larger screens */}
        <div className="bg-[#BED6FF] p-4 sm:p-6 rounded-2xl row-span-2 col-span-1 sm:col-span-2 flex flex-col justify-between space-y-4">
          <div className="flex flex-row justify-between">
            <div className="text-left w-[60%]">
              <p className="text-gray-700 text-left text-sm">
                November 18-21, 2024
              </p>
              <h2 className="text-lg sm:text-2xl font-thin mt-2 mb-4">
                Ideax Studio crash course: upskill, fast
              </h2>
            </div>
            <a
              href="#"
              className="w-[40%] text-right align-text-bottom underline font-normal"
            >
              {/* Save your spot &rarr; */}
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4067755/pexels-photo-4067755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Video Thumbnail"
              className="rounded-lg w-full"
            />
            <button className="absolute top-2 left-2 bg-white p-3 sm:p-4 rounded-full shadow-md">
              <span className="text-gray-700 text-lg font-bold">
                <FaPlay />
              </span>
            </button>
          </div>
        </div>

        {/* Second Card: Stacks on mobile, occupies one column on larger screens */}
        <div className="bg-[#DEFF00] p-4 sm:p-6 rounded-2xl flex flex-col h-full justify-between">
          <h3 className="font-extralight text-lg sm:text-2xl text-left mb-2">
            Experience the editor with Sandboxes
          </h3>
          <a
            href="#"
            className="text-black font-medium underline hover:text-gray-700"
          >
            Try it now &rarr;
          </a>
        </div>

        {/* Third Card: Stacks on mobile, occupies one column on larger screens */}
        <div className="bg-[#E2D8FF] p-4 sm:p-6 rounded-2xl flex flex-col h-full justify-between">
          <h3 className="font-extralight text-lg sm:text-2xl text-left mb-2">
            Stay ahead, get certified
          </h3>
          <a
            href="#"
            className="text-black font-medium underline hover:text-gray-700"
          >
            Start now &rarr;
          </a>
        </div>

        {/* Fourth Card: Stacks on mobile, spans two columns on larger screens */}
        <div className="bg-[#0E106A] p-4 sm:p-6 rounded-2xl text-white flex flex-col sm:flex-row sm:justify-between sm:col-span-2">
          <div className="w-full sm:w-[38%] mb-4 sm:mb-0">
            <h3 className="font-thin text-lg sm:text-2xl text-left text-white mb-4">
              Learn more topics, however it suits you
            </h3>
            <a
              href="#"
              className="text-white font-medium underline hover:text-gray-300"
            >
              Search library &rarr;
            </a>
          </div>
          <div className="relative w-full sm:w-[58%]">
            <img
              src="https://images.pexels.com/photos/4067755/pexels-photo-4067755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Video Thumbnail"
              className="rounded-lg w-full"
            />
            <button className="absolute top-1/3 left-1/3 bg-white p-3 sm:p-4 rounded-full shadow-md">
              <span className="text-gray-700 text-lg font-bold">
                <FaPlay />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto p-4 sm:p-6 lg:px-20 space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin">
            Get specific with video tutorials
          </h2>
          <a
            href="#"
            className="text-gray-700 underline font-medium hover:text-gray-900"
          >
            {/* See more tutorials &rarr; */}
          </a>
        </div>

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl"
                />
                <button className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md">
                  <FaPlay className="text-gray-700" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-xs uppercase text-left">
                  Tutorial
                </p>
                <h3 className="text-lg sm:text-xl font-thin mt-2 text-left mb-4">
                  {tutorial.title}
                </h3>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-500">{tutorial.duration}</span>
                  <a
                    href="learning-guide/1"
                    className="font-medium hover:text-black underline"
                  >
                    Watch now &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 rounded-xl bg-gradient-to-b from-blue-50 to-blue-200 my-8 sm:my-14 space-y-4 lg:space-y-0">
          <p className="font-medium text-2xl sm:text-3xl lg:text-4xl lg:w-[80%] text-left text-gray-800">
          Dive into our comprehensive guide to unlock your potential with IDX Token. 
          <br/>
          <span className=" text-2xl font-thin">

           Explore expert articles, in-depth tutorials, and real-world case studies today.
          </span>
          </p>
          <button onClick={handelShowSubscribe} className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
          Subscribe
          </button>
        </div>
      </div>
      <div className="max-w-full mx-auto space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 space-y-4 md:space-y-0">
          <h2 className="text-2xl md:text-3xl font-thin">
            Get inspired by others
          </h2>
          <a
            href="#"
            className="underline font-light hover:text-gray-900 md:mr-20"
          >
            {/* Explore the collection &rarr; */}
          </a>
        </div>

        {/* Carousel */}
        <div className="scroll-section overflow-x-auto pb-10">
          <div className="flex space-x-4 md:space-x-6 px-4 md:px-20">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[280px] sm:min-w-[300px] md:min-w-[400px] max-w-xs bg-white rounded-sm overflow-hidden shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-60 object-cover rounded-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm sm:text-lg font-semibold">
                    {item.title}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 p-2 space-x-2">
                  <div className="flex items-center">
                    <img
                      src={item.logo}
                      alt={`${item.studio} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <h3 className="text-sm sm:text-lg ml-2 font-thin">
                      {item.studio}
                    </h3>
                  </div>
                  <a href="#" className="text-xl font-thin">
                    <MdOutlineArrowOutward />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningGuidePage;
