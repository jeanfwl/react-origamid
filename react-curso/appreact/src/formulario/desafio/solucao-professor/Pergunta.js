import React from 'react';
import Radio from './Form/Radio';

const Pergunta = ({ pergunta, options, hasToShow, id, value, onChange }) => {
  if (hasToShow === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      <Radio options={options} value={value} onChange={onChange} id={id} />
    </fieldset>
  );
};

export default Pergunta;
