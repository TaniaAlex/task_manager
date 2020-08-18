import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  // use array destructuring to bring data (array of objects) and function _setTasks_ to update and modify data
  const [tasks, setTasks] = useState([
    { title: "Make a dinner", id: "fk" },
    { title: "Learn Data Structure", id: "dk" },
    { title: "Read a book", id: "ls" },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, deleteTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
