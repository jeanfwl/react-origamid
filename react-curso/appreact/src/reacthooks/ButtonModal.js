import React from 'react';

const ButtonModal = ({ setModal }) => {
  return (
    <button onClick={() => setModal((ativo) => !ativo)}>Abrir modal</button>
  );
};

export default ButtonModal;
