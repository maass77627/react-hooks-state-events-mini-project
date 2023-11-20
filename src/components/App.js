import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [taskState, setTaskState] = useState(TASKS)

  function categorySelect(newTasks) {
      setTaskState(newTasks)
  }

  function onTaskFormSubmit(formData){
    setTaskState([...taskState, formData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter allCategories={CATEGORIES} allTasks={taskState}  categorySelect={categorySelect}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList allTasks={taskState}/>
     </div>
  );
}

export default App;
