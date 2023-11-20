import React from "react";
import {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

const [detailsState, setDetailsState] = useState("")
const [categoryState, setCategoryState] = useState("")

function handleChange(e) {
  setDetailsState(e.target.value)
}

function handleCategoryChange(e) {
  setCategoryState(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
  const formData = {
    text: detailsState,
    category: categoryState
  }
  console.log(formData)
  onTaskFormSubmit(formData)
  setCategoryState("")
  setDetailsState("")
}

const categoryOptions = categories.filter((category) => (category !== "All"))

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={detailsState} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} value={categoryState} name="category">
          {categoryOptions.map((category, index) => (<option key={index}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
