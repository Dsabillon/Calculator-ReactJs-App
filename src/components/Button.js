import React, { Component } from "react";
import "../Styles/Button.css";

export class Button extends Component {
  isOperator = val => {
    if (val == "=") {
      return "operator1";
    } else if (val === "+" || val === "-" || val === "X" || val === "/") {
      return "operator2";
    } else {
      return "";
    }
  };

  render() {
    return (
      <div
        className={`btn ${this.isOperator(this.props.children)}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
