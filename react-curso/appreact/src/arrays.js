import React from 'react';

// const App = () => {
//   const produtos = [
//     <li key="p1">Notebook</li>,
//     <li key="p2">Livro</li>,
//     <li key="p3">Caderno</li>,
//   ];
//   return (
//     <div>
//       <ul>{produtos}</ul>
//     </div>
//   );
// };

// const App = () => {
//   const produtos = ['Notebook', 'Livro', 'Caderno'];

//   return (
//     <div>
//       <ul>
//         {produtos.map((produto) => (
//           <li key={produto}>{produto}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter(({ ano }) => ano >= 2000)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
