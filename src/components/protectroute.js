import React from "react";
import { useSelector } from "react-redux";
import {Navigate , Route } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const success = useSelector((state) => state.signup);

  return success ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
