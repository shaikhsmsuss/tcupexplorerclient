import React, { Component } from "react";

export class Togglebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div>
        <div className="float-left">
          <button
            className="hamburger sidebar-toggle"
            onClick={this.handleClick}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>
        </div>
      </div>
    );
  }
}

export default Togglebar;
