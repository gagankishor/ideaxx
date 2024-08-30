import { FaFont, FaRobot } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";

export default function BusinessFont() {
  const [isFetching, setIsFetching] = useState(false);
  const [ideaFont, setIdeaFont] = useState(localStorage.getItem("font_context") || "");

  const handleFontChange = (e) => {
    const value = e.target.value;
    setIdeaFont(value);
    localStorage.setItem("font_context", value);
  };

  const fetchFont = async () => {
    if (!ideaFont) {
      alert("Please enter a font description first.");
      return;
    }

    setIsFetching(true);
    try {
      const response = await axios.post(
        `${RestAPI}/bi/suggest-primary-font`,
        { key_word: ideaFont },
        {
          headers: {
            Authorization: `Bearer ${userToken()}`,
          },
        }
      );
      setIdeaFont(response.data.data);
      localStorage.setItem("font_context", response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the font suggestion:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const platforms = [
    { id: 1, name: "Google Fonts", logo: "google-fonts.png", link: "https://fonts.google.com" },
    { id: 2, name: "Adobe Fonts", logo: "adobe-fonts.png", link: "#" },
    { id: 3, name: "Font Squirrel", logo: "font-squirrel.png", link: "#" },
  ];

  const blogs = [
    { id: 1, name: "Typography Blog", logo: "typography-blog.webp", link: "#" },
    { id: 2, name: "Font Trends", logo: "font-trends.webp", link: "#" },
    { id: 3, name: "Design Insights", logo: "design-insights.webp", link: "#" },
  ];

  return (
    <>
      <Helmet>
        <title>Font | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaFont /> Font
          </h1>
          <form className="form">
            <div className="form-group">
              <div className="label-flex">
                <div className="left-label">Your idea's font</div>
                <div className="right-label">
                  <button
                    type="button"
                    className="btn"
                    disabled={isFetching}
                    onClick={(e) => {
                      e.preventDefault();
                      fetchFont();
                    }}
                  >
                    {isFetching ? (
                      <div className="spinner"></div>
                    ) : (
                      <>
                        Generate One <FaRobot />
                      </>
                    )}
                  </button>
                </div>
              </div>
              <textarea
                name="font_context"
                placeholder="Enter your idea description..."
                rows="5"
                value={ideaFont}
                onChange={handleFontChange}
              ></textarea>
            </div>

            <h2 id="section-heading">Brand Name</h2>
            <p>Remember, consistency is key in establishing a strong brand identity...</p>

            <h2 id="section-heading">Primary Font Options</h2>
            <ul className="font-options">
              <li>Vintage</li>
              <li>Classic</li>
              <li>Modern</li>
              <li>Trendy</li>
            </ul>

            <h2 id="section-heading">Secondary Font (H2)</h2>
            <p>A complementary font that can be used for headings, subheadings, or other key elements...</p>

            <h2 id="section-heading">Accent Font (H3) (optional)</h2>
            <p>In some cases, businesses might choose a third font...</p>

            <h2 id="section-heading">Email Font (optional)</h2>
            <p>When it comes to choosing fonts for email, it's essential to prioritize readability...</p>

            <h2 id="section-heading">Platforms</h2>
            <div className="slider">
              {platforms.map((item) => (
                <div key={item.id} className="card">
                  <a href={item.link} target="_blank" className="item">
                    <img src={"/platforms/" + item.logo} alt={item.name} />
                  </a>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <h2 id="section-heading">Blogs</h2>
            <div className="slider">
              {blogs.map((item) => (
                <div key={item.id} className="card">
                  <a href={item.link} target="_blank" className="item">
                    <img src={"/platforms/" + item.logo} alt={item.name} />
                  </a>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
