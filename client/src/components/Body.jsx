import React, { Component } from "react";
import Plugboard from "./Plugboard";
import RotarSide from "./RotorSide";
import "./Body.css";

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

  selectChangeHandler = (e) => {
    let value = e.target.value;
    this.setState((prevState) => {
      let obj = prevState;
      obj[e.target.id] = parseInt(value);
      return { obj };
    });
  };

  rotorHandler = (e) => {
    let value = e.target.value;
    this.setState((prevState) => {
      let obj = prevState;
      obj.rotorSideState.rotorSettings[e.target.id] = parseInt(value);
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
    this.setState((prevState) => {
      let obj = prevState;
      obj.submit = true;
      return { obj };
    });
  };

  render() {
    return (
      <div id="container">
        <RotarSide
          state={this.state.rotorSideState}
          inputMsgHandler={this.inputMsgHandler}
          submitHandler={this.submitHandler}
          rotorHandler={this.rotorHandler}
        />
        <Plugboard
          state={this.state.plugboardSideState}
          changeHandler={this.selectChangeHandler}
        />
      </div>
    );
  }
}
