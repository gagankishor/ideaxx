import {  FaPallet } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useRef, useState } from "react";
import "./BusinessLogo.css"; // Assuming you'll create a separate CSS file for styling
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import { IdeaContext } from "../../config/ideaDataContext";
import Swal from "sweetalert2";
// import { FaTrash } from "react-icons/fa6";

export default function BusinessLogo() {
  const platforms = [
    { id: 1, name: "Canva", logo: "canva.png", link: "https://canva.com/" },
    { id: 2, name: "UCraft", logo: "ucraft.svg", link: "https://ucraft.com/" },
    {
      id: 3,
      name: "LogoMaker",
      logo: "logomaker.webp",
      link: "https://logomaker.com/",
    },
    {
      id: 4,
      name: "GraphicSprings",
      logo: "graphicsprings.webp",
      link: "https://graphicsprings.com/",
    },
  ];

  const [uploadedLogo, setUploadedLogo] = useState(null);
  const {ideaData,brandData,setBrandDataMain} = useContext(IdeaContext)

  const [brand] = useState(brandData?.brand_name?brandData?.brand_name:"");
  const [loading,setLoading] = useState();
  const hasFetched = useRef(false);
  const loggedToken = userToken();
  const [formDataToSend,setFormDataToSend] = useState()
  const [logoSuggPara,setLogoSuggPara]= useState('Your  Logo Design should be ...')

  const handleSaveBrand = async () => {

    try {
      // if(!formDataToSend || formDataToSend === undefined){

      // }
      setLoading(true)
      const response = await axios.post(`${RestAPI}/bi/save-brand`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response?.status === 200) {
        setBrandDataMain(response?.data?.data)
        Swal.fire({
          title: "Success",
          text: response?.data?.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      else{
        Swal.fire({
          title: "Error",
          text: response?.data?.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      setLoading(false)
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error in saving data",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error('Error saving the brand:', error);
    }
    finally{
      setLoading(false)
    }
  };
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedLogo(reader.result);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('logo', file);
      formData.append('brand_name', brand); // Add other form fields as needed
      formData.append('idea_id', ideaData.id);
      // handleSaveBrand(formData);
      setFormDataToSend(formData)
    }
  };
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };
  const fetchSuggData = async () => {
    try {
      let idea_name = localStorage.getItem('idea_name')

      const response = await axios.post(`${RestAPI}/ai/sugesForSectiion`,{idea_name,section_name:'Logo Design'}, axiosConfig);
      if (response.data && response.data.data) {
        setLogoSuggPara(response.data.data); 
       
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // setError("Error fetching data");
    } finally {
      // setIsLoading(false);  
    }
  };
  useEffect(() => {
    if (!hasFetched.current) {
        fetchSuggData()
        hasFetched.current = true;
    }
}, []);
// const handleRemoveImage = () => {
//   setUploadedLogo(null); // Clear the uploaded logo
//   // Optionally, clear the file input if needed
//   document.getElementById('logoUpload').value = ''; 
// };
  return (
    <>
      <Helmet>
        <title>Logo Design | ideax</title>
      </Helmet>
       
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaPallet /> Logo Design
          </h1>
          <div className="brand-logo-font">
            <div className="card" style={{height:'unset',width:'auto'}}>
              <h2 className="brand-name align-middle">{brand?brand :'Your brand name'}</h2>
            </div>
          </div>

          <div className="form">
            {/* Logo Upload Section */}

            {/* Preview or Drop Here Card */}
            <dvi className="logo-upload-main">
              <div className="logo-card">
                {uploadedLogo || brandData?.logo ? (
                  <div className="logo-preview">
                    <img
                      src={uploadedLogo || brandData?.logo}
                      alt="Uploaded Logo"
                      className="uploaded-logo"
                    />
                    
                  </div>
                ) : (
                  <div className="drop-here">
                    <p>Drop your logo here or click to upload</p>
                  </div>
                )}
                
              </div>
              
              <div className="form-group  logoUploadForm">
                {/* <label htmlFor="logoUpload">Upload Your Logo</label> */}
                <div className="immage-type-card-contaner">
                <div className="immage-type-card">
                  PNG
                </div>
                <div className="immage-type-card">
                  JPG
                </div>
                <div className="immage-type-card">
                  PDF
                </div>
                </div>
                {loading ?<div className="spinner"></div> :
                <input
                  type="file"
                  id="logoUpload"
                  accept="image/*"
                  name="logo"
                  // value={uploadedLogo}
                  onChange={handleLogoUpload}
                />}
                <button onClick={handleSaveBrand} style={{marginTop:'10px'}} disabled={formDataToSend ? false:true} className="btn">
                  Save
                </button>
              </div>
              
            </dvi>

            {/* Brand Name and Guidelines Section */}
            <div className="brand-guidelines item">
              <h2 id="section-heading">Based on your idea</h2>
              <div className="based-on-card">
                <p>
                {logoSuggPara}
                </p>
              </div>
            </div>

            {/* Logo Design Platforms Section */}
            <h2 id="section-heading">Platforms to Design Your Logo</h2>
            <div className="slider">
              {platforms.map((item) => (
                <div className="card" key={item.id}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item"
                  >
                    <img
                      src={"/platforms/" + item.logo}
                      alt={item.name}
                      className="logo"
                    />
                  </a>
                  <p className="platform-name">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
