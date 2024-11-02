import { FaBookOpen } from "react-icons/fa";

const AwardsSection = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        zIndex: "0",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <div className="awards-section" style={{ maxWidth: "1000px", margin: "auto" }}>
        <div className="title-section">
          <h3 style={{ color: "white" }}>Recognized by leaders. Loved by customers.</h3>
          <button className="cta-button">Test Yeor Idea →</button>
        </div>
        <div className="info-cards">
          <div className="info-cards2" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <div className="card gartner" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px"  }}>
              <h3>Gartner</h3>
              <p>
                monday.com named a Leader in the 2023 Gartner® Magic Quadrant™
                for Collaborative Work Management.
              </p>
              <a href="#" className="read-more">
                <FaBookOpen /> Read the report →
              </a>
            </div>
            <div className="card forrester" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px"}}>
              <h3>Forrester</h3>
              <p>
                Forrester Total Economic Impact™ research: Motorola sees 346%
                ROI with monday.com.
              </p>
              <a href="#" className="read-more">
                <FaBookOpen /> Read the report →
              </a>
            </div>
          </div>
          <div className="badge-section" style={{ marginTop: "40px" }}>
            <div className="badge-category">
              <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
                    width={50}
                    alt="monday work management"
                  />
                </div>
                <div>
                  <h4 style={{ color: "white" }}>monday work management</h4>
                  <p style={{ color: "#ddd" }}>Leader in 21 Project Management categories</p>
                </div>
              </div>
              <div className="badges" style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 1"
                  width={70}
                />
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 2"
                  width={70}
                />
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 3"
                  width={70}
                />
              </div>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#545454", margin: "10px 0" }}></div>
            <div className="badge-category">
              <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
                    width={50}
                    alt="monday CRM"
                  />
                </div>
                <div>
                  <h4 style={{ color: "white" }}>monday CRM</h4>
                  <p style={{ color: "#ddd" }}>
                    Leader in 4 Customer Relationship Management categories
                  </p>
                </div>
              </div>

              <div className="badges" style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 1"
                  width={70}
                />
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 2"
                  width={70}
                />
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 3"
                  width={70}
                />
              </div>
            </div>

            <div style={{ width: "100%", height: "1px", backgroundColor: "#545454", margin: "10px 0" }}></div>
            <div className="badge-category">
              <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <img
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/mayatauber/Group_1261164294.png"
                    width={50}
                    alt="monday dev"
                  />
                </div>
                <div>
                  <h4 style={{ color: "white" }}>monday dev</h4>
                  <p style={{ color: "#ddd" }}>Leader in 3 Product Development categories</p>
                </div>
              </div>

              <div className="badges" style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 1"
                  width={70}
                />
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 2"
                  width={70}
                />
                <img
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/G2wm1.png"
                  alt="Badge 3"
                  width={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
