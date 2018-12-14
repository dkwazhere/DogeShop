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
      <div className="dog-size-shop">
        <h3 className="dog-size-header">Find your perfect dog today!</h3>
        <p className="dog-size-paragraph">What's your preferred dog size?</p>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="shop-wrapper">
            <Image src="assets/small-dog.jpg" square className="dog-home-pic" />
            <Link to="/smalldogs">
              <Button className="dog-button" bsStyle="link" block="true">
                Shop Small Dogs
              </Button>
            </Link>
          </Col>
          <Col xs={12} sm={4} className="shop-wrapper">
            <Image
              src="assets/medium-dog.jpg"
              square
              className="dog-home-pic"
            />
            <Link to="/mediumdogs">
              <Button className="dog-button" bsStyle="link" block="true">
                Shop Medium Dogs
              </Button>
            </Link>
          </Col>
          <Col xs={12} sm={4} className="shop-wrapper">
            <Image src="assets/large-dog.jpg" square className="dog-home-pic" />
            <Link to="/largedogs">
              <Button className="dog-button" bsStyle="link" block="true">
                Shop Large Dogs
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="about-us-section">
        <h3 className="about-us-header">A little about us ...</h3>
        <Row className="show-grid text-center">
          <Col xs={3} sm={3}>
            <Image src="assets/trophy.png" className="about-us-pic" />
            <p className="about-us-p">
              Our dogs are top quality and show dog worthy, 5 of 2000 dogs sold
              were in the 2018 American Kennel Club show
            </p>
          </Col>
          <Col xs={3} sm={3}>
            <Image src="assets/internet.png" className="about-us-pic" />
            <p className="about-us-p">
              We have an amazing shipping process. We offer world wide shipping
              with a 1 day guarantee. We offer a 30 day return policy
            </p>
          </Col>
          <Col xs={3} sm={3}>
            <Image src="assets/price-tag.png" className="about-us-pic" />
            <p className="about-us-p">
              Our prices amazing and affordable to every customer. Our prices
              range from $10.00 to $9,000{" "}
            </p>
          </Col>
          <Col xs={3} sm={3}>
            <Image src="assets/plant.png" className="about-us-pic" />
            <p className="about-us-p">
              We feed our dogs/puppies non-gmo food. Our company is anti gmo and
              make our own dog food.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
