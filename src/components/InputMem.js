import React, { Component } from "react";
import "../Styles/InputMem.css";

export class InputMem extends Component {
  render() {
    return <div className="input2">{this.props.children}</div>;
  }
}

export default InputMem;
