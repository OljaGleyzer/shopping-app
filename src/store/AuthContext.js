import { createContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useEffect } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  console.log("authcontext run");
  //Put here the state and functions you want to share
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const redirectTo = useNavigate();
  const [user, setUser] = useState("");
  const redirectLogin = useNavigate();
  // console.log("user :>> ", user);
  // const [userName, setUserName] = useState("Stranger");

  const register = async (email, password) => {
    // console.log("email,password", email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      console.log("error.message :>> ", error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const login = async (email, password) => {
    // console.log("email, password", email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(userCredential.user);
      // console.log("user :>> ", user);
    } catch (error) {
      console.log("error.message :>> ", error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const checkUserStatus = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const uid = user.uid;
        console.log("user is logged in");
        setUser(user);
        setLoader(false);
        setUserName(user.displayName);
      } else {
        console.log("user is not logged in");
        setLoader(false);
        // setUser(null);
      }
    });
  };

  const logout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("sign out successfull");
        setUser("");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("sign out not successfull");
      });
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        password,
        setPassword,
        error,
        logout,
        register,
        login,
        user,
        loader,
        checkUserStatus,
        userName,
        setUserName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
