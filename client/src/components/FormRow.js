import { useState } from 'react';

const FormRow = ({ type, name, value, handleChange, labelText, index }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleChange(e, index)}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
