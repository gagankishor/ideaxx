"use client";
import { Pletforms } from "@/components/components/Pletforms";
import { FaTools } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react"; // Using Lucide icon for close button
import WebsitePreview from "./WebsitePreviewComponent";

export const ToolWebsite = () => {
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
      logo: "/websiteTemplete/image.png",
      link: "https://wordpress.com/",
    },
    {
      id: 2,
      name: "",
      logo: "/websiteTemplete/image2.png",
      link: "https://www.shopify.com/",
    },
    {
      id: 3,
      name: "",
      logo: "/websiteTemplete/image3.png",
      link: "www.wix.com",
    },
  ];
  const templates2 = [
    { id: 1, name: "", logo: "/websiteTemplete/image.png", link: "#" },
    { id: 2, name: "", logo: "/websiteTemplete/image4.png", link: "#" },
    { id: 3, name: "", logo: "/websiteTemplete/image5.png", link: "#" },
    { id: 4, name: "", logo: "/websiteTemplete/image6.png", link: "#" },
    { id: 5, name: "", logo: "/websiteTemplete/image7.png", link: "#" },
    { id: 6, name: "", logo: "/websiteTemplete/image8.png", link: "#" },
    { id: 7, name: "", logo: "/websiteTemplete/image9.png", link: "#" },
    { id: 8, name: "", logo: "/websiteTemplete/image10.png", link: "#" },
    { id: 9, name: "", logo: "/websiteTemplete/image2.png", link: "#" },
    { id: 10, name: "", logo: "/websiteTemplete/image.png", link: "#" },
    { id: 11, name: "", logo: "/websiteTemplete/image4.png", link: "#" },
    { id: 12, name: "", logo: "/corporate-responsive.jpg", link: "#" },
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const openModal = (template) => {
    setSelectedTemplate(template);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTemplate(null);
  };
  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    content: {
      position: "relative",
      top: "auto",
      left: "auto",
      right: "auto",
      bottom: "auto",
      maxWidth: "90vw",
      maxHeight: "90vh",
      width: "auto",
      padding: "0",
      border: "none",
      background: "transparent",
      overflow: "auto",
    },
  };
  return (
    <>
      <div className=" relative">
        <h1 id="heading">
          <FaTools /> Business Tools
        </h1>
        <form action="" className="form relative">
          <div>{/* <h2>{ideaData.idea_name}</h2> */}</div>
          <div className="row">
            <WebsitePreview />
            <div className="col">
              <textarea
                name=""
                placeholder="Website details ......"
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
          <h2 id="section-heading" style={{ marginTop: "40px" }}>
            Templates
          </h2>
          <div className="slider" style={{ gap: "80px" }}>
            {templates.map((item) => {
              return (
                <div className="card" key={item.id}>
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
                  <p>{item.name} </p>
                </div>
              );
            })}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customModalStyles}
            contentLabel="Template Modal"
          >
            {selectedTemplate && (
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                {/* Modal content */}
                <div className="max-h-[90vh] overflow-y-auto">
                  <div className="p-4">
                    <img
                      src={selectedTemplate.logo}
                      alt={selectedTemplate.name}
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: "80vh" }}
                    />
                    {selectedTemplate.name && (
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {selectedTemplate.name}
                        </h3>
                      </div>
                    )}
                    {selectedTemplate.link !== "#" && (
                      <div className="mt-4 text-center">
                        <a
                          href={selectedTemplate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-7 00 transition-colors"
                        >
                          View Template
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Modal>
          <div className="slider">
            {templates2.map((item) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  style={{ height: "250px" }}
                  onClick={() => openModal(item)}
                >
                  <div
                    key={item.id}
                    className="item"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "200px",
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
        </form>
      </div>
    </>
  );
};
