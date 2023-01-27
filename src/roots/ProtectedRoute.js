import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function ProtectedRoute({ children }) {
  const redirectTo = useNavigate();

  console.log("children", children);

  const { user } = useContext(AuthContext);
  const isUser = user.userName ? true : false;

  useEffect(() => {
    if (!isUser) {
      console.log("navigate :>> ");
      // <Navigate to="/" />;
      redirectTo("/");
    }
  }, []);

  return <>{isUser ? children : null}</>;
}

export default ProtectedRoute;
