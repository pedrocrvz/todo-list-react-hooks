import React, { useReducer, createContext } from "react";
import toDoReducer, { VisibilityFilters } from "../reducers/ToDoReducer";

const ToDoContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  toDos: []
};

function ToDoContextProvider(props) {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const value = { state, dispatch };

  return (
    <ToDoContext.Provider value={value}>{props.children}</ToDoContext.Provider>
  );
}
export {ToDoContext, ToDoContextProvider} ;