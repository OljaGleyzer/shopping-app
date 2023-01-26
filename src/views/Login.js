import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const {
    token,
    setToken,
    password,
    setPassword,
    userName,
    user,
    error,
    handleLogin,
    email,
    setEmail,
  } = useContext(AuthContext);

  return (
    <div className="login">
      {user.userName ? <h1>Hello {user.userName}</h1> : <h1>Please Login:</h1>}
      {/* <input
        value={userName}
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      /> */}
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
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <small>{error}</small>}
      <button
        className="login-button"
        onClick={() => handleLogin(userName, password)}
      >
        Login
      </button>
      <button className="register-button">Register</button>
    </div>
  );
};

export default Login;
