import React, { useContext } from 'react';
import { TaskListContext } from '../context/Tasklistcontext';

export const TaskList = () => {

   const {tasks}=useContext(TaskListContext);
  return <div>
      Task List
  </div>;
};
