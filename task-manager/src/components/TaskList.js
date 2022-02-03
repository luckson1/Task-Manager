import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import {Task} from '../components/Task'

export const TaskList = () => {

   const {tasks}=useContext(TaskListContext);
  return <div>
      {tasks.length ? (
          <ul className='list'>
          {tasks.map((task)=> {
              return < Task task={task} key={task.id}/>
          })}
      </ul>
      ): (
          <div className='no-tasks'>No Task to Display</div>
      ) }
  </div>;
};
