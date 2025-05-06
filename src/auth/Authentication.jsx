import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Authentication;
