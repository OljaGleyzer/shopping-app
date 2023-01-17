import React from "react";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav
      className="justify-content-end bg-dark"
      variant="pills"
      defaultActiveKey="/home"
    >
      <Nav.Link eventKey="disabled" disabled>
        <p className="justify-content-start"> MarxitUp</p>
      </Nav.Link>
      <Nav.Item>
        <Nav.Link href="/home">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
