import React,{useState} from "react";

function NewTaskForm({add, category}) {
const [cat,setCat] = useState("Code")
const [text,setText] = useState("")

function submit(event){
  event.preventDefault()
  add({text, cat})
  setText("")
  setCat("Code")
}

  const listCat = category.map((cat) => cat === "All"? null :<option key = {cat}>{cat}</option>)
  return (
    <form className="new-task-form" onSubmit ={submit}>
      <label>
        Details
        <input type="text" name="text" value ={text} onChange = {event => setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value = {cat} onChange={(event)=> setCat(event.target.value)}>
          {listCat}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
