import React, { useState } from "react";
import "./TrelloBoard.scss";

const initialCategories = ["To Do", "In Progress", "Done"];

export default function TrelloBoard() {
  const [categories, setCategories] = useState(initialCategories);
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const taskId = Date.now();
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: { text: newTask, category: selectedCategory },
    }));
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      delete updatedTasks[taskId];
      return updatedTasks;
    });
  };

  const startEditTask = (taskId) => {
    setEditTaskId(taskId);
    setEditTaskText(tasks[taskId].text);
  };

  const saveEditTask = () => {
    if (editTaskText.trim() === "") return;

    setTasks((prevTasks) => ({
      ...prevTasks,
      [editTaskId]: { ...prevTasks[editTaskId], text: editTaskText },
    }));
    setEditTaskId(null);
    setEditTaskText("");
  };

  const changeCategory = (taskId, category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: { ...prevTasks[taskId], category },
    }));
  };

  return (
    <div className="trello-board-container">
      <h1>Trello Board</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button onClick={addTask}>Add Task</button>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="board">
        {categories.map((category) => (
          <div key={category} className="category">
            <h2>{category}</h2>
            <ul>
              {Object.entries(tasks)
                .filter(([_, task]) => task.category === category)
                .map(([taskId, task]) => (
                  <li key={taskId}>
                    {editTaskId === taskId ? (
                      <>
                        <input
                          type="text"
                          value={editTaskText}
                          onChange={(e) => setEditTaskText(e.target.value)}
                        />
                        <button onClick={saveEditTask}>Save</button>
                      </>
                    ) : (
                      <>
                        <span>{task.text}</span>
                        <button onClick={() => startEditTask(taskId)}>
                          Edit
                        </button>
                        <button onClick={() => deleteTask(taskId)}>
                          Delete
                        </button>
                        <select
                          value={task.category}
                          onChange={(e) =>
                            changeCategory(taskId, e.target.value)
                          }
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
