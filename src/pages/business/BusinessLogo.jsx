import { FaPallet } from "react-icons/fa";
import { SideBar } from "../../components/Sidebar";
import { Helmet } from "react-helmet";
import { useState } from "react";
import "./BusinessLogo.css"; // Assuming you'll create a separate CSS file for styling

export default function BusinessLogo() {
  const platforms = [
    { id: 1, name: "Canva", logo: "canva.png", link: "https://canva.com/" },
    { id: 2, name: "UCraft", logo: "ucraft.svg", link: "https://ucraft.com/" },
    {
      id: 3,
      name: "LogoMaker",
      logo: "logomaker.webp",
      link: "https://logomaker.com/",
    },
    {
      id: 4,
      name: "GraphicSprings",
      logo: "graphicsprings.webp",
      link: "https://graphicsprings.com/",
    },
  ];

  const [uploadedLogo, setUploadedLogo] = useState(null);
  const [brand] = useState(localStorage.getItem("brand"));

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Helmet>
        <title>Logo Design | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <FaPallet /> Logo Design
          </h1>
          <div className="brand-logo-font">
            <div className="card">
              <h2 className="brand-name align-middle">{brand}</h2>
            </div>
          </div>

          <div className="form">
            {/* Logo Upload Section */}

            {/* Preview or Drop Here Card */}
            <dvi className="logo-upload-main">
              <div className="logo-card">
                {uploadedLogo ? (
                  <div className="logo-preview">
                    <img
                      src={uploadedLogo}
                      alt="Uploaded Logo"
                      className="uploaded-logo"
                    />
                  </div>
                ) : (
                  <div className="drop-here">
                    <p>Drop your logo here or click to upload</p>
                  </div>
                )}
              </div>
              <div className="form-group  logoUploadForm">
                {/* <label htmlFor="logoUpload">Upload Your Logo</label> */}
                <div className="card">
                  sfhsdkj
                </div>
                <input
                  type="file"
                  id="logoUpload"
                  accept="image/*"
                  onChange={handleLogoUpload}
                />
              </div>
            </dvi>

            {/* Brand Name and Guidelines Section */}
            <div className="brand-guidelines item">
              <h3>Based on your idea</h3>
              <div className="based-on-card">
                <p>
                  Keep it simple: A clean and uncluttered logo is often more
                  memorable.
                </p>
                <p>
                  Make it memorable: Your logo should be unique and easily
                  recognizable.
                </p>
                <p>
                  Choose appropriate colors: Colors can evoke different emotions
                  and associations. Consider your brand's personality and target
                  audience when selecting colors.
                </p>
                <p>
                  Ensure readability: The text in your logo should be easy to
                  read, especially at small sizes.
                </p>
                <p>
                  Consider scalability: Your logo should look good at various
                  sizes, from small icons to large billboards.
                </p>
              </div>
            </div>

            {/* Logo Design Platforms Section */}
            <h2 id="section-heading">Platforms to Design Your Logo</h2>
            <div className="slider">
              {platforms.map((item) => (
                <div className="card" key={item.id}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item"
                  >
                    <img
                      src={"/platforms/" + item.logo}
                      alt={item.name}
                      className="logo"
                    />
                  </a>
                  <p className="platform-name">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
