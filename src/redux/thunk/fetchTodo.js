import {loadTODo } from "../todos/actions"


const fetchTodo = async (dispatch) =>{
const todos = JSON.parse(localStorage.getItem('todos'));
console.log("🚀 ~ file: fetchTodo.js:6 ~ fetchTodo ~ todos", todos)

dispatch(loadTODo(todos))
}
export default fetchTodo;