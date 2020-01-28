import React, { Component } from "react";

import "./App.css";
import data from "./data.js";
import Header from "./Header"
import Card from "./Card"
import Nav from "./Nav"

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <div></div>


      <Header />

      <Card name={this.props.data}/>

      <Nav />

      </div>
    );
    
  }
}
export default App;




