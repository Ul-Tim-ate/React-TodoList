import React from "react";

import "./todo-list-item.css";

class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };
  onMarkImportant = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    let className = "todo-list-item";
    const { done, important } = this.state;
    if (done) {
      className += " done";
    }
    if (important) {
      className += " important";
    }
    return (
      <span className={className}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
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
