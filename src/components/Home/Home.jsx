import React from "react";
import { Grid, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Image src="assets/home-pic.jpg" className="header-image" />
      <div class="header-text">
        Puppies
        <p className="p-text"> + payment plans now available</p>
        <Button bsStyle="info">Free Shipping</Button>
      </div>
    </div>
  );
};

export default Home;
