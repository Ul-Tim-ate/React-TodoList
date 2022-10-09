import React from "react";
import { useState } from "react";
import "./add-item.css";

export const AddItem = ({ onClick }) => {
  const [label, setLabel] = useState("");
  const labelChange = (e) => {
    setLabel(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onClick(label);
    setLabel("");
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="What needs"
        onChange={labelChange}
        value={label}
      />
      <button className="btn btn-outline-secondary todo-create-btn ">
        Add Item
      </button>
    </form>
  );
};
