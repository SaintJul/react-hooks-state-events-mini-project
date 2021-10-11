import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTsk}) {
  const list = tasks.map((task) =>(
    <Task
    key = {task.text}
    txt = {task.text}
    category = {task.category}
    deleteTsk = {deleteTsk}
    />
  ))
  return (
    <div className="tasks">
      {list}
    </div>
  );
}

export default TaskList;
