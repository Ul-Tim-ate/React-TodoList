import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";
import "./app.css";
import { useState } from "react";
import { ITodoListItem } from "../todo-list-item/todo-list-item";
import { Status } from "../item-status-filter/item-status-filter";

export const App = () => {
  let maxId = 100;
  const createTodoItem = (label: string): ITodoListItem => {
    return {
      label,
      important: false,
      done: false,
      id: maxId++,
    };
  };
  const [status, setStatus] = useState<Status>(Status.all);
  const [todoData, setTodoData] = useState<ITodoListItem[]>([
    createTodoItem("Drink Coffee"),
    createTodoItem("Make Awesome App"),
    createTodoItem("Have a lunch"),
  ]);
  const [term, setTerm] = useState<string>("");
  const deleteItem = (id: number) => {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return newArray;
    });
  };
  const addItem = (newElement: string) => {
    setTodoData(() => {
      const newArray = [...todoData, createTodoItem(newElement)];
      return newArray;
    });
  };
  const toggleProperty = (arr: ITodoListItem[], id: number, propName: keyof ITodoListItem) => {
    const idx = arr.findIndex((el: ITodoListItem) => el.id === id);
    const oldItem: ITodoListItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return newArr;
  };
  const onToggleImportant = (id: number) => {
    setTodoData(() => {
      return toggleProperty(todoData, id, "important");
    });
  };
  const onToggleDone = (id: number) => {
    setTodoData(() => {
      return toggleProperty(todoData, id, "done");
    });
  };
  const changeStatus = (status: Status) => {
    setStatus(() => {
      return status;
    });
  };
  const getDataByStatus = (todoData: ITodoListItem[]) :ITodoListItem[]  =>  {
    if (status === Status.all) {
      return todoData;
    }
    if (status === Status.active) {
      return todoData.filter((el) => !el.done);
    }
    if (status === Status.done) {
      return todoData.filter((el) => el.done);
		}
		return todoData;
  };
  const searchTodo = () :ITodoListItem[] => {
    if (term === "") {
      return todoData;
    }
    return todoData.filter(
      (el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
  };
  const setSearchTerm = (currentTerm: string) => {
    setTerm(currentTerm);
  };
  const visibleData :ITodoListItem[]  = getDataByStatus(searchTodo());
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
