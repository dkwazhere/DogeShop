import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
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
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/shop" to="/shop">
              Shop
            </NavItem>
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
