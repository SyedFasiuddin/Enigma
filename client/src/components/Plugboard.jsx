import React, { Component } from "react";
import { alphabets } from "./arrays";
import "./styles/Plugboard.css";

export default class Plugboard extends Component {
  insertPlugs(num) {
    return (
      <div className="individual-plugs">
        <span>Plug #{num}</span>
        <div className="plug-settings">
          <select
            name={"plugStart" + num}
            id={"plugStart" + num}
            onChange={this.props.plugInputHandler}
          >
            {[...alphabets].map((e, i) => (
              <option
                value={i + 1}
                key={"plugStarting" + i}
                selected={
                  this.props.plugboardSideState["plugStart" + num] === e
                    ? "selected"
                    : ""
                }
              >
                {e}
              </option>
            ))}
          </select>
          <p>To</p>
          <select
            name={"plugEnd" + num}
            id={"plugEnd" + num}
            onChange={this.props.plugInputHandler}
          >
            {[...alphabets].map((e, i) => (
              <option
                value={i + 1}
                key={"plugEnding" + i}
                selected={
                  this.props.plugboardSideState["plugEnd" + num] === e
                    ? "selected"
                    : ""
                }
              >
                {e}
              </option>
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
          {this.insertPlugs(1)}
          {this.insertPlugs(2)}
          {this.insertPlugs(3)}
          {this.insertPlugs(4)}
          {this.insertPlugs(5)}
        </div>
        <div className="plugboard-columns">
          {this.insertPlugs(6)}
          {this.insertPlugs(7)}
          {this.insertPlugs(8)}
          {this.insertPlugs(9)}
          {this.insertPlugs(10)}
        </div>
      </div>
    );
  }
}
