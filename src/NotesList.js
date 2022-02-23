import React from "react";
import "./index.css";
import Note from "./Note";

const NotesList = (props) => {
  const filteredList = props.notes.filter(
    (note) => note.doesMatchSearch === true
  );
  const renderItem = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      deleteNote={props.deleteNote}
    />
  );
  const noteElements = filteredList.map(renderItem);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
