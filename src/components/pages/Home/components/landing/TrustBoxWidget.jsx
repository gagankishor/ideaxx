import { useEffect } from "react";

const TrustBoxWidget = () => {
  useEffect(() => {
    // Dynamically load the Trustpilot script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* TrustBox widget - Review Collector */}
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="6758a7a09ddbaeac9eae7c5a"
        data-style-height="52px"
        data-style-width="100%"
      >
        <a
          href="https://www.trustpilot.com/review/idxsolana.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
      {/* End TrustBox widget */}
    </div>
  );
};

export default TrustBoxWidget;
