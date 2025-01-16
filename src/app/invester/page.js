"use client";
import { useState } from "react";
import { PropTypes} from 'prop-types';
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Target,
  SparklesIcon,
  Bell,
  Users,
  MessageCircle,
  Phone,
  Mail,
  Globe2,
  Wallet,
  CreditCard,
  Building2,
  ShoppingCart,
  ArrowDownToLine,
} from "lucide-react";
const CustomAlert = ({ message, onClose }) => (
    <div className="fixed top-20 right-4 z-50 animate-in fade-in slide-in-from-top-2">
        <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 shadow-xl">
            <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Success!</h3>
                    <p className="text-gray-300">{message}</p>
                </div>
                <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    ×
                </button>
            </div>
        </div>
    </div>
);

CustomAlert.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};
const CopyableAddress = ({ address }) => {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };
  
    return (
      <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-500/30 group">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 font-mono text-blue-200 text-sm break-all">
            {address}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-200 border border-blue-500/30"
          >
            {copied ? (
              <>
                <CheckIcon />
                <span className="text-blue-200">Copied!</span>
              </>
            ) : (
              <>
                <CopyIcon />
                <span className="text-blue-200">Copy</span>
              </>
            )}
          </button>
        </div>
        
        {/* Tooltip feedback */}
        <div
          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-sm rounded-md transition-opacity duration-200 ${
            copied ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Copied to clipboard!
        </div>
      </div>
    );
  };
  
  // Copy icon component
  const CopyIcon = () => (
    <svg
      className="w-4 h-4 text-blue-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      />
    </svg>
  );
  
  // Check icon component
  const CheckIcon = () => (
    <svg
      className="w-4 h-4 text-blue-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
  
export default function InvestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investmentAmount: "",
    message: "",
  });

  //   const [activeSection, setActiveSection] = useState("general");
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertEmail, setShowAlertEmail] = useState(false);
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // alert("Form submitted successfully!");
    setShowAlert(true);
    setFormData({
        name: "",
        email: "",
        company: "",
        investmentAmount: "",
        message: "",
    });
    setTimeout(() => {
        setShowAlert(false);
      }, 5000);
};
const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setShowAlertEmail(true);
    
    setTimeout(() => {
        setShowAlertEmail(false);
      }, 5000);
};
  const statistics = [
    { label: "Transaction Speed", value: "<0.4s" },
    { label: "Network Uptime", value: "99.9%" },
    { label: "Active Users", value: "50K+" },
    { label: "Total Volume", value: "$100M+" },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed and Scalability",
      description:
        "Transactions are processed at lightning speeds with minimal costs, thanks to Solana’s high throughput capabilities.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description:
        "Benefit from Solana’s secure blockchain technology, which ensures that all transactions are protected against fraud and hacks.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Broad Usability",
      description:
        "From facilitating cross-border payments to enabling smart contracts for automated business processes, IDX Token is versatile and practical for various applications.",
    },
  ];

  //   const purchaseSteps = [
  //     {
  //       title: 'Create a Digital Wallet',
  //       description: 'Before purchasing IDX Token, you’ll need a digital wallet that supports Solana-based assets. Popular choices include Phantom, Sollet, and Solflare.'
  //     },
  //     {
  //       title: 'Fund Your Wallet',
  //       description: 'Transfer funds to your digital wallet. Most wallets accept funds in the form of cryptocurrencies like BTC, ETH, or fiat currencies, depending on the wallet provider.'
  //     },
  //     {
  //       title: 'Choose a Cryptocurrency Exchange:',
  //       description: ' IDX Token can be purchased on various cryptocurrency exchanges. Choose an exchange that lists IDX Token and create an account. Some of the most popular exchanges include Binance, Kraken, and FTX.'
  //     },
  //     {
  //       title: 'Purchase IDX Token',
  //       description: 'Once your account is set up and funded, you can purchase IDX Token by placing a buy order. You can choose from different types of orders, such as market order, limit order, or stop order, depending on your trading strategy.'
  //     },
  //     {
  //       title: 'Transfer and Store Your IDX Token: ',
  //       description: 'After purchasing, transfer your IDX Token from the exchange to your personal wallet for safer long-term storage.'
  //     }
  //   ];
  const purchaseSteps = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Create a Digital Wallet",
      description:
        "Before purchasing IDX Token, youll need a digital wallet that supports Solana-based assets. Popular choices include Phantom, Sollet, and Solflare.",
      recommendedTools: ["Phantom", "Sollet", "Solflare"],
      tipTitle: "Wallet Selection Tip",
      tip: "Choose a wallet with strong security features and backup options",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Fund Your Wallet",
      description:
        "Transfer funds to your digital wallet. Most wallets accept funds in the form of cryptocurrencies like BTC, ETH, or fiat currencies, depending on the wallet provider.",
      recommendedTools: ["Bank Transfer", "Credit Card", "Crypto Transfer"],
      tipTitle: "Funding Tip",
      tip: "Compare fees across different funding methods",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Choose a Cryptocurrency Exchange",
      description:
        "IDX Token can be purchased on various cryptocurrency exchanges. Choose an exchange that lists IDX Token and create an account. Some of the most popular exchanges include Binance, Kraken, and FTX.",
      recommendedTools: ["Binance", "Kraken", "FTX"],
      tipTitle: "Exchange Selection Tip",
      tip: "Verify the exchange is licensed in your jurisdiction",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Purchase IDX Token",
      description:
        "Once your account is set up and funded, you can purchase IDX Token by placing a buy order. You can choose from different types of orders, such as market order, limit order, or stop order, depending on your trading strategy.",
      recommendedTools: ["Market Order", "Limit Order", "Stop Order"],
      tipTitle: "Purchase Tip",
      tip: "Start with a small test transaction",
    },
    {
      icon: <ArrowDownToLine className="w-6 h-6" />,
      title: "Transfer and Store Your IDX Token",
      description:
        "After purchasing, transfer your IDX Token from the exchange to your personal wallet for safer long-term storage.",
      recommendedTools: ["Hardware Wallet", "Software Wallet"],
      tipTitle: "Storage Tip",
      tip: "Always double-check wallet addresses before transferring",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {showAlert && (
        <CustomAlert 
          message="Your investment inquiry has been submitted successfully. We'll be in touch soon."
          onClose={() => setShowAlert(false)}
        />
      )}
      {showAlertEmail && (
        <CustomAlert 
          message="Email been submitted successfully. We'll be in touch soon."
          onClose={() => setShowAlertEmail(false)}
        />
      )}
      <div className="relative py-24 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 mb-6">
              <span className="animate-pulse w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
              <span className="text-blue-200 text-sm">
                Transforming Enterprise Blockchain
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About IDX Token
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The IDX token is designed to revolutionize how businesses interact
              with blockchain technology. Built on the Solana network, IDX
              offers unprecedented transaction speeds and scalability, making it
              ideal for enterprise solutions.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Features cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              

              {/* Vision & Mission */}
              <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white  mb-6">
                  Vision & Mission
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span className="font-semibold"> Our Vision</span>
                    </div>
                    <p className="text-gray-300 text-left">
                      To empower businesses globally by integrating blockchain
                      technology into their core operations efficiently and
                      securely.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-purple-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                      <span className="font-semibold">Our Mission</span>
                    </div>
                    <p className="text-gray-300 text-left">
                      To provide a robust platform that simplifies transactions,
                      enhances security, and fosters transparency across
                      business operations.
                    </p>
                  </div>
                </div>
              </div>
              {[
                {
                  title: "Lightning Speed",
                  description:
                    "Process thousands of transactions per second with minimal latency",
                  icon: (
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  gradient: "from-blue-500/20 to-indigo-500/20",
                },
                {
                  title: "Enterprise Security",
                  description:
                    "Military-grade encryption and security protocols for your peace of mind",
                  icon: (
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  ),
                  gradient: "from-purple-500/20 to-pink-500/20",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${feature.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-left">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats/Metrics Card */}
            <div className="bg-gradient-to-b from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white">Key Metrics</h3>

                {[
                  { label: "Transaction Speed", value: "65,000 TPS" },
                  { label: "Network Uptime", value: "99.99%" },
                  { label: "Security Score", value: "A+" },
                ].map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-white font-semibold">
                        {stat.value}
                      </span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-11/12 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Network Status</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                <p className="text-blue-200 text-sm font-medium">
                  Enterprise-Ready Solution
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white">About IDX Token</h2>
              <p className="text-lg text-left text-gray-300 leading-relaxed">
                The IDX token is designed to revolutionize how businesses
                interact with blockchain technology. Built on the Solana
                network, IDX offers unprecedented transaction speeds and
                scalability, making it ideal for enterprise solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-2 text-blue-400 mb-2">
                    <Zap className="w-5 h-5" />
                    <span className="font-medium">Fast</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Lightning-quick transaction processing
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-2 text-purple-400 mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Secure</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Enterprise-grade security measures
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Vision & Mission
                </h3>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Eye className="w-6 h-6 text-blue-400" />
                      <h4 className="text-xl font-semibold text-white">
                        Our Vision
                      </h4>
                    </div>
                    <p className="text-gray-300 text-left">
                      To empower businesses globally by integrating blockchain
                      technology into their core operations efficiently and
                      securely.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-6 h-6 text-purple-400" />
                      <h4 className="text-xl font-semibold text-white">
                        Our Mission
                      </h4>
                    </div>
                    <p className="text-gray-300 text-left">
                      To provide a robust platform that simplifies transactions,
                      enhances security, and fosters transparency across
                      business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-2xl"></div>
        </div>
      </div> */}
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
              <SparklesIcon className="w-4 h-4 text-blue-400 mr-2" />
              <p className="text-blue-200 text-sm font-medium">
                Revolutionizing Blockchain Technology
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Unlock the Potential of <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                IDX Token
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The IDX Token, powered by the robust Solana blockchain, offers a
              unique opportunity for investors and businesses to leverage a
              high-performance cryptocurrency designed for enterprise solutions.
              Whether you’re looking to streamline business operations, enhance
              transactional security, or explore innovative financial solutions,
              purchasing IDX Token is your gateway to advancing in the digital
              economy.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">
            Why Choose IDX Token?
          </h2>
          <p className="mt-4 text-gray-400 ">
            IDX Token is not just a digital asset; it’s a key part of a larger
            ecosystem aimed at transforming how businesses interact and operate
            on a global scale. With its foundation on the Solana blockchain, IDX
            Token provides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 text-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Improved Purchase Guide Section */}
      <div className="bg-gradient-to-b from-gray-900/50 to-blue-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
              <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
              <p className="text-blue-200 text-sm font-medium">
                Simple Process
              </p>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Purchase IDX Token
            </h2>
            <p className="text-xl text-gray-300">
              Follow our comprehensive guide to start your investment journey
            </p>
          </div>

          <div className="space-y-8">
            {purchaseSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid md:grid-cols-12 gap-8">
                    {/* Step Number and Basic Info */}
                    <div className="md:col-span-4 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-blue-400 font-medium">
                            Step {index + 1}
                          </div>
                          <h3 className="text-xl text-left font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300 text-left">
                        {step.description}
                      </p>
                    </div>

                    {/* Recommended Tools */}
                    <div className="md:col-span-4 space-y-4">
                      <h4 className="text-lg font-medium text-white">
                        Recommended Tools
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {step.recommendedTools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="flex items-center space-x-2 bg-white/5 rounded-lg px-4 py-2"
                          >
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="md:col-span-4 space-y-4">
                      <h4 className="text-lg font-medium text-white">
                        {step.tipTitle}
                      </h4>
                      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                        <p className="text-gray-300 text-left">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < purchaseSteps.length - 1 && (
                  <div className="hidden md:block absolute left-[2.5rem] bottom-0 top-full w-px bg-gradient-to-b from-blue-500/50 to-transparent h-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium">
              Start Your Investment Journey
            </button>
          </div>
        </div>
      </div>
      {/* Purchase Guide Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">How to Purchase IDX Token</h2>
          <p className="mt-4 text-gray-400">Follow our simple step-by-step guide to get started</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {purchaseSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
              {index < purchaseSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <p className="text-blue-200 text-sm font-medium">
                Investment Opportunity
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white">Ready to Invest?</h2>
            <p className="text-gray-400 text-lg text-left leading-relaxed">
              Join a thriving community of investors and business professionals
              pioneering the integration of blockchain technology. Our platform
              offers unique opportunities for both individual and institutional
              investors.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Security Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-2 text-blue-400 mb-4">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Secure Investment Process</span>
                </div>
                <p className="text-gray-400 text-left mb-4">
                  Your investment is protected by industry-leading security
                  measures and compliance standards.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-signature protection",
                    "Regular security audits",
                    "Cold storage solutions",
                    "Regulatory compliance",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investment Benefits Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-2 text-purple-400 mb-4">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Investment Benefits</span>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Early Access",
                      desc: "Get priority access to new features and updates",
                    },
                    {
                      title: "Staking Rewards",
                      desc: "Earn additional tokens through our staking program",
                    },
                    {
                      title: "Governance Rights",
                      desc: "Participate in platform governance decisions",
                    },
                    {
                      title: "Community Status",
                      desc: "Special status in our community platforms",
                    },
                  ].map((benefit, index) => (
                    <li key={index} className="space-y-1">
                      <div className="text-white font-medium">
                        {benefit.title}
                      </div>
                      <p className="text-gray-400 text-left text-sm">
                        {benefit.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">IDX Address</h2>
              <div className="space-y-6">
                <CopyableAddress address="BKzTtgn5th95fAF6m6XcDq211kzaUqwCnsqtWrE2gFWX" />
                {/* ... rest of the content ... */}
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">
              Investor Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Name", type: "text", key: "name" },
                { label: "Email", type: "email", key: "email" },
                { label: "Company", type: "text", key: "company" },
                {
                  label: "Planned Investment Amount",
                  type: "number",
                  key: "investmentAmount",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.type === "email" || field.type === "text"}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    value={formData[field.key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Stay Informed Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
                <Bell className="w-4 h-4 text-blue-400 mr-2" />
                <p className="text-blue-200 text-sm font-medium">
                  Stay Updated
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white">Stay Informed</h2>
              <p className="text-lg text-gray-300 text-left leading-relaxed">
                Keep up to date with the latest developments and updates about
                IDX Token. Being informed will help you make better investment
                decisions and take advantage of new opportunities as they arise.
              </p>

              <form className="flex gap-4" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  //   value={newsletterEmail}
                  //   onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="flex items-center text-xl font-semibold text-white mb-4">
                  <Users className="w-5 h-5 text-blue-400 mr-2" />
                  Social Channels
                </h3>
                <div className="space-y-3">
                  {["X", "Telegram", "Discord", "Substack"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {platform}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="flex items-center text-xl font-semibold text-white mb-4">
                  <MessageCircle className="w-5 h-5 text-blue-400 mr-2" />
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {["Documentation", "FAQ", "Blog", "Roadmap"].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Support and Community Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="flex items-center text-2xl font-bold text-white mb-6">
                <Phone className="w-6 h-6 text-blue-400 mr-3" />
                Need Assistance?
              </h3>
              <p className="text-gray-300 mb-6 text-left">
                If you have any questions about purchasing IDX Token or need
                assistance during the process, our dedicated support team is
                here to help.
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  support@idxtoken.com
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Globe2 className="w-5 h-5 mr-3" />
                  Visit Help Center
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="flex items-center text-2xl font-bold text-white mb-6">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                Join Our Community
              </h3>
              <p className="text-gray-300 mb-6 text-left">
                Be part of a thriving community of investors and business
                professionals who are pioneering the integration of blockchain
                technology into their operations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Join Forum",
                  "Community Chat",
                  "Developer Portal",
                  "Events",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 ">
        

        {/* Call to Action */}
        <div className="flex flex-col items-center space-y-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white text-center">
            Begin Your Investment Journey
          </h3>
          <p className="text-gray-300 text-center max-w-2xl">
            Take the first step towards being part of the future of blockchain
            technology. Our team is ready to assist you with any questions you
            may have.
          </p>
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
            Start Investing Now
          </button>
        </div>
      </div>
    </div>
  );
}
// 'use client';
// import { useState } from 'react';

// export default function InvestPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     investmentAmount: '',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({
//       name: '',
//       email: '',
//       company: '',
//       investmentAmount: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         {/* Animated background effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
//           <div className="space-y-8">
//             <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
//               <p className="text-blue-200 text-sm font-medium">Revolutionizing Blockchain Technology</p>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               Invest in the Future of <br/>
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
//                 IDX Token
//               </span>
//             </h1>

//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Join us in building the next generation of enterprise blockchain solutions.
//               Powered by Solana, backed by innovation.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 mt-8">
//               <div className="flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-white">High Performance</span>
//               </div>
//               <div className="flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg">
//                 <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
//                 <span className="text-white">Secure</span>
//               </div>
//               <div className="flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg">
//                 <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
//                 <span className="text-white">Scalable</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent blur-2xl"></div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Column - Information */}
//           <div className="space-y-8">
//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
//               <h2 className="text-2xl font-bold text-white mb-6">IDX Token Details</h2>
//               <div className="space-y-6">
//                 <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-500/30">
//                   <p className="font-mono text-blue-200 text-sm break-all">
//                     IDX Address: BKzTtgn5th95fAF6m6XcDq211kzaUqwCnsqtWrE2gFWX
//                   </p>
//                 </div>
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-semibold text-white">Key Benefits</h3>
//                   <ul className="space-y-3">
//                     {['High-performance Solana infrastructure', 'Lightning-fast transactions', 'Enhanced security', 'Enterprise-ready'].map((benefit, index) => (
//                       <li key={index} className="flex items-center space-x-3 text-gray-300">
//                         <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         <span>{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
//               <h2 className="text-2xl font-bold text-white mb-6">How to Purchase</h2>
//               <div className="space-y-6">
//                 {[
//                   'Create a Solana-compatible wallet',
//                   'Fund your wallet',
//                   'Connect to exchange',
//                   'Purchase IDX Token',
//                   'Transfer to personal wallet'
//                 ].map((step, index) => (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
//                       <span className="text-blue-300 font-semibold">{index + 1}</span>
//                     </div>
//                     <p className="text-gray-300 mt-1">{step}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
//             <h2 className="text-2xl font-bold text-white mb-6">Investor Contact Form</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {[
//                 { label: 'Name', type: 'text', key: 'name' },
//                 { label: 'Email', type: 'email', key: 'email' },
//                 { label: 'Company', type: 'text', key: 'company' },
//                 { label: 'Planned Investment Amount', type: 'text', key: 'investmentAmount' }
//               ].map((field) => (
//                 <div key={field.key}>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">{field.label}</label>
//                   <input
//                     type={field.type}
//                     required={field.type === 'email' || field.type === 'text'}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                     value={formData[field.key]}
//                     onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
//                   />
//                 </div>
//               ))}
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Community Section */}
//         <div className="text-center mt-20">
//           <h2 className="text-2xl font-bold text-white mb-8">Join Our Community</h2>
//           <div className="flex justify-center space-x-8">
//             {['Twitter', 'Telegram', 'Discord', 'Substack'].map((platform) => (
//               <a
//                 key={platform}
//                 href="#"
//                 className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
//               >
//                 {platform}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
