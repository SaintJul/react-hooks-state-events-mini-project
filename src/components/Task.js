import React from "react"

function Task({ txt, category, deleteTsk}) { 

  function deleter(){
    deleteTsk(txt)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{txt}</div>
      <button className="delete" onClick = {deleter}>X</button>
    </div>
  );
}

export default Task;
