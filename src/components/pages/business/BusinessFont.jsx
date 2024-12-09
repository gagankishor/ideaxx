import { FaFont, FaRobot } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import "./BusinessFont.css";
import { TbBulb } from "react-icons/tb";
import { IdeaContext } from "../../config/ideaDataContext";
import Swal from "sweetalert2";

export default function BusinessFont() {
  const platforms = [
    {
      id: 1,
      name: "Google Fonts",
      logo: "google-fonts.png",
      link: "https://fonts.google.com",
    },
    { id: 2, name: "Adobe Fonts", logo: "adobe-fonts.png", link: "#" },
    { id: 3, name: "Font Squirrel", logo: "font-squirrel.png", link: "#" },
  ];
  // const fonts = [
  //   { name: "Vintage", value: "Lora" },
  //   { name: "Classic", value: "Times New Roman" },
  //   { name: "Modern", value: "Roboto" },
  //   { name: "Trendy", value: "Poppins" },
  //   { name: "Elegant", value: "Playfair Display" },
  //   { name: "Bold", value: "'Oswald', sans-serif" },
  //   { name: "Minimal", value: "'Montserrat', sans-serif" },
  //   { name: "Casual", value: "'Open Sans', sans-serif" },
  //   { name: "Handwritten", value: "'Pacifico', cursive" },
  //   { name: "Futuristic", value: "'Exo 2', sans-serif" },
  // ];

  const blogs = [
    { id: 1, name: "Typography Blog", logo: "typography-blog.webp", link: "#" },
    { id: 2, name: "Font Trends", logo: "font-trends.webp", link: "#" },
    { id: 3, name: "Design Insights", logo: "design-insights.webp", link: "#" },
  ];
  const fontSugg = [
    "Classic",
    "Modern",
    "Trendy",
    "Vintage",
  ];
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingprimary, setIsFetchingprimary] = useState(false);
  const [isFetchingsecondary, setIsFetchingsecondary] = useState(false);
  const [isFetchingthird, setIsFetchingthird] = useState(false);
  const [isFetchingemail, setIsFetchingemail] = useState(false);
  const [isSavingprimary, setIsSavingprimary] = useState(false);
  const [isSavingsecondary, setIsSavingsecondary] = useState(false);
  const [isSavingthird, setIsSavingthird] = useState(false);
  const [isSavingemail, setIsSavingemail] = useState(false);
  const [ideaFont, setIdeaFont] = useState(
    localStorage.getItem("font_context") || "Classic"
  );
  // const [brand] = useState(localStorage.getItem("brand"));

  const [aiSugg, setAiSugg] = useState("Helvetica Neue");
  const { ideaData, brandData, setBrandDataMain } = useContext(IdeaContext);

  const classicFonts = [
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Baskerville",
    "Palatino",
    "Courier New",
    "Helvetica",
    "Arial",
    "Verdana",
    "Book Antiqua",
    "Didot",
    "Century Schoolbook",
    "Futura",
    "Bodoni",
    "Optima",
    "Franklin Gothic",
    "Gill Sans",
    "Lucida Bright",
    "Rockwell",
    "Sabon"
  ];
    const modernFonts = [
    "Roboto",
    "Lato",
    "Montserrat",
    "Open Sans",
    "Poppins",
    "Noto Sans",
    "Raleway",
    "Proxima Nova",
    "Fira Sans",
    "Work Sans",
    "Source Sans Pro",
    "Ubuntu",
    "Nunito",
    "Playfair Display",
    "Avenir",
    "Circular",
    "DM Sans",
    "Muli",
    "Inter",
    "Gotham"
  ];
    const trendyFonts = [
    "Bebas Neue",
    "Brandon Grotesque",
    "Circular Std",
    "Neue Haas Grotesk",
    "GT Walsheim",
    "Suisse Int'l",
    "Sora",
    "Clash Display",
    "Space Grotesk",
    "Apercu",
    "Maison Neue",
    "Sharp Grotesk",
    "Canela",
    "Recoleta",
    "Red Hat Display",
    "Cera Pro",
    "Graphik",
    "DM Serif Display",
    "Tiempos",
    "Noe Display"
  ];
  
  const vintageFonts = [
    "Copperplate",
    "Garamond",
    "Clarendon",
    "Bodoni",
    "Bookman",
    "Old Standard TT",
    "Playfair Display",
    "Didot",
    "Monotype Corsiva",
    "ITC Benguiat",
    "Proxima Nova Soft",
    "Georgia",
    "Times New Roman",
    "Lydian",
    "Souvenir",
    "Serif Gothic",
    "Pistilli Roman",
    "Windsor",
    "Hoefler Text",
    "Trajan"
  ];
  

  const [selectedPrimaryFont, setSelectedPrimaryFont] = useState('');
  const [selectedSecondaryFont, setSelectedSecondaryFont] = useState('');
  const [selectedThirdFont, setSelectedThirdFont] = useState('');
  const [selectedEmailFont, setSelectedEmailFont] = useState('');
  const [availableFonts, setAvailableFonts] = useState(classicFonts);


  const [font_type, setFont_type] = useState('Classic')
  const handleFontChange = (e) => {
    const value = e.target.value;
    setIdeaFont(value);
    setSelectedPrimaryFont(value)
    localStorage.setItem("font_context", value);
  };
  const handleFontTypeCardClick = (name) => {
    setFont_type(name);
    switch (name) {
      case "Classic":
        setAvailableFonts(classicFonts);
        break;
      case "Modern":
        setAvailableFonts(modernFonts);
        break;
      case "Trendy":
        setAvailableFonts(trendyFonts);
        break;
      case "Vintage":
        setAvailableFonts(vintageFonts);
        break;
      default:
        setAvailableFonts([]);
    }
  };
  const handleCardClick = (name) => {
    setIdeaFont(name);
    // setSelectedCard(item);

    localStorage.setItem("font_context", name);
  };
  const loggedToken = userToken();

  const axiosConfig = {
    headers: {  
      "Content-Type": "application/json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };
  const handaleSave = async (payload,fontType) => {
    try {
      // setIsLoading(true);
      switch (fontType) {
        case 'primary':
            
            setIsSavingprimary(true)
            break;
        case 'secondary':
          
          setIsSavingsecondary(true)
          break;
        case 'third':
          
          setIsSavingthird(true)
          break;
        case 'email':
          setIsSavingemail(true)
          break;
        default:
          return;
      }
      const response = await axios.post(
        `${RestAPI}/bi/save-brand`,
        payload,
        axiosConfig
      );
      if (response.data && response.data.data) {
        console.log(response.data);
        setBrandDataMain(response.data.data);
        Swal.fire({
          title: "Success",
          text: response?.data?.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: response?.data?.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: " Server Error ",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error fetching data:", error);
    }finally {
      switch (fontType) {
        case 'primary':
          setIsSavingprimary(false);
          break;
        case 'secondary':
          setIsSavingsecondary(false);
          break;
        case 'third':
          setIsSavingthird(false);
          break;
        case 'email':
          setIsSavingemail(false);
          break;
        default:
          setIsSavingemail(false);
          break;
      }
    }
    
  };
  const fetchFont = async (fontType,payload) => {
  let url;
  let ideaFont;

  switch (fontType) {
    case 'sugg':
      ideaFont = selectedPrimaryFont;
      url = `${RestAPI}/bi/suggest-primary-font`;
      break;
    case 'primary':
        ideaFont = selectedPrimaryFont;
        url = `${RestAPI}/bi/suggest-primary-font`;
        break;
    case 'secondary':
      ideaFont = selectedSecondaryFont;
      url = `${RestAPI}/bi/suggest-secondary-font`;
      break;
    case 'third':
      ideaFont = selectedThirdFont;
      url = `${RestAPI}/bi/suggest-third-font`;
      break;
    case 'email':
      ideaFont = selectedEmailFont;
      url = `${RestAPI}/bi/suggest-email-font`;
      break;
    default:
      ideaFont = selectedEmailFont;
      url = `${RestAPI}/bi/suggest-email-font`;
      break;
  }

  if (!ideaFont && fontType!='sugg') {
    alert(`Please enter a description for the ${fontType} font first.`);
    return;
  }
  switch (fontType) {
    case 'sugg':
      
      setIsFetching(true); 

      break;
    case 'primary':
        
        setIsFetchingprimary(true)
        break;
    case 'secondary':
      
      setIsFetchingsecondary(true)
      break;
    case 'third':
      
      setIsFetchingthird(true)
      break;
    case 'email':
      setIsFetchingemail(true)
      break;
    default:
      alert(`Please enter a description for the  font first.`);
      return;
  }
  try {
    let idea_name = localStorage.getItem("idea_name");

    console.log(idea_name);
    const response = await axios.post(
      url,
      payload,
      {
        headers: {
          Authorization: `Bearer ${userToken()}`,
        },
      }
    );

    if (fontType === 'sugg') {
      setAiSugg(response?.data?.data[0]);
    } else if (fontType === 'primary') {
      setSelectedPrimaryFont(response?.data?.data[0]);
    } else if (fontType === 'secondary') {
      setSelectedSecondaryFont(response?.data?.data[0]);
    } else if (fontType === 'third') {
      setSelectedThirdFont(response?.data?.data[0]);
    } else if (fontType === 'email') {
      setSelectedEmailFont(response?.data?.data[0]);
    }

    localStorage.setItem(`${fontType}_font_context`, JSON.stringify(response.data.data));
  } catch (error) {
    console.error(`There was an error fetching the ${fontType} font suggestion:`, error);
  } finally {
    switch (fontType) {
      case 'sugg':
        
        setIsFetching(false); 
  
        break;
      case 'primary':
          
          setIsFetchingprimary(false)
          break;
      case 'secondary':
        
        setIsFetchingsecondary(false)
        break;
      case 'third':
        
        setIsFetchingthird(false)
        break;
      case 'email':
        setIsFetchingemail(false)
        break;
      default:
        setIsFetchingemail(false)
        break;
    }
  }
};
useEffect(()=>{
  fetchFont('sugg')
},[])

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
          <div className="brand-logo-font">
            <div className="card" style={{ width: "unset" }}>
              <h2 className="brand-name align-middle">
                {brandData?.brand_name
                  ? brandData?.brand_name
                  : "please select brand name"}
              </h2>
            </div>
            <div className="card">
              <h2 className="brand-name align-middle">
                <img
                  src={brandData?.logo ? brandData?.logo : "/logo.png"}
                  alt="Uploaded Logo"
                  className="uploaded-logo"
                />
              </h2>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "#d3d3d3",
                width: "unset",
                minWidth: "180px",
              }}
            >
              <h2
                className="brand-name align-middle"
                style={{ fontFamily: ideaFont }}
              >
                {brandData?.primary_font ? brandData?.primary_font : ideaFont}
              </h2>
            </div>
          </div>

          <div
            className="based-on-card"
            style={{ maxWidth: "80%", marginLeft: "10%", marginTop: "30px" }}
          >
            <p>
              Remember, consistency is key in establishing a strong brand
              identity.
            </p>
            <p>
              Stick to your chosen fonts across various platforms and materials
              to create a cohesive and professional look for your business.
            </p>
          </div>
          <form className="form">
            <div className="slider" style={{ justifyContent: "space-around" }}>
              {fontSugg.map((item, index) => (
                <div
                  className="brand-name-sugg-card"
                  key={index}
                  onClick={() => handleFontTypeCardClick(item)}
                  style={{
                    borderRadius: "5px",
                    fontFamily: item,
                    backgroundColor:
                    font_type === item ? "#d3d3d3" : "var(--bg-highlight)", // Change background color if selected
                  }}
                >
                  <p className="item">{item}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <h2 id="section-heading">
                {" "}
                <TbBulb size={30} style={{ marginRight: "10px" }} />
                Based on your idea we suggest to use
              </h2>
            </div>
            <div className="form-group" style={{ alignItems: "center" }}>
              <div className="label-flex" style={{ justifyContent: "left" }}>
                <div
                  className="brand-name-sugg-card"
                  key={5}
                  onClick={() => handleCardClick(aiSugg)}
                  style={{
                    borderRadius: "5px",
                    fontFamily: aiSugg,
                    minWidth: "300px",
                    backgroundColor:
                      ideaFont === aiSugg ? "#d3d3d3" : "var(--bg-highlight)", // Change background color if selected
                  }}
                >
                  <p className="item">{aiSugg}</p>
                </div>

                <div className="right-label">
                  <button
                    type="button"
                    className="btn"
                    disabled={isFetching}
                    onClick={(e) => {
                      e.preventDefault();
                      fetchFont('sugg',{idea_id:ideaData.id,font_type:font_type});
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
            </div>
            <h2 id="section-heading">Primary Font Options</h2>
            <select className="font-options" onChange={handleFontChange}>
              <option>Select Primary Font</option>
              {availableFonts.map((font, index) => (
                <option key={index} value={font}>
                  {font}
                </option>
              ))}
            </select>
            
            <p>
              This is the main font used in your logo and primary brand
              elements. It should be distinctive, easy to read, and reflective
              of your brand identity.
            </p>
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "",
                marginTop: "45px",
                alignItems: "center",
              }}
            >
              <div
                // className="brand-name-sugg-card"
                style={{
                  position: "relative",
                  padding: "10px",
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
                <input
                  type="text"
                  className="form-input"
                  placeholder="Make it for me"
                  value={selectedPrimaryFont}
                  onChange={(e) => setSelectedPrimaryFont(e.target.value)}

                />
              </div>
              <div className="right-label" style={{ marginLeft: "10px" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    fetchFont('primary',{idea_id:ideaData.id,font_type:font_type,keyWord:selectedPrimaryFont})
                  }}
                > 
                  {isFetchingprimary ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      Edit <FaRobot />
                    </>
                  )}
                </button>
              </div>
              <button
                type="button"
                className="btn"
                style={{ marginLeft: "5px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  // saveSlogan(ideaSloganData,1);
                  handaleSave(
                    { idea_id: ideaData?.id || "", primary_font: selectedPrimaryFont },
                    'primary'
                  );
                }}
              >
                {isSavingprimary? <div className="spinner"></div>:'Sve This'
              } 
              </button>
            </div>
            <h2 id="section-heading">Secondary Font (H2)</h2>
            <select className="font-options" onChange={(e) => setSelectedSecondaryFont(e.target.value)}>
              <option>Select Secondary Font</option>

              {availableFonts.map((font, index) => (
                <option key={index} value={font}>
                  {font}
                </option>
              ))}
            </select>
            <p>
              A complementary font that can be used for headings, subheadings,
              or other key elements. It should pair well with your primary font
              but offer some visual contrast.
            </p>
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "",
                marginTop: "45px",
                alignItems: "center",
              }}
            >
              <div
                // className="brand-name-sugg-card"
                style={{
                  position: "relative",
                  padding: "10px",
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
                <input
                  type="text"
                  className="form-input"
                  placeholder="Make it for me"
                  value={selectedSecondaryFont}
                  onChange={(e) => setSelectedSecondaryFont(e.target.value)}

                />
              </div>
              <div className="right-label" style={{ marginLeft: "10px" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    fetchFont('secondary',{idea_id:ideaData.id,font_type:font_type,primary_font:selectedPrimaryFont,keyWord:selectedSecondaryFont})

                  }}
                >
                  {isFetchingsecondary ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      Edit <FaRobot />
                    </>
                  )}
                </button>
              </div>
              <button
                type="button"
                className="btn"
                style={{ marginLeft: "5px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  // saveSlogan(ideaSloganData,1);
                  handaleSave(
                    { idea_id: ideaData?.id || "", secondary_font: selectedSecondaryFont },
                    'secondary'
                  );
                }}
              >
{isSavingsecondary? <div className="spinner"></div>:'Sve This'
              }               </button> 
            </div>
            <h2 id="section-heading">Accent Font (H3) (optional)</h2>
                  <select className="font-options"
                  onChange={(e) => setSelectedThirdFont(e.target.value)}
                  
                  >
              <option>Select Accent Font</option>

              {availableFonts.map((font, index) => (
                <option key={index} value={font}>
                  {font}
                </option>
              ))}
            </select>
            <p>
              In some cases, businesses might choose a third font for special
              occasions or to add a unique touch to specific marketing
              materials. This font should still align with the overall brand
              aesthetic.
            </p>
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "",
                marginTop: "45px",
                alignItems: "center",
              }}
            >
              <div
                // className="brand-name-sugg-card"
                style={{
                  position: "relative",
                  padding: "10px",
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
                <input
                  type="text"
                  className="form-input"
                  placeholder="Make it for me"
                  value={selectedThirdFont}
                  onChange={(e) => setSelectedThirdFont(e.target.value)}

                />
              </div>
              <div className="right-label" style={{ marginLeft: "10px" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    fetchFont('third',{idea_id:ideaData.id,font_type:font_type,secondary_font:selectedSecondaryFont,keyWord:selectedThirdFont})

                  }}
                >
                  {isFetchingthird ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      Edit <FaRobot />
                    </>
                  )}
                </button>
              </div>
              <button
                type="button"
                className="btn"
                style={{ marginLeft: "5px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  // saveSlogan(ideaSloganData,1);
                  handaleSave(
                    { idea_id: ideaData?.id || "", third_font: selectedThirdFont },
                    'third'
                  );
                }}
              >
                {isSavingthird? <div className="spinner"></div>:'Sve This'
              } 
                
              </button>
            </div>
            <h2 id="section-heading" >Email Font (optional) </h2>
            <select className="font-options" onChange={(e) => setSelectedEmailFont(e.target.value)}>
              <option>Select Email Font</option>
              {availableFonts.map((font, index) => (
                <option key={index} value={font}>
                  {font}
                </option>
              ))}
            </select>
            <p>
              When it comes to choosing fonts for email, it essential to
              prioritize readability and compatibility across various email
              clients. Consider the purpose and tone of your emails when
              selecting fonts to ensure they align with your brand or message.
            </p>
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "",
                marginTop: "45px",
                alignItems: "center",
              }}
            >
              <div
                // className="brand-name-sugg-card"
                style={{
                  position: "relative",
                  padding: "10px",
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
                <input
                  type="text"
                  className="form-input"
                  placeholder="Make it for me"
                  value={selectedEmailFont}
                  onChange={(e) => setSelectedEmailFont(e.target.value)}

                />
              </div>
              <div className="right-label" style={{ marginLeft: "10px" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    fetchFont('email',{idea_id:ideaData.id,font_type:font_type,keyWord:selectedEmailFont})

                  }}
                >
                  {isFetchingemail ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      Edit <FaRobot />
                    </>
                  )}
                </button>
              </div>
              <button
                type="button"
                className="btn"
                style={{ marginLeft: "5px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  // saveSlogan(ideaSloganData,1);
                  handaleSave(
                    { idea_id: ideaData?.id || "", email_font: selectedEmailFont },
                    'email'
                  );
                }}
              >
              {isSavingemail? <div className="spinner"></div>:'Sve This'
              }  
              </button>
            </div>
            <p>
              Remember that some email clients may not support custom fonts, so
              it advisable to use widely accepted and web-safe font choices
              for better compatibility
            </p>
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
                    <img src={"/platforms/blog.webp"} alt={item.name} />
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
{
  /* <h2 id="section-heading">Brand Name</h2>
            <p>
              Remember, consistency is key in establishing a strong brand
              identity...
            </p>

            <h2 id="section-heading">Primary Font Options</h2>
            <ul className="font-options">
              <li>Vintage</li>
              <li>Classic</li>
              <li>Modern</li>
              <li>Trendy</li>
            </ul>

            <h2 id="section-heading">Secondary Font (H2)</h2>
            <p>
              A complementary font that can be used for headings, subheadings,
              or other key elements...
            </p>

            <h2 id="section-heading">Accent Font (H3) (optional)</h2>
            <p>In some cases, businesses might choose a third font...</p>

            <h2 id="section-heading">Email Font (optional)</h2>
            <p>
              When it comes to choosing fonts for email, it's essential to
              prioritize readability...
            </p>

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
                    <img src={"/platforms/blog.webp"} alt={item.name} />
                  </a>
                  <p>{item.name}</p>
                </div>
              ))}
            </div> */
}
