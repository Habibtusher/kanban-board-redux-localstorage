import {changeStatus, loadTODo } from "../todos/actions"


const updateStatus = (todoId, destination)=>{
    return async (dispatch) =>{
        console.log("🚀 ~ file: updateStatus.js:5 ~ updateStatus ~ todoId, destination", todoId, destination)
        let updatedTodo=[]
        var existing = JSON.parse(localStorage.getItem('todos'));
        console.log("🚀 ~ file: updateStatus.js:7 ~ return ~ existing", existing)
        
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

      localStorage.setItem('todos', JSON.stringify(updatedTodo));

        dispatch(changeStatus(updatedTodo))
        }
}
export default updateStatus;