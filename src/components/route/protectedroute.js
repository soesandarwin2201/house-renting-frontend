import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Splash from "../../pages/splash/splash";

const ProtectedRoute = () => {
     const loginToken = useSelector((state) => state.login.token);
  const signupToken = useSelector((state) => state.signup.token);
  const token = loginToken || signupToken;

  return !token || token.length <= 0 ? <Splash /> : <Outlet />;
};

 
export default ProtectedRoute;