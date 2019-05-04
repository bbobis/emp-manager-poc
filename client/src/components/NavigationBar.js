import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { useIsAuthenticated } from '../hooks/useAuth';

const NavigationBar = ({ auth }) => {
  const isAuthenticated = useIsAuthenticated(auth);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);
  const login = () => auth.login();
  const logout = () => auth.logout('/');
  const toggleNavigationBar = () => setIsNavBarOpen(!isNavBarOpen);

  return (
    <Container fluid className="px-0 pb-3">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          EM React
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavigationBar} />
        <Collapse isOpen={isNavBarOpen} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink tag={Link} to="/employees">
                Employees
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/departments">
                Departments
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              {isAuthenticated ? (
                <NavLink onClick={logout}>Logout</NavLink>
              ) : (
                <NavLink onClick={login}>Login</NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(NavigationBar);
