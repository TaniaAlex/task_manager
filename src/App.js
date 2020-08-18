import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <Form />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
