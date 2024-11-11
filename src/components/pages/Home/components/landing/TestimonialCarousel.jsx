import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "IDEAX has transformed the way we manage our business!",
      author: "Sarah L.",
      role: "Small Business Owner",
      image: "https://via.placeholder.com/150",
      company: "BizCorp",
    },
    {
      quote: "The AI features have significantly improved our decision-making process.",
      author: "Mike R.",
      role: "Startup Founder",
      image: "https://via.placeholder.com/150",
      company: "TechStart",
    },
    {
      quote: "Thanks to IDEAX, I found the perfect business idea that I could implement right away!",
      author: "Emily T.",
      role: "Entrepreneur",
      image: "https://via.placeholder.com/150",
      company: "Visionary Inc.",
    },
    {
      quote: "The community support and resources have been invaluable for my growth.",
      author: "David K.",
      role: "Freelance Consultant",
      image: "https://via.placeholder.com/150",
      company: "Independent",
    },
    {
      quote: "I love the tools for managing cash flow; they make financial planning so much easier!",
      author: "Jessica P.",
      role: "E-commerce Manager",
      image: "https://via.placeholder.com/150",
      company: "ShopEase",
    },
  ];

  return (
    <div className="px-5 py-10">
      <h3 className="text-3xl font-semibold text-center mb-8 text-white">
        What Our Clients Say About Us
      </h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]} // Include required Swiper modules
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm mx-auto bg-white text-black p-8 rounded-xl flex flex-col items-center shadow-lg relative mt-10">
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden absolute top-[-15%]">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.author}'s photo`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center mt-5">
                <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                <p className="text-sm mb-4">{testimonial.role}</p>
                <p className="text-sm italic">“{testimonial.quote}”</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
