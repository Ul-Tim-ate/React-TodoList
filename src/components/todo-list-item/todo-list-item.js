import React from "react";

import "./todo-list-item.css";

class TodoListItem extends React.Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
		let className = "todo-list-item";
    if (important) {
      className += " important";
    }
    if (done) {
      className += " done";
    }
    return (
      <span className={className}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
