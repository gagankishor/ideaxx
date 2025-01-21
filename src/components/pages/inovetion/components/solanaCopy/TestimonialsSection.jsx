import  { useState, useEffect } from 'react';
const TestimonialsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof document !== 'undefined') {
      const element = document.getElementById('testimonials-section');
      
      if (!element) return;
    
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate progress based on section's position relative to viewport center
      const distanceFromCenter = Math.abs(rect.top + rect.height/2 - windowHeight/2);
      const maxDistance = windowHeight/2 + rect.height/2;
      const progress = 1 - Math.min(distanceFromCenter/maxDistance, 1);
      setScrollProgress(progress);
    }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const testimonials = [
    {
      quote: "Solana has revolutionized our blockchain development process",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "The speed and scalability are unmatched in the industry",
      author: "Michael Rodriguez",
      role: "Lead Developer, BlockFin",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      quote: "Best developer experience in the blockchain space",
      author: "Alex Thompson",
      role: "Founder, DAppWorks",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];
  return (
    <section 
      id="testimonials-section" 
      className="py-24 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/30" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 
          className="text-4xl font-bold text-white text-center mb-16"
          style={{
            opacity: Math.min(1, scrollProgress * 2),
            transform: `translateY(${20 * (1 - Math.min(1, scrollProgress * 2))}px)`
          }}
        >
          What Developers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            // Calculate individual card animations
            const delay = index * 0.1;
            const cardProgress = Math.max(0, Math.min(1, scrollProgress * 2 - delay));
            const floatOffset = Math.sin((Date.now() / 2000) + index * 2) * 10;
            return (
              <div
                key={index}
                className="transform transition-all duration-700 ease-out"
                style={{
                  opacity: cardProgress,
                  transform: `
                    translateY(${20 * (1 - cardProgress) + floatOffset}px)
                    scale(${0.95 + (0.05 * cardProgress)})
                  `
                }}
              >
                <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="text-white font-medium">
                        {testimonial.author}
                      </div>
                      <div className="text-purple-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;