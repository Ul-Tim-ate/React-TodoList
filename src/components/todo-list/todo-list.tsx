import React, { FC } from "react";
import TodoListItem, { ITodoListItem } from "../todo-list-item/todo-list-item";
import "./todo-list.css";

interface TodoListProps{
	todos: ITodoListItem[];
	onDeleted: (id: number) => void;
	onToggleDone: (id: number) => void;
	onToggleImportant: (id: number) => void;
}


const TodoList: FC<TodoListProps>= ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item: ITodoListItem) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleDone={() => {
            onToggleDone(id);
          }}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
