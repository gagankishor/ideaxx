import PropTypes from 'prop-types';

export const AlertDialog = ({ open, onOpenChange, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? 'flex' : 'hidden'} justify-center items-center`}
      role="dialog"
      aria-modal="true"
    >
      {children}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => onOpenChange && onOpenChange(false)}
      />
    </div>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export const AlertDialogContent = ({ className, children }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden p-6 z-10 ${className}`}
      role="document"
    >
      {children}
    </div>
  );
};

AlertDialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AlertDialogContent.defaultProps = {
  className: '',
};

export const AlertDialogHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

AlertDialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AlertDialogTitle = ({ className, children }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

AlertDialogTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AlertDialogTitle.defaultProps = {
  className: '',
};
