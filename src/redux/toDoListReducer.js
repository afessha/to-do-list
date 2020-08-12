import { TO_DO_LOAD, TO_DO_ADD, TO_DO_DELETE, TO_DELETE_ALL } from "./actions";

const INITAL_TODOS = [];

function toDoListReducer(state = INITAL_TODOS, action) {
  switch (action.type) {
    case TO_DO_LOAD:
      return [...state, action.initalToDos];
    case TO_DO_ADD:
      return [...state, action.toDo];
    // case TO_DO_DELETE:
    //     return state.map((toDo) => {
    //         if (toDo.id === action.toDoId) {
    //             return {
    //                 ...booking,
    //                 status: action.value,
    //             };
    //         } else return toDo;
    //     });
    case TO_DELETE_ALL:
      return state.splice(0, state.length);
    default:
      return state;
  }
}

export default toDoListReducer;
