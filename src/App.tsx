import { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ]);
  const addTask = (title: string): void => {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
  };
  const editTask = (id: number, newTitle: string | null): void => {
    if (newTitle !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: newTitle } : task
        )
      );
    }
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              className="button"
              onClick={() =>
                editTask(task.id, prompt("Enter new title:", task.title))
              }
            >
              Edit
            </button>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.elements.title.value;
          addTask(title);
          e.target.elements.title.value = "";
        }}
      >
        <input
          className="text"
          type="text"
          name="title"
          placeholder="Enter Task Title"
          required
        />
        <button type="submit">Add Task / Submit</button>
        <div className="link">
          <button className="git">
            <a href="https://github.com/">Git</a>
          </button>
          <button className="net">
            <a href="https://app.netlify.com/teams/lakeshwarmandal/overview">
              Netlify
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
