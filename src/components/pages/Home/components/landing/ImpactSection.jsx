import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';

const ImpactSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      videoSrc: "360img.jpg",
      quote: "This platform revolutionized our workflow and boosted our overall team efficiency.",
      name: "Alice Johnson",
      title: "Founder & CEO, TechNova",
      stats: [
        {
          amount: "$150K",
          description: "Saved annually through process automation",
          color: 'bg-green-400'
        },
        {
          amount: "$98K",
          description: "Revenue increase due to faster project completion",
          color: 'bg-blue-400'
        },
        {
          amount: "25%",
          description: "Growth in team productivity",
          color: 'bg-red-400'
        },
      ],
    },
    {
      videoSrc: "carsa.jpg",
      quote: "The insights and tools provided helped us achieve milestones we didn't think were possible.",
      name: "Michael Smith",
      title: "CTO, Innovate Corp",
      stats: [
        {
          amount: "$200K",
          description: "Gains from improved client satisfaction",
          color: 'bg-blue-400'
        },
        {
          amount: "$120K",
          description: "Saved on operational expenses",
          color: 'bg-yellow-400'
        },
        {
          amount: "30%",
          description: "Increase in task efficiency",
          color: 'bg-red-400'
        },
      ],
    },
    {
      videoSrc: "carsa.jpg",
      quote: "Utilizing this service transformed our marketing strategy and strengthened our customer base.",
      name: "Sophia Williams",
      title: "CMO, Bright Ventures",
      stats: [
        {
          amount: "$180K",
          description: "Increased annual revenue from new clients",
          color: 'bg-green-400'
        },
        {
          amount: "40%",
          description: "Growth in customer engagement",
          color: 'bg-blue-400'
        },
        {
          amount: "$75K",
          description: "Saved from reduced marketing expenses",
          color: 'bg-purple-400'
        },
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Controls the speed of slide change
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        key={`custom-dot-${i}`} // Add a unique key here
        onClick={() => sliderRef.current.slickGoTo(i)}
        className="w-36 h-1 bg-gray-500 mx-2 relative cursor-pointer"
      >
        <div
          className={`absolute top-0 left-0 h-1 ${
            i === currentSlide ? 'bg-white animate-progress' : 'bg-gray-500'
          }`}
          style={{ width: i === currentSlide ? '100%' : '0%' }}
        ></div>
      </div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center mb-2 space-x-2">
        {dots.map((dot, index) => (
          <div key={`append-dot-${index}`}>{dot}</div> // Add unique keys to each dot in appendDots
        ))}
      </div>
    ),
  };

  useEffect(() => {
    // Reset slider to first slide after the last slide
    if (currentSlide === testimonials.length) {
      setCurrentSlide(0);
      sliderRef.current.slickGoTo(0);
    }
  }, [currentSlide, testimonials.length]);

  
  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-[#341E81] to-[#341E81] py-12 text-white">
      <div className="impact-section text-center">
        <h2 className="text-3xl font-bold mb-14">Delivering impact across 200+ industries</h2>
        <div className="impact-details flex justify-center items-start gap-8 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
              {settings.appendDots([...Array(testimonials.length).keys()].map(settings.customPaging))}
            </div>
            <Slider ref={sliderRef} {...settings} className="stats-slider w-full pt-8">
              {testimonials.map((testimonial, index) => (
                <div className="stat-item relative" key={index}>
                  <div className="absolute w-full">
                    <img src={testimonial.videoSrc} alt="360 home decor" className="w-full object-cover z-0" />
                  </div>
                  <div className="relative z-10 p-14 bg-opacity-75 bg-black h-full">
                    <div className="flex flex-col md:flex-row items-start h-full">
                      <div className="md:w-2/3 flex flex-col justify-end space-y-2 h-full">
                        <p className="text-sm font-medium text-left">{testimonial.quote}</p>
                        <div>
                          <p className="text-base font-bold mb-1 text-left">{testimonial.name}</p>
                          <p className="text-sm font-medium text-left">{testimonial.title}</p>
                        </div>
                      </div>
                      <div className="md:w-1/3 text-left space-y-2 h-full flex flex-col items-start">
                        {testimonial.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="h-1/3 align-middle items-center justify-center flex flex-row">
                            <div className={`w-1 h-24 m-2 rounded-sm ${stat.color}`} />
                            <div>
                              <h4 className="text-xl font-bold">{stat.amount}</h4>
                              <p className="text-sm text-left">{stat.description}</p>
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
