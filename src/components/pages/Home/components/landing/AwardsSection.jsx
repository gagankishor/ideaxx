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
              width:'75%'
            }}
          >
            <div
              className="card gartner"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                height: "50%",
              }}
            >
              <h3>Industry Recognition</h3>
              <p className=" w-5/6 m-auto mb-10">
                Our platform is recognized as a leader in business management
                solutions powered by AI, offering innovative tools that
                transform how businesses operate.
              </p>
              <a
                href="#"
                className="read-more flex justify-center items-center"
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
              }}
            >
              <h3>Trusted by Entrepreneurs</h3>
              <p className=" w-5/6 m-auto mb-10">
                Trusted by Entrepreneurs: IDEAX is the go-to choice for
                entrepreneurs and startups looking for efficient solutions to
                drive growth and success.
              </p>
              <a
                href="#"
                className="read-more flex justify-center items-center"
              >
                <FaBookOpen /> Read the report →
              </a>
            </div>
          </div>
          <div className="badge-section" style={{ marginTop: "40px" }}>
            <div className="blog-section mt-10">
              <div className="blog-post mb-10">
                <div className="flex items-center mb-5">
                <div>
                    <img
                      src="https://img.freepik.com/premium-photo/3d-camera-world-photography-day_582688-783.jpg?w=740"
                      className="w-60 rounded-md"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white text-xl">
                      The Future of Project Management
                    </h4>
                    <p className="text-gray-200">
                      Explore how technology is reshaping the project management
                      landscape and what to expect in the years to come.
                    </p>
                    <a
                      href="#"
                      className="text-blue-400 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-600 my-4"></div>

              <div className="blog-post mb-10">
                <div className="flex items-center mb-5">
                <div>
                    <img
                      src="https://img.freepik.com/premium-photo/3d-camera-world-photography-day_582688-783.jpg?w=740"
                      className="w-60  rounded-md"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white text-xl">
                      CRM Strategies for 2024
                    </h4>
                    <p className="text-gray-200">
                      Learn the top strategies to enhance customer relationships
                      and improve sales with CRM tools in 2024.
                    </p>
                    <a
                      href="#"
                      className="text-blue-400 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-600 my-4"></div>

              <div className="blog-post mb-10">
                <div className="flex items-center mb-5">
                  <div>
                    <img
                      src="https://img.freepik.com/premium-photo/3d-camera-world-photography-day_582688-783.jpg?w=740"
                      className="w-60 rounded-md"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white text-xl">
                      Product Development Trends
                    </h4>
                    <p className="text-gray-200">
                      A deep dive into the latest trends in product development
                      and how to stay ahead of the competition.
                    </p>
                    <a
                      href="#"
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
