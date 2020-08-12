//action types
export const TO_DO_ADD = "TO_DO_ADD";
export const TO_DO_LOAD = "TO_DO_LOAD";
export const TO_DELETE_ALL = "TO_DELETE_ALL";
export const TO_DO_DELETE = "TO_DO_DELETE";

export function initaliseToDos(initalToDos) {
  return { type: TO_DO_ADD, initalToDos };
}

export function toDoAdd(toDo) {
  return { type: TO_DO_ADD, toDo };
}

export function toDoDelete(toDoId) {
  return { type: TO_DO_DELETE, toDoId };
}
export function toDeleteAll() {
  return { type: TO_DELETE_ALL };
}
