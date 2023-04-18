
import Pending from './Pending'
import Ongoing from './Ongoing'
import Completed from './Completed'


const TaskBoard = () => {
   
   
  return (
    <div  id="taskBoard">
      <Pending/>
      <Ongoing/>
      <Completed/>
    </div>
  )
}

export default TaskBoard
