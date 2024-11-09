import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const user = localStorage.getItem("isLogin")
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;