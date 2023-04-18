import React, { useContext } from 'react'
import { taskBoardContext } from './Main'

const Ongoing = () => {
    
    const { taskBoardData, setTaskBoardData,categories} = useContext(taskBoardContext)
    const handleOngoing = (id)=>{
         taskBoardData.forEach((element)=>{
                if(element.id === id){
                    element.category=categories[2];
                }
               
         })
         setTaskBoardData([...taskBoardData])
    }
  return (
    <>
      
      <div className="taskColumn">
                <div className="columnHeader">
                    <h3>Ongoing</h3>
                </div>
                <div className="taskItems">
                {
                        taskBoardData.map((element) => {
                            if (element.category === categories[1]) {
                                return (
                                    <div className="taskItem">
                                        <p>{element.task}</p>
                                        <button onClick={()=>{handleOngoing(element.id)}} className="taskButton move">Move</button>
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

export default Ongoing
