import { combineReducers } from "redux";
import toDoListReducer from "./toDoListReducer";

const reducer = combineReducers({
  toDoList: toDoListReducer,
});

export default reducer;
