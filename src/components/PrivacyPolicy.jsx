// src/components/PrivacyPolicy.js
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page-container">
      <h3>Privacy Policy</h3>
      <p>
        Welcome to our Privacy Policy page. Your privacy is critically important to us. We are committed to
        protecting your personal information and your right to privacy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you voluntarily provide to us when you register on our site, express an interest
        in obtaining information about us or our products, or otherwise contact us.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to operate, maintain, and improve our website and services, to communicate
        with you, and to comply with legal obligations.
      </p>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not share, sell, or otherwise transfer your personal information to third parties except when required
        by law or with trusted third-party service providers who assist us in operating our website.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We take data security seriously and use appropriate measures to protect your personal information from
        unauthorized access, use, or disclosure.
      </p>

      <p>
        For more details, feel free to <a href="mailto:privacy@example.com" className="contact-button">Contact Us</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
