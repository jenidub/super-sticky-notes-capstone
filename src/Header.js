import React from "react";
import "./index";

const Header = (props) => {
  const searchBox = (e) => {
    const search = e.target.value;
    props.onSearch(search);
  };

  return (
    <header className="app-header__title">
      <h1>Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.addNote} className="add-new">
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={searchBox}
        />
      </aside>
    </header>
  );
};

export default Header;
