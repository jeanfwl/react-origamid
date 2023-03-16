import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <div>
        <p>Modal aberto!</p>
        <p>
          <button onClick={() => setModal(false)}>Fechar Modal</button>
        </p>
      </div>
    );
  }
  return null;
};

export default Modal;
