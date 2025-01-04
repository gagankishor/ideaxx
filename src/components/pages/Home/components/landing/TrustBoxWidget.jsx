// import { useEffect } from "react";
// const TrustBoxWidget = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src =
//       "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className=" flex flex-row justify-center  gap-8">

//       <div className=" flex justify-center items-center">
//         <a
//           href="https://www.geckoterminal.com/solana/pools/6CQSpRdGtNWEbLhKpx7DAw7FDAm3g7wvjtsvaTKWBwxo"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="https://s.geckoterminal.com/_next/static/media/logo_dark.6b1547fe.png"
//             alt="trustpilot logo"
//             className=" w-40"
//           />
//         </a>

//       </div>
//       <div className=" flex justify-center items-center">
//         <a
//           href="https://solscan.io/token/BKzTtgn5th95fAF6m6XcDq211kzaUqwCnsqtWrE2gFWX"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="/award-section/solscan-removebg-preview.webp"
//             className=" w-40 mb-4"
//             alt="solscan logo"
//           />
//         </a>
//       </div>

//       <div className=" flex justify-center items-center">
//         <a
//           href="https://dexscreener.com/solana/6cqsprdgtnweblhkpx7daw7fdam3g7wvjtsvatkwbwxo"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img

//             src="/award-section/dexscreener.webp"

//             alt="dexscreener logo"
//             className=" w-40 "
//           />
//         </a>

//       </div>
//       <div  className=" flex justify-center items-center">
//         <a
//           href="https://www.dextools.io/app/en/token/idx?t=1734640687124"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="/award-section/cover-dextools-removebg-preview.webp"
//             alt="dextools logo"
//             className=" w-40"
//           />
//         </a>

//       </div>
//       <div  className=" flex justify-center items-center">
//         <a
//           href="https://www.trustpilot.com/review/idxsolana.io"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="/award-section/Layer.webp"
//             alt="trustpilot logo"
//             className=" w-40"
//           />
//         </a>

//       </div>
//     </div>
//   );
// };
"use client";
import "./TrustedBySection.css"; // Import the CSS file
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
const TrustBoxWidget = () => {
  return (
    <div className="base-layout-segment-component-4">
      <div className="segment-wrapper">
        <div className="top-logos-component">
          {/* Title */}
          <div style={{ marginTop: "20px" }}>
            <div className="logos-carousel-container py-8 ">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{
                  delay: 0, // Remove delay to make it continuous
                  disableOnInteraction: false, // Keep autoplay even if interacting with the Swiper
                }}
                loop={true}
                speed={5000} // Adjust speed for smooth, continuous scrolling
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 5 },
                }}
                className="gap-8"
              >
                {[
                  {
                    className: "flex justify-center items-center",
                    anchor: {
                      href: "https://www.geckoterminal.com/solana/pools/6CQSpRdGtNWEbLhKpx7DAw7FDAm3g7wvjtsvaTKWBwxo",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      image: {
                        src: "https://s.geckoterminal.com/_next/static/media/logo_dark.6b1547fe.png",
                        alt: "geckoterminal logo",
                        className: " w-48 mt-2",
                      },
                    },
                  },
                  {
                    className: "flex justify-center items-center",
                    anchor: {
                      href: "https://solscan.io/token/BKzTtgn5th95fAF6m6XcDq211kzaUqwCnsqtWrE2gFWX",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      image: {
                        src: "/award-section/solscan-removebg-preview.webp",
                        alt: "solscan logo",
                        className: "w-48 mb-4",
                      },
                    },
                  },
                  {
                    className: "flex justify-center items-center",
                    anchor: {
                      href: "https://dexscreener.com/solana/6cqsprdgtnweblhkpx7daw7fdam3g7wvjtsvatkwbwxo",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      image: {
                        src: "/award-section/dexscreener.webp",
                        alt: "dexscreener logo",
                        className: "w-48 mt-1",
                      },
                    },
                  },
                  {
                    className: "flex justify-center items-center",
                    anchor: {
                      href: "https://www.dextools.io/app/en/token/idx?t=1734640687124",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      image: {
                        src: "/award-section/cover-dextools-removebg-preview.webp",
                        alt: "dextools logo",
                        className: "w-48",
                      },
                    },
                  },
                  {
                    className: "flex justify-center items-center",
                    anchor: {
                      href: "https://www.trustpilot.com/review/idxsolana.io",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      image: {
                        src: "/award-section/Layer.webp",
                        alt: "trustpilot logo",
                        className: "w-48",
                      },
                    },
                  },
                ].map((logo, index) => (
                  <SwiperSlide key={index}>
                    <a
                      href={logo.anchor.href}
                      target={logo.anchor.target}
                      rel={logo.anchor.rel}
                    >
                      <img
                        src={logo.anchor.image.src}
                        alt={logo.anchor.image.alt}
                        className={logo.anchor.image.className}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Highlight Section */}
          
        </div>
      </div>
    </div>
  );
};
export default TrustBoxWidget;
