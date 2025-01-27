import PropTypes from 'prop-types';

const Alert = ({ children, variant = 'default', className = '' }) => {
    const variants = {
      default: 'bg-gray-100 border-gray-200',
      destructive: 'bg-red-100 border-red-200 text-red-800'
    };
  
    return (
      <div className={`p-4 rounded-lg border ${variants[variant]} ${className}`}>
        {children}
      </div>
    );
  };
  
  const AlertDescription = ({ children, className = '' }) => (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  );
Alert.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'destructive']),
    className: PropTypes.string
};

AlertDescription.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
  export { Alert, AlertDescription };