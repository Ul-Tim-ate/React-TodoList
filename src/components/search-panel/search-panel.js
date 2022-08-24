import React from "react";

import "./search-panel.css";

class SearchPanel extends React.Component {
  onChange = (e) => {
    this.props.setSearchTerm(e.target.value);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchPanel;
