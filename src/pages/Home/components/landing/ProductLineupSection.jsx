import React from "react";
import { FaClock, FaDatabase, FaLock } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";

const ProductLineupSection = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(180deg, #341E81 0%, #341E81 100%)",
    padding: "50px",
    color: "white",
  };

  const topSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "50px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#362976",
    // padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    width:"200px",
    height:"50px"
  };

  const cardSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "left",
    width: "23%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border:'1px solid white'
  };

  const iconStyle = {
    fontSize: "40px",
    marginBottom: "20px",
  };

  const titleStyle = {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "700",
    color:"white",
    textAlign:'start'
  };

  const textStyle = {
    fontSize: "14px",
    color:"white",
    textAlign:'start'
    
  };

  const bottomTextStyle = {
    marginTop: "50px",
    fontWeight: "200",
    fontSize: "12px",
    textAlign: "center",
    color: "#f4f8fb",
  };
  return (
    <div style={{ padding: "0px 0px" }}>
      <div style={{ backgroundColor: "black", zIndex: "0" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
      <p style={{fontSize:'2.75rem',fontWeight:"200",color:"white"}}> One core platform for all your work </p>
          {/* Background Image */}
          <div style={{ position: "absolute", zIndex: 1 }}>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/michael-testing/Ellipse_5790.png"
              alt="Background"
              style={{ width: "70%",margin:'auto' }}
            />
          </div>

          {/* Main Content */}
          <div
            className=""
            style={{
              width: "800px",
              height: "900px",
              margin: "auto",
              marginTop: "100px",
              display: "flex",
              position: "relative",
            }}
          >
            {/* Stage Border */}
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/platform2.0/Stage_border.png"
              alt="Stage Border"
              style={{ position: "absolute", width: "100%" }}
            />

            {/* Product Blocks */}
            <div
              style={{
                position: "relative",
                width: "210px",
                height: "115px",
                margin: "300px 0px 0px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="/darksection2iq.jpeg"
                alt="Product"
                style={{ width: "200px", borderRadius: "3px" }}
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div
              style={{
                position: "relative",
                width: "210px",
                height: "115px",
                margin: "50px -150px 50px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
                backgroundColor: "black",
              }}
            >
              <img
                src="/darksection2i2.jpeg"
                alt="Product"
                style={{ width: "200px" }}
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div
              style={{
                position: "relative",
                width: "210px",
                height: "115px",
                margin: "300px 50px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="/darksection2i3.jpeg"
                alt="Product"
                style={{ width: "200px" }}
              />
              
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>

            <div
              style={{
                position: "relative",
                width: "210px",
                height: "210px",
                margin: "100px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/platform2.0/Tailored_products.png"
                alt="Product"
                style={{ width: "200px" }}
              />
              <div className="ripple-border"></div>
              <div className="ripple-border-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div style={{ backgroundColor: "black", zIndex: "0", textAlign: "center", padding: "20px 0" }}>
        <span style={{ fontSize: "60px", fontWeight: "200", color: "white" }}>
          Meet the product lineup
        </span>
        <p style={{ color: "white", fontSize: "16px" }}>
          Step into a world of seamless work experiences.
        </p>
              <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto:best/remote_mondaycom_static/uploads/NaamaGros/Switcher_2.png" alt="" style={{width:'600px',margin:"auto"}}/>
      </div>
      <div style={containerStyle}>
      <div style={topSectionStyle}>
        <h1>61% of Fortune 500 enterprises scale their success with monday.com</h1>
        <button style={buttonStyle}>Talk to Sales</button>
      </div>

      <div style={cardSectionStyle}>
        <div style={cardStyle}>
          <div style={iconStyle}><FaDatabase/></div> {/* Replace with an actual icon */}
          <h3 style={titleStyle}>Built for flexibility, speed, and scale</h3>
          <p style={textStyle}>
            mondayDB is our in-house data engine, enabling you to move fast, expand to more teams, and adapt to the most complex business workflows.
          </p>
        </div>
        <div style={cardStyle}>
          <div style={iconStyle}><FaLock/></div>
          <h3 style={titleStyle}>Industry-leading data security</h3>
          <p style={textStyle}>
            Confidently manage data with custom granular permissions all in a secure environment, backed by industry-leading compliance standards.
          </p>
        </div>
        <div style={cardStyle}>
          <div style={iconStyle}><FaClock/></div>
          <h3 style={titleStyle}>Accelerate time to value from day one</h3>
          <p style={textStyle}>
            Gain instant value from the platform with our white glove services, from advanced onboarding and training to premium support.
          </p>
        </div>
        <div style={cardStyle}>
          <div style={iconStyle}><FaSeedling/></div>
          <h3 style={titleStyle}>Intuitive adoption across the org</h3>
          <p style={textStyle}>
            Get teams on the same page with a platform they'll love, allowing real-time, accurate visibility of your organization's OKRs and metrics.
          </p>
        </div>
      </div>

      <h2 style={bottomTextStyle}>Delivering impact across 200+ industries</h2>
    </div>
    </div>
  );
};

export default ProductLineupSection;
