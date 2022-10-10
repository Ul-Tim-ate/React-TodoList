import React, { ChangeEvent, FC, FormEvent } from "react";
import { useState } from "react";
import "./add-item.css";

interface AddItemProps{
	onClick: (label: string) => void;
}

export const AddItem: FC<AddItemProps> = ({ onClick }) => {
  const [label, setLabel] = useState("");
  const labelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
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
