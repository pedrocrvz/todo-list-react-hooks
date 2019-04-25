export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHANGE_FILTER = "CHANGE_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const toDoReducer = (state, action) => {
  switch (action.type) {

    case CHANGE_FILTER:
    return { ...state, filter: action.payload };

    case TOGGLE_TODO: {
      const toDos = state.toDos.map(toDo =>
        toDo.id === action.payload.id ? { ...toDo, ...action.payload } : toDo
      );
      return { ...state, toDos };
    }

    case ADD_TODO: {
      const toDos = [...state.toDos, action.payload];
      return { ...state, toDos };
    }

    case REMOVE_TODO: {
      const toDos = state.toDos.filter((toDo) => toDo.id !== action.payload.id);
      return { ...state, toDos};
    }

    default:
      return state;
  }
};

export default toDoReducer;