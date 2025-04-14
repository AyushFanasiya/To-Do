// src/components/TaskItem.jsx
import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, updateTask } = useTaskContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleSave = () => {
    const updated = {
      ...task,
      title: editedTitle,
      status: editedStatus,
    };
    updateTask(task._id, updated);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2">
      <div className="flex-1">
        {isEditing ? (
          <>
            <input
              className="border px-2 py-1 w-full mb-2"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <select
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
              className="border px-2 py-1 w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <span
              className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                task.status === 'Completed'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-yellow-200 text-yellow-800'
              }`}
            >
              {task.status}
            </span>
          </>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="text-green-600 hover:underline"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="text-blue-600 hover:underline"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="text-red-600 hover:underline"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
