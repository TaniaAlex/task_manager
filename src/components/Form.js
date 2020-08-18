import React from "react";

const Form = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add a task..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button type="submit" className="btn clear-btn">
          Clear all
        </button>
      </div>
    </form>
  );
};

export default Form;
