import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/signup/signupSlice';
import "../House/house.css";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(signupUser({ user: userData }));
    navigate('/home');
  };

  return (
    <section className="login-section">
      <h1 className="login-title">SignUp</h1>
      <form onSubmit={handleSubmit} className="login-container">
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="input-form"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Write your email"
          className="input-form"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input-form"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" className="form-button" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
      <div className="d-flex account">
        <p className="login-para">Have an account already? Login </p>
        <button type="button" className="signup-btn" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </section>
  );
};

export default SignUp;
