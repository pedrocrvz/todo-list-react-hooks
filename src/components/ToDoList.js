import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { VisibilityFilters } from "../reducers/ToDoReducer";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoList = () => {
  const { state } = useContext(ToDoContext);
  const toDos = applyFilter(state);
  return (
    <ul className='todo-list'>
      {toDos.map(toDo => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};

const applyFilter = state => {
  const { filter, toDos } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return toDos;
    case VisibilityFilters.SHOW_COMPLETED:
      return toDos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return toDos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default ToDoList;