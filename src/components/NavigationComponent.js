import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
        <Jumbotron fluid>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Guinea Exams</h1>
                        <h2>Your Exams in your hand</h2>
                    </div>

                </div>
            </div>       
        </Jumbotron>
        <Navbar color="dark" dark>
            <div className="container" sticky="top" expand="md">
                <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    </div>
  );
}

export default Navigation;