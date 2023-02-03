import React from "react";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

function ProtectedRoute({ children }) {
  // const redirectTo = useNavigate();

  console.log("children", children);

  const { user, loader } = useContext(AuthContext);
  const isUser = user.email ? true : false;

  // useEffect(() => {
  //   if (!isUser) {
  //     console.log("navigate :>> ");
  //     // <Navigate to="/" />;
  //     redirectTo("/login");
  //   }
  // }, [isUser]);

  return <>{loader ? <p> Loading ...</p> : isUser ? children : null}</>;
}

export default ProtectedRoute;
