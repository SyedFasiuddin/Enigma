import React, { Component } from "react";
import "./RotarSide.css";

export default class RotarSide extends Component {
  constructor() {
    super();
    this.state = {
      submit: false,
      inputMsg: "",
      enigmaMsg: "",
      rotorSettings: {
        rotor1: 1,
        rotorSet1: 4,
        rotor2: 1,
        rotorSet2: 4,
        rotor3: 1,
        rotorSet3: 4,
      },
    };
  }

  rotorHandler = (e) => {
    let value = e.target.value;
    this.setState((prevState) => {
      let obj = prevState;
      obj.rotorSettings[e.target.id] = parseInt(value);
      return { obj };
    });
  };

  inputMsgHandler = (e) => {
    let value = e.target.value;
    this.setState((prevState) => {
      let obj = prevState;
      obj.inputMsg = String(value);
      return { obj };
    });
  };

  submitHandler = (e) => {
    // console.log(this.state, e);
    this.setState((prevState) => {
      let obj = prevState;
      obj.submit = true;
      return { obj };
    });
  };

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
        <select name="rotor" id={"rotor" + num} onChange={this.rotorHandler}>
          {[...rotors].map((e, i) => (
            <option value={i + 1}>{e}</option>
          ))}
        </select>
        <select
          name="rotorStartingPosition"
          id={"rotorSet" + num}
          onChange={this.rotorHandler}
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
            <button type="submit" onClick={this.submitHandler}>
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
            onChange={this.inputMsgHandler}
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
