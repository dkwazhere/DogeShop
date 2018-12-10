import React from "react";
import { Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer-hr" />
      <Row className="show-grid text-center">
        <Col xs={4} sm={2}>
          <p>Shop</p>
          <Link to="/smalldogs">Small Dogs</Link>
          <br />
          <Link to="/mediumdogs">Medium Dogs</Link>
          <br />
          <Link to="/largedogs">Large Dogs</Link>
          <br />
          <Link to="/accessories">Accessories</Link>
        </Col>
        <Col xs={4} sm={4}>
          <p>Support</p>
          <Link to="/about">About Us</Link>
          <br />
          <Link to="/delivery">Delivery Rates</Link>
          <br />
          <Link to="/shipping">Shipping and Returns</Link>
          <br />
          <Link to="/jobs">Jobs</Link>
        </Col>
        <Col xs={4} sm={6}>
          <p>Sign up for newsletters</p>
          <p>
            Dont worry, we hate spam too - we will send you only the best stuff
          </p>
          <form>
            <label className="footer-email-section">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="footer-email"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Col>
      </Row>
      <p className="footer-copyright">© Powered by David Kim 2018</p>
    </div>
  );
};

export default Footer;
