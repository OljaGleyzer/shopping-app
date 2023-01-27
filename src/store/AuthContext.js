import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseconfig";

export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  //Put here the state and functions you want to share
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const redirectTo = useNavigate();
  const [user, setUser] = useState({
    userName: null,
    token: null,
    password: null,
  });

  const register = async (email, password) => {
    console.log("email,password", email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const registeredUser = userCredential.user;
    } catch (error) {
      console.log("error.message :>> ", error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const handleLogin = async (userName, password) => {
    console.log("userName, password", userName, password);
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      const data = await res.json();
      console.log("res :>> ", res);
      console.log("data.token:>>", data.token);
      console.log("data :>>", data);
      if (data.token) {
        setToken(data.token);
        setUser({ userName: userName });
        //redirect to home page or some other page
      } else {
        redirectTo("/");
      }
    } catch (err) {
      console.log("err.response.data", err.response.data);
      setError(err.response.data);
    }
  };

  const logout = () => {
    setUser({
      userName: null,
      token: null,
      password: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userName,
        setUserName,
        password,
        setPassword,
        handleLogin,
        error,
        user,
        logout,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
