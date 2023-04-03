import React from 'react';
import Radio from '../Form/Radio';

const Pergunta = ({ dados, resposta, setResposta }) => {
  return (
    <fieldset>
      <legend>{dados.pergunta}</legend>
      <Radio options={dados.options} value={resposta} setValue={setResposta} />
    </fieldset>
  );
};

export default Pergunta;
