import React, { FC } from "react";
import "./app-header.css";

interface AppHeaderProps{
	toDo: number;
	done: number;
}



const AppHeader: FC<AppHeaderProps> = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
