import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

class App extends Component<any> {
  componentWillMount() {
    console.log("Almost there...");
  }

  componentDidMount() {
    console.log("Finally say ... Hello!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message message="Checking if Denis is indeed pitushara" />
        </header>
      </div>
    );
  }
}

export default App;
