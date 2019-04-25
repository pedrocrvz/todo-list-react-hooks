import React, { useContext, useState } from "react";
import { ADD_TODO } from "./../reducers/ToDoReducer";
import { ToDoContext } from "./../contexts/ToDoContext";

const AddToDoItem = () => {

    const { dispatch } = useContext(ToDoContext);
    const [nextToDoId, setIndex] = useState(1);
    const input = useFromInput("");
    const { resetValue, ...inputProp } = input;

    return (
        <div>
            <form
                onSubmit={e => {

                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }

                    dispatch({
                        type: ADD_TODO,
                        payload: {
                            id: nextToDoId,
                            text: input.value
                        }
                    });

                    setIndex(nextToDoId + 1);
                    resetValue();
                }}
                >

                <div className="input-group">
                    <input {...inputProp} placeholder="Add reminder here"/>
                    <span className="input-group-btn">
                        <button className="btn btn-outline-info btn-sm" style={{ marginLeft: "10px" }}> Add </button>
                    </span>
                </div>
                
            </form>
        </div>
    );
  };

  //reusable hook to use input
function useFromInput(initValue = "") {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  const resetValue = newValue => setValue(newValue || initValue);
  return { value, onChange, resetValue };
}

export default AddToDoItem;