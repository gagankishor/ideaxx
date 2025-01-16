import React, { useState, useEffect } from 'react';
import { Zap, Shield, Eye, Target, Activity, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] top-1/2 right-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute w-[800px] h-[800px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6">
          <div 
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 mb-6 group hover:border-white/20 transition-all duration-500"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-200 text-sm font-medium">
              Next Generation Blockchain
            </span>
          </div>
          
          <h1 
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            About IDX Token
          </h1>
          
          <p 
            className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            Revolutionizing enterprise blockchain technology with unprecedented
            speed, security, and scalability on the Solana network.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Main Features */}
          <div className="lg:col-span-8 space-y-8">
            {/* Vision & Mission */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Vision",
                    description: "Empowering global businesses through seamless blockchain integration",
                    color: "blue"
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Mission",
                    description: "Building the most robust and secure enterprise blockchain platform",
                    color: "purple"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-${item.color}-500/10 to-transparent border border-${item.color}-500/20 group hover:from-${item.color}-500/20 transition-all duration-300`}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl bg-${item.color}-500/10 text-${item.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Lightning Fast",
                  description: "65,000+ transactions per second with sub-second finality",
                  icon: <Zap className="w-6 h-6" />,
                  gradient: "from-blue-500/20 via-indigo-500/20 to-transparent"
                },
                {
                  title: "Enterprise Grade",
                  description: "Military-grade security with advanced encryption",
                  icon: <Shield className="w-6 h-6" />,
                  gradient: "from-purple-500/20 via-pink-500/20 to-transparent"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-xl rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-all duration-500 hover:scale-105`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <Activity className="w-6 h-6 text-blue-400 mr-2" />
                    Metrics
                  </h3>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>

                {[
                  { label: "TPS", value: "65,000", progress: "w-full" },
                  { label: "Uptime", value: "99.99%", progress: "w-11/12" },
                  { label: "Security", value: "A+", progress: "w-10/12" }
                ].map((metric, index) => (
                  <div key={index} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {metric.label}
                      </span>
                      <span className="text-white font-bold">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ${metric.progress} transform origin-left transition-transform duration-500 group-hover:scale-x-105`}
                      ></div>
                    </div>
                  </div>
                ))}

                <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2 group">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;