import { FaBookOpen } from "react-icons/fa";
const AwardsSection = () => {
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
          <h3 style={{ color: "white" }}>
            Recognized by leaders. Loved by customers.
          </h3>
          <button className="cta-button">Test Yeor Idea →</button>
        </div>
        <div className="info-cards">
          <div
            className="info-cards2"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              paddingTop: "40px",
              // width: "75%",
            }}
          >
            <div
              className="card gartner"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                height: "50%",
                margin:'auto',
                transform: 'translateX(0%)'
              }}
            >
              <h3>Industry Recognition</h3>
              <p className=" w-5/6 m-auto mb-10 text-justify">
                Our platform is recognized as a leader in business management
                solutions powered by AI, offering innovative tools that
                transform how businesses operate.
              </p>
              <a
                href="#"
                className="read-more flex justify-center gap-4 items-center"
              >
                <FaBookOpen /> Read the report →
              </a>
            </div>
            <div
              className="card forrester"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                height: "50%",
                transform: 'translateX(0%)'
              }}
            >
              <h3>Trusted by Entrepreneurs</h3>
              <p className=" w-5/6 m-auto mb-10 text-justify">
                Trusted by Entrepreneurs: IDEAX is the go-to choice for
                entrepreneurs and startups looking for efficient solutions to
                drive growth and success.
              </p>
              <a
                href="#"
                className="read-more flex justify-center items-center gap-4"
              >
                <FaBookOpen /> Read the report →
              </a>
            </div>
          </div>
          <div className="badge-section" style={{ marginTop: "40px" }}>
            <div className="blog-section ">
              <div className="blog-post mb-0">
                <div className="flex items-center mb-0">
                  <div className=" md:w-[90%]">
                    <img
                      src="/blog/1/image.png"
                      className="w-60 rounded-md"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white text-xl  text-justify">
                    10 Questions to Ask Yourself Before Starting Your Business
                    </h4>
                    <p className="text-gray-200  text-justify">
                    Starting a business is one of the most rewarding yet challenging journeys you can embark on. It requ...
                    </p>
                    <a
                      href={`/blog/1`}
                      className="text-blue-400 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-600 my-4"></div>

              <div className="blog-post mb-0">
                <div className="flex items-center mb-0">
                  <div className=" md:w-[90%]">
                    <img
                      src="/blog/1/image1.png"
                      className="w-60  rounded-md"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white text-xl  text-justify">
                    The Mindset of a Successful Entrepreneur
                    </h4>
                    <p className="text-gray-200  text-justify">
                    Embarking on an entrepreneurial journey requires more than just a solid business plan and financial...
                    </p>
                    <a
                      href={`/blog/2`}
                      className="text-blue-400 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-600 my-4"></div>

              <div className="blog-post mb-0">
                <div className="flex items-center mb-0">
                  <div className=" md:w-[80%]">
                    <img
                      src="/blog/1/image2.png"
                      className="w-60 rounded-md"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white text-xl  text-justify">
                    Top Business Trends to Watch in 2024
                    </h4>
                    <p className="text-gray-200  text-justify">
                    As we approach 2024, the business landscape continues to evolve rapidly, influenced by...
                    </p>
                    <a
                      href={`/blogs/1`} // Replace `blog.id` with the actual ID or slug of the blog post
                      className="text-blue-400 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default AwardsSection;
