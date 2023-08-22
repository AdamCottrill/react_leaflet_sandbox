import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MyNavbar = (props) => {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container fluid>
        <Navbar.Brand href="#home">Leaflet Sandbox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Study Area
            </Nav.Link>
            <Nav.Link as={Link} to="/spaces">
              Spaces
            </Nav.Link>
            <Nav.Link as={Link} to="/subspaces">
              Sub-Spaces
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
