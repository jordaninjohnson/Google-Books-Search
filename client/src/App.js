import React, { Component } from "react";
import Header from './components/header/header'
import Search from './components/search/search'
import Navbar from './components/navbar/navbar'
import BooksContainer from "./containers/booksContainer";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <Navbar />
        </section>
        <section>
          <Header />
        </section>
        <section>
          <Search />
        </section>
        <section>
          <BooksContainer />
        </section>
      </div>
    );
  }
}

export default App;
