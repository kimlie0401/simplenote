import React, { Component } from "react";
import "./Note.css";

export default class Note extends Component {
  render() {
    const {
      note: { title },
      note: { contents },
      onEdit
    } = this.props;

    return (
      <div className="note">
        <input
          className="title"
          value={title}
          onChange={e => onEdit("title", e)}
        ></input>
        <textarea
          className="note-contents"
          value={contents}
          onChange={e => onEdit("contents", e)}
        ></textarea>
      </div>
    );
  }
}
