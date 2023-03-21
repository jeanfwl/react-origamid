import React from 'react';

// básico de useRef
{
  // const App = () => {
  //   const video = React.useRef();
  //   React.useEffect(() => {
  //     console.log(video.current);
  //   }, []);
  //   return <video ref={video} />;
  // };
}

// uso com formulário
{
  // const App = () => {
  //   const [comentarios, setComentarios] = React.useState([]);
  //   const [input, setInput] = React.useState('');
  //   const inputElement = React.useRef();
  //   function handleClick() {
  //     setComentarios([...comentarios, input]);
  //     setInput('');
  //     inputElement.current.focus();
  //   }
  //   return (
  //     <div>
  //       <ul>
  //         {comentarios.map((comentario) => (
  //           <li key={comentario}>{comentario}</li>
  //         ))}
  //       </ul>
  //       <input
  //         ref={inputElement}
  //         type="text"
  //         value={input}
  //         onChange={({ target }) => setInput(target.value)}
  //       />
  //       <br />
  //       <button onClick={handleClick}>Enviar</button>
  //     </div>
  //   );
  // };
}

// uso com outros valores (setTimeout)
const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao('Adicionado ao carrinho com sucesso!');
    setCarrinho(carrinho + 1);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default App;
