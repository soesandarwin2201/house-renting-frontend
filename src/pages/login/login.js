import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../redux/login/loginSlice';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getAccessToken(userInfo));
    navigate('/home');
  };

  return (
    <section className='login-section'>
      <h1 className='login-title'>REGISTER FORM</h1>
      <form onSubmit={handleSubmit} className='login-container'>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="input-form"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="input-form"
        />
        <button type="submit" className='form-button'>Login</button>
      </form>
      <div className="d-flex account">
        <p>No account yet? Click here to Sign Up</p>
        <button type="button" className="signup-btn" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Login;
