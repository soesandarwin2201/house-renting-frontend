import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../redux/login/loginSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(getAccessToken(userInfo));
    navigate('/');
  };

  return (
    <>
      <h1>REGISTER FORM</h1>
      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <div className="d-flex account">
        <p>No account yet? Click here to Sign Up</p>
        <button type="button" className="btn plain-btn" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Login;
