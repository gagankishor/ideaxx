import { FaPlay } from 'react-icons/fa';
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
export default function CoursePage() {
  return (
    <div className="min-h-screen">
      

      {/* Main Content */}
          <h1 className="text-4xl md:text-7xl font-thin mx-5 md:mx-20 py-10 mb-4">Ideax Ai Idea Checker </h1>
      <div className=" px-5 md:px-20 py-4 lg:flex">
        {/* Left Section (Video and Details) */}
        <div className="lg:w-full h-[300px] md:h-[500px]  ">
          <iframe

            className="w-full   mb-4"
            src="https://www.youtube.com/embed/KLuTLF3x9sA?si=6HM4jQ9i9xTK8Z79"
            title="YouTube video player"
            allowFullScreen
            height={500}
          ></iframe>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/KLuTLF3x9sA?si=6HM4jQ9i9xTK8Z79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-6 px-5 md:px-20 bg-gray-50 ">
        <div className="flex border-b overflow-y-scroll">
          <button className="px-4 py-2 border-b-2 border-black text-black">About</button>
          {/* <button className="px-4 py-2 text-gray-600">In this lesson</button>
          <button className="px-4 py-2 text-gray-600">Transcript</button> */}
        </div>

        <div className="py-4">
          <h2 className="text-3xl font-light py-10 ">About the Ai Idea Checker</h2>
          <p className="text-gray-700 text-left mt-2">
            Explore how to create an exceptional, fully-responsive website with the Wix Studio Editor lorem Explore how to create an exceptional, fully-responsive website with the Wix Studio Editor. Follow along with step-by-step lessons and hands-on challenges to create a website using the different Responsive behaviors, layout tools and Responsive AI available right at your fingertips. Explore how to create an exceptional, fully-responsive website with the Wix Studio Editor. Follow along with step-by-step lessons and hands-on challenges to create a website using the different Responsive behaviors, layout tools and Responsive AI available right at your fingertips.
            Explore how to create an exceptional, fully-responsive website with the Wix Studio Editor. Follow along with step-by-step lessons and hands-on challenges to create a website using the different Responsive behaviors, layout tools and Responsive AI available right at your fingertips.
          </p>
        </div>
      </div>
      <div className="max-w-full mx-auto p-4 sm:p-6 lg:px-20 lg:mt-10 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 lg:pb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-thin">
          Keep your learning going
          </h2>
          <a
            href="#"
            className="text-gray-700 underline font-thin lg:text-3xl  hover:text-gray-900"
          >
            {/* See more tutorials &rarr; */}
          </a>
        </div>
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
                    href="#"
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
    </div>
  );
}
{/* Sidebar */}
        {/* <div className="lg:w-1/2 px-10 max-h-[300px] overflow-y-scroll">
          <div className="">
            <h2 className="text-lg p-5 font-thin">Meet Wix Studio</h2>
            <div className='bg-black w-full h-[1px]'></div>
            <ul className="mt-2">
              <li className="flex items-center justify-between p-2 bg-yellow-100 ">
                <span className='flex justify-center items-center p-5 gap-4'><FaPlay/> Welcome to the Wix Studio Essentials course</span>
                <span>01:49</span>
              </li>
              <li className="flex items-center justify-between p-2  ">
                <span className='flex justify-center items-center p-5 gap-4'><FaPlay/> Welcome to the Wix Studio Essentials course</span>
                <span>01:49</span>
              </li>
              <li className="flex items-center justify-between p-2  ">
                <span className='flex justify-center items-center p-5 gap-4'><FaPlay/> Welcome to the Wix Studio Essentials course</span>
                <span>01:49</span>
              </li>
              <li className="flex items-center justify-between p-2  ">
                <span className='flex justify-center items-center p-5 gap-4'><FaPlay/> Welcome to the Wix Studio Essentials course</span>
                <span>01:49</span>
              </li>
              <li className="flex items-center justify-between p-2  ">
                <span className='flex justify-center items-center p-5 gap-4'><FaPlay/> Welcome to the Wix Studio Essentials course</span>
                <span>01:49</span>
              </li>
            </ul>
          </div>
        </div> */}