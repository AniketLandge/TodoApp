import { useState } from 'react';
export default function Add({ onAdd }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("You can't submit an empty task!");
      return;
    }
    onAdd({ task, description });
    setTask('');
    setDescription('');
  };
  return (
    <div>
      <h2>Add Task</h2>
      <form className="add-form">
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            value={task}
            placeholder="Add Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn btn-block" onClick={submit}>
          Save task
        </button>
      </form>
    </div>
  );
}