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
    setUserName,
    error,
    handleLogin,
  } = useContext(AuthContext);

  // const handleLogin = async (userName, password) => {
  //   try {
  //     await fetch("https://fakestoreapi.com/auth/login", {
  //       method: "POST",
  //       // headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         username: userName,
  //         password: password,
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log("data.token:>>", data.token);
  //     if (data.token) {
  //       setToken(data.token);
  //       //redirect to home page or some other page
  //     } else {
  //       setError(err.response.data);
  //     }
  //   } catch (err) {
  //     console.log("err.response.data", err.response.data);
  //   }
  // };

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
        {error && <small>{error}</small>}
        <button
          className="login-button"
          onClick={() => handleLogin(userName, password)}
        >
          Login
        </button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Login;
