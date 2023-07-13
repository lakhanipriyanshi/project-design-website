import React, { useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('Email', 'priya@gmail.com');
    localStorage.setItem('password', '123');
    const storedEmail = localStorage.getItem('Email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      navigate('/Dashborad', { replace: true });
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn--form" type="submit">
            Login
          </button>
          <p>
            Not a user? <Link to="/regis">Register now!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;