import React from "react";
import Task from "./Task"
//import { v4 as uuid } from "uuid";

function TaskList({ allTasks }) {

return (
    <div className="tasks">
      
      {allTasks.map((task, index) => { return (
        <Task  key={index} text={task.text} category={task.category} allTasks={allTasks}/>
      )})
      }
    </div>
  );
}

export default TaskList;
