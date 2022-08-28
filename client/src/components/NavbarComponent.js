import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="warning" variant="dark" expand="lg"  >
      <Container id="icon">
        <Navbar.Brand>
          <Link to="/" className="text-black text-decoration-none" >
            
            <h2><b>🎬Movie Flex</b></h2>
            
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
