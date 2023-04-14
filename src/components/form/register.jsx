import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerData } from '../../redux/registerationForm/registration';

const Registeration = () => {
     const registration = useSelector((state) => state.register);
     const [ formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
     });
     // console.log(registration);
     const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registerData.fulfilled());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
     const {name,value} = e.target;
     console.log(e.target);
     setFormData((data) => ({
          ...data,
          [name]: value,
     }));
  }

  const handleSubmit = (e) => {
     console.log('it is click');
     e.preventDefault();
     dispatch(registerData(formData.name,formData.email,formData.password));
  }

     return ( 
          <section className="form-container">
           <h1 className="form-header">SigUp</h1>
           <form className="signup-form">
               <div className="form-item">
                    <input type="text" name='name' placeholder='Username' className="form-input" value={formData.name} onChange={handleChange} />
               </div>
               <div className="form-item">
                    <input type="email" name='email' placeholder='Write your email' className="form-input" value={formData.email} onChange={handleChange} />
               </div>
               <div className="form-item">
                    <input type="password" name='password' placeholder='Enter your password' className="form-input" value={formData.password} onChange={handleChange} />
               </div>
               <button className="sigup-btn" onClick={handleSubmit}>SignUp</button>
           </form>
          </section>
      );
}
 
export default Registeration;