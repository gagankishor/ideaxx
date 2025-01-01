import Link from "next/link";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "IDEAX has completely transformed the way we efficiently manage and grow our business.",
      author: "Ashish Maan",
      role: "Startup Founder",
      image: "/landing/1711453307385.webp",
      company: "BizCorp",
    },
    {
      quote: "The AI features have significantly improved our strategic decision-making process overall.",
      author: "Vikas Puri",
      role: "JMD EXPORTS M. D.",
      image: "/landing/efacd3a2-633e-4ea0-8813-21e574eb1291.webp",
      company: "TechStart",
    },
    {
      quote: "Thanks to IDEAX, I found the perfect business idea that I could implement right away.",
      author: "Eyad Abdulla",
      role: "Diamond GVT Ceramic",
      image: "/landing/ventom.webp",
      company: "Visionary Inc.",
    },
    {
      quote: "I appreciate the tools for managing cash flow; they make financial planning so much easier!",
      author: "Ayman Basha",
      role: "GM of BASHA IMPEX",
      image: "/landing/AymanBasha.webp",
      company: "ShopEase",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, #341E81 0%, #341E81 100%)",
        padding: "0px 30px 50px",
        color: "white",
      }}
    >
      <div style={{ margin: "40px 5%", maxWidth: "1200px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.75rem",
              fontWeight: "200",
              color: "white",
              lineHeight: "110%",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Deliver your best work with{" "}
            <span style={{ fontWeight: "600" }}>IDX</span>
          </h2>

          <div className="btns-container">
            <Link
              className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontSize: "14px" }}
              href="/mainWizard"
            >
              Test Your Idea <FaArrowAltCircleRight />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
            className="mt-10"
          >
            <Image
              src="/darksection1/image.webp"
              style={{ width: "100%", maxWidth: "1000px", height: "auto" }}
              alt="ideax bottom"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-semibold text-center mb-8 text-white">
          What Our Clients Say About Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="trstomonialColor max-w-sm mx-auto shadow-md rounded-lg bg-[#ffffffcb] text-black p-8 flex flex-col items-center relative mt-10"
            >
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden absolute top-[-15%]">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.author}'s photo`}
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div className="text-center mt-5">
                <h4 className="font-semibold text-white text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-white mb-4">{testimonial.role}</p>
                <p className="text-sm text-white italic">
                  “{testimonial.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
