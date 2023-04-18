import React, { useContext } from 'react'
import { taskBoardContext } from './Main'

const  Pending = () => {

    const { taskBoardData, setTaskBoardData,categories} = useContext(taskBoardContext)
    const handlePending = (id)=>{
         taskBoardData.forEach((element)=>{
                if(element.id === id){
                    element.category=categories[1];
                }
         })
         setTaskBoardData([...taskBoardData])
    }
    return (
        <>
            <div className="taskColumn">
                <div className="columnHeader">
                    <h3>Pending</h3>
                </div>
                <div className="taskItems">
                    {
                        taskBoardData.map((element) => {
                            if (element.category === categories[0]) {
                                return (
                                    <div className="taskItem">
                                        <p>{element.task}</p>
                                        <button onClick={()=>{handlePending(element.id)}} className="taskButton move">Move</button>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Pending
