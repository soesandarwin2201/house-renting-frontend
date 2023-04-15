import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/registerationForm/registration';

const Registeration = () => {
  const registration = useSelector((state) => state.register);
  console.log(registration);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(signupUser({ user: userData}));
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
        <button className="signup-btn" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
    </section>
  );
};

export default Registeration;
