import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

export const TaskForm = () => {

    const {addTask, clearList, editItem, editTask}=useContext(TaskListContext)
    const [title, setTitle]=useState('')
    const handleSubmit=(e)=> {e.preventDefault();
        if (editItem===null) {
            addTask(title);
            setTitle(' ');
        } else {
            editTask(title, editTask)
        }
  }
  
  const handleChange=(e)=> {setTitle(e.target.value)}
  useEffect(()=> {
    if(editItem!==null) {
        setTitle(editItem.title)
    } else {
        setTitle(" ")
    };
    }, [editItem])
  return <form className='form' onSubmit={handleSubmit}>
      <input onChange={handleChange}
       type='text' 
       className='task-input' 
       placeholder='Type Task'
       value={title}
       required/>
      <div className='buttons'>
          <button type='submit' className='btn add-task-btn'>Add Task</button>
          <button onClick={()=> {
              clearList()
          }} className='btn clear-btn'>Clear</button>
      </div>
  </form>;
};
