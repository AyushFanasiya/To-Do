// src/components/TaskList.jsx
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, loading, error } = useTaskContext();
  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  
  return (
    <div className="w-full max-w-md space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks to display.</p>
      ) : (
        tasks.map((task) => <TaskItem key={task._id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
