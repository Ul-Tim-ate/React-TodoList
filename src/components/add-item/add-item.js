import React from "react";
import "./add-item.css";

export const AddItem = ({ onClick }) => {
  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary todo-create-btn "
        onClick={() => {
          onClick('Lol');
        }}
      >
        Создать
      </button>
    </div>
  );
};
