import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../../redux/login/loginSlice'

const Login = () => {
       
    const dispatch = useDispatch();

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const userInfo = {email, password}

    const handleSubmit = async (e) => {
        e.preventDefault();
       await dispatch(getAccessToken(userInfo));
    }



     return ( 
          <>
          <h1>LOGIN FORM</h1>
          <form onSubmit={handleSubmit}>
  <input type="email"
   name="email"
   value={email}
   onChange={(event) => setEmail(event.target.value)}
    placeholder="Email" />
  <input type="password"
   name="password"
   value={password}
   onChange={(event) => setPassword(event.target.value)}
    placeholder="Password" />
  <button type="submit">Login</button>
</form>
          </>
      );
}
 
export default Login;