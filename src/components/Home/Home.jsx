import React from "react";
import { Grid, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Image src="assets/home-pic.jpg" className="header-image" />
      <div class="header-text">
        Puppies
        <p className="p-text"> + payment plans now available</p>
        <Link to="/shop">
          <Button bsStyle="link" block="true">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
