import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import InputMem from "./components/InputMem";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      prevN: "",
      currentN: "",
      operator: "",
      mem: ""
    };
  }

  // METHODS

  //Print all numbers
  input = val => {
    if (this.state.input == "0") {
      //Si en la entrada hay un cero, quitar el cero e imprimir val
      this.setState({ input: val, mem: val });
    } else {
      this.setState({
        input: this.state.input + val,
        mem: this.state.mem + val
      });
      if (this.state.mem.length == "16") {
        //Máximo de 16 carácteres en salidas
        this.setState({ mem: "", input: "" });
      }
    }
  };

  //Clear the input boxes
  clear = () => {
    this.setState({ input: "", mem: "" });
  };

  //Decimal Point
  decimal = val => {
    if (this.state.input.indexOf(".") == -1) {
      this.setState({
        input: this.state.input + val,
        mem: this.state.mem + val
      });
    }
  };

  //Math Operations
  add = () => {
    this.setState({ prevN: this.state.input });
    this.setState({ input: "", mem: this.state.mem + "+" });
    this.setState({ operator: "add" });
  };

  subtract = () => {
    this.setState({ prevN: this.state.input });
    this.setState({ input: "", mem: this.state.mem + "-" });
    this.setState({ operator: "subtract" });
  };

  multiply = () => {
    this.setState({ prevN: this.state.input });
    this.setState({ input: "", mem: this.state.mem + "*" });
    this.setState({ operator: "multiply" });
  };

  divide = () => {
    this.setState({ prevN: this.state.input });
    this.setState({ input: "", mem: this.state.mem + "/" });
    this.setState({ operator: "divide" });
  };

  //%
  percent = () => {
    this.setState({
      input: parseFloat(this.state.input) / 100,
      mem: parseFloat(this.state.mem) / 100
    });
    this.setState({ operator: "percent" });
  };

  //Change sign of input
  neg = () => {
    if (this.state.input == "-") {
      this.setState({ input: "", mem: "" });
    } else {
      if (this.state.input !== "") {
        this.setState({
          input: parseFloat(this.state.input) * -1,
          mem: parseFloat(this.state.input) * -1
        });
      } else {
        this.setState({ input: "-", mem: "-" });
      }
    }
  };

  //Delete the last element of the input
  del = () => {
    this.setState({
      input: this.state.input.slice(0, -1),
      mem: this.state.mem.slice(0, -1)
    });
  };

  //Evaluate each operation
  evaluate = () => {
    if (this.state.operator == "add") {
      this.setState({
        input: parseFloat(this.state.prevN) + parseFloat(this.state.input)
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        input: parseFloat(this.state.prevN) - parseFloat(this.state.input)
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input: parseFloat(this.state.prevN) * parseFloat(this.state.input)
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input: parseFloat(this.state.prevN) / parseFloat(this.state.input)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <InputMem>{this.state.mem}</InputMem>
          <Input>{this.state.input}</Input>
          <div className="row">
            <Button handleClick={this.clear}>C</Button>
            <Button handleClick={this.neg}>+/-</Button>
            <Button handleClick={this.percent}>%</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.input}>7</Button>
            <Button handleClick={this.input}>8</Button>
            <Button handleClick={this.input}>9</Button>
            <Button handleClick={this.multiply}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.input}>4</Button>
            <Button handleClick={this.input}>5</Button>
            <Button handleClick={this.input}>6</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.input}>1</Button>
            <Button handleClick={this.input}>2</Button>
            <Button handleClick={this.input}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.input}>0</Button>
            <Button handleClick={this.decimal}>.</Button>
            <Button handleClick={this.del}>DEL</Button>
            <Button handleClick={this.evaluate}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
