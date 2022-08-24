import React from "react";

import "./item-status-filter.css";

class ItemStatusFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];
  render() {
    const { changeStatus, status } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = name === status;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          onClick={() => {
            changeStatus(name);
          }}
          key={name}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
