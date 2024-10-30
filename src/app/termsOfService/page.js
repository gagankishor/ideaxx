// src/components/TermsOfService.js

const TermsOfService = () => {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-2xl text-gray-800 mt-10 mb-20">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#4FADEA] mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            By accessing or using our site, you agree to be bound by these Terms of Service and comply with all applicable laws.
          </p>
        </div>
  
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">1. Use of the Site</h2>
            <p className="text-gray-700 leading-relaxed">
              You may use our site only for lawful purposes and in accordance with these Terms of Service. You agree not to use the site in any way that could harm or disable it, or interfere with any other party&apos;s use of the site.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">2. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              The content, layout, design, data, databases, and graphics on this site are protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">3. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, we will not be liable for any damages or losses arising out of or in connection with your use of the site. This includes any indirect or consequential losses.
            </p>
          </section>
  
          <p className="text-center text-lg mt-8">
            For further assistance,{" "}
            <a href="mailto:terms@example.com" className="text-[#4FADEA] underline hover:text-[#3c8dbb] font-medium">
              Contact Us
            </a>.
          </p>
        </div>
      </div>
    );
  };
  
  export default TermsOfService;
  