import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await loginUser(username, password);
      // localStorage.setItem('token', response.token);
      // localStorage.setItem('username', response.user.username);
      if (response.code === 200) navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nazwa uzytkownika:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ padding: '5px', marginTop: '5px', width: '300px' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Haslo:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '5px', marginTop: '5px', width: '300px' }}
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          className="button"
          style={{ marginTop: '15px' }}
        >
          Zaloguj
        </button>
      </form>
    </div>
  );
}

export default Login;
