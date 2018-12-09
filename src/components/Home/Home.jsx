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
          <Image src="assets/small-dog.jpg" circle className="dog-home-pic" />
          <Link to="/about">
            <Button className="dog-button" bsStyle="link" block="true">
              Shop Small Dogs
            </Button>
          </Link>
        </Col>
        <Col xs={12} sm={4} className="shop-wrapper">
          <Image src="assets/medium-dog.jpg" circle className="dog-home-pic" />
          <Link to="/about">
            <Button className="dog-button" bsStyle="link" block="true">
              Shop Medium Dogs
            </Button>
          </Link>
        </Col>
        <Col xs={12} sm={4} className="shop-wrapper">
          <Image src="assets/large-dog.jpg" circle className="dog-home-pic" />
          <Link to="/about">
            <Button className="dog-button" bsStyle="link" block="true">
              Shop Large Dogs
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
