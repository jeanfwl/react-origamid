import React from 'react';

const Input = ({
  id,
  label,
  type,
  error,
  placeholder,
  value,
  onBlur,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
