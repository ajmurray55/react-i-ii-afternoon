import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";
import Header from "./Header.js"

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



      </div>
    );
    
  }
}
export default App;




