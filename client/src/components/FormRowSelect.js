const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
  index,
}) => {
  return (
    <div className='form-row-select'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={(e) => handleChange(e, index)}
        className='form-select'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
