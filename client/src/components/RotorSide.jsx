import React, { Component } from "react";
import "./RotarSide.css";

export default class RotarSide extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  insertRotorSelection(num) {
    const rotors = ["I", "II", "III", "IV", "V"];
    const rotorsSettings = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
    ];
    return (
      <div className="individualRotor">
        <span>Rotor #{num}</span>
        <select
          name="rotor"
          id={"rotor" + num}
          onChange={this.props.rotorHandler}
        >
          {[...rotors].map((e, i) => (
            <option value={i + 1}>{e}</option>
          ))}
        </select>
        <select
          name="rotorStartingPosition"
          id={"rotorSet" + num}
          onChange={this.props.rotorHandler}
        >
          {[...rotorsSettings].map((e, i) => (
            <option value={i + 1}>{e}</option>
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
            {this.insertRotorSelection(1)}
            {this.insertRotorSelection(2)}
            {this.insertRotorSelection(3)}
          </div>
          <div>
            <button type="submit" onClick={this.props.submitHandler}>
              Encrypt
            </button>
          </div>
        </div>
        <div>
          {/* <p>Input Message</p> */}
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
          {/* <p>Enigma output</p> */}
          <textarea
            name="message"
            className="message"
            cols="30"
            rows="10"
            placeholder="Engima output"
            readOnly
          ></textarea>
        </div>
      </div>
    );
  }
}
