import { FaRedo, FaRobot, FaTextHeight } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import axios from "axios";
import { TbBulb } from "react-icons/tb";
import { IdeaContext } from "../../config/ideaDataContext";
import Swal from "sweetalert2";
export default function BusinessSlogan() {
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingSugg, setIsFetchinSugg] = useState(false);
  const {ideaData,setBrandDataMain} = useContext(IdeaContext)

  const [ideaSloganData, setideaSloganData] = useState(
    localStorage.getItem("slogan_context") || ""
  );
  const [ideaSloganDataSugg, setideaSloganDataSugg] = useState("");
  
  const [ideaSlogan, setideaSlogan] = useState("" );
  const loggedToken = userToken();

  const axiosConfig = {
    headers: {  
      "Content-Type": "application/json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };

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
      setideaSloganData(response.data.data);
      localStorage.setItem("slogan_context", response.data.data); 
    } catch (error) {
      console.error("There was an error fetching the slogan:", error);
    } finally {
      setIsFetching(false);
    }
  };
  const fetchSloganSugg = async () => {
    setIsFetchinSugg(true);
    try {
      if (ideaData?.idea_name){
        
        const response = await axios.post(
          `${RestAPI}/bi/suggest-slogan-by-idea`,
          { idea_name: ideaData?.idea_name },
          {
            headers: {
              Authorization: `Bearer ${userToken()}`,
            },
          }
        );
        setideaSloganDataSugg(response.data.data);
        localStorage.setItem("slogan_context", response.data.data); 
      }else{
        setideaSloganDataSugg('you have not selected idea');
      }
    } catch (error) {
      console.error("There was an error fetching the slogan:", error);
    } finally {
      setIsFetchinSugg(false);
    }
  };
  useEffect(()=>{
    fetchSloganSugg()
  },[])
  const handaleSave = async(payload) =>{
    try {
      // setIsLoading(true);  

      const response = await axios.post(`${RestAPI}/bi/save-brand`,payload, axiosConfig);
      if (response.data && response.data.data) {
        console.log(response.data)
        setBrandDataMain(response.data.data); 
        Swal.fire({
          title: "Success",
          text: response?.data?.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        console.error("Unexpected data format:", response.data);
        Swal.fire({
          title: "Error",
          text: "Error in saving data",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        title: "Error",
        text: "Error in saving data",
        icon: "error",
        confirmButtonText: "OK",
      });
      // setError("Error fetching data");
    } finally {
      // setIsLoading(false);  
    }
  }
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
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "",
                marginTop: "45px",
                alignItems:'center'

              }}
            >
              <div
                // className="brand-name-sugg-card"
                style={{
                  position: "relative",
                  padding: "10px 0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-22px",
                    left: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Free
                </span>
                {/* <span>Make it for me</span> */}
                <input type="text" className="form-input" onChange={handleDescriptionChange} placeholder="Make it for me" />

              </div>
              
              <div className="right-label" style={{ marginLeft: "10px" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    fetchSlogan();
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
              <textarea
                name="slogan_context"
                placeholder=""
                rows="5"
                value={ideaSloganData}
                readOnly
                ></textarea><button 
                type="button"
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handaleSave({idea_id:ideaData?.id || '',slogan:ideaSloganData},1);
                }}
              >
                Sve This
              </button>
            </div>
              <div className="label-flex">
              <h2 id="section-heading">
                {" "}
                <TbBulb size={30} style={{ marginRight: "10px" }} />
                Based on your idea we suggest to you
                </h2>
                {/* <div className="left-label">Your idea's slogan</div> */}

                <div className="right-label">
                  <button
                    type="button"
                    className="btn"
                    disabled={isFetching}
                    onClick={(e) => {
                      e.preventDefault();
                      fetchSloganSugg();
                    }}
                  >
                    {isFetchingSugg ? (
                      <div className="spinner"></div>
                    ) : (
                      <>
                        <FaRedo /> <span style={{marginRight:'5px'}}>Slogan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <textarea
                name="slogan_context"
                placeholder="Enter your idea description..."
                rows="5"
                value={ideaSloganDataSugg}
                readOnly
              ></textarea>
              <button 
                type="button"
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                  // saveSlogan(ideaSloganData,1);
                  handaleSave({idea_id:ideaData?.id || '',slogan:ideaSloganDataSugg},2);

                }}
              >
                Sve This
              </button>
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
