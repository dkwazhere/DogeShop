import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">DogeShop</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft className="navbar">
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavDropdown eventKey={2} title="Shop" id="basic-nav-dropdown">
              <MenuItem
                eventKey={2.1}
                componentClass={Link}
                href="/smalldogs"
                to="/smalldogs"
              >
                Small Dogs
              </MenuItem>
              <MenuItem
                eventKey={2.2}
                componentClass={Link}
                href="/mediumdogs"
                to="/mediumdogs"
              >
                Medium Dogs
              </MenuItem>
              <MenuItem
                eventKey={2.3}
                componentClass={Link}
                href="/largedogs"
                to="/largedogs"
              >
                Large Dogs
              </MenuItem>
              <MenuItem divider />
              <MenuItem
                eventKey={2.3}
                componentClass={Link}
                href="/accessories"
                to="/accessories"
              >
                Accessories
              </MenuItem>
            </NavDropdown>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/contact"
              to="/contact"
            >
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
