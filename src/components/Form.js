import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Form = () => {
  // to get access to addTask function => call useContext Hook with argument (TaskListcontext) => use destructuring to grab addTask from Context
  const { addTask, clearAll, editElem, editTask } = useContext(TaskListContext);

  // create a state to store current value of the input field = title
  const [title, setTitle] = useState("");

  // execute addTask function on form submit
  // => setup onSubmit event on form
  // => get input value from the input field with onChange
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editElem) {
      addTask(title);
      // clear input field after submit
      setTitle("");
    } else {
      editTask(title, editElem.id);
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };

  useEffect(() => {
    if (editElem) {
      setTitle(editElem.title);
      //   console.log(editElem);
    } else {
      setTitle("");
    }
  }, [editElem]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add a task..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editElem ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn clear-btn" onClick={clearAll}>
          Clear all
        </button>
      </div>
    </form>
  );
};

export default Form;
