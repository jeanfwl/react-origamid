import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import './App.css';
import { UserStorage } from './UserContext';
import Account from './Components/Account/Account';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
