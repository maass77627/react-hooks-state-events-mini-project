import React from "react";
//import { v4 as uuid } from "uuid";

function Task({text, category, allTasks}) {

  function handleClick(e) {
    console.log(allTasks)
    const removedTasks = allTasks.filter((task) => (task !== e.target.parentNode))
    console.log(e.target.parentNode)
    console.log(removedTasks)
  }
  return (
    <div  className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
