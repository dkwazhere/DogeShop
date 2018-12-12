import React from "react";
import { Col, Button, Panel, Row, Image } from "react-bootstrap";
import "./MediumDogs.css";

const Home = () => {
  return (
    <div className="medium-dogs">
      <h3>Mid Sized Dogs</h3>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-beagle.jpg"
                className="medium-dog-pic"
              />
              <p>Beagle</p>
              <p>$149.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-cockerspaniel.jpg"
                className="medium-dog-pic"
              />
              <p>Cocker Spaniel</p>
              <p>$229.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-dachshund.jpg"
                className="medium-dog-pic"
              />
              <p>Dachshund</p>
              <p>$149.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-englishbulldog.jpg"
                className="medium-dog-pic"
              />
              <p>English Bull Dog</p>
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
                src="assets/medium/medium-golden.jpg"
                className="medium-dog-pic"
              />
              <p>Golden Retriever</p>
              <p>$211.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-husky.jpg"
                className="medium-dog-pic"
              />
              <p>Husky</p>
              <p>$139.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-huskymix.jpg"
                className="medium-dog-pic"
              />
              <p>Husky Mix</p>
              <p>$19.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-jackrussellterrier.jpg"
                className="medium-dog-pic"
              />
              <p>Jack Russell Terrier</p>
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
                src="assets/medium/medium-pembrokewelsh.jpg"
                className="medium-dog-pic"
              />
              <p>Pembroke Welsh Corgi</p>
              <p>$269.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-pembrokewelshcorgi.jpg"
                className="medium-dog-pic"
              />
              <p>Pembroke Welsh Corgi</p>
              <p>$269.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-snowfox.jpg"
                className="medium-dog-pic"
              />
              <p>Limited edition Snowfox</p>
              <p>$1929.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/medium/medium-vizsla.jpg"
                className="medium-dog-pic"
              />
              <p>Vizsla</p>
              <p>$229.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
