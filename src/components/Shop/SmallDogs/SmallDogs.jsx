import React from "react";
import { Col, Panel, Row, Image } from "react-bootstrap";
import "./SmallDogs.css";

const Home = () => {
  return (
    <div className="small-dogs">
      <Image src="assets/small-jumbotron.jpg" className="header-image" />
      <h3 className="small-sized-header">Small Sized Dogs</h3>
      <p className="small-sized-p">
        Our small sized dog selection age from 3 months to adult
      </p>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-german.jpg"
                className="small-dog-pic"
              />
              <p>German Shepard Pups</p>
              <p>$49.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-shihtzu.jpg"
                className="small-dog-pic"
              />
              <p>Shih Tzu</p>
              <p>$29.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-yorkie.jpg"
                className="small-dog-pic"
              />
              <p>Yorkie Pup</p>
              <p>$129.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-chihuahua.jpg"
                className="small-dog-pic"
              />
              <p>Chihuahua</p>
              <p>$239.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-applehead-chihuahua.jpg"
                className="small-dog-pic"
              />
              <p>Applehead Chihuahua</p>
              <p>$21.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-beagle.jpg"
                className="small-dog-pic"
              />
              <p>Beagle</p>
              <p>$239.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-french.jpg"
                className="small-dog-pic"
              />
              <p>French Bulldog</p>
              <p>$229.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-german-pup.jpg"
                className="small-dog-pic"
              />
              <p>German Shepard Pup</p>
              <p>$429.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-pug.jpg"
                className="small-dog-pic"
              />
              <p>Pug pup</p>
              <p>$269.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-rotweiler.jpg"
                className="small-dog-pic"
              />
              <p>Rotweiler</p>
              <p>$129.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-squirrel.jpg"
                className="small-dog-pic"
              />
              <p>Limited edition Squirrel</p>
              <p>$929.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/small/small-frenchbulldog.jpg"
                className="small-dog-pic"
              />
              <p>Bulldog Pup</p>
              <p>$229.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
