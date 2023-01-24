import { createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  //Put here the state and functions you want to share
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Provider
      value={{ token, setToken, userName, setUserName, password, setPassword }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
