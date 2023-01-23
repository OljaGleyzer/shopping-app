import React from "react";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="login">
      <h1>Please Login:</h1>
      <div className="login-inputs">
        <input
          value={userName}
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <small> this is an error placeholder</small>
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Login;
