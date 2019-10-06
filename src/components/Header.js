import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>DK's Simple Note</span>
        </div>
        <div className="buttons">
          <button onClick={onCreate}>Create</button>
          <button onClick={onRemove}>Delete</button>
        </div>
      </div>
    );
  }
}
