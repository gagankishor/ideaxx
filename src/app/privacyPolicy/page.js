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
          IDEAX collects information that you voluntarily provide to us when you register, submit a business idea, or seek information about our services. This may include personal information such as your name, contact details, and project preferences.
        </p>

        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">2. How We Use Your Information</h2>
        <p className="text-lg mb-5">
          The information collected is used to provide, operate, and improve the IDEAX platform and services, to communicate with you, and to fulfill legal obligations. We may also use your data to personalize your experience with our tools and features.
        </p>

        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">3. Sharing of Information</h2>
        <p className="text-lg mb-5">
          We do not sell or share your information with third parties except as necessary to operate our services, or as required by law. We work with trusted third-party providers who assist us in maintaining our platform and ensuring data security.
        </p>

        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">4. Data Security</h2>
        <p className="text-lg mb-5">
          IDEAX is committed to ensuring the security of your data. We implement advanced security measures to protect your information from unauthorized access, misuse, or disclosure. However, no method of transmission over the Internet is completely secure.
        </p>

        <h2 className="text-2xl font-semibold text-[#4FADEA] mt-10 mb-3">5. Your Rights</h2>
        <p className="text-lg mb-5">
          You have the right to access, update, or delete your personal information at any time. For any privacy-related questions, feel free to reach out to us.
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
  