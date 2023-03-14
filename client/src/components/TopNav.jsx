import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">myCRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to="/manage">
              <Nav.Link href="/manage">Manage</Nav.Link>
            </Link>
            <Link to="/upload">
              <Nav.Link href="/upload">Upload</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
