import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] =useState(TASKS)
  const [category, setCategory] = useState("All")

function deleteTask(txt){
  setTask(task.filter((tas) => tas.text !== txt))
}

function addTask(tsk){
  setTask([...task,tsk])
}





  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category = {CATEGORIES} selectedCategory = {category} onSelectedCategory ={setCategory} />
      <NewTaskForm category= {CATEGORIES} add = {addTask}/>
      <TaskList deleteTsk = {deleteTask} tasks = {TASKS} />
    </div>
  );
}

export default App;
