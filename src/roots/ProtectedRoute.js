import React from "react";
import { useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ProtectedRoute({ children }) {
  const redirectTo = useNavigate();
  console.log("children", children);

  const { user } = useContext(AuthContext);
  const isUser = user.userName ? true : false;

  return <>{isUser ? children : redirectTo("/")}</>;
}

export default ProtectedRoute;
