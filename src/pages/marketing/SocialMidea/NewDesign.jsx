import React, { useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { Helmet } from "react-helmet";
import {
  FaCloud,
  FaCross,
  FaCrosshairs,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { Pletforms } from "../../../components/Pletforms";
import { AssignedTo } from "../../../components/AssignedTo";
import { status } from "nprogress";
import { SelectCard } from "../../../components/SelectCard";
import { Blogs } from "../../../components/Blogs";
import { FiInfo } from "react-icons/fi";
import { FaCloudArrowUp } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdDoubleArrow } from "react-icons/md";

export const NewDesign = () => {
  const platforms = [
    {
      id: 1,
      name: "Facebook",
      logo: "/vantom.jpg",
      link: "https://canva.com/",
    },
    { id: 2, name: "Instagram", logo: "/business1.webp", link: "#" },
    { id: 3, name: "Threads", logo: "/business2.webp", link: "#" },
    { id: 4, name: "Tiktok", logo: "/business3.webp", link: "#" },
    { id: 5, name: "Snap Chat", logo: "/business3.webp", link: "#" },
    { id: 6, name: "LinkedIn", logo: "/business3.webp", link: "#" },
    { id: 7, name: "Other", logo: "/business3.webp", link: "#" },
  ];
  const [selectedCardId, setSelectedCardId] = useState(null);
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
    {
      id: 4,
      name: "Blog",
      logo: "blog.webp",
      link: "#",
    },
  ];
  const tasklist = [
    {
      id: 4,
      name: "Under Process",
      update: "will deliver it in two business days",
      status: false,
      link: "#",
      assignedTo: "sam",
    },
  ];
  const [cardActive, setCardActive] = useState();
  const [selectedPostType, setSelectedPostType] = useState(null);
  const [selectedPostFor, setSelectedPostFor] = useState(null);
  const handlePostType = (id) => {
    setSelectedPostType((prevId) => (prevId === id ? null : id));
  };
  const handlePostFor = (id) => {
    setSelectedPostFor((prevId) => (prevId === id ? null : id));
  };
  const handleCardClick = (id, isSelected) => {
    if (isSelected) {
      setSelectedCardId(id);
    } else {
      setSelectedCardId(null);
    }
  };
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    if (editIndex !== null) {
      const updatedFiles = [...uploadedFiles];
      updatedFiles[editIndex] = newFiles[0];
      setUploadedFiles(updatedFiles);
      setEditIndex(null);
    } else {
      if (uploadedFiles.length + newFiles.length > 3) {
        alert("You can upload up to 3 photos only.");
        return;
      } else if (
        selectedPostType === "Video package" &&
        uploadedFiles.length + newFiles.length > 1
      ) {
        alert("You can upload only 1 video.");
        return;
      }
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleEditFile = (index) => {
    setEditIndex(index);
    document.getElementById("file-edit-upload").click();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    if (uploadedFiles.length + newFiles.length > 3) {
      alert("You can upload up to 3 photos only.");
      return;
    } else if (
      selectedPostType === "Video package" &&
      uploadedFiles.length + newFiles.length > 1
    ) {
      alert("You can upload only 1 video.");
      return;
    }
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  const handleDelete = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };
  return (
    <>
      <Helmet>
        <title>Brand Name | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <div className="top-continer">
            {/* <SelectCard text='instagram'/> */}

            <h1 id="heading">
              <TbSocial />
              Social Media
            </h1>
            <div
              className={`select-card selected`}
              // onClick={() => handlePostType(1)}
              style={{
                width: "190px",
                visibility: !selectedPostType ? "hidden" : "visible",
              }}
            >
              <span>
                <li>{selectedPostType}</li>
              </span>
            </div>
            <div
              className={`select-card selected`}
              style={{
                width: "190px",
                marginRight: "15px",
                visibility: !selectedPostFor ? "hidden" : "visible",
              }}
              // onClick={() => handlePostType(1)}
            >
              <span>
                <li>{selectedPostFor}</li>
              </span>
            </div>
          </div>
          <div className="content" style={{ width: "100%" }}>
            <h2 id="section-heading">
              <FaPlus /> Make new post design{" "}
            </h2>
            <form action="" className="form">
              <div
                style={{ display: "flex", flexWrap: "wrap", maxWidth: "600px" }}
              >
                {platforms.map((item) => (
                  <SelectCard
                    key={item.id}
                    id={item.id}
                    text={item.name}
                    onClick={handleCardClick} // Pass the callback
                  />
                ))}
              </div>
              <div>
                <h2 id="section-heading">Choose your post type</h2>

                <div
                  className={`select-card ${
                    selectedPostType === "Post package" ? "selected" : ""
                  }`}
                  onClick={() => handlePostType("Post package")}
                >
                  <span>
                    <li>Post package</li>
                  </span>
                </div>

                <div
                  className={`select-card ${
                    selectedPostType === "Video package" ? "selected" : ""
                  }`}
                  onClick={() => handlePostType("Video package")}
                >
                  <span>
                    <li>Video package</li>
                  </span>
                </div>
              </div>
              <div>
                <h2 id="section-heading">Your post will be for</h2>

                <div
                  className={`select-card ${
                    selectedPostFor === "Physical Product" ? "selected" : ""
                  }`}
                  onClick={() => handlePostFor("Physical Product")}
                  style={{ width: "190px" }}
                >
                  <span>
                    <li>Physical Product</li>
                  </span>
                </div>

                <div
                  className={`select-card ${
                    selectedPostFor === "Digital product" ? "selected" : ""
                  }`}
                  onClick={() => handlePostFor("Digital product")}
                  style={{ width: "190px" }}
                >
                  <span>
                    <li>Digital product</li>
                  </span>
                </div>
                <div
                  className={`select-card ${
                    selectedPostFor === "Service" ? "selected" : ""
                  }`}
                  onClick={() => handlePostFor("Service")}
                  style={{ width: "190px" }}
                >
                  <span>
                    <li>Service</li>
                  </span>
                </div>
              </div>

              <div>
                <h2 id="section-heading">Brand Name</h2>
                <input placeholder="Exp. Nike"></input>
              </div>
              <div>
                <h2 id="section-heading">Product Type</h2>
                <input placeholder="Exp. T-Shirt"></input>
              </div>
              <div>
                <h2 id="section-heading">Specifications</h2>
                <div className="row">
                  <div className="col">
                    <input placeholder="Outline technical details"></input>
                    <input placeholder="Theme"></input>
                  </div>
                  <div className="col">
                    <input placeholder="Dimensions"></input>
                    <input placeholder="Material"></input>
                  </div>
                  <textarea placeholder="Relevant specifications"></textarea>
                </div>
              </div>
              <div>
                <h2 id="section-heading">
                  Product marketing highlights to focus on (optional)
                </h2>

                <textarea placeholder="Describe your product advantages"></textarea>
              </div>
              <div>                
                <h2 id="section-heading">
                  Upload up to 3 photos of your product
                </h2>

                <div className="row">
                  <div className="col">
                    <div
                      className="file-drop-zone"
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <p>Drop your files here</p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="file-upload-input"
                        style={{ display: "none" }}
                        id="file-upload"
                        accept="image/*"
                      />
                      <label
                        htmlFor="file-upload"
                        className="file-upload-button"
                      >
                        Upload from My Files <FaCloudArrowUp size={20} />
                      </label>
                    </div>

                    <div
                      className="uploaded-files"
                      style={{ width: "500px", overflow: "hidden" }}
                    >
                      {uploadedFiles.length > 0 &&
                        uploadedFiles.map((file, index) => (
                          <div key={index} className="file-preview">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`uploaded-${index}`}
                              className="uploaded-image"
                              style={{ width: "" }}
                            />
                            <button
                              type="button"
                              className="edit-file-btn"
                              onClick={() => handleEditFile(index)}
                            >
                              Edit File
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="col">
                    <div className="box">
                      <div
                        className=""
                        style={{ justifyContent: "center", margin: "20px" }}
                      >
                        <BsBoxSeam size={80} />
                        <MdDoubleArrow size={30} />
                        <MdDoubleArrow size={30} />
                        <IoCameraOutline size={90} />
                      </div>

                      <div className="card-globle">
                        <span>
                          Send the physical product to your team, they will
                          handle it!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="file"
                  onChange={handleFileChange}
                  id="file-edit-upload"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              {/* -------------------------------------------------------------------------------- */}
              <div>                
                <h2 id="section-heading">
                Upload video for your product
                </h2>

                <div className="row">
                  <div className="col">
                    <div
                      className="file-drop-zone"
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <p>Drop your files here</p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="file-upload-input"
                        style={{ display: "none" }}
                        id="file-upload"
                        accept="image/*"
                      />
                      <label
                        htmlFor="file-upload"
                        className="file-upload-button"
                      >
                        Upload from My Files <FaCloudArrowUp size={20} />
                      </label>
                    </div>

                    <div
                      className="uploaded-files"
                      style={{ width: "500px", overflow: "hidden" }}
                    >
                      {uploadedFiles.length > 0 &&
                        uploadedFiles.map((file, index) => (
                          <div key={index} className="file-preview">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`uploaded-${index}`}
                              className="uploaded-image"
                              style={{ width: "" }}
                            />
                            <button
                              type="button"
                              className="edit-file-btn"
                              onClick={() => handleEditFile(index)}
                            >
                              Edit File
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="col">
                    <div className="box">
                      <div
                        className=""
                        style={{ justifyContent: "center", margin: "20px" }}
                      >
                        <BsBoxSeam size={80} />
                        <MdDoubleArrow size={30} />
                        <MdDoubleArrow size={30} />
                        <IoCameraOutline size={90} />
                      </div>

                      <div className="card-globle">
                        <span>
                          Send the physical product to your team, they will
                          handle it!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="file"
                  onChange={handleFileChange}
                  id="file-edit-upload"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <Blogs blogs={blogs} title="Blogs" />
              <div>
                <h2 id="section-heading">Add Note (optional)</h2>
                <input placeholder="Notes to your designer"></input>
              </div>
              <div
                className="row"
                style={{ justifyContent: "center", flexDirection: "row" }}
              >
                <button type="button" className="btn">
                  Design
                </button>
              </div>
              <span className="row" style={{ justifyContent: "center" }}>
                In process….
              </span>
              <AssignedTo tasklist={tasklist} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const styles = {
  tooltip: {
    position: "absolute",
    top: "-40px",
    left: "0",
    backgroundColor: "#333",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "12px",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
    zIndex: 1,
  },
  tooltipText: {
    position: "absolute",
    bottom: "120%" /* Above the button */,
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "5px",
    borderRadius: "4px",
    fontSize: "12px",
    visibility: "hidden",
    opacity: "0",
    transition: "opacity 0.3s, visibility 0.3s",
  },
};
const showTooltip = {
  tooltip: {
    visibility: "visible",
    opacity: 1,
  },
};
