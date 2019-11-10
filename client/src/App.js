import React, { Component } from "react";
import Sidebar from "./components/layouts/Sidebar";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import NotFoundPage from "./components/pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

/*
axios
      .get(`/api/customer`, {
        params: {
          search: "John"
        }
      })
      .then(res => {
        console.log(res);
      });
.then(res => res.json())
        .then(customers =>
          this.setState({ customers }, () =>
            console.log("Customers fetched...", customers)
          )
        )

        // axios
      .get(`/api/customers/?firstName=${this.state.customerName}`)
      .then(res => {
        this.setState({
          customerName: res.data.firstName
        });
      });
  }
*/
