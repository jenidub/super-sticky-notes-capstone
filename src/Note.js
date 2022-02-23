import React from "react";
import "./index.css";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const id = props.note.id;
    props.onType(id, "title", updatedValue);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const id = props.note.id;
    props.onType(id, "description", updatedValue);
  };

  const deleteNote = () => {
    const id = props.note.id;
    props.deleteNote(id);
  };

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={deleteNote}>
        X
      </span>
    </li>
  );
};

export default Note;
