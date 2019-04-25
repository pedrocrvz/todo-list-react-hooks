import React, { useContext } from "react";
import { TOGGLE_TODO, REMOVE_TODO } from "../reducers/ToDoReducer";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoItem = ({ id, completed, text }) => {

  const { dispatch } = useContext(ToDoContext);

  return (
    <li className="todo-item"
      onClick={() =>
        dispatch({
          type: TOGGLE_TODO,
          payload: { id, completed: !completed }
        })
      }
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none",
        fontStyle: completed ? "italic" : "normal",
        color: completed ? "#cbcbcb" : "#000000"
      }}
    >
    
      {text}

      <button onClick={() =>
        dispatch({
          type: REMOVE_TODO,
          payload: { id}
        })
      }
      className="btn btn-outline-danger" 
      style={{ 
        padding: ".25rem .4rem",
        fontSize: ".875rem",
        lineHeight: ".5",
        borderRadius: ".2rem",
        display: "inline-block",
        float: "right",
        marginBottom: "5px"
      }}> 
      <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};


export default ToDoItem;