import  { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Globe, Code, Cpu, Lock } from 'lucide-react';

const EnhancedHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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

  const stats = [
    {
      icon: <Zap className="w-6 h-6" />,
      value: "3,400",
      label: "TPS",
      subtext: "Blazing fast transactions",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "$10B+",
      label: "TVL",
      subtext: "Total value locked",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "11.5M+",
      label: "Accounts",
      subtext: "Active on network",
    },
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer First",
      description: "Build with powerful tools and frameworks",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "High Performance",
      description: "Scale to millions of users globally",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance",
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 overflow-hidden">
      <div className="text-center space-y-6">
        {/* Enhanced Headline with 3D effect */}
        <h1 className="text-5xl md:text-7xl font-bold text-white space-y-4">
          <div
            className="relative inline-block transform transition-all duration-500"
            style={{
              transform: `
                translateY(${scrollY * 0.2}px)
                perspective(1000px)
                rotateX(${mousePosition.y * 2}deg)
                rotateY(${mousePosition.x * 2}deg)
              `,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            <span className="relative z-10 inline-block">Powerful for developers.</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"
              style={{
                transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
              }}
            />
          </div>
          <br />
          <div
            className="relative inline-block transform transition-all duration-500"
            style={{
              transform: `
                translateY(${scrollY * 0.3}px)
                perspective(1000px)
                rotateX(${mousePosition.y * 2}deg)
                rotateY(${mousePosition.x * 2}deg)
              `,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            <span className="relative z-10 inline-block">Fast for everyone.</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl"
              style={{
                transform: `translateX(${-mousePosition.x * 10}px) translateY(${-mousePosition.y * 10}px)`
              }}
            />
          </div>
        </h1>

        {/* Enhanced Subtitle with floating effect */}
        <p
          className="text-gray-300 text-xl max-w-3xl mx-auto"
          style={{
            transform: `
              translateY(${scrollY * 0.4}px)
              translateX(${mousePosition.x * 5}px)
            `,
            opacity: Math.max(0, 1 - scrollY * 0.003)
          }}
        >
          Bring blockchain to the people. Solana supports experiences for
          power users, new consumers, and everyone in between.
        </p>

        {/* Enhanced Buttons with advanced hover effects */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 pt-8"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.004)
          }}
        >
          <button className="group relative px-8 py-3 bg-purple-500 text-white rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
              START BUILDING
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
          <button className="relative px-8 py-3 text-white rounded-full overflow-hidden group">
            <div className="absolute inset-0 border border-white/20 rounded-full" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative transform group-hover:scale-105 transition-transform duration-300">
              RESOURCES
            </span>
          </button>
        </div>

        {/* Enhanced Stats with floating cards */}
        <div className="mt-32 grid pb-16 grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const offset = Math.sin(Date.now() / 2000 + index) * 10;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-500"
                style={{
                  transform: `
                    translateY(${offset + scrollY * 0.1 * (index + 1)}px)
                    rotate(${scrollY * 0.01 * (index % 2 ? 1 : -1)}deg)
                    scale(${1 - Math.min(0.1, scrollY * 0.0005)})
                  `,
                  opacity: Math.max(0, 1 - scrollY * 0.001 * (index + 1))
                }}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300 text-purple-400 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1 transform group-hover:translate-y-1 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-purple-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 transform group-hover:translate-y-1 transition-transform">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Features with dynamic cards */}
        <div className="mt-44 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const offset = Math.cos(Date.now() / 2000 + index) * 15;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-500"
                style={{
                  transform: `
                    translateY(${offset + scrollY * 0.15 * (index + 2)}px)
                    rotate(${scrollY * 0.02 * (index % 2 ? 1 : -1)}deg)
                  `,
                  opacity: Math.max(0, 1 - scrollY * 0.001 * (index + 1))
                }}
              >
                <div className="text-purple-400 flex justify-center items-center text-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 transform group-hover:translate-y-1 transition-transform">
                  {feature.title}
                </h3>
                <p className="text-gray-400 transform group-hover:translate-y-1 transition-transform">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced animated gradient lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20"
          style={{
            transform: `translateX(${Math.sin(Date.now() / 2000) * 100}px)`,
            opacity: 0.5
          }}
        />
      </div>
    </div>
  );
};

export default EnhancedHeroSection;