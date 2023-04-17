import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/signup/signupSlice';

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
    <section className="form-container">
      <h1 className="form-header">SignUp</h1>
      <form className="signup-form">
        <div className="form-item">
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-item">
          <input
            type="email"
            name="email"
            placeholder="Write your email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="signup-btn" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
    </section>
  );
};

export default SignUp;
