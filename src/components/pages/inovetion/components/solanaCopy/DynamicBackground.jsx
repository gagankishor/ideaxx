import  { useState, useEffect } from 'react';

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const getBackgroundOpacity = (index) => {
    const scrollSection = Math.floor(scrollY / 1000);
    const progress = (scrollY % 1000) / 1000;
    
    if (scrollSection === index) return 1 - progress;
    if (scrollSection === index - 1) return progress;
    return 0;
  };
  return (
    <div className="fixed inset-0 w-full h-full">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: getBackgroundOpacity(0),
          backgroundImage: `url('/investers/ideaxBanner_2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `
            rotate(${scrollY * 0.03}deg) 
            scale(${1 + scrollY * 0.0005})
          `,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: getBackgroundOpacity(1),
          backgroundImage: `url('/investers/image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `
            rotate(${-scrollY * 0.03}deg) 
            scale(${1 + scrollY * 0.0008})
          `,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: getBackgroundOpacity(1),
          backgroundImage: `url('/investers/ideaxBanner .jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `
            rotate(${-scrollY * 0.03}deg) 
            scale(${1 + scrollY * 0.0001})
          `,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `
            perspective(1000px)
            rotateX(${mousePosition.y * 5}deg)
            rotateY(${mousePosition.x * 5}deg)
            translateZ(${scrollY * 0.05}px)
          `,
          transition: "transform 0.2s ease-out",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Orb */}
        <div
          className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px]"
          style={{
            opacity: 0.4 + Math.sin(scrollY * 0.003) * 0.2,
            transform: `
              rotate(${scrollY * 0.1}deg)
              translate(
                ${mousePosition.x * 20 + Math.sin(scrollY * 0.002) * 50}px,
                ${mousePosition.y * 20 + Math.cos(scrollY * 0.002) * 50}px
              )
            `,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-transparent blur-xl" />
        </div>
        {/* Bottom Right Orb */}
        <div
          className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px]"
          style={{
            opacity: 0.4 + Math.cos(scrollY * 0.003) * 0.2,
            transform: `
              rotate(${-scrollY * 0.1}deg)
              translate(
                ${-mousePosition.x * 20 + Math.cos(scrollY * 0.002) * 50}px,
                ${-mousePosition.y * 20 + Math.sin(scrollY * 0.002) * 50}px
              )
            `,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-l from-purple-600 via-pink-500 to-transparent blur-xl" />
        </div>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            opacity: 0.3 + Math.sin(scrollY * 0.002) * 0.2,
            transform: `
              rotate(${scrollY * 0.05}deg)
              scale(${1 + Math.sin(scrollY * 0.001) * 0.2})
            `,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-transparent blur-xl" />
        </div>
      </div>
    </div>
  );
};
export default DynamicBackground;