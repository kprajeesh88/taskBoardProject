import React, { createContext, useState } from 'react'
import Form from './Form'
import TaskBoard from './TaskBoard'
import data from '../data'

export  const taskBoardContext = createContext()
const Main = () => {

    const [taskBoardData, setTaskBoardData] = useState(data.tasks)
    const [categories,setCategories]= useState(data.categories)
    

    return (
        <>
            <taskBoardContext.Provider value={{taskBoardData,setTaskBoardData,categories}}>
                <Form/>
                <TaskBoard />
            </taskBoardContext.Provider>
        </>
    )
}

export default Main
