import { FaRobot, FaTextHeight } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import axios from "axios";

export default function BusinessSlogan() {
  const [isFetching, setIsFetching] = useState(false);
  const [ideaSlogan, setideaSlogan] = useState(
    localStorage.getItem("slogan_context") || ""
  );

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setideaSlogan(value);
    localStorage.setItem("slogan_context", value); // Save to local storage on change
  };

  const fetchSlogan = async () => {
    if (!ideaSlogan) {
      alert("Please enter an idea slogan first.");
      return;
    }

    setIsFetching(true);
    try {
      const response = await axios.post(
        `${RestAPI}/bi/suggest-slogan`,
        { key_word: ideaSlogan },
        {
          headers: {
            Authorization: `Bearer ${userToken()}`,
          },
        }
      );
      setideaSlogan(response.data.data); // Assuming response data has a slogan field
      localStorage.setItem("slogan_context", response.data.data); // Save generated slogan
      console.log(response.data.data)
    } catch (error) {
      console.error("There was an error fetching the slogan:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const platforms = [
    {
      id: 1,
      name: "Shopify",
      logo: "shopify.png",
      link: "#",
    },
    {
      id: 2,
      name: "Grammarly",
      logo: "grammarly.svg",
      link: "#",
    },
    {
      id: 3,
      name: "Oberlo",
      logo: "oberlo.svg",
      link: "#",
    },
  ];

  const blogs = [
    {
      id: 1,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 2,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
    {
      id: 3,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Slogan | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaTextHeight /> Slogan
          </h1>
          <form className="form">
            <div className="form-group">
              <div className="label-flex">
                <div className="left-label">Your idea's slogan</div>
                <div className="right-label">
                  <button
                    type="button"
                    className="btn"
                    disabled={isFetching}
                    onClick={(e) => {
                      e.preventDefault();
                      fetchSlogan();
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
                name="slogan_context"
                placeholder="Enter your idea description..."
                rows="5"
                value={ideaSlogan}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>

            <h2 id="section-heading">Platforms to get slogan</h2>
            <div className="slider">
              {platforms.map((item) => {
                return (
                  <div key={item.id} className="card">
                    <a href={item.link} target="_blank" className="item">
                      <img
                        src={"/platforms/" + item.logo}
                        alt={item.name}
                      />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>

            <h2 id="section-heading">Blogs</h2>
            <div className="slider">
              {blogs.map((item) => {
                return (
                  <div key={item.id} className="card">
                    <a href={item.link} target="_blank" className="item">
                      <img
                        src={"/platforms/" + item.logo}
                        alt={item.name}
                      />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
