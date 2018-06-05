import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className = "app">
        <Header />
        <script src="../../dist/assets/bundle.js"></script>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
