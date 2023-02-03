import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLogin = () => {
    login(email, password);
  };
  const redirectLogin = useNavigate();

  const { login, user, errorMessage } = useContext(AuthContext);

  useEffect(() => {
    user && redirectLogin("/myprofile");
  }, [user]);

  return (
    <div className="login">
      {user.email ? (
        <h1>Hello {user.displayName}: You are logged in</h1>
      ) : (
        <h1>Please Login:</h1>
      )}
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
      {errorMessage ? (
        <p>
          {" "}
          <small>{errorMessage}</small>
        </p>
      ) : null}

      <button
        className="login-button"
        onClick={() => handleLogin(email, password)}
        disabled={
          password.length < 6 || !email.includes("@") || !email.includes(".")
            ? true
            : false
        }
      >
        Login
      </button>
      <Link to="/register">
        <button className="register-button"> No Account? Register!</button>
      </Link>
    </div>
  );
};

export default Login;
