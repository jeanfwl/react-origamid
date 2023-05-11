import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLoggedIn(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });

    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ data, userLogin, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
