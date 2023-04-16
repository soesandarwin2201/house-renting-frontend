import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Splash from "../../pages/splash/splash";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const loginToken = useSelector((state) => state.login.token);
  const signupToken = useSelector((state) => state.signup.token);
  const token = loginToken || signupToken;

  if (!token || token.length <= 0) {
    navigate('/login');
    return <Splash />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
