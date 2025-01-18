"use client";
import { useEffect, useState } from "react";
import {
  ArrowRight,
} from "lucide-react";
import AnimatedStatsSection from "./AnimatedStatsSection";
import MetricsSection from "./components/solanaCopy/MetricsSectionwithCenter-TriggeredAnimation";
import TestimonialsSection from "./components/solanaCopy/TestimonialsSection";
import RoadmapSection from "./components/solanaCopy/RoadmapSection";
import DynamicBackground from "./components/solanaCopy/DynamicBackground";
import EnhancedHeroSection from "./components/solanaCopy/EnhancedHeroSection";

const SolanaHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const ecosystemPartners = [
    {
      name: "Circle",
      logo: "https://cryptologos.cc/logos/ark-ark-logo.png?v=002",
    },
    {
      name: "Chainlink",
      logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    },
    { name: "Serum", logo: "https://cryptologos.cc/logos/serum-srm-logo.png" },
    {
      name: "Brave",
      logo: "https://cryptologos.cc/logos/kusama-ksm-logo.png?v=002",
    },
    {
      name: "FTX",
      logo: "https://cryptologos.cc/logos/ftx-token-ftt-logo.png",
    },
  ];
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://solana.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fce0c7323a97a4d91bd0baa7490ec9139%252F4e7450bbc1114943b89ef51ea59fb791&w=1920&q=75')`,
          backgroundSize: "cover", // Covers the entire element
          backgroundPosition: "center", // Centers the image
          transform: `rotate(${scrollY * 0.05}deg) scale(${
            1 + scrollY * 0.01
          })`,
          transition: "transform 0.2s ease-out",
        }}
      />
      <div
        className="absolute inset-0 bg-grid-pattern"
        style={{
            backgroundImage: `
            url('/investers/ideaxBanner.jpg')
            `,
            backgroundSize: '100% 600px',
            transform: `
            perspective(1000px)     
            rotateX(${mousePosition.y * 5}deg) 
            rotateY(${mousePosition.x * 5}deg) 
            translateZ(${scrollY * 0.01}px)
            `,
            transition: "transform 0.2s ease-out",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] opacity-60"
          style={{
            transform: `rotate(${scrollY * 0.2}deg) translate(${
              mousePosition.x * 20
            }px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-transparent blur-xl" />
        </div>

        <div
          className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] opacity-60"
          style={{
            transform: `rotate(${-scrollY * 0.2}deg) translate(${
              -mousePosition.x * 20
            }px, ${-mousePosition.y * 20}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-l from-purple-600 via-pink-500 to-transparent blur-xl" />
        </div>
      </div> */}
      <DynamicBackground/>
      {/* Previous background elements remain the same */}
      <EnhancedHeroSection/>

      {/* Enhanced floating particles with parallax and rotation */}

      <div className="relative z-10">
       
        <MetricsSection/>
        <AnimatedStatsSection />
        
        <TestimonialsSection/>
        <section className="py-24 relative overflow-hidden">
          <div
            className="max-w-7xl mx-auto px-4"
            style={{
              transform: `translateY(${Math.max(0, scrollY * 0.05 - 800)}px)`,
              opacity: Math.max(0, Math.min(1, (scrollY - 900) / 400)),
            }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Trusted By Industry Leaders
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {ecosystemPartners.map((partner, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    transform: `
                        translateY(${
                            Math.sin(
                            scrollY * 0.002 + index * 2
                            ) * 15
                        }px)
                        scale(${
                            1 +
                            Math.sin(scrollY * 0.001 + index) *
                            0.05
                        })
                    `,
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <RoadmapSection/>
        <section className="py-24 relative">
          <div
            className="max-w-4xl mx-auto px-4 text-center"
            style={{
              transform: `scale(${Math.max(
                0.8,
                Math.min(1, 1 + (scrollY - 1500) * 0.0005)
              )})`,
              opacity: Math.max(0, Math.min(1, (scrollY - 1400) / 400)),
            }}
          >
            <div className="p-12 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers building on Solana
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Start Building Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/10 rounded-full animate-pulse"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            transform: `
                        translate(
                            ${mousePosition.x * (i + 1) * 10}px,
                            ${
                              scrollY * (Math.random() * 0.5) +
                              mousePosition.y * (i + 1) * 10
                            }px
                        )
                        rotate(${scrollY * 0.1 * (i % 2 ? 1 : -1)}deg)
                    `,
            opacity: Math.random() * 0.5 + 0.3,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
};
export default SolanaHero;