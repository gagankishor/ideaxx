import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative max-w-7xl px-10  min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-500"></div>
        
        {/* Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Text */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                Revolutionizing
              </span>
              <br />
              <span className="text-white">Business Through</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                Blockchain
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              The IDX token is designed to revolutionize how businesses interact with blockchain
              technology. Built on the Solana network, IDX offers unprecedented transaction speeds
              and scalability, making it ideal for enterprise solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-lg transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:shadow-lg hover:shadow-purple-500/10">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-6">
            {/* Vision Card */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-left text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400">
                    To empower businesses globally by integrating blockchain technology into their
                    core operations efficiently and securely.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-left text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400">
                    To provide a robust platform that simplifies transactions, enhances security,
                    and fosters transparency across business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-gray-800 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Powered by Solana for unprecedented transaction speeds</p>
          </div>

          <div className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-gray-800 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-400">Enterprise-grade security for your peace of mind</p>
          </div>

          <div className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-gray-800 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Global Scale</h3>
            <p className="text-gray-400">Built for worldwide business operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;