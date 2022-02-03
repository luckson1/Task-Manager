import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

export const TaskForm = () => {

    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
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
