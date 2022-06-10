import React from "react";
import { TodoListItem } from "./todo-list-item";

export const TodoList = ({ todoList }) => {
	const elements = todoList.map((item) => {
		const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
