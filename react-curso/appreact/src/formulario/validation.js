import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validateCep(cep) {
    if (cep.length === 0) {
      setErro('Preencha algum valor!');
      return false;
    } else if (/^\d{5}-?\d{3}$/.test(cep) === false) {
      setErro('Preencha um CEP válido!');
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (erro) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateCep(cep)) {
      console.log('CEP Enviado com sucesso!');
    } else {
      console.log('CEP Não foi enviado!');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="cep"
        label="CEP"
        value={cep}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="00000-000"
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
