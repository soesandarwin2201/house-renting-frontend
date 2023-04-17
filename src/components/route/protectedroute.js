import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Splash from "../../pages/splash/splash";

const ProtectedRoute = () => {
  const token = useSelector((state) => state.login.token);
  return (
    !token || token.length <= 0 ? (
      <Splash />
    ) : <Outlet />
  );
};

export default ProtectedRoute;
