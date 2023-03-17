import React from 'react';

const ButtonProduto = ({ url, setProduto, setLoading }) => {
  async function handleClick() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setLoading(false);
    setProduto(json);
  }

  const produtoNome = url.substr(url.lastIndexOf('/') + 1, url.length);
  return (
    <button style={{ margin: '.5rem' }} onClick={handleClick}>
      {produtoNome}
    </button>
  );
};

export default ButtonProduto;
