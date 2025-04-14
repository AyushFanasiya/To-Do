import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar'
function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">📝 My To-Do App</h1>
        <TaskForm />
        <FilterBar />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
