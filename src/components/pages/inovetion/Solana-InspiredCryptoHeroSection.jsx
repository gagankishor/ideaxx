import { Wallet, LineChart, Gem, Coins, ArrowUpRight, Blocks, Zap, Globe } from 'lucide-react';

const HeroSectionSolana = () => {
  return (
    <div className="relative min-h-screen bg-[#0c0c1d] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-[#00FFA3]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-[#DC1FFF]/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 163, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Moving Particles */}
        <div className="absolute h-full w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-[#00FFA3] rounded-full
                animate-meteor opacity-75`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Top Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center bg-white/5 rounded-full px-6 py-2 backdrop-blur-sm">
            <LineChart className="w-4 h-4 text-[#00FFA3] mr-2" />
            <span className="text-white">SOL Price: $234.52</span>
            <span className="text-[#00FFA3] ml-2">+5.23%</span>
          </div>
          <div className="flex items-center bg-white/5 rounded-full px-6 py-2 backdrop-blur-sm">
            <Blocks className="w-4 h-4 text-[#DC1FFF] mr-2" />
            <span className="text-white">TPS: 65,000</span>
          </div>
          <div className="flex items-center bg-white/5 rounded-full px-6 py-2 backdrop-blur-sm">
            <Wallet className="w-4 h-4 text-[#00FFA3] mr-2" />
            <span className="text-white">Market Cap: $124B</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#00FFA3]/10 rounded-full border border-[#00FFA3]/20 text-[#00FFA3]">
              Powered by Solana Blockchain
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold space-y-4">
              <span className="block text-white">Experience</span>
              <span className="block bg-gradient-to-r from-[#00FFA3] via-[#DC1FFF] to-[#00FFA3] bg-clip-text text-transparent animate-gradient-x">
                Next-Gen DeFi
              </span>
              <span className="block text-white">Revolution</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Built on Solana lightning-fast network, IDX token brings unprecedented 
              speed and efficiency to your blockchain transactions.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="group relative px-8 py-4 bg-[#00FFA3] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-[#00FFA3] opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></div>
                <span className="relative flex items-center text-black font-semibold">
                  Launch App 
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:bg-white/10">
                View Documentation
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#00FFA3]/10 rounded-lg">
                  <Zap className="w-6 h-6 text-[#00FFA3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">65k TPS</h3>
              </div>
              <p className="text-gray-400">Lightning-fast transaction processing speed</p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#DC1FFF]/10 rounded-lg">
                  <Coins className="w-6 h-6 text-[#DC1FFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white">$0.001</h3>
              </div>
              <p className="text-gray-400">Minimal transaction fees</p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#00FFA3]/10 rounded-lg">
                  <Globe className="w-6 h-6 text-[#00FFA3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Global</h3>
              </div>
              <p className="text-gray-400">Worldwide accessibility and adoption</p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#DC1FFF]/10 rounded-lg">
                  <Gem className="w-6 h-6 text-[#DC1FFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Secure</h3>
              </div>
              <p className="text-gray-400">Enterprise-grade security protocols</p>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-black to-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFA3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <LineChart className="w-10 h-10 text-[#00FFA3] mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-left">Trading Platform</h3>
            <p className="text-gray-400">
              Advanced trading features with real-time market data and analytics.
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-black to-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC1FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Wallet className="w-10 h-10 text-[#DC1FFF] mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-left">Secure Wallet</h3>
            <p className="text-gray-400">
              Multi-signature wallet support with institutional-grade security.
            </p>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-black to-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFA3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Blocks className="w-10 h-10 text-[#00FFA3] mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-left">Smart Contracts</h3>
            <p className="text-gray-400">
              Advanced smart contract functionality with high throughput.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSolana;