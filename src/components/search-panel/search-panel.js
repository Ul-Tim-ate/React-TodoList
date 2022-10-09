import React from "react";

import "./search-panel.css";

const SearchPanel = ({ setSearchTerm }) => {
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={onChange}
    />
  );
};

export default SearchPanel;
