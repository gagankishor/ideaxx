import PropTypes from 'prop-types';

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
  
  const CardHeader = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
  
  const CardTitle = ({ children, className = '' }) => (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
  
  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

CardTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

CardContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
  export { Card, CardHeader, CardTitle, CardContent };
