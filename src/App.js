import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function handleUpdateTitle(taskId, newTitle) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <Input onAddTask={handleAddTask} />
      <List
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTitle={handleUpdateTitle}
      />
    </div>
  );
}

export default App;
