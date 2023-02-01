import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import missing from "./missing.png";

function NoMatach() {
  return (
    <div className="container" style={{ backgroundColor: "grey" }}>
      <Container className="text-center">
        <h1> So Sorry, something went wrong ...</h1>
        <h2>
          {" "}
          Continue happy shopping @ <Link to="/">Home</Link>
        </h2>
        <img src={missing} alt="404" className="img-fluid" />
      </Container>
      <div className="text-center"></div>
    </div>
  );
}

export default NoMatach;
