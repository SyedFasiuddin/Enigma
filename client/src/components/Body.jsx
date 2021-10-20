import React, { Component } from "react";
import Plugboard from "./Plugboard";
import RotarSide from "./RotorSide";
import "./styles/Body";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      rotorSideState: {
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
      },
      plugboardSideState: {
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
      },
    };
  }

  plugInputHandler = (e) => {
    this.setState(
      (prevState) =>
        ({ ...prevState }.plugboardSideState[e.target.id] = parseInt(
          e.target.value
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
    this.setState(
      (prevState) => {
        let obj = { ...prevState };
        obj.rotorSideState.inputMsg = String(e.target.value);
        return obj;
      }
      // ({ ...prevState }.rotorSideState.inputMsg = String(e.target.value))
    );
  };

  submitHandler = (e) => {
    this.setState(
      (prevState) => ({ ...prevState }.rotorSideState.submit = true)
    );
    console.log(this.state);
  };

  render() {
    return (
      <div id="container">
        <RotarSide
          inputMsgHandler={this.inputMsgHandler}
          submitHandler={this.submitHandler}
          rotorInputHandler={this.rotorInputHandler}
        />
        <Plugboard plugInputHandler={this.plugInputHandler} />
      </div>
    );
  }
}
