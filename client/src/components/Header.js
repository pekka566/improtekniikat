import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar staticTop={true}>
      <Navbar.Header>
        <Navbar.Brand>Improsivusto </Navbar.Brand>
      </Navbar.Header>
      <Nav className="pull-right">
        <NavItem eventKey={1} href="#">
          Kirjaudu
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
