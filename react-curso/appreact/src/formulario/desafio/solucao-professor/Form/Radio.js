import React from 'react';

const Radio = ({ options, id, value, onChange }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            id={id}
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
