// src/components/PrivacyPolicy.js

const PrivacyPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-lg text-gray-800">
        <h3 className="text-4xl font-semibold text-center text-[#4FADEA] mb-5">Privacy Policy</h3>
        <p className="text-lg mb-5">
          Welcome to our Privacy Policy page. Your privacy is critically important to us. We are committed to
          protecting your personal information and your right to privacy.
        </p>
  
        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">1. Information We Collect</h2>
        <p className="text-lg mb-5">
          We collect information that you voluntarily provide to us when you register on our site, express an interest
          in obtaining information about us or our products, or otherwise contact us.
        </p>
  
        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">2. How We Use Your Information</h2>
        <p className="text-lg mb-5">
          We use the information we collect to operate, maintain, and improve our website and services, to communicate
          with you, and to comply with legal obligations.
        </p>
  
        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">3. Sharing of Information</h2>
        <p className="text-lg mb-5">
          We do not share, sell, or otherwise transfer your personal information to third parties except when required
          by law or with trusted third-party service providers who assist us in operating our website.
        </p>
  
        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">4. Data Security</h2>
        <p className="text-lg mb-5">
          We take data security seriously and use appropriate measures to protect your personal information from
          unauthorized access, use, or disclosure.
        </p>
  
        <p className="text-lg mt-5">
          For more details, feel free to{" "}
          <a href="mailto:privacy@example.com" className="text-[#4FADEA] underline hover:no-underline">
            Contact Us
          </a>.
        </p>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  