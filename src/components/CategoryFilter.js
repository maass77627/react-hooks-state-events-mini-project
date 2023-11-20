import React from "react";
//import { v4 as uuid } from "uuid";

function CategoryFilter({allTasks, allCategories, categorySelect}) {

function handleClick(e){
  e.target.class = "selected"
  //console.log(e.target.parentNode.index)
  if (e.target.innerText === "All") {return allTasks}
  const newTasks = allTasks.filter((task) => (task.category === e.target.innerText))
    categorySelect(newTasks)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories.map((category, index) => (<button key={index} onClick={handleClick}>{category}</button>))}
    </div>
  );
}

export default CategoryFilter;
