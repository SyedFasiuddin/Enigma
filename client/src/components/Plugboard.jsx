import React, { Component } from "react";
import "./Plugboard.css";

export default class Plugboard extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  insertSelect(num) {
    const alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    return (
      <div className="individual-plugs">
        <span>Plug #{num}</span>
        <div className="plug-settings">
          <select
            name={"plugStart" + num}
            id={"plugStart" + num}
            onChange={this.props.changeHandler}
          >
            {[...alphabets].map((e, i) => (
              <option value={i + 1}>{e}</option>
            ))}
          </select>
          <p>To</p>
          <select
            name={"plugEnd" + num}
            id={"plugEnd" + num}
            onChange={this.props.changeHandler}
          >
            {[...alphabets].map((e, i) => (
              <option value={i + 1}>{e}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="Plugboard">
        <div>
          <h3>Plug Board</h3>
        </div>
        <div className="plugboard-columns">
          {this.insertSelect(1)}
          {this.insertSelect(2)}
          {this.insertSelect(3)}
          {this.insertSelect(4)}
          {this.insertSelect(5)}
        </div>
        <div className="plugboard-columns">
          {this.insertSelect(6)}
          {this.insertSelect(7)}
          {this.insertSelect(8)}
          {this.insertSelect(9)}
          {this.insertSelect(10)}
        </div>
      </div>
    );
  }
}
