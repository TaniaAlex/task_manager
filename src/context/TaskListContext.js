import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  // use array destructuring to bring data (array of objects) and function _setTasks_ to update and modify data
  const [tasks, setTasks] = useState([
    { title: "Make a dinner", id: "fk" },
    { title: "Learn Data Structure", id: "dk" },
    { title: "Read a book", id: "ls" },
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
