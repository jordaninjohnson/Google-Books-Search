import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./pages/homePage"
import Saved from "./pages/saved"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/savedBooks'>
            <Saved />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
