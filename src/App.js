import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Note from "./components/Note";
import "./App.css";

class App extends Component {
  state = {
    notes: [
      { id: 0, title: "Today", contents: "Good day" },
      { id: 1, title: "Weather", contents: "Nice" },
      { id: 2, title: "Hot", contents: "Very Hot" }
    ],
    activeId: null
  };
  generateId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  handleToggleId = id => {
    this.setState({ activeId: id });
  };

  handleEdit = (type, e) => {
    const notes = [...this.state.notes];
    const note = notes.find(item => item.id === this.state.activeId);
    note[type] = e.target.value;
    this.setState({
      notes: notes
    });
    localStorage.notes = JSON.stringify(this.state.notes);
  };

  handleCreate = () => {
    const id = this.generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: "New Title",
          contents: "New Contents"
        }
      ],
      activeId: id
    });
  };

  handleRemove = () => {
    const notes = this.state.notes.filter(
      item => item.id !== this.state.activeId
    );
    this.setState({ notes, activeId: notes.length === 0 ? null : notes[0].id });
  };

  UNSAFE_componentWillMount = () => {
    const notes = localStorage.notes;
    if (notes) {
      this.setState({
        notes: JSON.parse(notes)
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (JSON.stringify(prevState.notes) !== JSON.stringify(this.state.notes)) {
      localStorage.notes = JSON.stringify(this.state.notes);
    }
  };

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter(item => activeId === item.id);
    const list = activeNote.map((item, index) => (
      <Note key={index} note={item} onEdit={this.handleEdit} />
    ));

    return (
      <div className="app">
        <Header onCreate={this.handleCreate} onRemove={this.handleRemove} />
        <div className="container">
          <List
            notes={notes}
            activeId={activeId}
            onToggleId={this.handleToggleId}
          />
          {notes.length !== 0 && list}
        </div>
      </div>
    );
  }
}

export default App;
