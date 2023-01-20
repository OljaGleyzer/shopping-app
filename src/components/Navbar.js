import React from "react";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav
      className="justify-content-end bg-dark"
      variant="pills"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
