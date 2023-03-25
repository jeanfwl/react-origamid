import React from 'react';
import useFetch from './custom/useFetch';
import useLocalStorage from './custom/useLocalStorage';

// Custom Hook useLocalStorage
{
  // const App = () => {
  //   const [local, setLocal] = useLocalStorage('produto', '');
  //   function handleClick({ target }) {
  //     setLocal(target.innerText);
  //   }
  //   return (
  //     <div>
  //       <p>Produto preferido: {local}</p>
  //       <button onClick={handleClick}>notebook</button>
  //       <button onClick={handleClick}>smartphone</button>
  //     </div>
  //   );
  // };
}

// Custom Hook useFetch;
{
  // const App = () => {
  //   const { data, loading, error, request } = useFetch();
  //   React.useEffect(() => {
  //     async function fetchData() {
  //       const { response, json } = await request(
  //         'https://ranekapi.origamid.dev/json/api/produto/',
  //       );
  //       console.log(response, json);
  //     }
  //     fetchData();
  //   }, [request]);
  //   if (error) return <div>Erro: {error}</div>;
  //   if (loading) return <div>Carregando...</div>;
  //   if (data)
  //     return (
  //       <ul>
  //         {data.map(({ id, nome }) => (
  //           <li key={id}>{nome}</li>
  //         ))}
  //       </ul>
  //     );
  //   return null;
  // };
}

function useNumeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, []);
  return numero;
}

const App = () => {
  return <div>{useNumeroAleatorio()}</div>;
};

export default App;
