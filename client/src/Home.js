import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    var self = this;
    //const customers = this.state.customers;
    //if (!this.state.customers.length) return "Data not available yet";
    var sideBarStyles = {
      position: "absolute",
      width: "255px",
      height: "608px",
      left: "0px",
      top: "0px",

      /* sidebar / bg */

      background: "#363740"
    };

    return (
      <div style={sideBarStyles}>
        <h1>Sidebar</h1>
      </div>
    );
  }
}

export default Home;
