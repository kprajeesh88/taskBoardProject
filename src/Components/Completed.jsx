import React, { useContext } from "react";
import { taskBoardContext } from "./Main";

const Completed = () => {
  const { taskBoardData, setTaskBoardData, categories } =
    useContext(taskBoardContext);
  const handleCompleted = (id) => {
    const newArray = taskBoardData.filter((element) => {
      return element.id !== id;
    });
    setTaskBoardData(newArray);
  };
  return (
    <>
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Completed</h3>
        </div>
        <div className="taskItems">
          {taskBoardData.map((element) => {
            if (element.category === categories[2]) {
              return (
                <div className="taskItem">
                  <p>{element.task}</p>
                  <button
                    onClick={() => {
                      handleCompleted(element.id);
                    }}
                    className="taskButton delete"
                  >
                    Delete
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Completed;
