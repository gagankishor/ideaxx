import  { useState, useEffect } from 'react';

const MetricsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('metrics-section');
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
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const metrics = [
    { label: "Active Validators", value: "1,700+" },
    { label: "Total Transactions", value: "180B+" },
    { label: "Average Cost/Tx", value: "$0.00025" },
    { label: "Developers", value: "20,000+" },
  ];

  return (
    <section
      id="metrics-section"
      className="py-24 relative min-h-[50vh]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            // Staggered animation timing for each metric
            const delay = index * 0.1;
            const itemProgress = Math.max(0, Math.min(1, scrollProgress * 2 - delay));
            
            return (
              <div
                key={index}
                className="text-center transform transition-all duration-500 ease-out"
                style={{
                  opacity: itemProgress,
                  transform: `
                    translateY(${20 * (1 - itemProgress)}px)
                    scale(${0.9 + (0.1 * itemProgress)})
                  `
                }}
              >
                <div 
                  className="text-4xl font-bold text-white mb-2"
                  style={{
                    transform: `translateY(${10 * (1 - itemProgress)}px)`
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-purple-400"
                  style={{
                    transform: `translateY(${5 * (1 - itemProgress)}px)`
                  }}
                >
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;