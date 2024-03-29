/* eslint-disable array-callback-return */
import { changeStatus, loadTODo } from "../todos/actions"


const updateStatus = (todoId, destination, destIn) => {
  return async (dispatch) => {

    let updatedTodo = []
    var existing = JSON.parse(localStorage.getItem('todos'));


    existing.map((todo) => {
      if (todo.id != todoId) {
        updatedTodo.push(todo)

      } else {
        let newProgress;
        if (destination == 1) {
          newProgress = "todo";
        } else if (destination == 2) {
          newProgress = "inprogress";
        } else if (destination == 3) {
          newProgress = "done";
        }

        updatedTodo.push({
          ...todo,
          progress: newProgress,
        });
      }
    });
    const objectToMove = updatedTodo.find(item => item.id == todoId);

    if (objectToMove) {
      const currentIndex = updatedTodo.indexOf(objectToMove);
      if (currentIndex > -1) {
        updatedTodo.splice(currentIndex, 1);
      }

      updatedTodo.splice(destIn, 0, objectToMove);
    }


    localStorage.setItem('todos', JSON.stringify(updatedTodo));

    dispatch(changeStatus(updatedTodo))
  }
}
export default updateStatus;