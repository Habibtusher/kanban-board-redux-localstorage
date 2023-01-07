import {loadTODo } from "../todos/actions"


const fetchTodo = async (dispatch) =>{
const todos = JSON.parse(localStorage.getItem('todos'));


dispatch(loadTODo(todos))
}
export default fetchTodo;