import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';
import ProdutoDetalhe from './Components/ProdutoDetalhe';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<ProdutoDetalhe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
