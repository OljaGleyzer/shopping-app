import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import karlMarx from "./karlMarx.png";
import Nav from "react-bootstrap/Navbar";

function Footer() {
  return (
    <footer>
      <Nav bg="dark" variant="dark" className="container-footer">
        <div>
          <Container className=" no-padding ">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={karlMarx}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Happy Fake Shopping © Olja
            </Navbar.Brand>
          </Container>
        </div>
      </Nav>
    </footer>
  );
}

export default Footer;
