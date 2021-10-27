import React, { Component } from "react";
import Plugboard from "./Plugboard";
import RotarSide from "./RotorSide";
import axios from "axios";

import "./styles/Body.css";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      rotorSideState: {
        inputMsg: "",
        enigmaMsg: "Enigma Code",
        rotorSettings: {
          rotor1: 1,
          rotorSet1: 1,
          rotor2: 2,
          rotorSet2: 2,
          rotor3: 3,
          rotorSet3: 3,
        },
      },
      plugboardSideState: {
        plugStart1: "A",
        plugStart2: "B",
        plugStart3: "C",
        plugStart4: "D",
        plugStart5: "E",
        plugStart6: "F",
        plugStart7: "G",
        plugStart8: "H",
        plugStart9: "I",
        plugStart10: "J",
        plugEnd1: "K",
        plugEnd2: "L",
        plugEnd3: "M",
        plugEnd4: "N",
        plugEnd5: "O",
        plugEnd6: "P",
        plugEnd7: "Q",
        plugEnd8: "R",
        plugEnd9: "S",
        plugEnd10: "T",
      },
    };
  }

  plugInputHandler = (e) => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.setState(
      (prevState) =>
        ({ ...prevState }.plugboardSideState[e.target.id] = letters.charAt(
          parseInt(e.target.value) - 1
        ))
    );
  };

  rotorInputHandler = (e) => {
    this.setState(
      (prevState) =>
        ({ ...prevState }.rotorSideState.rotorSettings[e.target.id] = parseInt(
          e.target.value
        ))
    );
  };

  inputMsgHandler = (e) => {
    this.setState((prevState) => {
      let obj = { ...prevState };
      obj.rotorSideState.inputMsg = String(e.target.value);
      return obj;
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api", this.state)
      .then((res) =>
        this.setState((prevState) => {
          let obj = { ...prevState };
          obj.rotorSideState.enigmaMsg = res.data.enigmaMsg;
          return obj;
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div id="container">
        <RotarSide
          inputMsgHandler={this.inputMsgHandler}
          submitHandler={this.submitHandler}
          rotorInputHandler={this.rotorInputHandler}
          enigmaMsg={this.state.rotorSideState.enigmaMsg}
          rotorSettings={this.state.rotorSideState.rotorSettings}
        />
        <Plugboard
          plugInputHandler={this.plugInputHandler}
          plugboardSideState={this.state.plugboardSideState}
        />
      </div>
    );
  }
}
