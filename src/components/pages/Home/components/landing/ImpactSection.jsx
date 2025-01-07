import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
const testimonials = [
  {
    videoSrc: "/BelloAnimationsVideo.webm",
    image:"/landing/WhatsApp Image 2024-11-27 at 6.07.51 PM.webp",
    quote:
      "The tools provided a significant breakthrough in streamlining our operations and achieving key milestones.",
    name: "Mr. Taki Kedo",
    title: "CEO, 360 Home decor",
    stats: [
      {
        amount: "$200K",
        description: "Gains from improved client satisfaction",
        color: "bg-blue-400",
      },
      {
        amount: "$120K",
        description: "Saved on operational expenses",
        color: "bg-yellow-400",
      },
      {
        amount: "30%",
        description: "Increase in task efficiency",
        color: "bg-red-400",
      },
    ],
  },
  {
    videoSrc: "/Vantom_Solar_Batteries.webm",
    quote:
      "Implementing these solutions transformed our business approach and maximized growth potential.",
    name: "Eyad Abdulla",
    title: "COO, Vantom Power",
    image:"/landing/ventom.webp",

    stats: [
      {
        amount: "8X",
        description: "ROI",
        color: "bg-blue-400",
      },
      {
        amount: "20K",
        description: "account growth year-over-year",
        color: "bg-yellow-400",
      },
      {
        amount: "30%",
        description: "ads produced 3x  creative output",
        color: "bg-red-400",
      },
    ],
  },
  {
    videoSrc: "/MercedesMaybachSL.webm",
    quote:
      "Our team’s productivity and creativity reached new heights thanks to the powerful tools provided.",
    name: "Taki Kaddo",
    title: "CTO, Pick It Up",
    image:"/landing/WhatsApp Image 2024-11-27 at 6.07.51 PM.webp",
    stats: [
      {
        amount: "300K",
        description: "in value due to increased team productivity ",
        color: "bg-blue-400",
      },
      {
        amount: "$120K",
        description: "saved due to reduced administration time",
        color: "bg-yellow-400",
      },
      {
        amount: "30%",
        description: "faster production time",
        color: "bg-red-400",
      },
    ],
  },
];
const ImpactSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        key={`custom-dot-${i}`}
        onClick={() => sliderRef.current.slickGoTo(i)}
        className="w-20 rounded-sm sm:w-28 md:w-36 lg:w-48 h-1 bg-gray-500 mx-2 relative cursor-pointer"
      >
        <div
          className={`absolute rounded-sm top-0 left-0 h-1 ${
            i === currentSlide ? "bg-white animate-progress" : "bg-gray-500"
          }`}
          style={{ width: i === currentSlide ? "100%" : "0%" }}
        ></div>
      </div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center mb-2 space-x-2">
        {dots.map((dot, index) => (
          <div key={`append-dot-${index}`}>{dot}</div>
        ))}
      </div>
    ),
  };
  useEffect(() => {
    if (currentSlide === testimonials.length) {
      setCurrentSlide(0);
      sliderRef.current.slickGoTo(0);
    }
  }, [currentSlide, testimonials.length]);
  return (
    <section className="flex flex-col  items-center bg-gradient-to-b from-[#341E81] to-[#341E81] py-12 text-white">
      <div className="impact-section text-center">
        <h2 className="max-w-[98%] text-3xl font-bold mb-14">
          Delivering impact across 200+ industries
        </h2>
        <div className="impact-details flex justify-center items-start gap-8 max-w-5xl mx-auto">
          <div className="relative ">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
              {settings.appendDots(
                [...Array(testimonials.length).keys()].map(
                  settings.customPaging
                )
              )}
            </div>
            <Slider
              ref={sliderRef}
              {...settings}
              className="w-full max-w-[340px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto pt-8 "
            >
              {testimonials.map((testimonial, index) => (
                <div className="stat-item relative" key={index}>
                  <div className="absolute w-full h-full  lg:block">
                  {testimonial.imageSrc ? (
                    <img
                      src={testimonial.imageSrc}
                      alt="360 home decor"
                        className="w-full object-cover z-0"
                    />
                  ) : (
                    <div className="relative w-full aspect-video overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      >
                        {/* Provide multiple sources for better compatibility */}
                        <source src={testimonial.videoSrc} type="video/mp4" />
                        <source src={testimonial.videoSrc.replace('.mp4', '.webm')} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
                  <div className="relative z-10 p-14 bg-opacity-75  bg-black h-full md:bg-opacity-35">
                    <div className="flex flex-col md:flex-row items-start h-full">
                      <div className="md:w-2/3 flex flex-col justify-end space-y-2 h-full">
                        <p className="text-sm font-medium text-left">
                          {testimonial.quote}
                        </p>
                        <div className=" flex flex-row gap-5">
                          <div>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={50}
                              className=" w-[50px] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-base font-bold mb-1 text-left">
                              {testimonial.name}
                            </p>
                            <p className="text-sm font-medium text-left">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 text-left space-y-2 h-full flex flex-col items-start">
                        {testimonial.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className=" hidden h-1/3  sm:flex flex-row align-middle items-center justify-center "
                          >
                            <div
                              className={`w-1 h-24 m-2 rounded-sm ${stat.color}`}
                            />

                            <div>
                              <span className="text-xl font-bold">
                                {stat.amount}
                              </span>
                              <p className="text-sm text-left">
                                {stat.description}
                              </p>
                            </div>
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
      </div>
    </section>
  );
};
export default ImpactSection;