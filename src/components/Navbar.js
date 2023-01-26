import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { useContext } from "react";

function Navbar() {
  const { token, password, userName, logout } = useContext(AuthContext);
  return (
    <Nav
      className="justify-content-end bg-dark"
      variant="pills"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {!userName && (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {/* {userName && ( */}
        <Nav.Link as={Link} to="/myprofile">
          My Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {userName && (
          <Nav.Link
            as={Link}
            to="/login"
            onClick={() => logout(userName, password, token, logout)}
          >
            Logout
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
