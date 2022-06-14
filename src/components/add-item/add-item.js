import React from "react";
import "./add-item.css";

export class AddItem extends React.Component {
  state = {
    label: "",
  };
  labelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onClick(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs"
          onChange={this.labelChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary todo-create-btn ">
          Add Item
        </button>
      </form>
    );
  }
}
