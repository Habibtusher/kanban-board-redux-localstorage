import initialState from "../initialState";
import { ADDTODO, CHANGESTATUS, LOADEDATA } from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos?.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADEDATA:
      return action.payload;

    case ADDTODO:
      return action.payload;
   
    //! without localstorage

    case CHANGESTATUS:
     
      return action.payload;
       
    default:
      return state;
  }
};
export default reducer;
