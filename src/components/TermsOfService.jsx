// src/components/TermsOfService.js
import React from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-page-container">
      <h1>Terms of Service</h1>
      <p>
        Welcome to our website. By accessing or using our site, you agree to be bound by these Terms of Service, all
        applicable laws and regulations, and agree that you are responsible for compliance with any applicable local
        laws.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You may use our site only for lawful purposes and in accordance with these Terms of Service. You agree not
        to use the site in any way that could harm or disable the site or interfere with any other party's use of the
        site.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        The content, layout, design, data, databases, and graphics on this site are protected by copyright and other
        intellectual property laws. You may not use, reproduce, or distribute any content without our prior written
        permission.
      </p>

      <h2>3. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we will not be liable for any damages or losses arising out of or in
        connection with your use of the site. This includes any indirect or consequential losses.
      </p>

      <p>
        For further assistance, <a href="mailto:terms@example.com" className="contact-button">Contact Us</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
