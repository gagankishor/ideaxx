import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import TrustBoxWidget from "./TrustBoxWidget";
import Image from "next/image";
const AwardsSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/blog/1/image.png",
      title: "10 Questions to Ask Yourself Before Starting Your Business",
      excerpt:
        "Starting a business is one of the most rewarding yet challenging journeys you can embark on. It requ...",
      link: "/blog/before_starting_your_business",
    },
    {
      id: 2,
      image: "/blog/1/image10.png",
      title: "The Mindset of a Successful Entrepreneur",
      excerpt:
        "Embarking on an entrepreneurial journey requires more than just a solid business plan and financial...",
      link: "/blog/the_mindset_of_a_successful_entrepreneur",
    },
    {
      id: 3,
      image: "/blog/1/image11.png",
      title: "Top Business Trends to Watch in 2024",
      excerpt:
        "As we approach 2024, the business landscape continues to evolve rapidly, influenced by...",
      link: "/blog/top_business_trends_to_watch_in_2025",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "black",
        zIndex: "0",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <div
        className="awards-section"
        style={{ maxWidth: "1000px", margin: "auto" }}
      >
        <div className="title-section">
          <h3 style={{ color: "white" }} className="text-3xl">
            Recognized by leaders. Loved by customers.
          </h3>
          <div className="btns-container">
            <Link
              className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontSize: "14px" }}
              href="/mainWizard"
              target="_blank"
            >
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
        <TrustBoxWidget />
       
        <div className="info-cards">
          <div
            className="info-cards2"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              paddingTop: "40px",
            }}
          >
            <div
              className="card gartner"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                height: "50%",
                margin: "auto",
                transform: "translateX(0%)",
              }}
            >
              <h3>Industry Recognition</h3>
              <p className=" w-5/6 m-auto  ">
              Entrepreneurs and startups across diverse industries trust IDEAX as their preferred partner for success. Our platform empowers business owners with innovative tools designed to streamline operations, enhance productivity, and drive sustainable growth effectively. 
              </p>
            </div>
            <div
              className="card forrester"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                height: "50%",
                transform: "translateX(0%)",
              }}
            >
              <h3>Trusted by Entrepreneurs</h3>
              <p className=" w-5/6 m-auto ">
              Our platform is widely acknowledged as a pioneer in business management, leveraging advanced AI to revolutionize operations. By providing cutting-edge tools, we empower businesses to optimize processes, drive growth, improve efficiency, and achieve sustainable success.
              </p>
            </div>
          </div>
          <div className="badge-section" style={{ marginTop: "40px" }}>
            <div className="container mx-auto  px-4 md:pl-0 max-w-4xl ">
              {blogs.map((blog, index) => (
                <React.Fragment key={blog.id}>
                  <a href={blog.link} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 ">
                    <div
                      className="flex-shrink-0 w-full md:w-60"
                    >
                      <Image
                        src={blog.image}
                        className="w-full md:w-60 h-auto rounded-md object-cover"
                        alt={`Blog ${blog.id}`}
                        width={240}
                        height={160}
                      />
                    </div>
                    <div className="flex-grow w-full">
                      <h6 className="text-white text-xl text-center md:text-left mb-2">
                        {blog.title}
                      </h6>
                      <p className="text-gray-200 text-center md:text-left mb-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </a>
                  {index < blogs.length - 1 && (
                    <div className="w-full h-px bg-gray-600 my-1"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AwardsSection;