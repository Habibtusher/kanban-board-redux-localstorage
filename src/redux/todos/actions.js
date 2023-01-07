import { ADDTODO, CHANGEPOSITION, CHANGESTATUS, LOADEDATA } from "./actionTypes";

export const loadTODo = (todos) => {
  return {
    type: LOADEDATA,
    payload: todos,
  };
}; //
export const addTodos = (todoText) => {
  return {
    type: ADDTODO,
    payload: todoText,
  };
};
export const changeStatus = (todos) => {

  return {
    type: CHANGESTATUS,
    payload: todos
  };
};
//! without localstorage
// export const changeStatus = (destination,todoId) => {
//   console.log("🚀 ~ file: actions.js:10 ~ changeStatus ~ id", todoId)
//   return {
//     type: CHANGESTATUS,
//     payload: {todoId, destination,}};
// };
//! without localstorage
export const changePosition = (sourceIndex, destinationIndex, id) => {
  return {
    type: CHANGEPOSITION,
    payload: {
      sourceIndex,
      destinationIndex,
      id,
    },
  };
};
