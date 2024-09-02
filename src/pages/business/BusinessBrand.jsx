import { FaRobot, FaSearch } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import { EnterpriseLaunch } from "../../components/EnterpriseLaunch";

export default function IdeaFind() {
  const loggedToken = userToken();

  const [isFetching, setIsFetching] = useState(false);
  const [brand, setBrand] = useState("");
  const [brandSugg, setBrandSugg] = useState([
    "VentureGrowth",
    "InnoSprk",
    "PnnclePek",
    "FutureForge",
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };

  const findIdea = () => {
    setIsFetching(true);
    const requestBody = { brand };

    axios
      .post(`${RestAPI}/ai/brand`, requestBody, axiosConfig)
      .then((response) => {
        setBrand(response.data.data); // Update the brand suggestions
        setIsFetching(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand suggestions:", error);
        setIsFetching(false);
      });
  };
  
// useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(`${RestAPI}/ai/brandsugg`, axiosConfig);
  //       if (response.data && response.data.data) {
  //         setBrandSugg(response.data.data);
  //         console.log(response.data.data);
  //       } else {
  //         console.error("Unexpected data format:", response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setError("Error fetching data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleTextareaChange = (e) => {
    setBrand(e.target.value);
    localStorage.setItem("brand",brand)
  };
  const handleCardClick = (name) => {
    setBrand(name);
  };
  const platforms = [
    { id: 1, name: "Canva", logo: "canva.png", link: "https://canva.com/" },
    { id: 2, name: "UCraft", logo: "", link: "#" },
    { id: 3, name: "LogoMaker", logo: "logomaker.webp", link: "#" },
    { id: 4, name: "GraphicSprings", logo: "graphicsprings.webp", link: "#" },
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
    {
      id: 4,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Brand Name | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaSearch /> Brand Name
          </h1>
          <form className="form">
            <h2 id="section-heading">Choose your brand name</h2>
            <div className="slider">
              {brandSugg.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => handleCardClick(item)}
                >
                  <p className="item">{item}</p>
                </div>
              ))}
            </div>
            <div className="form-group">
              <div className="label-flex">
                <div className="left-label">Your Brand Name should be</div>
                <div className="right-label">
                  <button
                    type="button"
                    className="btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      findIdea();
                    }}
                  >
                    {isFetching ? (
                      <div className="spinner"></div>
                    ) : (
                      <>
                        Edit <FaRobot />
                      </>
                    )}
                  </button>
                </div>
              </div>
              <textarea
                name="idea_description"
                placeholder="Enter your brand idea..."
                rows="5"
                value={brand}
                onChange={handleTextareaChange}
              ></textarea>
            </div>
            <h2 id="section-heading">Best techniques to name your idea</h2>
            <div className="slider">
              {blogs.map((item) => {
                return (
                  <div key={item.id} className="card">
                    <a href={item.link} target="_blank" className="item">
                      <img src={"/platforms/" + item.logo} alt={item.name} />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </form>
        {/* <EnterpriseLaunch/>  */}
        </div>
      </div>
    </>
  );
}
