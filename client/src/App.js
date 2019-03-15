import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
