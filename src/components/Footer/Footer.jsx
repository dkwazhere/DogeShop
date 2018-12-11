import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="show-grid text-center">
        <Col xs={4} sm={2}>
          <p className="footer-p">Shop</p>
          <Link to="/smalldogs" className="footer-links">
            :: Small Dogs
          </Link>
          <br />
          <Link to="/mediumdogs">:: Medium Dogs</Link>
          <br />
          <Link to="/largedogs">:: Large Dogs</Link>
          <br />
          <Link to="/accessories">:: Accessories</Link>
        </Col>
        <Col xs={4} sm={3}>
          <p className="footer-p">:: Support</p>
          <Link to="/about">:: About Us</Link>
          <br />
          <Link to="/delivery">:: Delivery Rates</Link>
          <br />
          <Link to="/shipping">:: Shipping and Returns</Link>
          <br />
          <Link to="/jobs">:: Jobs</Link>
        </Col>
        <Col xs={4} sm={4}>
          <p className="footer-p">About us</p>
          <p className="footer-about">
            We are a dedicated dog shop who strive to please you and your
            family. We offer the best show case dogs and offer reasonable
            prices. We also sell high quality accessories for your dogs.
          </p>
          <a href="https://facebook.com" target="_blank">
            <Image src="assets/facebook.png" className="footer-logo" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <Image src="assets/instagram.png" className="footer-logo" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <Image src="assets/linkedin.png" className="footer-logo" />
          </a>
          <a href="https://pinterest.com" target="_blank">
            <Image src="assets/pinterest.png" className="footer-logo" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <Image src="assets/twitter.png" className="footer-logo" />
          </a>
        </Col>
        <Col xs={4} sm={3}>
          <p className="footer-p">Sign up for newsletters</p>
          <p className="footer-newsletter">
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
