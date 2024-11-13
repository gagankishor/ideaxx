import { useState, useContext } from "react";
import {  ChromePicker } from "react-color";
import { FaPalette } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";
import CardSlider from "./components/CardSlider";
import { IdeaContext } from "../../config/ideaDataContext";
import "./BusinessColor.css";
import Swal from "sweetalert2";
export default function BusinessColor() {
  const cards = [
    {
      id: 1,
      image: "/pampers.png",
      color: ["#2B8C8C", "#13B7B7", "#fcba03"],
    },
    {
      id: 2,
      image: "/fedex.png",
      color: ["#1D0958", "#DE4D31", "#FBF8F7"],
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png",
      color: ["#4C93DA", "#FBF8F7", "#000000"],
    },
    {
      id: 4,
      image: "/cocacola.png",
      color: ["#ED1C16", "#FFFFFF", "#000000"],
    },
    {
      id: 5,
      image: "/microsoft.png",
      color: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"],
    },
    {
      id: 6,
      image: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      color: ["#A2AAAD", "#000000", "#FFFFFF"],
    },
    {
      id: 7,
      image:
        "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
      color: ["#FFCC00", "#DA291C"],
    },
    {
      id: 8,
      image: "/pepsi.png",
      color: ["#004B93", "#E32934", "#FFFFFF"],
    },
    {
      id: 9,
      image: "https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo.png",
      color: ["#000000", "#FFFFFF"],
    },
    {
      id: 10,
      image: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
      color: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"],
    },
  ];
  const [color, setColor] = useState("#6AB0B0");
  // const [generatedPalette, setGeneratedPalette] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { ideaData, brandData, setBrandDataMain } = useContext(IdeaContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [colors, setColors] = useState([
    "#34A853",
    "#34A853",
    "#FBBC05",
    "#EA4335",
  ]);
  const loggedToken = userToken();

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };
  const handleColorChange = (color) => {
    const updatedColors = [...colors];
    updatedColors[selectedIndex] = color.hex;
    setColors(updatedColors);
    setColor(color.hex);
  };

  const fetchColorPalette = async () => {
    setLoading(true);
    try {
      const authToken = userToken();
      const response = await axios.post(
        `${RestAPI}/bi/suggest-color-plate`,
        { color: color },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setColors(response.data.data);
      // setGeneratedPalette(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the color palette:", error);
    } finally {
      setLoading(false);
    }
  };

  // const defaultColors = ["#F0F4F4", "#D9E6E6", "#A5C7C7", "#6AB0B0", "#2B8C8C"];
  const handleColorSelection = (selectedColors) => {
    setColors(selectedColors);
    console.log("Selected colors:", selectedColors);
  };
  const handaleSave = async () => {
    try {
      setSaving(true);
      const colorsToSend = {
        color1: colors.length > 0 ? colors[0] : null,
        color2: colors.length > 1 ? colors[1] : null,
        color3: colors.length > 2 ? colors[2] : null,
        color4: colors.length > 3 ? colors[3] : null,
        color5: colors.length > 4 ? colors[4] : null,
      };
      const payload = {
        idea_id: ideaData?.id || "",
        ...colorsToSend,
      };
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
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error in saving data",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error fetching data:", error);
    } finally {
      setSaving(false);
    }
  };

  const platforms = [
    {
      id: 1,
      name: "Canva",
      logo: "canva.png",
      link: "https://canva.com/",
    },
    {
      id: 2,
      name: "Adobe Color",
      logo: "adobe-color.png",
      link: "https://color.adobe.com/",
    },
    {
      id: 3,
      name: "Coolors.co",
      logo: "coolors.svg",
      link: "https://coolors.co",
    },
    {
      id: 4,
      name: "Color.io",
      logo: "colorio.svg",
      link: "https://color.io",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Brand Color | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaPalette /> Brand Color
          </h1>
          <div className="form">
            <h2 id="section-heading">Worldwide Brands </h2>
            <CardSlider />
            <div className="logo-container" style={{ marginBottom: "40px" }}>
              <div className="logo-inner-wrapper">
                <div className="logo-color">
                  {colors?.map((color, index) => (
                    <div
                      key={index}
                      className="sub-color"
                      style={{
                        backgroundColor: color,
                        width: "50px",
                        border:
                          index === selectedIndex
                            ? "2px solid rgba(0, 0, 0)"
                            : "unset",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedIndex(index)}
                    ></div>
                  ))}
                </div>

                <div className="image-container">
                  <img src={brandData?.logo} alt="Brand Logo" />
                </div>

                <ChromePicker
                  color={color}
                  onChangeComplete={handleColorChange}
                />
              </div>

              <div className="button-group">
                <button
                  className="btn"
                  onClick={fetchColorPalette}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="spinner"></div>
                  ) : (
                    "Generate Palette"
                  )}
                </button>
                <button className="btn" onClick={handaleSave} disabled={saving}>
                  {saving ? <div className="spinner"></div> : "Save"}
                </button>
              </div>
            </div>

            <CardSlider
              cards={cards}
              logo={brandData?.logo}
              onColorSelect={handleColorSelection}
            />

            <h2 id="section-heading" style={{ marginTop: "40px" }}>
              Platforms to get colors
            </h2>
            <div className="slider">
              {platforms.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      className="item"
                    >
                      <img src={"/platforms/" + item?.logo} alt={item.name} />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
