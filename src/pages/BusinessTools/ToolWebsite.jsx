import React, { useContext } from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { FaTools, FaWeebly } from "react-icons/fa";
import { IdeaContext } from "../../config/ideaDataContext";
import { Pletforms } from "../../components/Pletforms";

export const ToolWebsite = () => {
  const { ideaData, brandData, setBrandDataMain } = useContext(IdeaContext);
  const platforms = [
    { id: 1, name: "wordpress", logo: "/WordPress.png", link: "https://wordpress.com/" },
    { id: 2, name: "shopify", logo: "/platforms/shopify.png", link: "https://www.shopify.com/" },
    { id: 3, name: "Wix", logo: "/Wix.png", link: "www.wix.com" },
    { id: 4, name: "Weebly", logo: "/pngegg.png", link: "https://www.weebly.com/" },
  ];
  const templates  = [
    { id: 1, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "https://wordpress.com/" },
    { id: 2, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "https://www.shopify.com/" },
    { id: 3, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "www.wix.com" },
  ];
  const templates2  = [
    { id: 1, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 2, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 3, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 4, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 1, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 2, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 3, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 4, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 1, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 2, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 3, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },
    { id: 4, name: "", logo: "https://webthemez.com/wp-content/uploads/2017/05/corporate-responsive-website-template-1-768x497.jpg", link: "#" },

  ];

  return (
    <>
      <Helmet>
        <title> Website | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaTools /> Business Tools
          </h1>
          <form action="" className="form">
            <div>{/* <h2>{ideaData.idea_name}</h2> */}</div>
            <div className="row">
              

              <div
                className="card-globle"
                style={{ justifyContent: "center", width: "400px",height:'200px' }}
              >
                No website yet
              </div>
              <div className="col" >
                <textarea name="" placeholder="Website details ......" id="" style={{ justifyContent: "center", width: "400px",height:'200px' }}></textarea>
              </div>
            </div>
            <Pletforms platforms={platforms} title="Platforms" />
            <h2 id="section-heading" style={{marginTop:'40px'}}>Templates</h2>
            <div className="slider" style={{gap:'80px'}}>
              {templates.map((item) => {
                return (
                  <div className="card">
                    <div
                      key={item.id}
                      className="item"
                      style={{display:'flex',flexDirection:'column',height:'300px', width:'240px' ,padding:'10px 0px 10px' , borderRadius:'5px'}}
                    >
                      <img src={item.logo} alt={item.name} />
                      <div>
                        
                        Business Intellect
                        </div>
                    </div>
                    <p>{item.name} </p>
                  </div>
                );
              })}
            </div>
            <div className="slider">
              {templates2.map((item) => {
                return (
                  <div className="card" style={{height:'250px'}}>
                    <div
                      key={item.id}
                      className="item"
                      style={{display:'flex',flexDirection:'column',height:'200px' ,padding:'10px 0px 10px' , borderRadius:'5px'}}
                    >
                      <img src={item.logo} alt={item.name} />
                      <div>
                        
                      Business Intellect
                      </div>
                    </div>
                    <p></p>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
