import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import karlMarx from "./karlMarx.png";
import Nav from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Nav bg="dark" variant="dark" fixed="bottom">
        <Container className="justify-content-center no-padding">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={karlMarx}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Happy Shopping: Copyright © Olja
          </Navbar.Brand>
        </Container>
      </Nav>
    </>
  );
}

export default Footer;
