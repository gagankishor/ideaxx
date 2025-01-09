"use client";
import  { useContext, useState } from "react";
import { RiSeoLine } from "react-icons/ri"
import axios from "axios";
import { RestAPI } from "@/config/Api";
import Swal from "sweetalert2";
import { IdeaContext } from "@/context/ideaDataContext";
import { AssignedTo } from "@/components/components/AssignedTo";

export const Billboards = () => {
  const {  brandData } = useContext(IdeaContext);
  const [selectedBillboard, setSelectedBillboard] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [concept, setConcept] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [asingnToStatas ,setAsingnToStatas] = useState(true)

  const tasklist = [
    {
      id: 1,
      name: "Under Process",
      status: false,
      update: "will contact you within 24 hours",
      link: "",
      assignedTo: "Khalid",
    },
  ];

  const billboardData = [
    {
      type: "Standard Billboard",
      imgSrc: "https://unblast.com/wp-content/uploads/2019/07/Standard-Billboard-Mockup-1600x1066.jpg",
      imgSrc2: "https://i0.wp.com/graphicyard.com/wp-content/uploads/2019/10/Creative-Billboard-Banner-Design-4.jpg",
      imgSrc3: "https://unblast.com/wp-content/uploads/2019/07/Standard-Billboard-Mockup-1600x1066.jpg",
      videoSrc: "https://www.youtube.com/embed/N6v7HQiCNiQ?si=YlJ7rZDXC6iLW9Oq",
    },
    {
      type: "Poster Billboard",
      imgSrc: "https://img.freepik.com/free-psd/urban-billboard-mockup_15879-551.jpg",
      imgSrc2: "https://www.gingermediagroup.com/wp-content/uploads/2022/01/some-of-the-best-billboard-advertisements-youll-ever-see-1024x576.jpg",
      imgSrc3: "https://img.freepik.com/free-psd/urban-billboard-mockup_15879-551.jpg",
      videoSrc: "https://www.youtube.com/embed/N6v7HQiCNiQ?si=YlJ7rZDXC6iLW9Oq",
    },
    {
      type: "Digital Billboard",
      imgSrc: "https://www.pickcel.com/blog/images/3d-advertising-billboard/banner.jpg",
      videoSrc: "https://www.youtube.com/embed/N6v7HQiCNiQ?si=YlJ7rZDXC6iLW9Oq",
    },
    {
      type: "Mobile Billboard",
      imgSrc: "https://allovermedia.com/wp-content/uploads/2021/01/Digital-Truck-3.jpg.jpg.webp",
      imgSrc2: "https://5.imimg.com/data5/SELLER/Default/2023/12/366717855/CZ/YU/TL/114651998/mobile-vans-advertisement-services-250x250.jpg",
      imgSrc3: "https://allovermedia.com/wp-content/uploads/2021/01/Digital-Truck-3.jpg.jpg.webp",
      videoSrc: "https://www.youtube.com/embed/N6v7HQiCNiQ?si=YlJ7rZDXC6iLW9Oq",
    },
  ];

  // Handle form submission for saving billboard
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire({
        title: "Info",
        text: "Please upload a file.",
        icon: "Info",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();
    formData.append("dimensions", dimensions);
    formData.append("concept", concept);
    formData.append("description", description);
    formData.append("brand_name", brandData.brand_name);
    formData.append("logo", brandData.logo);
    formData.append("billboard_type", selectedBillboard);
    formData.append("file", file);
    try {
      const axiosConfig = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const response = await axios.post(
        `${RestAPI}/save-billboard`,
        formData,
        axiosConfig
      );
      setAsingnToStatas(false)
      setDimensions('')
      setConcept('')
      setDescription('')
      setFile(null)
      console.log("Response from API:", response.data);
      Swal.fire({
        title: "Success",
        text: "Billboard saved successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error in saving data",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error saving billboard:", error);
    }
  };
  const renderBillboardOptions = () =>
    billboardData.map((billboard) => (
      <div
        key={billboard.type}
        style={styles.billboardContainer}
        onClick={() => {
          setSelectedBillboard(billboard.type)
          window.scrollTo({
            top: 752,   
            behavior: 'smooth' 
          });
        }}
      >
        <img src={billboard.imgSrc} alt={billboard.type} style={styles.billboardImage} />
        <div style={styles.billboardLabel}>{billboard.type}</div>
      </div>
    ));
  const renderSelectedBillboard = () => {
    const billboard = billboardData.find((b) => b.type === selectedBillboard);
    return (
      billboard && (
        <div className="row" style={styles.selectedRow}>
          <div className="card-globls" style={styles.billboardContainer}>
            <img src={billboard.imgSrc} alt={billboard.type} style={styles.billboardImage} />
            <div style={styles.billboardLabel}>{selectedBillboard}</div>
          </div>
          {selectedBillboard === 'Digital Billboard'?
          <iframe
            width="400"
            height="215"
            src={billboard.videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>:
          <div className="card-globls">
            <img src={billboard.imgSrc2} alt={billboard.type} style={styles.billboardImage} />
            <div style={styles.billboardLabel}>{selectedBillboard}</div>
          </div>}
        </div>
      )
    );
  };
  return (
    <>
     
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine /> Marketing Events
          </h1>
          <div className="form">
            <h2 id="section-heading" style={{ marginTop: "40px" }}>
              Create Billboard
            </h2>
            <div className="row" style={styles.billboardOptions}>
              {renderBillboardOptions()}
            </div>
            {selectedBillboard && (
              <>
                <h2 id="section-heading" style={{ marginTop: "40px" }}>
                  {selectedBillboard}
                </h2>
                {renderSelectedBillboard()}
                <div className="row" style={{ marginTop: "100px" }}>
                  <div className="card-globls" style={{ width: "600px" }}>
                    <form onSubmit={handleSubmit}>
                      <label>
                        Dimensions (X,Y) inch or cm
                        <input
                          type="text"
                          placeholder="Dimensions"
                          value={dimensions}
                          onChange={(e) => setDimensions(e.target.value)}
                        />
                      </label>
                      <label>
                        Main objects (Upload Files)
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                      </label>
                      <label>
                        Name and Logo
                        <div className="row">
                          <input type="text" value={brandData.brand_name} placeholder="Name" readOnly />
                          <img
                            style={styles.brandLogo}
                            src={brandData.logo}
                            alt="logo"
                          />
                        </div>
                      </label>
                      <label>
                        Billboard concept (Describe the concept)
                        <textarea
                          placeholder="Concept"
                          value={concept}
                          onChange={(e) => setConcept(e.target.value)}
                        />
                      </label>
                      <label>
                        Description (Main sentence to put on the billboard)
                        <textarea
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </label>
                      <button className="btn" type="submit">
                        Save Billboard
                      </button>
                    </form>
                  </div>
                  <div style={{visibility: asingnToStatas?' hidden':'unset' }}>
                  <AssignedTo tasklist={tasklist} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const styles = {
  billboardContainer: {
    position: "relative",
    cursor: "pointer",
  },
  billboardImage: {
    width: "400px",
    height: "215px",
  },
  billboardLabel: {
    border: "1px solid black",
    width: "100px",
    margin: "auto",
    textAlign: "center",
    position: "absolute",
    top: "186px",
    left: "148px",
    backgroundColor: "white",
  },
  billboardOptions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  selectedRow: {
    marginTop: "10px",
    justifyContent:"center",
    gap: "30px",

  },
  brandLogo: {
    width: "100px",
    border: "1px solid black",
    borderRadius: "5px",
  },
};