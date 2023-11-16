// for adding task 

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

import React from 'react'

const Task = () => {

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    function addNewTask() {
        const task = inputRef.current.value.trim();
        if(task !== ""){
            // addTodo action is dispatched to the Redux store.
            dispatch(addTodo(task));
            inputRef.current.value = "";
        }
    }

  return (
    <div>
        <div className="task-component">
            <div className="add-task">
                <input
                type="text"
                placeholder="Add Task Here"
                ref={inputRef}
                className="taskInput"
                />
                <button onClick={addNewTask}>Add Task</button>
            </div>
        </div>
    </div>
  )
}

export default Task