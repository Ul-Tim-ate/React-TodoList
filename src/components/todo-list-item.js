import React from "react";

export const TodoListItem = ({ label, important = false }) => {
  const itemStyle = {
    color: important ? "tomato" : "black",
  };
  return <span style={itemStyle}>{label}</span>;
};
