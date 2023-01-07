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
