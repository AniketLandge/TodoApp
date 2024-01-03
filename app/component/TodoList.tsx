import { useState } from 'react';
import Add from './Add';
export default function Index() {
  const [AddSection, setAddSection] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, task: 'First task', description: 'Description 1',  },
    { id: 2, task: 'Second task', description: 'Description 2',},
  ]);
  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };
  // Toggle add section
  const toggleShow = () => {
    setAddSection(!AddSection);
  };
  return (
    <div className="container">
      <header className="header">
        <h1>Todo Application</h1>
        <button
          className="btn"
          style={
            AddSection
              ? { backgroundColor: 'red' }
              : { backgroundColor: 'green' }
          }
          onClick={toggleShow}
        >
          {AddSection ? 'Close' : 'Add'}
        </button>
      </header>
      {AddSection && <Add onAdd={addTask} />}
      {tasks.length > 0 ? (
        <div className="task-section">
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <h3 className="task-title">{task.task}</h3>
              <p className="task-description">{task.description}</p>
              <button
                className="delete-icon btn-delete"
                onClick={() => deleteTask(task.id)}
              >
               Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>Oops you have no task :(</h1>
      )}
    </div>
  );
}