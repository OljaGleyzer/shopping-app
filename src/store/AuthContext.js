import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  //Put here the state and functions you want to share
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const redirectTo = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    token: null,
    password: null,
  });

  const handleLogin = async (userName, password) => {
    console.log("userName, password", userName, password);
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          //   username: "mor_2314",
          //   password: "83r5^_",
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
