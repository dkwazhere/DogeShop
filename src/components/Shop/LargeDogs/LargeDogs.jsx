import React from "react";
import { Col, Panel, Row, Image } from "react-bootstrap";
import "./LargeDogs.css";

const Home = () => {
  return (
    <div className="large-dogs">
      <Image src="assets/large-jumbotron.jpg" className="header-image" />
      <p className="large-sized-header">Large Sized Dogs</p>
      <p className="large-sized-p">
        Our large sized dog selection age from 3 months to adult
      </p>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-bear.jpg"
                className="large-dog-pic"
              />
              <p>Limited Edition Brown Bear</p>
              <p>$11249.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-blackretriever.jpg"
                className="large-dog-pic"
              />
              <p>Black retriever</p>
              <p>$229.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-bordercollie.jpg"
                className="large-dog-pic"
              />
              <p>Border Collie</p>
              <p>$149.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-brownwolf.jpg"
                className="large-dog-pic"
              />
              <p>Limited Edition Brown Wolf</p>
              <p>$1239.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-bulldog.jpg"
                className="large-dog-pic"
              />
              <p>Bulldog</p>
              <p>$211.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-dalmatian.jpg"
                className="large-dog-pic"
              />
              <p>Dalmatian</p>
              <p>$101.00</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-dobermanpinscher.jpg"
                className="large-dog-pic"
              />
              <p>Doberman Pinscher</p>
              <p>$19.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-elephant.jpg"
                className="large-dog-pic"
              />
              <p>Limited Edition Elephant</p>
              <p>$3429.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid text-center">
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-german.jpg"
                className="large-dog-pic"
              />
              <p>German Shepard</p>
              <p>$269.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-germanshepard.jpg"
                className="large-dog-pic"
              />
              <p>German Shepard</p>
              <p>$269.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-greatdane.jpg"
                className="large-dog-pic"
              />
              <p>Great Dane</p>
              <p>$929.99</p>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={12} sm={3} className="shop-wrapper">
          <Panel>
            <Panel.Body>
              <Image
                src="assets/large/large-labradorretriever.jpg"
                className="large-dog-pic"
              />
              <p>Labrador Retriever</p>
              <p>$229.99</p>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
