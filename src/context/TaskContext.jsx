// src/context/TaskContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();
const API_URL = 'https://crudcrud.com/api/fa0b21ddc880413e8a508785a68c1034/tasks';

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(null)

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try{
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTasks(data);
    } catch(error){
        setError(error.message);
    } finally {
        setLoading(false);
    }
  };

  const addTask = async (task) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  const updateTask = async (id, updatedTask) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks: filteredTasks,
      addTask,
      deleteTask,
      updateTask,
      setFilter,
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
