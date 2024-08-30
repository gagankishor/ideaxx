  import { useEffect } from 'react';

export const TrustpilotWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;

    script.onload = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(document.getElementById('trustpilot-widget'), true);
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="trustpilot-widget">
      {/* Trustpilot widget code provided by Trustpilot */}
      {/* Replace this with the actual Trustpilot widget code */}
      <div className="trustpilot-widget" data-locale="en-US" data-template-id="your-template-id" data-businessunit-id="your-businessunit-id" data-style-height="130px" data-style-width="100%" data-theme="light">
        <a href="your-trustpilot-profile-url">Trustpilot</a>
      </div>
    </div>
  );
};
