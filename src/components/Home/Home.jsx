import React from "react";
import { Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Image src="assets/home-pic.jpg" className="header-image" />
      <div class="header-text">
        Puppies
        <p className="p-text"> + payment plans now available</p>
        <Link to="/about">
          <Button bsStyle="link" block="true">
            Learn More
          </Button>
        </Link>
      </div>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="shop-wrapper">
          <h3>Shop Small Dogs</h3>
        </Col>
        <Col xs={12} sm={4} className="shop-wrapper">
          <h3>Shop Medium Dogs</h3>
        </Col>
        <Col xs={12} sm={4} className="shop-wrapper">
          <h3>Shop Large Dogs</h3>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
