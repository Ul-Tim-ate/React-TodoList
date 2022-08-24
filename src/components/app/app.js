import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";

export class App extends React.Component {
  maxId = 100;
  state = {
    status: "all",
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };
  addItem = (newElement) => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createTodoItem(newElement)];
      return {
        todoData: newArray,
      };
    });
  };
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return {
      todoData: newArr,
    };
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return this.toggleProperty(todoData, id, "important");
    });
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return this.toggleProperty(todoData, id, "done");
    });
  };
  changeStatus = (status) => {
    this.setState(() => {
      return {
        status: status,
      };
    });
  };
  getDataByStatus = (status, todoData) => {
    if (status === "all") {
      return todoData;
    }
    if (status === "active") {
      return todoData.filter((el) => !el.done);
    }
    if (status === "done") {
      return todoData.filter((el) => el.done);
    }
  };
  searchTodo = (todoData) => {
    const { term } = this.state;
    if (term === "") {
      return todoData;
    }
    return todoData.filter(
      (el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
  };
  setSearchTerm = (term) => {
    this.setState({ term });
  };

  render() {
    const { todoData, status } = this.state;
    const visibleData = this.getDataByStatus(status, this.searchTodo(todoData));
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel setSearchTerm={this.setSearchTerm} />
          <ItemStatusFilter
            changeStatus={this.changeStatus}
            status={this.state.status}
          />
        </div>

        <TodoList
          todos={visibleData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onClick={this.addItem} />
      </div>
    );
  }
}
