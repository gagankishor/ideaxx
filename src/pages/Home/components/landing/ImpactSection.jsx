import React from 'react';
import Slider from 'react-slick';

const ImpactSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };

  const clients = [
    { src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png", alt: "Zippo", width: 180 },
    { src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png", alt: "Canva", width: 180 },
    { src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png", alt: "Universal Music Group", width: 180 },
    { src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Homepage%20-%202024/enterprise/Motorola_1.png", alt: "Motorola", width: 180 }
  ];

  const testimonials = [
    {
      videoSrc: "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/Zippo_-_FC1.2_-_Clean_dark.mp4",
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolore deserunt alias dolorem error suscipit perferendis labore.",
      name: "John Doe",
      title: "CEO XYZ",
      stats: [{ amount: "$121K", description: "In value due to increased team productivity" }]
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="impact-section">
      {/* Header section with client logos in slider */}
      <h2 className="impact-title">Delivering impact across 200+ industries</h2>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "30px" }}>
        {clients.map((client, index) => (
          <div key={index}>
            <img src={client.src} alt={client.alt} className="client-logo" width={client.width} />
          </div>
        ))}
      </div>

      {/* Slider for logos */}
      <Slider {...settings} className="logo-slider custom-slider">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Slider>

      {/* Impact details with slider */}
      <div className="impact-details">
        <Slider {...settings} className="stats-slider">
          {testimonials.map((testimonial, index) => (
            <div className="stat-item" key={index}>
              <div style={{ position: "absolute" }}>
                <video
                  src={testimonial.videoSrc}
                  alt=""
                  style={{ width: "100%", zIndex: "0" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div style={{ zIndex: "1000" }}>
                <div className="row">
                  <div
                    className="col stat-item-content-left"
                    style={{
                      width: "70%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-start"
                    }}
                  >
                    <p style={{ textAlign: "left", margin: "0 0 10px 0", fontSize: "14px", fontWeight: "500px" }}>
                      {testimonial.quote}
                    </p>
                    <div>
                      <p style={{ textAlign: "left", margin: "0 0 10px 0", fontSize: "16px", fontWeight: "700px" }}>
                        {testimonial.name}
                      </p>
                      <p style={{ textAlign: "left", margin: "0 0 10px 0", fontSize: "14px", fontWeight: "500px" }}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="col" style={{ textAlign: "left" }}>
                    {testimonial.stats.map((stat, statIndex) => (
                      <div key={statIndex}>
                        <h4>{stat.amount}</h4>
                        <p style={{ textAlign: "left" }}>{stat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImpactSection;
