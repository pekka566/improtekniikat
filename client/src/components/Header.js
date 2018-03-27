import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    const { isAuthenticated, username } = this.props.auth;
    const user = username();
    return (
      <Navbar staticTop={true}>
        <Navbar.Header>
          <Navbar.Brand>Improsivusto </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            {isAuthenticated() && <span>Terve {user}!</span>}
          </Navbar.Text>
          <Nav className="pull-right">
            {!isAuthenticated() && (
              <NavItem eventKey={1} href="#" onClick={this.login.bind(this)}>
                Kirjaudu
              </NavItem>
            )}
            {isAuthenticated() && (
              <NavItem eventKey={1} href="#" onClick={this.logout.bind(this)}>
                Kirjaudu ulos
              </NavItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
}
export default Header;
