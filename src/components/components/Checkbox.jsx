import PropTypes from 'prop-types';

export const CustomCheckbox = ({ label, checked, onChange, name, type }) => {
  return (
    <label className="custom-checkbox">
      <input type={type} checked={checked} name={name} onChange={onChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
