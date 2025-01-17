"use client";
import { useEffect, useState } from 'react';
import { ArrowRight, Globe, Zap, Shield, Code, Cpu, Lock, CheckCircle } from 'lucide-react';
import AnimatedStatsSection from './AnimatedStatsSection';

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
    { icon: <Zap className="w-6 h-6" />, value: "3,400", label: "TPS", subtext: "Blazing fast transactions" },
    { icon: <Shield className="w-6 h-6" />, value: "$10B+", label: "TVL", subtext: "Total value locked" },
    { icon: <Globe className="w-6 h-6" />, value: "11.5M+", label: "Accounts", subtext: "Active on network" }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer First",
      description: "Build with powerful tools and frameworks"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "High Performance",
      description: "Scale to millions of users globally"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance"
    }
  ];
  // ... previous state and effects code remains the same ...

const testimonials = [
    {
        quote: "Solana has revolutionized our blockchain development process",
        author: "Sarah Chen",
        role: "CTO, TechCorp",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "The speed and scalability are unmatched in the industry",
        author: "Michael Rodriguez",
        role: "Lead Developer, BlockFin",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        quote: "Best developer experience in the blockchain space",
        author: "Alex Thompson",
        role: "Founder, DAppWorks",
        image: "https://randomuser.me/api/portraits/men/46.jpg"
    }
];

const ecosystemPartners = [
    { name: "Circle", logo: "https://cryptologos.cc/logos/ark-ark-logo.png?v=002" },
    { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.png" },
    { name: "Serum", logo: "https://cryptologos.cc/logos/serum-srm-logo.png" },
    { name: "Brave", logo: "https://cryptologos.cc/logos/kusama-ksm-logo.png?v=002" },
    { name: "FTX", logo: "https://cryptologos.cc/logos/ftx-token-ftt-logo.png" }
];
    const metrics = [
        { label: "Active Validators", value: "1,700+" },
        { label: "Total Transactions", value: "180B+" },
        { label: "Average Cost/Tx", value: "$0.00025" },
        { label: "Developers", value: "20,000+" }
    ];
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Enhanced Scalability",
      items: ["Layer 2 Solutions", "Cross-chain Bridge", "Network Optimization"]
    },
    {
      quarter: "Q2 2025",
      title: "Developer Tools",
      items: ["IDE Integration", "Smart Contract Templates", "Testing Framework"]
    },
    {
      quarter: "Q3 2025",
      title: "Enterprise Features",
      items: ["Private Networks", "Compliance Tools", "Enterprise Dashboard"]
    }
  ];

return (
    <div className="relative min-h-screen bg-black overflow-hidden">
            <div 
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `url('https://solana.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fce0c7323a97a4d91bd0baa7490ec9139%252F4e7450bbc1114943b89ef51ea59fb791&w=1920&q=75')`,
    backgroundSize: 'cover', // Covers the entire element
    backgroundPosition: 'center', // Centers the image
    transform: `rotate(${scrollY * 0.05}deg) scale(${1 + scrollY * 0.001})`,
    transition: 'transform 0.2s ease-out',
  }}
/>

{/* Background grid with parallax */}
<div 
  className="absolute inset-0 bg-grid-pattern"
  style={{ 
    backgroundImage: `
      url('/investers/ideaxBanner.jpg')
    `,
    backgroundSize: 'cover', // Covers the entire element
    // backgroundPosition: 'center',
    // backgroundSize: '1200px 600px',
    transform: `
      perspective(1000px) 
      rotateX(${mousePosition.y * 5}deg) 
      rotateY(${mousePosition.x * 5}deg) 
      translateZ(${scrollY * 0.1}px)
    `,
    transition: 'transform 0.2s ease-out',
  }}
/>
        <div className="absolute inset-0 overflow-hidden">
            <div 
                className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] opacity-60"
                style={{
                    transform: `rotate(${scrollY * 0.2}deg) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-transparent blur-xl" />
            </div>
            
            <div 
                className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] opacity-60"
                style={{
                    transform: `rotate(${-scrollY * 0.2}deg) translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            >
                <div className="w-full h-full rounded-full bg-gradient-to-l from-purple-600 via-pink-500 to-transparent blur-xl" />
            </div>
        </div>
        {/* Previous background elements remain the same */}
<div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
            <div className="text-center space-y-6">
                {/* Headline with parallax effect */}
                <h1 
                    className="text-5xl md:text-7xl font-bold text-white space-y-2"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px)`,
                        opacity: Math.max(0, 1 - scrollY * 0.002),
                    }}
                >
                    <div className="relative inline-block">
                        <span className="relative z-10">Powerful for developers.</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl" />
                    </div>
                    <br />
                    <div className="relative inline-block">
                        <span className="relative z-10">Fast for everyone.</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent blur-xl" />
                    </div>
                </h1>

                {/* Subtitle with fade effect */}
                <p 
                    className="text-gray-300 text-xl max-w-3xl mx-auto"
                    style={{
                        transform: `translateY(${scrollY * 0.4}px)`,
                        opacity: Math.max(0, 1 - scrollY * 0.003),
                    }}
                >
                    Bring blockchain to the people. Solana supports experiences 
                    for power users, new consumers, and everyone in between.
                </p>

                {/* Buttons with hover and scroll effects */}
                <div 
                    className="flex items-center justify-center gap-4 pt-8"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        opacity: Math.max(0, 1 - scrollY * 0.004),
                    }}
                >
                    <button className="group px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                        START BUILDING
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-3 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                        RESOURCES
                    </button>
                </div>

                {/* Stats Section with staggered scroll effects */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300"
                            style={{
                                transform: `translateY(${scrollY * 0.1 * (index + 1)}px) rotate(${scrollY * 0.02}deg)`,
                                opacity: Math.max(0, 1 - scrollY * 0.001 * (index + 1)),
                            }}
                        >
                            <div className="flex items-center justify-center mb-4 text-purple-400">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-purple-400 mb-2">{stat.label}</div>
                            <div className="text-sm text-gray-400">{stat.subtext}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300"
                            style={{
                                transform:`
                                    translateY(${scrollY * 0.15 * (index + 2)}px)
                                    rotate(${scrollY * 0.03 * (index % 2 ? 1 : -1)}deg)
                                `,
                                opacity: Math.max(0, 1 - scrollY * 0.001 * (index + 1)),
                            }}
                        >
                            <div className="text-purple-400 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animated gradient lines */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>

        {/* Enhanced floating particles with parallax and rotation */}
        
        <div className="relative z-10">
            {/* Previous hero section remains the same */}

            {/* New Section 1: Ecosystem Stats with Counting Animation */}
            <section 
                className="py-24 relative"
                style={{
                    transform: `translateY(${Math.max(0, scrollY * 0.1 - 600)}px)`,
                    opacity: Math.max(0, Math.min(1, (scrollY - 300) / 400))
                }}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <div 
                                key={index}
                                className="text-center"
                                style={{
                                    transform: `translateY(${Math.max(0, scrollY * 0.05 * (index + 1) - 50)}px) 
                                    rotate(${scrollY * 0.47 * (index % 2 ? 1 : -1)}deg)`,
                                    opacity: Math.max(0, Math.min(1, (scrollY - 400) / 400))
                                }}
                            >
                                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                                <div className="text-purple-400">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <AnimatedStatsSection/>
            {/* New Section 2: Testimonials Carousel */}
            <section className="py-24 bg-gradient-to-b from-transparent to-purple-900/20">
                <div 
                    className="max-w-6xl mx-auto px-4"
                    style={{
                        transform: `translateX(${Math.max(-100, -(scrollY * 0.1 - 500))}px)`,
                        opacity: Math.max(0, Math.min(1, (scrollY - 600) / 400))
                    }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-16">What Developers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
                                style={{
                                    transform: `
                                        translateY(${Math.sin(scrollY * 0.003 + index) * 40}px)
                                        rotate(${scrollY * 0.01 * (index % 2 ? 1 : -1)}deg)
                                    `
                                }}
                            >
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.author}
                                    className="w-16 h-16 rounded-full mb-4"
                                />
                                <p className="text-gray-300 mb-4">&ldquo;{testimonial.quote}&ldquo;</p>
                                <div className="text-white font-medium">{testimonial.author}</div>
                                <div className="text-purple-400 text-sm">{testimonial.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Section 3: Partner Ecosystem */}
            <section className="py-24 relative overflow-hidden">
                <div 
                    className="max-w-7xl mx-auto px-4"
                    style={{
                        transform: `translateY(${Math.max(0, scrollY * 0.05 - 800)}px)`,
                        opacity: Math.max(0, Math.min(1, (scrollY - 900) / 400))
                    }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Trusted By Industry Leaders</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {ecosystemPartners.map((partner, index) => (
                            <div 
                                key={index}
                                className="relative group"
                                style={{
                                    transform: `
                                        translateY(${Math.sin(scrollY * 0.002 + index * 2) * 15}px)
                                        scale(${1 + Math.sin(scrollY * 0.001 + index) * 0.05})
                                    `
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

            {/* New Section 4: Interactive Roadmap */}
            <section className="py-24 relative">
                <div 
                    className="max-w-6xl mx-auto px-4"
                    style={{
                        transform: `translateX(${Math.max(0, (scrollY * 0.1 - 1000) * -1)}px)`,
                        opacity: Math.max(0, Math.min(1, (scrollY - 1100) / 400))
                    }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Roadmap</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roadmapItems.map((item, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
                                style={{
                                    transform: `
                                        translateY(${Math.max(0, scrollY * 0.05 * (index + 1) - 1200)}px)
                                        rotate(${scrollY * 0.01 * (index % 2 ? 1 : -1)}deg)
                                    `
                                }}
                            >
                                <div className="text-purple-400 mb-2">{item.quarter}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.items.map((listItem, i) => (
                                        <li key={i} className="flex items-center text-gray-300">
                                            <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Section 5: Call to Action */}
            <section className="py-24 relative">
                <div 
                    className="max-w-4xl mx-auto px-4 text-center"
                    style={{
                        transform: `scale(${Math.max(0.8, Math.min(1, 1 + (scrollY - 1500) * 0.0005))})`,
                        opacity: Math.max(0, Math.min(1, (scrollY - 1400) / 400))
                    }}
                >
                    <div className="p-12 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
                        <p className="text-xl text-gray-300 mb-8">Join thousands of developers building on Solana</p>
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

        {/* Previous particle effects remain the same */}
        {[...Array(40)].map((_, i) => (
            <div
                key={i}
                className="absolute bg-white/10 rounded-full animate-pulse"
                style={{
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    transform: `
                        translate(
                            ${mousePosition.x * (i + 1) * 10}px,
                            ${scrollY * (Math.random() * 0.5) + mousePosition.y * (i + 1) * 10}px
                        )
                        rotate(${scrollY * 0.1 * (i % 2 ? 1 : -1)}deg)
                    `,
                    opacity: Math.random() * 0.5 + 0.3,
                    transition: 'transform 0.1s ease-out',
                }}
            />
        ))}
    </div>
);
};

export default SolanaHero;