import React from "react";

const ProductLineupSection = () => {
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
              style={{ width: "70%" }}
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
                height: "210px",
                margin: "300px 0px 0px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/platform2.0/Tailored_products.png"
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
                height: "210px",
                margin: "50px -150px 50px 10px",
                border: "1px solid blue",
                borderRadius: "5px",
                backgroundColor: "black",
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

            <div
              style={{
                position: "relative",
                width: "210px",
                height: "210px",
                margin: "300px 50px",
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
    </div>
  );
};

export default ProductLineupSection;
