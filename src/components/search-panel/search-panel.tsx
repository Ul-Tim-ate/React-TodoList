import React, { ChangeEvent, FC } from "react";
import "./search-panel.css";

interface SearchPanelProps{
	setSearchTerm: (term: string) => void;
}

const SearchPanel: FC<SearchPanelProps> = ({ setSearchTerm }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
