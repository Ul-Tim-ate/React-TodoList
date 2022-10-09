import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";
import "./app.css";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

export const App = () => {
  let maxId = 100;
  const createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: maxId++,
    };
  };
  const [status, setStatus] = useState("all");
  const [todoData, setTodoData] = useState([
    createTodoItem("Drink Coffee"),
    createTodoItem("Make Awesome App"),
    createTodoItem("Have a lunch"),
  ]);
  const [term, setTerm] = useState("");
  const deleteItem = (id) => {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return newArray;
    });
  };
  const addItem = (newElement) => {
    setTodoData(() => {
      const newArray = [...todoData, createTodoItem(newElement)];
      return newArray;
    });
  };
  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return newArr;
  };
  const onToggleImportant = (id) => {
    setTodoData(() => {
      return toggleProperty(todoData, id, "important");
    });
  };
  const onToggleDone = (id) => {
    setTodoData(() => {
      return toggleProperty(todoData, id, "done");
    });
  };
  const changeStatus = (status) => {
    setStatus(() => {
      return status;
    });
  };
  const getDataByStatus = (todoData) => {
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
  const searchTodo = () => {
    if (term === "") {
      return todoData;
    }
    return todoData.filter(
      (el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
  };
  const setSearchTerm = (currentTerm) => {
    setTerm(currentTerm);
  };
  const visibleData = getDataByStatus(searchTodo(todoData));
  const doneCount = todoData.filter((el) => el.done).length;
  const toDoCount = todoData.length - doneCount;
  return (
    <div className="todo-app">
      <AppHeader toDo={toDoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel setSearchTerm={setSearchTerm} />
        <ItemStatusFilter changeStatus={changeStatus} status={status} />
      </div>

      <TodoList
        todos={visibleData}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <AddItem onClick={addItem} />
    </div>
  );
};
