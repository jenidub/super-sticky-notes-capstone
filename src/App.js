import React, { Component } from "react";
import "./index.css";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      { id: Date.now(), title: "", description: "", doesMatchSearch: true }
    ],
    searchString: ""
  };

  componentDidUpdate() {
    const stateString = JSON.stringify(this.state);
    localStorage.setItem("stateString", stateString);
  }

  componentDidMount() {
    const stateString = localStorage.getItem("stateString");
    if (stateString) {
      const savedState = JSON.parse(stateString);
      this.setState(savedState);
    }
  }

  addNote = () => {
    const newNotes = this.state.notes.slice();
    newNotes.push({
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    });
    this.setState({ notes: newNotes });
  };

  onType = (id, editedKey, editedValue) => {
    //id -- id of the note that is edited
    //editedKey -- field that was updated - title / description
    //editedValue -- value of editedKey
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== id) {
        return note;
      } else {
        if (editedKey === "title") {
          note.title = editedValue;
          return note;
        } else if (editedKey === "description") {
          note.description = editedValue;
          return note;
        }
      }
    });

    this.setState({ notes: updatedNotes });
  };

  onSearch = (search) => {
    console.log(search);

    const updatedNotes = this.state.notes.map((note) => {
      console.log(note);
      let searchLower = search.toLowerCase();
      let noteTitleLower = note.title.toLowerCase();
      let noteDesLower = note.description.toLowerCase();

      if (
        noteTitleLower.includes(searchLower) ||
        noteDesLower.includes(searchLower)
      ) {
        note.doesMatchSearch = true;
        return note;
      } else {
        note.doesMatchSearch = false;
        return note;
      }
    });

    this.setState({ notes: updatedNotes, searchString: search });
  };

  deleteNote = (id) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        note = {};
        return note;
      } else {
        return note;
      }
    });

    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchString}
          onSearch={this.onSearch}
          addNote={this.addNote}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
