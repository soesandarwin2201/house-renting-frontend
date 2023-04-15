import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../../redux/signup/signupSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = { name, email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(userInfo));
  };

  return (
    <>
      <h1>REGISTER FORM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
        />

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
        <button type="submit">Sing up</button>
      </form>
      <div className="d-flex account">
        <p>Login here</p>
        <button type="button" className="btn plain-btn" onClick={() => navigate('/login')}>
          login
        </button>
      </div>
    </>
  );
};

export default Signup;
