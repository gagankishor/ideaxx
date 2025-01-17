import  { useState, useEffect } from 'react';
import { Shield, Globe, Zap } from 'lucide-react';

const AnimatedStatsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const progress = 1 - (rect.top + rect.height * 0.5 - windowHeight * 0.5) / (windowHeight * 0.5);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: <Zap className="w-6 h-6" />, value: "3,400", label: "TPS", subtext: "Blazing fast transactions" },
    { icon: <Shield className="w-6 h-6" />, value: "$10B+", label: "TVL", subtext: "Total value locked" },
    { icon: <Globe className="w-6 h-6" />, value: "11.5M+", label: "Accounts", subtext: "Active on network" }
  ];

  return (
    <section 
      id="stats-section"
      className="py-24 min-h-screen flex items-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            // Calculate individual animations based on scroll progress
            const delay = index * 0.1;
            const startProgress = 0.3 + delay;
            const endProgress = 0.7 + delay;
            const itemProgress = Math.min(Math.max((scrollProgress - startProgress) / (endProgress - startProgress), 0), 1);
            
            return (
              <div 
                key={index}
                className="relative bg-black/20 backdrop-blur-sm rounded-lg p-6"
                style={{
                  opacity: itemProgress,
                  transform: `translateY(${20 * (1 - itemProgress)}px)`,
                  transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-purple-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-lg text-purple-400">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;