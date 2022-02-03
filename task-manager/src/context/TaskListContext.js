import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext=createContext();

const TaskListContextProvider =(props) => {
    
    const [tasks, setTasks]=useState(
        [
            {title: 'read the book', id:1},
            {title: 'Wash Utensils', id:2},
            {title: 'write some code', id:3}
        ]
    );
    const [editItem, setItem]=useState(null);
    const findItem=id=> {
        const item=tasks.find(task=>tasks.id===id)
        setItem(item)

    }
    const editTask= (title, id) => {
        const newTasks=tasks.map(task=> (task.id===id? {title, id} : task));
        setTasks(newTasks)
    }

    const addTask =(title) => {
        setTasks([...tasks, {title, id: uuidv4() } ])
    }
    const deleteTask =(id) => {
        setTasks(tasks.filter(task=>task.id!==id))
    }
    const clearList= ()=> {
        setTasks([])
    }
    return <TaskListContext.Provider value={{tasks, addTask, deleteTask, clearList,findItem, editItem, editTask}}>
        {props.children}
    </TaskListContext.Provider>

}

export default TaskListContextProvider;