import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  const handleClickDependency = React.useCallback(() => {
    setContar(contar + 1);
  }, [contar]);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return <button onClick={handleClick}>{contar}</button>;
};

export default App;
