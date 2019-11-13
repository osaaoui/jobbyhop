import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../Info";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Info />
      </div>
    );
  }
}

export default Home;
