import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addTodo from './redux/thunk/addTodo';
import { addTodos } from './redux/todos/actions';

const AddNewTask = () => {
    const [input,setInput] =useState();
const dispatch = useDispatch()
    const handleInput = (e) => {
        setInput(e.target.value);

    };
    const handleAdd = () => {
        dispatch(addTodo(input))
            //! without local storage
    //    dispatch(addTodos(input));
        //! without local storage
       setInput('');
       

    };
    return (
        <div>
             <div className="input-div">
        <input onChange={handleInput} value={input} placeholder="write your task" type="text" />
        <button onClick={()=>handleAdd()}>Add</button>
      </div>
        </div>
    );
};

export default AddNewTask;