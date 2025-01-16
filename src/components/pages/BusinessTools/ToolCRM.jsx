"use client";
import { Pletforms } from "@/components/components/Pletforms";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
// import CrmPreview from "./CrmPreviewComponent";

export const ToolCRM = () => {
  // CRM platforms
  const platforms = [
    {
      id: 1,
      name: "Salesforce",
      logo: "https://images.unsplash.com/photo-1561948955-6be07b79b40d",
      link: "https://www.salesforce.com/",
    },
    {
      id: 2,
      name: "HubSpot",
      logo: "https://images.unsplash.com/photo-1590487980193-c13d3d0531fa",
      link: "https://www.hubspot.com/",
    },
    {
      id: 3,
      name: "Zoho CRM",
      logo: "https://images.unsplash.com/photo-1579071292944-8d61e5e9aaf5",
      link: "https://www.zoho.com/crm/",
    },
    {
      id: 4,
      name: "Microsoft Dynamics",
      logo: "https://images.unsplash.com/photo-1573496258551-b44e9f1717b2",
      link: "https://dynamics.microsoft.com/",
    },
  ];

  // Featured CRM templates
  const templates = [
    {
      id: 1,
      name: "Sales Pipeline",
      logo: "https://images.unsplash.com/photo-1614286823992-8d50e206d81d",
      link: "#",
    },
    {
      id: 2,
      name: "Customer Service",
      logo: "https://images.unsplash.com/photo-1581091877631-f3273c9c3f24",
      link: "#",
    },
    {
      id: 3,
      name: "Marketing Automation",
      logo: "https://images.unsplash.com/photo-1518992805437-191799f79b58",
      link: "#",
    },
  ];

  // Additional CRM templates
  const templates2 = [
    {
      id: 1,
      name: "Lead Management",
      logo: "https://images.unsplash.com/photo-1553221370-559e49cb1ac9",
      link: "#",
    },
    {
      id: 2,
      name: "Contact Center",
      logo: "https://images.unsplash.com/photo-1547750749-f3640a42b42c",
      link: "#",
    },
    {
      id: 3,
      name: "Account Management",
      logo: "https://images.unsplash.com/photo-1526171994105-f2164a1f2000",
      link: "#",
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      logo: "https://images.unsplash.com/photo-1526907482157-c33044de2b2d",
      link: "#",
    },
    {
      id: 5,
      name: "Email Campaign",
      logo: "https://images.unsplash.com/photo-1570906928813-b1a00c98c52f",
      link: "#",
    },
    {
      id: 6,
      name: "Project Management",
      logo: "https://images.unsplash.com/photo-1554168742-bad9f0e9ef6c",
      link: "#",
    },
    {
      id: 7,
      name: "Support Ticketing",
      logo: "https://images.unsplash.com/photo-1547084363-2f1b489e0934",
      link: "#",
    },
    {
      id: 8,
      name: "Sales Forecasting",
      logo: "https://images.unsplash.com/photo-1532612481-8f3f7d12b30a",
      link: "#",
    },
    {
      id: 9,
      name: "Customer Portal",
      logo: "https://images.unsplash.com/photo-1563954170-d9ffdd3fa957",
      link: "#",
    },
  ];


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplate, setShowTemplate] = useState(false);
  const [sentTemplate, setSentTemplate] = useState(false);

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
      <div className="">
        <h1 id="heading">
          <FaUsers /> CRM Solutions
        </h1>
        <form action="" className="form relative">
          {showTemplate ? (
            sentTemplate ? (
              <>
                <div className="flex items-center justify-center min-h-screen p-6">
                  <div className="text-center p-6 rounded-lg shadow-md max-w-md w-full mb-6">
                    <p className="text-lg text-gray-700 mb-4">
                      Request has been sent to your CRM implementation team. We will schedule
                      a meeting to discuss customization requirements and data migration strategy.
                    </p>
                    <div className="flex justify-center items-center text-green-500 text-2xl">
                      <span>&#10003;</span>
                    </div>
                    <p className="mt-4 text-gray-700">
                      You can check <span className="font-bold">👥 team</span> to
                      confirm meeting date and time
                    </p>
                  </div>
                  <div className="rounded-lg shadow-md overflow-hidden max-w-xl w-full">
                    <img
                      src={selectedTemplate.logo}
                      alt={selectedTemplate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-6xl font-thin w-[60%] text-gray-800">
                  Select your CRM solution template
                </h2>
                <h4 id="section-heading" style={{ marginTop: "40px" }}>
                  Featured Solutions
                </h4>
                <div className="slider" style={{ gap: "80px" }}>
                  {templates.map((item) => (
                    <div className="card" key={item.id}>
                      <div
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
                      <p className="text-center mt-2 text-gray-700">{item.name}</p>
                    </div>
                  ))}
                </div>
                <h4 id="section-heading" style={{ marginTop: "40px" }}>
                  Specialized Solutions
                </h4>
                <div className="slider">
                  {templates2.map((item) => (
                    <div
                      className="card"
                      key={item.id}
                      style={{ height: "250px" }}
                      onClick={() => openModal(item)}
                    >
                      <div
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
                      <p className="text-center mt-2 text-gray-700">{item.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )
          ) : (
            <>
              <div className="row">
                {/* <CrmPreview /> */}
                <div className="col">
                  <textarea
                    name=""
                    placeholder="CRM requirements and customization needs..."
                    id=""
                    style={{
                      justifyContent: "center",
                      width: "400px",
                      height: "400px",
                    }}
                  ></textarea>
                </div>
              </div>
              <Pletforms platforms={platforms} title="CRM Platforms" />
              <div className="mt-4 mx-auto text-center">
                <button
                  onClick={() => setShowTemplate(true)}
                  className="w-[200px] flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  Configure CRM
                </button>
              </div>
            </>
          )}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customModalStyles}
            contentLabel="Template Modal"
          >
            {selectedTemplate && (
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="max-h-[90vh] overflow-y-auto">
                  <div className="p-4">
                    <img
                      src={selectedTemplate.logo}
                      alt={selectedTemplate.name}
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: "80vh" }}
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {selectedTemplate.name}
                      </h3>
                    </div>
                    <div className="mt-4 mx-auto text-center">
                      <button
                        onClick={() => {
                          setSentTemplate(true);
                          setModalIsOpen(false);
                        }}
                        className="mx-auto w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                      >
                        Start CRM implementation process
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </form>
      </div>
    </>
  );
};