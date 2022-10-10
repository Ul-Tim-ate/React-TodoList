import React, { FC } from "react";
import "./item-status-filter.css";

export enum Status{
	all = "all",
	active = "active",
	done = "done"
}

interface ItemStatusFilterProps{
	changeStatus: (status: Status)=>void;
	status: Status;
}


const ItemStatusFilter:FC<ItemStatusFilterProps> = ({ changeStatus, status }) => {
  const buttons = [
    { name: Status.all, label: "All" },
    { name: Status.active, label: "Active" },
    { name: Status.done, label: "Done" },
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
