import { Cpu, Brain, Layers, Share2, Network } from 'lucide-react';

const HeroSectionAi = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1)_0%,_rgba(0,0,0,0)_50%)] animate-pulse"></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDY2LCA2NiwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float2"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-indigo-500/10 rounded-full blur-xl animate-float3"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Hero Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 text-purple-400 text-sm mb-4">
            <Cpu className="w-4 h-4 mr-2" /> Powered by Solana Blockchain
          </div>
          
          <h1 className="text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">
              The Future of
            </span>
            <br />
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
                Business Integration
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></span>
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The IDX token is designed to revolutionize how businesses interact with blockchain
            technology. Built on the Solana network, IDX offers unprecedented transaction speeds
            and scalability.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 mt-10">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <span className="relative flex items-center text-white">
                Explore IDX <Share2 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-gray-900 border border-gray-800 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800">
              <span className="text-gray-300 group-hover:text-white transition-colors">Learn More</span>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {/* Vision Card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Brain className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-left">Our Vision</h3>
            <p className="text-gray-400">
              To empower businesses globally by integrating blockchain technology into their
              core operations efficiently and securely.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Layers className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-left">Our Mission</h3>
            <p className="text-gray-400">
              To provide a robust platform that simplifies transactions, enhances security,
              and fosters transparency across business operations.
            </p>
          </div>

          {/* Technology Card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-indigo-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Network className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-left">Our Technology</h3>
            <p className="text-gray-400">
              Built on Solana high-performance blockchain, offering unprecedented speed
              and scalability for enterprise solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">65k+</div>
            <div className="text-gray-400 mt-2">Transactions/sec</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">99.9%</div>
            <div className="text-gray-400 mt-2">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">0.001s</div>
            <div className="text-gray-400 mt-2">Latency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">24/7</div>
            <div className="text-gray-400 mt-2">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAi;