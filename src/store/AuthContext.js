import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebaseconfig";

export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  //Put here the state and functions you want to share
  // const [token, setToken] = useState("");
  // const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const redirectTo = useNavigate();
  const [user, setUser] = useState({
    userName: null,
    password: null,
  });
  console.log("user :>> ", user);
  // const [userName, setUserName] = useState("Stranger");

  const register = async (email, password) => {
    // console.log("email,password", email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      console.log("error.message :>> ", error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const login = async (email, password) => {
    // console.log("email, password", email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(userCredential.user);
      // console.log("user :>> ", user);
    } catch (error) {
      console.log("error.message :>> ", error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const logout = () => {
    setUser({
      userName: null,
      password: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        password,
        setPassword,
        error,
        logout,
        register,
        login,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
