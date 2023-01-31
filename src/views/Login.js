import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLogin = () => {
    login(email, password);
  };

  const { login, error, user } = useContext(AuthContext);

  useEffect(() => {
    user && redirectLogin("/myprofile");
  }, [user]);

  const redirectLogin = useNavigate();

  return (
    <div className="login">
      {user.email ? <h1>Hello {user.displayName}</h1> : <h1>Please Login:</h1>}
      {/* <input
        value={userName}
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      /> */}
      <input
        // value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        // value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <small>{error}</small>}
      <button
        className="login-button"
        onClick={() => handleLogin(email, password)}
      >
        Login
      </button>
      <button className="register-button"> No Account? Register!</button>
    </div>
  );
};

export default Login;
