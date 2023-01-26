import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Register = () => {
  const {
    password,
    setPassword,
    userName,
    user,
    setUserName,
    error,
    email,
    setEmail,
  } = useContext(AuthContext);

  return (
    <div className="login">
      <h1>Please Register:</h1>
      <input
        value={userName}
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        // onChange={(e) => setPassword(e.target.value)}
      />
      {error && <small>{error}</small>}
      <button
        className="register-button"
        // onClick={() => handleLogin(userName, password, email)}
      >
        Register
      </button>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Register;
