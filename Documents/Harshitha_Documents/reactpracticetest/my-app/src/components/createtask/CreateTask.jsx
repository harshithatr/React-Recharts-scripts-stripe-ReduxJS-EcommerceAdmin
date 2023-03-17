import React, { useState } from 'react'

const CreateTask = ({addTask}) => {
    const [value, setValue] = useState('')

    const handleClick = (e) =>{
        e.preventDefault();
        if(!value)return;
        addTask(value);
        setValue('');
    }
   
  return (
   <div>
    <input type='text' placeholder='Add new task' onChange={e=>setValue(e.target.value)}></input>
    <button onClick={handleClick}>Create New task</button>
   </div>
  )
}

export default CreateTask