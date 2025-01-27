import PropTypes from 'prop-types';
const Skeleton = ({ className = '' }) => (
    <div
      className={`animate-pulse bg-gray-200 rounded-md ${className}`}
      role="status"
      aria-label="loading"
    />
  );

Skeleton.propTypes = {
    className: PropTypes.string,
};
  export { Skeleton };