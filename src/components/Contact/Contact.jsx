import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Row className="show-grid text-center">
        <Col xs={12} sm={1}>
          <p className="contact-header">Contact</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={8}>
          <p className="contact-p">
            For all online inquiries, including online returns and exchanges,
            please contact: dhealth77@gmail.com
            <br />
            <br />
            For all press inquiries, including lookbook images, please contact:
            dhealth77@gmail.com
            <br />
            <br />
            Head Office within Australia: +800-123-1234 Head
            <br />
            International: +800 111 2222
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3}>
          <form>
            <label className="footer-email-section">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="contact-name"
              />
            </label>
          </form>
          <br />
          <form>
            <label className="footer-email-section">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="contact-email"
              />
            </label>
          </form>
        </Col>
        <Col xs={12} sm={5}>
          <form>
            <label className="footer-email-section">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="contact-message"
              />
            </label>
            <Button bsStyle="primary" block="true" className="contact-button">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
