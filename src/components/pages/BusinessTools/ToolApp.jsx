"use client";
import { Pletforms } from "@/components/components/Pletforms";
import { useState } from "react";
import { FaTools } from "react-icons/fa";

export const ToolApp = () => {
  const platforms = [
    {
      id: 1,
      name: "wordpress",
      logo: "/WordPress.png",
      link: "https://wordpress.com/",
    },
    {
      id: 2,
      name: "shopify",
      logo: "/platforms/shopify.png",
      link: "https://www.shopify.com/",
    },
    { id: 3, name: "Wix", logo: "/Wix.png", link: "www.wix.com" },
    {
      id: 4,
      name: "Weebly",
      logo: "/pngegg.png",
      link: "https://www.weebly.com/",
    },
  ];
  const templates = [
    {
      id: 1,
      name: "",
      logo: "/dashboard/bussiness-tools/app-image/image.png",
      link: "#",
    },
    {
      id: 2,
      name: "",
      logo: "/dashboard/bussiness-tools/app-image/image1.png",
      link: "#",
    },
    {
      id: 3,
      name: "",
      logo: "/dashboard/bussiness-tools/app-image/image2.png",
      link: "#",
    },
    {
      id: 4,
      name: "",
      logo: "/dashboard/bussiness-tools/app-image/image3.png",
      link: "#",
    },
    {
      id: 5,
      name: "",
      logo: "/dashboard/bussiness-tools/app-image/image4.png",
      link: "#",
    },
    {
      id: 6,
      name: "",
      logo: "/dashboard/bussiness-tools/app-image/image5.png",
      link: "#",
    },
  ];
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplate, setShowTemplate] = useState(false);
  const [sentTemplate, setSentTemplate] = useState(false);
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <FaTools /> Business Tools
          </h1>
          <form action="" className="form">
            <div className="row">
              <div
                className="card-globle"
                style={{
                  justifyContent: "center",
                  width: "120px",
                  height: "200px",
                }}
              >
                No App yet
              </div>
              <div className="col">
                <textarea
                  name=""
                  placeholder="App details ......"
                  id=""
                  style={{
                    justifyContent: "center",
                    width: "400px",
                    height: "200px",
                  }}
                ></textarea>
              </div>
            </div>
            <Pletforms platforms={platforms} title="Platforms" />
            <div className="mt-4 mx-auto text-center">
              <button
                onClick={() => setShowTemplate(true)}
                className="w-[200px] flex items-center justify-center gap-2 px-4 py-2 rounded-full border-white border-1 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Create New App
              </button>
            </div>
          </form>
          <div className="ml-10">
            <h4 id="section-heading" style={{ marginTop: "40px" }}>
              Templates
            </h4>
            <div className="flex flex-wrap gap-5">
              {templates.map((item) => {
                const isSelected = selectedTemplate && selectedTemplate.id === item.id;
                return (
                  <div
                    className={`card ${isSelected ? 'selected' : ''}`}
                    key={item.id}
                    style={{
                      height: "250px",
                      cursor: "pointer",
                      border: isSelected ? "2px solid blue" : "1px solid gray",
                      boxShadow: isSelected ? "0 0 10px rgba(0, 0, 255, 0.5)" : "none",
                    }}
                    onClick={() => setSelectedTemplate(item)}
                  >
                    <div
                      key={item.id}
                      className="item"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "300px",
                        width: "240px",
                        padding: "10px 0px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      <img src={item.logo} alt={item.name} />
                    </div>
                    <p></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
