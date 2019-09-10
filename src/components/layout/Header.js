import React from "react";
import { Navbar, Nav } from "react-bootstrap/";
import { FaUser } from "react-icons/fa/";

export const Header = () => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">Hashbrowns</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="">
            <FaUser />
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};
