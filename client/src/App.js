import React, { Component } from "react";

import Navbar from "./Components/Layout/Navbar";
import Sidebar from "./Components/Layout/Sidebar";
import Content from "./Components/Layout/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar click={this.props.isToggleOn} />
        <Content />
      </div>
    );
  }
}

export default App;
