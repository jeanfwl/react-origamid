import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contador, setContador] = React.useState(0);

  function adicionarContador() {
    setContador((contador) => contador + 1);
  }

  return (
    <GlobalContext.Provider
      value={{ login: 'jean.talar', contador, adicionarContador }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
