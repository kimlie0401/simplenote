import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

export default class List extends Component {
  render() {
    const { notes, activeId, onToggleId } = this.props;
    return (
      <div className="list">
        {notes.map(item => (
          <ListItem
            id={item.id}
            key={item.id}
            active={activeId === item.id}
            title={item.title}
            contents={item.contents}
            onToggleId={() => onToggleId(item.id)}
          />
        ))}
      </div>
    );
  }
}
