import React, { Component } from "react";
import { rotors, rotorStartingPosition } from "./arrays";
import "./styles/RotarSide.css";

export default class RotarSide extends Component {
  insertRotors(num) {
    return (
      <div className="individualRotor">
        <span>Rotor #{num}</span>
        <select
          name="rotor"
          id={"rotor" + num}
          onChange={this.props.rotorInputHandler}
          value={this.props.rotorSettings["rotor" + num]}
        >
          {[...rotors].map((e, i) => (
            <option value={i + 1} key={"ro" + i}>
              {e}
            </option>
          ))}
        </select>
        <select
          name="rotorStartingPosition"
          id={"rotorSet" + num}
          onChange={this.props.rotorInputHandler}
          value={this.props.rotorSettings["rotorSet" + num]}
        >
          {[...rotorStartingPosition].map((e, i) => (
            <option value={i + 1} key={"roSet" + i}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    return (
      <div id="rotorSide">
        <div id="rotorSelection">
          <div>
            <h3>Rotor Configuration</h3>
          </div>
          <div>
            {this.insertRotors(1)}
            {this.insertRotors(2)}
            {this.insertRotors(3)}
          </div>
          <div>
            <button type="submit" onClick={this.props.submitHandler}>
              Encrypt
            </button>
          </div>
        </div>
        <div>
          <textarea
            name="message"
            className="message"
            cols="30"
            rows="10"
            placeholder="Input Message"
            onChange={this.props.inputMsgHandler}
          ></textarea>
        </div>
        <div>
          <textarea
            name="message"
            className="message"
            cols="30"
            rows="10"
            placeholder={this.props.enigmaMsg}
            readOnly
          ></textarea>
        </div>
      </div>
    );
  }
}
