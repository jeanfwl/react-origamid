import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (nome.validate() && email.validate() && cep.validate()) {
      console.log('Informações enviadas com sucesso!');
    } else {
      console.log('Informações não foram enviadas!');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" id="nome" label="Nome" {...nome} />
      <Input type="text" id="sobrenome" label="Sobrenome" {...sobrenome} />
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder="email@dominio.com"
        {...email}
      />
      <Input
        type="text"
        id="cep"
        label="CEP"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
