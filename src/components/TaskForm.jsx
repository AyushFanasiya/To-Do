import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTaskContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      description,
      status,
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Task</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full mb-3 px-3 py-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="w-full mb-3 px-3 py-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
