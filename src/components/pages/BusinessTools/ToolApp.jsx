"use client";
import { Pletforms } from "@/components/components/Pletforms";
import { FaMobile } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
// import AppPreview from "./AppPreviewComponent";

export const ToolApp = () => {
  // Mobile app development platforms
  const platforms = [
    {
      id: 1,
      name: "react-native",
      logo: "https://reactnative.dev/img/header_logo.svg",
      link: "https://reactnative.dev/",
    },
    {
      id: 2,
      name: "flutter",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      link: "https://flutter.dev/",
    },
    {
      id: 3,
      name: "ionic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
      link: "https://ionicframework.com/",
    },
    {
      id: 4,
      name: "xamarin",
      logo: "/dashboard/bussiness-tools/crm/imagexamarin-logo.png",
      link: "https://dotnet.microsoft.com/apps/xamarin",
    },
    
  ];

  // Featured app templates
  const templates = [
    {
      id: 1,
      name: "E-commerce App",
      logo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      link: "#",
    },
    {
      id: 2,
      name: "Social Media App",
      logo: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
      link: "#",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      logo: "https://cdn-icons-png.flaticon.com/512/1040/1040253.png",
      link: "#",
    },
  ];
  
  const templates2 = [
    {
      id: 1,
      name: "Food Delivery",
      logo: "https://img.freepik.com/free-vector/food-delivery-logo-template_23-2148476070.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "Task Manager",
      logo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      link: "#",
    },
    {
      id: 3,
      name: "Travel App",
      logo: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f",
      link: "#",
    },
    {
      id: 4,
      name: "Music Player",
      logo: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
      link: "#",
    },
    {
      id: 5,
      name: "Education App",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      link: "#",
    },
    {
      id: 6,
      name: "Weather App",
      logo: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      link: "#",
    },
    {
      id: 7,
      name: "Chat App",
      logo: "https://img.icons8.com/ios-filled/2x/news.png",
      link: "#",
    },
    {
      id: 8,
      name: "News App",
      logo: "https://img.icons8.com/ios-filled/2x/news.png",
      link: "#",
    },
    {
      id: 9,
      name: "Healthcare App",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692",
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
          <FaMobile /> Mobile App Development
        </h1>
        <form action="" className="form relative">
          {showTemplate ? (
            sentTemplate ? (
              <>
                <div className="flex items-center justify-center min-h-screen p-6">
                  <div className="text-center p-6 rounded-lg shadow-md max-w-md w-full mb-6">
                    <p className="text-lg text-gray-700 mb-4">
                      Request has been sent to your development team. We will schedule
                      a meeting to discuss the app development details.
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
                  Choose your app template
                </h2>
                <h4 id="section-heading" style={{ marginTop: "40px" }}>
                  Featured Templates
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
                  More Templates
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
                {/* <AppPreview /> */}
                <div className="col">
                  <textarea
                    name=""
                    placeholder="App details and requirements..."
                    id=""
                    style={{
                      justifyContent: "center",
                      width: "400px",
                      height: "400px",
                    }}
                  ></textarea>
                </div>
              </div>
              <Pletforms platforms={platforms} title="Development Platforms" />
              <div className="mt-4 mx-auto text-center">
                <button
                  onClick={() => setShowTemplate(true)}
                  className="w-[200px] flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  Create New App
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
                        Send template to development team
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