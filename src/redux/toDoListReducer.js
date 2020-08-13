import { TO_DO_LOAD, TO_DO_ADD, TO_DO_DELETE, TO_DELETE_ALL } from "./actions";

const INITAL_TODOS = [];

function toDoListReducer(state = INITAL_TODOS, action) {
  switch (action.type) {
    case TO_DO_LOAD:
      return [...state, action.initalToDos];
    case TO_DO_ADD:
      return [...state, action.toDo];
    case TO_DO_DELETE:
      return state.filter((item) => item !== action.toDo);

    case TO_DELETE_ALL:
      return INITAL_TODOS;
    default:
      return state;
  }
}

export default toDoListReducer;
