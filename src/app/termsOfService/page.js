// src/components/TermsOfService.js

const TermsOfService = () => {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-2xl text-gray-800 mt-10 mb-20">
  <div className="text-center mb-8">
    <h1 className="text-5xl font-bold text-[#4FADEA] mb-4">Terms of Service</h1>
    <p className="text-lg text-gray-600">
      By accessing or using IDEAX, you agree to be bound by these Terms of Service and comply with all applicable laws.
    </p>
  </div>

  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">1. Use of IDEAX Platform</h2>
      <p className="text-gray-700 leading-relaxed">
        IDEAX provides a range of tools and services to assess, validate, and support business ideas. You may use our platform only for lawful purposes and in accordance with these Terms of Service. Misuse of the platform, such as attempting to disrupt services or gain unauthorized access to features, is strictly prohibited.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">2. Business Idea Validation and Feasibility Analysis</h2>
      <p className="text-gray-700 leading-relaxed">
        IDEAX uses AI-powered algorithms to provide feasibility reports on your business ideas. The information provided is for advisory purposes only and should not replace professional business or legal advice. By using this service, you acknowledge that you are solely responsible for any decisions made based on these insights.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">3. Intellectual Property Rights</h2>
      <p className="text-gray-700 leading-relaxed">
        The content, layout, design, data, databases, and graphics on IDEAX are protected by copyright and other intellectual property laws. This includes proprietary AI algorithms, market insights, and all materials available on the platform. Users may not reproduce, distribute, or use any content without prior written permission from IDEAX.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">4. Networking and Collaboration Features</h2>
      <p className="text-gray-700 leading-relaxed">
        IDEAX offers networking opportunities, allowing users to connect with investors, team members, and other entrepreneurs. We are not liable for any disputes or issues that arise from these interactions. Users are advised to exercise discretion and conduct their own due diligence when collaborating with others.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">5. Limitation of Liability</h2>
      <p className="text-gray-700 leading-relaxed">
        To the maximum extent permitted by law, IDEAX will not be liable for any damages or losses arising out of or in connection with your use of the platform. This includes but is not limited to, any direct, indirect, incidental, or consequential damages, even if we have been advised of the possibility of such damages.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">6. User-Generated Content</h2>
      <p className="text-gray-700 leading-relaxed">
        Users may submit content to IDEAX, such as business ideas, feedback, or testimonials. By submitting content, you grant IDEAX a non-exclusive, royalty-free license to use, display, and distribute this content for purposes related to the platform. We reserve the right to remove any content deemed inappropriate or in violation of these terms.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-[#4FADEA] mb-3">7. Modifications to Terms</h2>
      <p className="text-gray-700 leading-relaxed">
        IDEAX reserves the right to update or modify these Terms of Service at any time without prior notice. By continuing to use the platform after changes are made, you agree to be bound by the revised terms. We recommend reviewing the terms periodically to stay informed about your rights and responsibilities.
      </p>
    </section>

    <p className="text-center text-lg mt-8">
      For further assistance or questions regarding these terms,{" "}
      <a href="mailto:terms@ideax.com" className="text-[#4FADEA] underline hover:text-[#3c8dbb] font-medium">
        Contact Us
      </a>.
    </p>
  </div>
</div>

    );
  };
  
  export default TermsOfService;
  