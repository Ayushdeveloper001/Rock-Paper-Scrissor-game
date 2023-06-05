import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const name = useSelector((state) => state.name.userName);
  return name ? children : <Navigate to={"/"} />;
};

export default PrivateRouter;
