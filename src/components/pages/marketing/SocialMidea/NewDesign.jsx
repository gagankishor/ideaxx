"use client";
import  { useState } from "react";
import {
  // FaCloud,
  // FaCross,
  // FaCrosshairs,
  FaPlus,
  FaRobot,
  // FaSearch,
} from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
// import { Pletforms } from "../../../components/Pletforms";
// import { AssignedTo } from "../../../components/AssignedTo";
// import { status } from "nprogress";
// import { SelectCard } from "../../../components/SelectCard";
// import { FiInfo } from "react-icons/fi";
import { FaCloudArrowUp } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdDoubleArrow } from "react-icons/md";
// import { IdeaContext } from "../../../config/ideaDataContext";
import savePostDesign from "@/config/Api";
import { SelectCard } from "@/components/components/SelectCard";
import { Blogs } from "@/components/components/Blogs";
import { AssignedTo } from "@/components/components/AssignedTo";

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
  // const { ideaData, brandData, setBrandDataMain } = useContext(IdeaContext);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

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
  // const [cardActive, setCardActive] = useState();
  const [selectedPostType, setSelectedPostType] = useState(null);
  const [selectedPostFor, setSelectedPostFor] = useState(null);
  // const [brandName, setBrandName] = useState(brandData?.brand_name);
  // const [productType, setProductType] = useState("");
  // const [outlineTechnicalDetails, setOutlineTechnicalDetails] = useState("");
  // const [productTheme, setProductTheme] = useState("");
  // const [productDimensions, setProductDimensions] = useState("");
  // const [productMaterial, setProductMaterial] = useState("");
  // const [productMarketingHighlights, setProductMarketingHighlights] =
  //   useState("");
  const [formData, setFormData] = useState({
    selectedPlatform: "",
    brandName: "",
    selectedPostType: "",
    selectedPostFor: "",
    productType: "",
    outlineTechnicalDetails: "",
    productTheme: "",
    productDimensions: "",
    productMaterial: "",
    productMarketingHighlights: "",
    notesToDesigner: "",
    productAdvantages: "",
  });
  // const [productMaterial,setProductMaterial ] = useState('')
  const handlePostType = (id) => {
    setUploadedFiles([]);

    setSelectedPostType((prevId) => (prevId === id ? null : id));
  };
  const handlePostFor = (id) => {
    setUploadedFiles([]);
    setSelectedPostFor((prevId) => (prevId === id ? null : id));
  };
  const handleCardClick = (id, isSelected) => {
    if (isSelected) {
      setSelectedPlatform(id);
    } else {
      setSelectedPlatform(null);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFiles2, setUploadedFiles2] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  // const [editIndex2, setEditIndex2] = useState(null);
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
  const handleFileChange2 = (e) => {
    const newFiles = Array.from(e.target.files);
    if (editIndex !== null) {
      const updatedFiles2 = [...uploadedFiles2];
      updatedFiles2[editIndex] = newFiles[0];
      setUploadedFiles2(updatedFiles2);
      // setEditIndex2(null);
    } else {
      if (uploadedFiles2.length + newFiles.length > 3) {
        alert("You can upload up to 3 photos only.");
        return;
      } else if (
        selectedPostType === "Video package" &&
        uploadedFiles2.length + newFiles.length > 1
      ) {
        alert("You can upload only 1 video.");
        return;
      }
      setUploadedFiles2((prevFiles) => [...prevFiles, ...newFiles]);
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
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      ...formData,
      uploadedFiles,
      selectedPlatform,
      selectedPostFor,
      selectedPostType,
    };

    const response = await savePostDesign(postData);
    if (response) {
      alert("Post design saved successfully!");
    } else {
      alert("Error saving post design.");
    }
  };
  return (
    <>
      
      <div className="dashboard container">
        <div className="content">
          <div className="top-continer">
            <h1 id="heading">
              <TbSocial />
              Social Media
            </h1>
            <div
              className={`select-card selected`}
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
              {selectedPostFor === "Physical Product" && (
                <>
                  <div>
                    <h2 id="section-heading">Brand Name</h2>
                    <input
                      type="text"
                      name="brandName"
                      placeholder="Brand Name"
                      value={formData.brandName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <h2 id="section-heading">Product Type</h2>
                    <input
                      type="text"
                      placeholder="Product Type"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <h2 id="section-heading">Specifications</h2>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          name="outlineTechnicalDetails"
                          placeholder="Outline Technical Details"
                          value={formData.outlineTechnicalDetails}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          name="productTheme"
                          placeholder="Product Theme"
                          value={formData.productTheme}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col">
                        <input
                          type="text"
                          name="productDimensions"
                          placeholder="Product Dimensions"
                          value={formData.productDimensions}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="Product Material"
                          name="productMaterial"
                          value={formData.productMaterial}
                          onChange={handleChange}
                        />
                      </div>

                      <textarea
                        placeholder="Marketing Highlights"
                        name="productMarketingHighlights"
                        value={formData.productMarketingHighlights}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <h2 id="section-heading">
                      Product marketing highlights to focus on (optional)
                    </h2>
                    <textarea
                      placeholder="Describe your product advantages"
                      // value={productMarketingHighlights}
                      // onChange={(e) =>
                      //   setProductMarketingHighlights(e.target.value)
                      // }
                      name="productAdvantages"
                      value={formData.productAdvantages}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              {selectedPostFor === "Digital product" && (
                <>
                  <div>
                    <h2 id="section-heading">Digital Product Name or Title</h2>
                    <input
                      placeholder="Exp. How to build your startup"
                      name="digitalProductName"
                      value={formData.digitalProductName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <h2 id="section-heading">Digital Product Type </h2>
                    <input
                      placeholder="E-Book, Audio, Online Course…"
                      name="digitalProductType"
                      value={formData.digitalProductType}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <h2 id="section-heading">Promotional Text</h2>
                    <input
                      placeholder="A brief and compelling description of the product"
                      name="PromotionalText"
                      value={formData.PromotionalText}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <h2 id="section-heading">
                      Product marketing highlights to focus on (optional)
                    </h2>

                    <textarea
                      placeholder="Describe your product advantages"
                      name="productMarketingHighlights"
                      value={formData.productMarketingHighlights}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              {selectedPostType === "Post package" &&
                selectedPostFor === "Service" && (
                  <>
                    <div>
                      <h2 id="section-heading">Service </h2>
                      <input
                        placeholder="Exp. FiteLife Coaching"
                        name="Service"
                        value={formData.Service}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Visual Elements</h2>
                      <input
                        placeholder="High-energy images of trainers assisting clients."
                        name="visualElements"
                        value={formData.visualElements}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div>
                      <h2 id="section-heading">Key Features </h2>
                      <input
                        placeholder="Personalized workout plans – Nutritional guidance – Weekly progress tracking"
                        name="keyFeatures"
                        value={formData.keyFeatures}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Call-to-Action (CTA)</h2>
                      <input
                        placeholder="Exp. Start Your Fitness Journey Now!"
                        name="callToAction"
                        value={formData.callToAction}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Pricing/Availability</h2>
                      <input
                        placeholder="Exp. Starting at 99$"
                        name="pricingAvailability"
                        value={formData.pricingAvailability}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </>
                )}
              {selectedPostType === "Video package" &&
                selectedPostFor === "Service" && (
                  <>
                    <div>
                      <h2 id="section-heading">Service Name </h2>
                      <input
                        placeholder="Exp. FiteLife Coaching"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Service Overview</h2>
                      <input
                        placeholder="High-energy images of trainers assisting clients."
                        name="keyFeatures"
                        value={formData.keyFeatures}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Background Music type </h2>
                      <input
                        placeholder="Personalized workout plans – Nutritional guidance – Weekly progress tracking"
                        name="backgroundMusictype"
                        value={formData.backgroundMusictype}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Voiceover</h2>
                      <textarea
                        placeholder="Exp. Start Your Fitness Journey Now!"
                        name="voiceover"
                        value={formData.voiceover}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Text Overlays </h2>
                      <textarea
                        placeholder="Your Fitness Journey Starts Here! Expert Coaches, Personalized Plans. Achieve Your Goals with FitLife Coaching."
                        name="textOverlays"
                        value={formData.textOverlays}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Call-to-Action (CTA)</h2>
                      <input
                        placeholder="Exp. Start Your Fitness Journey Now!"
                        name="calltoAction"
                        value={formData.calltoAction}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <h2 id="section-heading">Pricing/Availability</h2>
                      <input
                        placeholder="Exp. Starting at 99$"
                        name="pricingAvailability"
                        value={formData.pricingAvailability}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

              {selectedPostType === "Post package" &&
                selectedPostFor === "Physical Product" && (
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
                )}
              {selectedPostType === "Post package" &&
                selectedPostFor === "Digital product" && (
                  <div>
                    <h2 id="section-heading">Upload your digital product</h2>

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
                        <h2 id="section-heading">
                          Upload your cover page (optional)
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
                                onChange={handleFileChange2}
                                className="file-upload-input"
                                style={{ display: "none" }}
                                id="file-upload2"
                                accept="image/*"
                              />
                              <label
                                htmlFor="file-upload2"
                                className="file-upload-button"
                              >
                                Upload from My Files{" "}
                                <FaCloudArrowUp size={20} />
                              </label>
                            </div>

                            <div
                              className="uploaded-files"
                              style={{ width: "500px", overflow: "hidden" }}
                            >
                              {uploadedFiles2.length > 0 &&
                                uploadedFiles2.map((file, index) => (
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
                        </div>

                        <input
                          type="file"
                          onChange={handleFileChange2}
                          id="file-edit-upload2"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>

                    <input
                      type="file"
                      onChange={handleFileChange2}
                      id="file-edit-upload"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                )}

              {/* -------------------------------------------------------------------------------- */}
              {selectedPostType === "Video package" &&
                selectedPostFor === "Physical Product" && (
                  <div>
                    <h2 id="section-heading">Upload video for your product</h2>

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
      id="video-file-upload" 
      accept="video/*"
    />
    <label htmlFor="video-file-upload" className="file-upload-button">
      Upload from My Files <FaCloudArrowUp size={20} />
    </label>
  </div>

  <div className="uploaded-files" style={{ width: "500px", overflow: "hidden" }}>
    {uploadedFiles.length > 0 &&
      uploadedFiles.map((file, index) => (
        <div key={index} className="file-preview">
          <video
            src={URL.createObjectURL(file)}
            alt={`uploaded-${index}`}
            className="uploaded-video" 
            style={{ width: "50%" }} 
            controls 
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
                            style={{
                              justifyContent: "center",
                              margin: "20px",
                              maxWidth: "200px",
                            }}
                          >
                            <img
                              src="/socialmidea/3DImage.png"
                              alt="physical product priviwe"
                              style={{ width: "100%" }}
                            />
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
                )}
              {selectedPostType === "Video package" &&
                selectedPostFor === "Digital product" && (
                  <>
                    <div>
  <h2 id="section-heading">Upload video for your product</h2>

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
          id="video-file-upload" 
          accept="video/*"
        />
        <label htmlFor="video-file-upload" className="file-upload-button">
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
              <video
                src={URL.createObjectURL(file)}
                alt={`uploaded-${index}`}
                className="uploaded-video"
                style={{ width: "50%" }} 
                controls
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
    <div className="col"></div>
  </div>

  <input
    type="file"
    onChange={handleFileChange}
    id="file-edit-upload"
    accept="video/*"
    style={{ display: "none" }}
  />
</div>

<div>
  <h2 id="section-heading">Upload your cover page (optional)</h2>

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
          onChange={handleFileChange2}
          className="file-upload-input"
          style={{ display: "none" }}
          id="cover-file-upload"
          accept="image/*" 
        />
        <label htmlFor="cover-file-upload" className="file-upload-button">
          Upload from My Files <FaCloudArrowUp size={20} />
        </label>
      </div>

      <div
        className="uploaded-files"
        style={{ width: "500px", overflow: "hidden" }}
      >
        {uploadedFiles2.length > 0 &&
          uploadedFiles2.map((file, index) => (
            <div key={index} className="file-preview">
              <img
                src={URL.createObjectURL(file)}
                alt={`uploaded-${index}`}
                className="uploaded-image"
                style={{ width: "100%" }} 
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
    <div className="col"></div>
  </div>

  <input
    type="file"
    onChange={handleFileChange2}
    id="file-edit-upload-2"   
    accept="image/*"
    style={{ display: "none" }}
  />
</div>

                    <div>
                      <h2 id="section-heading">
                        Choose your background music type
                      </h2>
                      {/* <input type="text" /> */}
                      <div className="row">
                        <div className="card-globle"> files </div>
                        <div className="card-globle">Active</div>
                        <div className="card-globle">Optimistic</div>
                        <div className="card-globle">Dreamer</div>
                      </div>
                    </div>
                    <div>
                      <h2 id="section-heading">Voiceover (optional)</h2>
                      <div className="row">
                        <input
                          type="text"
                          placeholder="Upload voiceover narration text"
                        />
                        <select name="" id="">
                          <option value="1">select voice</option>
                          <option value="1">male</option>
                          <option value="1">mack</option>
                        </select>
                        <div className="btn">
                          Generate
                          <FaRobot size={25} />
                        </div>
                      </div>
                    </div>
                  </>
                )}

              <Blogs blogs={blogs} title="Blogs" />
              <div>
                <h2 id="section-heading">Add Note (optional)</h2>
                <textarea
                  name="notesToDesigner"
                  placeholder="Notes to Designer"
                  value={formData.notesToDesigner}
                  onChange={handleChange}
                />
              </div>
              <div
                className="row"
                style={{ justifyContent: "center", flexDirection: "row" }}
              >
                <button type="button" onClick={handleSubmit} className="btn">
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

