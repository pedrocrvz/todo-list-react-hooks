import React, { useContext } from "react";
import { VisibilityFilters } from "../reducers/ToDoReducer";
import { ToDoContext } from "../contexts/ToDoContext";
import { CHANGE_FILTER } from "./../reducers/ToDoReducer";

const Buttons= () => {

  const { state, dispatch } = useContext(ToDoContext);

  return (
    <ul className='buttons-list'>

    <button 
            disabled={
                state.filter === VisibilityFilters.SHOW_ALL
            } 
            onClick={
                () => dispatch({type: CHANGE_FILTER, payload: VisibilityFilters.SHOW_ALL})
            } 
            className="btn btn-warning btn-sm"> 

            Show all
        </button>

        <button 
            disabled={
                state.filter === VisibilityFilters.SHOW_ACTIVE
            } 
            onClick={
                () => dispatch({type: CHANGE_FILTER, payload: VisibilityFilters.SHOW_ACTIVE})
            } 
            className="btn btn-warning btn-sm" 
            style={{ marginLeft: "10px", marginRight:"10px" }}> 

            Show actives
        </button>

        <button 
            disabled={
                state.filter === VisibilityFilters.SHOW_COMPLETED
            } 
            onClick={
                () => dispatch({type: CHANGE_FILTER, payload: VisibilityFilters.SHOW_COMPLETED})
            } 
            className="btn btn-warning btn-sm" 
            style={{ marginRight: "30px" }}> 

            Show completed
        </button>

    </ul>
  );
};


export default Buttons;
