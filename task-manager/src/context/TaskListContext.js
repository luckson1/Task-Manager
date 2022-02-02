import { createContext, useState } from "react";

export const TaskListContext=createContext();

const TaskListContextProvider =() => {
    
    const [tasks, setTasks]=useState(
        [
            {task: 'read the book', id:1},
            {task: 'Wash Utensils', id:2},
            {task: 'write some code', id:3}
        ]
    );
    return <div>
            Task List Context
        </div>
}

export default TaskListContextProvider;