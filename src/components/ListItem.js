import React, { Component } from "react";
import "./ListItem.css";

export default class ListItem extends Component {
  render() {
    const { active, title, contents, onToggleId } = this.props;
    return (
      <div
        className={active ? "list-item active" : "list-item"}
        onClick={onToggleId}
      >
        <div className="title">{title ? title : "Title"}</div>
        <div className="list-item-contents">
          {contents ? contents : "Contents"}
        </div>
      </div>
    );
  }
}
