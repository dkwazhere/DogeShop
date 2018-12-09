import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SmallDogs from "./components/Shop/SmallDogs";
import MediumDogs from "./components/Shop/MediumDogs";
import LargeDogs from "./components/Shop/LargeDogs";
import Accessories from "./components/Shop/Accessories";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/smalldogs" component={SmallDogs} />
          <Route path="/mediumdogs" component={MediumDogs} />
          <Route path="/largedogs" component={LargeDogs} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
