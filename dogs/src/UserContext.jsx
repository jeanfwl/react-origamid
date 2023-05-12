import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLoggedIn(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (response.ok === false) throw new Error(`Error: Usuário inválido!`);

      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    window.localStorage.removeItem('token');
    setData(null);
    setError(null);
    setLoggedIn(false);
    setLoading(false);
    navigate('/login');
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const tokenRes = await fetch(url, options);
          if (tokenRes.ok === false) throw new Error('Token inválido');

          await getUser(token);
        } catch (err) {
          setError(err.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{ data, userLogin, getUser, userLogout, error, loading, loggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
