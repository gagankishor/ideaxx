import React, { useState, useEffect } from "react";
import { CirclePicker, ChromePicker } from "react-color";
import { FaPalette } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import axios from "axios";
import { RestAPI } from "../../config/Api";
import { userToken } from "../../config/Auth";

export default function BusinessColor() {
  const [color, setColor] = useState("#6AB0B0");
  const [generatedPalette, setGeneratedPalette] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleColorChange = (color) => {
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
      setGeneratedPalette(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the color palette:", error);
    } finally {
      setLoading(false);
    }
  };

  const defaultColors = ["#F0F4F4", "#D9E6E6", "#A5C7C7", "#6AB0B0", "#2B8C8C"];

  const renderGeneratedPalette = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {generatedPalette.map((colorCode, index) => (
          <div
            key={index}
            style={{
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: colorCode,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            ></div>
            <p>{colorCode}</p>
          </div>
        ))}
      </div>
    );
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
            <div style={{ marginBottom: "20px" }}>
              <h2 id="section-heading">Choose Your Color</h2>
              <ChromePicker
                color={color}
                onChangeComplete={handleColorChange}
              />
              <p style={{ margin: "1rem 0" }}>Or pick a default color:</p>
              <CirclePicker
                colors={defaultColors}
                onChangeComplete={handleColorChange}
              />
            </div>

            <div style={{ margin: "2rem 0" }}>
              <button
                className="btn"
                onClick={fetchColorPalette}
                disabled={loading}
              >
                {loading ? <div className="spinner"></div> : "Generate Palette"}
              </button>
            </div>

            <div>
              {generatedPalette.length > 1 ? <h2 id="section-heading">Generated Palette</h2> : null}
              {renderGeneratedPalette()}
            </div>

            <h2 id="section-heading">Platforms to get colors</h2>
            <div className="slider">
              {platforms.map((item) => {
                return (
                  <div className="card">
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      className="item"
                    >
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
          </div>
        </div>
      </div>
    </>
  );
}
