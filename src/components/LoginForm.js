import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService'; // Adjust the import path as necessary

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.loginUser(username, password);
      if (response.token) {
        localStorage.setItem('token', response.token); // Save the token to local storage
        navigate('/loginsuccess'); // Redirect to the login success page
      } else {
        setError('Login failed. Token is missing in the response.');
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setError('Login failed. You do not have permission to access this resource.');
      } else {
        setError('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <div className="LoginComponent">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;