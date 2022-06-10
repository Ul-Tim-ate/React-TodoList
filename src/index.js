import React from "react";
import { createRoot } from "react-dom/client";
import { AppHeader } from "./components/app-header";
import { TodoList } from "./components/todo-list";
import { SearchPanel } from "./components/search-panel";

const App = () => {
  const todoData = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Build React App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todoList={todoData} />
    </div>
  );
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
