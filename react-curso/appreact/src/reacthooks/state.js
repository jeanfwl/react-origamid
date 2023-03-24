import React from 'react';
import Modal from './modal/Modal';
import ButtonModal from './modal/ButtonModal';

// Estados
{
  // const App = () => {
  //   const [ativo, setAtivo] = React.useState(true);
  //   const [contador, setContador] = React.useState(1);
  //   const [dados, setDados] = React.useState({ nome: 'Jean', idade: 21 });
  //   function handleClickContar() {
  //     setContador(contador + 1);
  //     setDados({ ...dados, faculdade: 'Não gosta de faculdade' });
  //   }
  //   return (
  //     <div>
  //       <p>
  //         {dados.nome} - {dados.idade} - {dados.faculdade}
  //       </p>
  //       <p>
  //         <button onClick={handleClickContar}>{contador} Contar</button>
  //       </p>
  //       <p>
  //         <button onClick={() => setAtivo(!ativo)}>
  //           {ativo ? 'Botão Ativo' : 'Botão Inativo'}
  //         </button>
  //       </p>
  //     </div>
  //   );
  // };
}

//Props - Modal
{
  // const App = () => {
  //   const [modal, setModal] = React.useState(false);
  //   return (
  //     <div>
  //       <Modal modal={modal} setModal={setModal} />
  //       <ButtonModal setModal={setModal} />
  //     </div>
  //   );
  // };
}

//Callback
{
  // const App = () => {
  //   const [modal, setModal] = React.useState(() => {
  //     const wasActive = false; //sessionStorage.getItem('wasModalActive')
  //     return wasActive;
  //   });
  //   return (
  //     <div>
  //       <Modal modal={modal} setModal={setModal} />
  //       <ButtonModal setModal={setModal} />
  //     </div>
  //   );
  // };
}

//StricMode
const App = () => {
  const [contador, setContador] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContador((contador) => {
      // Também funcionou
      // setItems([...items, 'Item ' + (contador + 1)]);
      // Ocorre o erro quando usa callback
      // setItems((itemsAnterior) => [...itemsAnterior, 'Item ' + (contador + 1)]);
      return contador + 1;
    });
    setItems([...items, 'Item ' + (contador + 1)]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contador}</button>
    </div>
  );
};

export default App;
