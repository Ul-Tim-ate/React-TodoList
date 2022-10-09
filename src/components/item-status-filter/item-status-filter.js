import React from "react";
import "./item-status-filter.css";

const ItemStatusFilter = ({ changeStatus, status }) => {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const buttonsList = buttons.map(({ name, label }) => {
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
  return <div className="btn-group">{buttonsList}</div>;
};

export default ItemStatusFilter;
