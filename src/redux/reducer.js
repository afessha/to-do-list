import { TO_DO_LOAD, TO_DO_ADD, TO_DO_DELETE } from "./actions";

const INITAL_TODOS = [];

function reducer(state = INITAL_TODOS, action) {
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
    default:
      return state;
  }
}

export default reducer;
