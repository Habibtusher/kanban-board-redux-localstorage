import { addTodos } from "../todos/actions";
const nextTodoId = (todos) => {
    const maxId = todos?.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  };
const addTodo = (todoText)=>{
  return  async (dispatch) => {
    let newTodo;
    var existing = JSON.parse(localStorage.getItem('todos'));
      if(existing){
          newTodo = [...existing,{id:nextTodoId(existing),name: todoText,progress:"todo"}]
      }
     else{
        newTodo =[{id:1,name: todoText,progress:"todo"}] 
     }
      
        localStorage.setItem('todos', JSON.stringify(newTodo));
               
         dispatch(addTodos(newTodo));
      };
}
export default addTodo;
