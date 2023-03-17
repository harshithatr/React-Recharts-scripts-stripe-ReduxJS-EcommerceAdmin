import React, { useEffect, useState } from 'react'
import CreateTask from '../createtask/CreateTask';
import "./todo.css"

const Todo = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    const [taskremaining, setTaskRemaining] = useState(0)

    useEffect(()=>{
        {setTaskRemaining(tasks.filter(task=> !task.completed).length)}
    })
    const addTask =title=>{
        const newTask =[...tasks, { title, completed: false}]
    setTasks(newTask);
    }

    const handleCompleteTask=idx=>{
const newTasks = [...tasks];
newTasks[idx].completed = !newTasks[idx].completed ;
setTasks(newTasks);
    }
    const handleRemoveTask = idx=>{
        const newTasks = [...tasks];
        newTasks.splice(idx, 1);
        setTasks(newTasks);
    }

  return (
    <div className='todo-container'>
        <div className='todo-header'>TODO - LIST</div>
        <div className='todo-pending'>Tasks Pending: {taskremaining}</div>
        {tasks.map((task, idx)=>(
          <div key={idx}
          className="task"
          style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
          {task.title}
          <button className='btn-complete' onClick={() => handleCompleteTask(idx)}>{task.completed ? "Complete" : "Pending"}</button>
          <button className='btn-remove' onClick={()=> handleRemoveTask(idx)}>X</button>
      </div> 
        )   
        )}
        <div className='create-Task'>
            <CreateTask addTask ={addTask}/>
        </div>
    </div>
  )
}

export default Todo