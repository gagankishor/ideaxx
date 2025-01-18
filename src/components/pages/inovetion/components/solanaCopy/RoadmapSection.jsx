import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const RoadmapSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('roadmap-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on section's position relative to viewport center
      const distanceFromCenter = Math.abs(rect.top + rect.height/2 - windowHeight/2);
      const maxDistance = windowHeight/2 + rect.height/2;
      const progress = 1 - Math.min(distanceFromCenter/maxDistance, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Enhanced Scalability",
      items: [
        "Layer 2 Solutions",
        "Cross-chain Bridge",
        "Network Optimization",
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Developer Tools",
      items: [
        "IDE Integration",
        "Smart Contract Templates",
        "Testing Framework",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Enterprise Features",
      items: ["Private Networks", "Compliance Tools", "Enterprise Dashboard"],
    },
  ];

  return (
    <section 
      id="roadmap-section" 
      className="py-24 relative min-h-screen flex items-center"
    >
      <div 
        className="max-w-6xl mx-auto px-4 w-full relative"
        style={{
          opacity: Math.min(1, scrollProgress * 2),
          transform: `translateX(${50 * (1 - Math.min(1, scrollProgress * 2))}px)`
        }}
      >
        <h2 
          className="text-4xl font-bold text-white text-center mb-16"
          style={{
            opacity: Math.min(1, scrollProgress * 2.5),
            transform: `translateY(${20 * (1 - Math.min(1, scrollProgress * 2.5))}px)`
          }}
        >
          Roadmap
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => {
            // Calculate individual card animations
            const delay = index * 0.2;
            const cardProgress = Math.max(0, Math.min(1, scrollProgress * 2 - delay));
            
            return (
              <div
                key={index}
                className="transform transition-all duration-700 ease-out"
                style={{
                  opacity: cardProgress,
                  transform: `
                    translateY(${30 * (1 - cardProgress)}px)
                    scale(${0.95 + (0.05 * cardProgress)})
                  `
                }}
              >
                <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 h-full">
                  <div 
                    className="text-purple-400 text-lg font-semibold mb-2"
                    style={{
                      opacity: Math.min(1, cardProgress * 1.5)
                    }}
                  >
                    {item.quarter}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {item.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {item.items.map((listItem, i) => {
                      const itemDelay = i * 0.1;
                      const itemProgress = Math.max(0, Math.min(1, cardProgress * 2 - itemDelay));
                      
                      return (
                        <li 
                          key={i} 
                          className="flex items-start text-gray-300"
                          style={{
                            opacity: itemProgress,
                            transform: `translateX(${20 * (1 - itemProgress)}px)`
                          }}
                        >
                          <CheckCircle className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-lg">{listItem}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;