export const CustomCheckbox = ({ label, checked, onChange, name, type }) => {
  return (
    <label className="custom-checkbox">
      <input type={type} checked={checked} name={name} onChange={onChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};
