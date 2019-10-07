import React, { Component } from "react";
import "./Header.css";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 150
  }
};

export default class Header extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              DK's Simple Note
            </SplitText>{" "}
          </span>
        </div>
        <div className="buttons">
          <button onClick={onCreate}>Create</button>
          <button onClick={onRemove}>Delete</button>
        </div>
      </div>
    );
  }
}
