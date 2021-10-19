import React, { Component } from "react";
import "./Plugboard.css";

export default class Plugboard extends Component {
  constructor() {
    super();
    this.state = {
      plugStart1: 1,
      plugStart2: 1,
      plugStart3: 1,
      plugStart4: 1,
      plugStart5: 1,
      plugStart6: 1,
      plugStart7: 1,
      plugStart8: 1,
      plugStart9: 1,
      plugStart10: 1,
      plugEnd1: 1,
      plugEnd2: 1,
      plugEnd3: 1,
      plugEnd4: 1,
      plugEnd5: 1,
      plugEnd6: 1,
      plugEnd7: 1,
      plugEnd8: 1,
      plugEnd9: 1,
      plugEnd10: 1,
    };
  }

  selectChangeHandler = (e) => {
    let value = e.target.value;
    this.setState((prevState) => {
      let obj = prevState;
      obj[e.target.id] = parseInt(value);
      return { obj };
    });
  };

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
            onChange={this.selectChangeHandler}
          >
            {[...alphabets].map((e, i) => (
              <option value={i + 1}>{e}</option>
            ))}
          </select>
          <p>To</p>
          <select
            name={"plugEnd" + num}
            id={"plugEnd" + num}
            onChange={this.selectChangeHandler}
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
