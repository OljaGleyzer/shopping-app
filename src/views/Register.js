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
  // const handleLoginButton = Link to
  const { register, error, user } = useContext(AuthContext);

  return (
    <div className="login">
      {user.email ? <h1>Hello {user.email}</h1> : <h1>Please register: </h1>}

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
      <button className="login-button">Got an Acount? Login!</button>
    </div>
  );
};

export default Register;
