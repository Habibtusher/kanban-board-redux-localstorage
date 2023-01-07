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
    //  if(state?.length) {
    //   return [
    //     ...state,
    //      {
    //        id: nextTodoId(state),
    //        name: action.payload,
    //        progress: "todo",
    //      },
    //    ];
    //  }
    //  else{
    //    return [
    //      {
    //        id: 1,
    //        name: action.payload,
    //        progress: "todo",
    //      },
    //    ];

    //  }
    //! without localstorage

    case CHANGESTATUS:
     
      return action.payload;
         //! without localstorage
      // const { todoId, destination } = action.payload;
      // console.log("🚀 ~ file: reducer.js:23 ~ reducer ~ id", todoId);
      // return state.map((todo) => {
      //   if (todo.id != todoId) {
      //     return todo;
      //   } else {
      //     let newProgress = "done";
      //     if (destination == 1) {
      //       newProgress = "todo";
      //     } else if (destination == 2) {
      //       newProgress = "inprogress";
      //     } else if (destination == 3) {
      //       newProgress = "done";
      //     }
      //     return {
      //       ...todo,
      //       progress: newProgress,
      //     };
      //   }
      // });
         //! without localstorage
    default:
      return state;
  }
};
export default reducer;
