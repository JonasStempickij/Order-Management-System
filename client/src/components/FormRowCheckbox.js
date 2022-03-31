const FormRowCheckbox = ({
  type,
  name,
  checked,
  handleChange,
  labelText,
  index,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>

      <input
        type={type}
        name={name}
        checked={checked}
        onChange={(e) => handleChange(e, index)}
        className='form-input'
      />
    </div>
  );
};

export default FormRowCheckbox;
