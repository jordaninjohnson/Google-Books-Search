import React, { Component } from "react";
import Header from './components/header/header'
import Search from './components/search/search'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
