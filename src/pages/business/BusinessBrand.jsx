import { FaRobot, FaSearch } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import { EnterpriseLaunch } from "../../components/EnterpriseLaunch";
import './BusinessBrand.css'
import { IdeaContext } from "../../config/ideaDataContext";
import Swal from "sweetalert2";
export default function IdeaFind() {
  const loggedToken = userToken();
  const hasFetched = useRef(false);

  const [isFetching, setIsFetching] = useState(false);
  const {ideaData,brandData,setBrandDataMain} = useContext(IdeaContext)
  const [brand, setBrand] = useState(null);
  const [brandSugg, setBrandSugg] = useState([
    "TechElevate","GreenHarvest","HealthQuest","InfinityDesigns"
  ]);
  const [BrandSuggPara,setBrandSuggPara] = useState('Your brand name should be ...')
  const [isLoading, setIsLoading] = useState(false);
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
        setBrand(response.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching brand suggestions:", error);
        setIsFetching(false);
      });
  };
  const fetchSuggData = async () => {
    try {
      let idea_name = localStorage.getItem('idea_name')

      const response = await axios.post(`${RestAPI}/ai/sugesForSectiion`,{idea_name,section_name:'Brand Name'}, axiosConfig);
      if (response.data && response.data.data) {
        setBrandSuggPara(response.data.data); 
       
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    } finally {
    }
  };
  const fetchData = async () => {
    try {
      let idea_name = localStorage.getItem('idea_name')
      const response = await axios.post(`${RestAPI}/ai/brandsugg`,{idea_name}, axiosConfig);
      if (response.data && response.data.data) {
        setBrandSugg(response.data.data); 
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    } finally {
    }
  };
  useEffect(() => {
    if (!hasFetched.current) {
        fetchData();
        fetchSuggData()
        hasFetched.current = true;
    }
}, []);


  const handleTextareaChange = (e) => {
    setBrand(e.target.value);
    localStorage.setItem("brand",brand)
  };
  const handleCardClick = (name) => {
    setBrand(name);
    localStorage.setItem("brand",name)
  };
  const handaleSave = async() =>{
    try {
      setIsLoading(true);  
      const response = await axios.post(`${RestAPI}/bi/save-brand`,{idea_id:ideaData?.id || '',brand_name:brand}, axiosConfig);
      if (response?.data && response?.data?.data) {
        setBrandDataMain(response?.data?.data); 
        Swal.fire({
          title: "Success",
          text: response?.data?.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: response?.data?.message || "Error fetching data",
          icon: "error",
          confirmButtonText: "OK",
        });     
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        title: "Error",
        text: "Error in saving data",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);  
    }
  }
  
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
            <div style={{display:'flex' ,justifyContent:'space-between'}}>
              <h2 id="section-heading">Choose your brand name</h2>
              <div className="brand-name-input-top">
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
                </div><input
                name="idea_description"
                placeholder="Enter your brand idea..."
                rows="5"
                type="text"
                value={brand || brandData?.brand_name || ""}
                onChange={handleTextareaChange}
                style={{fontSize:'large'}}
              ></input> 
              
              <button type="button" className="btn" onClick={handaleSave}>{isLoading?<div className="spinner"></div>:"Save"}</button>
              </div>
            </div>
            <div className="slider" style={{gap:'1rem'}}>
              {brandSugg.map((item, index) => (
                <div
                  className="brand-name-sugg-card"  
                  key={index}
                  onClick={() => handleCardClick(item)}
                >
                  <p className="item">{item}</p>
                </div>
              ))}
            </div>
                  <h2 id="section-heading">Based on your idea</h2>
            <div className="form-group">
              <div className="label-flex">
                <div className="left-label"> 
                </div>
              </div>
              <div className="based-on-card">
                <p>
                    {BrandSuggPara}                
                </p>
              </div>
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
          <EnterpriseLaunch/> 
        </div>
      </div>
    </>
  );
}