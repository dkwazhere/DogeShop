import React from "react";
import { Col, Panel, Row, Image } from "react-bootstrap";
import "./Accessories.css";

const Home = () => {
  return (
    <div className="accessories">
      <Image src="assets/accessories-jumbotron.jpg" className="header-image" />
      <p className="accessories-header">Accessories</p>
      <p className="accessories-p">
        All our accessories are high quality and life time warranty
      </p>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/avocado-toy.jpg"
                className="accessories-pic"
              />
              <p>Avocado Toy with ball</p>
              <p>$12.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/bark-trainer-collar.jpg"
                className="accessories-pic"
              />
              <p>Bark Trainer Collar</p>
              <p>$89.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/blue-collar.jpg"
                className="accessories-pic"
              />
              <p>Blue Collar</p>
              <p>$9.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/burgandy-dog-bed.jpg"
                className="accessories-pic"
              />
              <p>Burgandy Dog Bed</p>
              <p>$59.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/dog-bone-toy.jpg"
                className="accessories-pic"
              />
              <p>Dog Bone Squeeze Toy</p>
              <p>$21.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/dog-toy.jpg"
                className="accessories-pic"
              />
              <p>Squueze Toy</p>
              <p>$39.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/large-cage.jpg"
                className="accessories-pic"
              />
              <p>Cage for large dogs</p>
              <p>$59.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/medium-cage.jpg"
                className="accessories-pic"
              />
              <p>Cage for Medium dogs</p>
              <p>$49.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/small-cage.jpg"
                className="accessories-pic"
              />
              <p>Cage for Small dogs</p>
              <p>$39.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/navy-pattern-dog-bed.jpg"
                className="accessories-pic"
              />
              <p>Navy Patterned Dog Bed</p>
              <p>$39.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/pet-tag.jpg"
                className="accessories-pic"
              />
              <p>Dog Tag</p>
              <p>$9.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/accessories/retractable-leash.jpg"
                className="accessories-pic"
              />
              <p>Retractable Leash</p>
              <p>$39.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
