import React, { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRegister = () => {
    register(email, password);
  };
  const { register, error } = useContext(AuthContext);

  return (
    <div className="login">
      <h1>Please Register:</h1>

      {/*
       <input
        value={userName}
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      /> */}
      <input
        // value={email}
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <input
        // value={password}
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      {error && <small>{error}</small>}
      <button
        className="register-button"
        onClick={() => handleRegister(email, password)}
      >
        Register
      </button>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Register;
