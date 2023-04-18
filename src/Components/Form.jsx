import React, { useContext, useState } from 'react'
import { taskBoardContext } from './Main'
import { v4 as uuid } from 'uuid';

const Form = () => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8)
    const { taskBoardData, setTaskBoardData,categories} = useContext(taskBoardContext)
    const [taskInput, setTaskInput] = useState('')
    const handleInput = (e) => {
        setTaskInput(e.target.value);
    }
    const handleSubmit = () => {
        if(taskInput)
    //    setTaskBoardData(
    //       [...taskBoardData,{id:small_id,category:"pending",task:taskInput}]
    //    )

    setTaskBoardData((pre)=>{
       return( [...pre,{id:small_id,category:categories[0],task:taskInput}])
    })
       setTaskInput("");
       
    }
    return (
        <>
            <div id="taskForm">
                <h3>Add New Task</h3>
                <div className="formField">
                    <input value={taskInput} onChange={handleInput} type="text" className="taskInput" />
                    <button onClick={handleSubmit} className="taskSubmit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Form
