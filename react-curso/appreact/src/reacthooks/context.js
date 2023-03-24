import React from 'react';
import Produto from './context/Produto';
import { GlobalStorage } from './context/GlobalContext';

// Primeiro context
// import UserContext from './context/UserContext';
{
  // const App = () => {
  //   return (
  //     <UserContext.Provider value={{ login: 'jean.talar' }}>
  //       <Produto />
  //     </UserContext.Provider>
  //   );
  // };
}

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
