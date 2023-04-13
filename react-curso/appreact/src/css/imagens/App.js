import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import DogSvg from './DogSvg';
// import { ReactComponent as Dog } from './img/dog.svg';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSvg color="red" />
      <img src={foto} alt="Imagem" />
    </div>
  );
};

export default App;
