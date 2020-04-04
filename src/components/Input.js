import React, { Component } from "react";
import "../Styles/Input.css";

export class Input extends Component {
  render() {
    return <div className="input">{this.props.children}</div>;
  }
}

export default Input;
