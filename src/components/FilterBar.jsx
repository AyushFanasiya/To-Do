// src/components/FilterBar.jsx
import { useTaskContext } from '../context/TaskContext';

const FilterBar = () => {
  const { setFilter } = useTaskContext();

  const filters = ['All', 'Pending', 'Completed'];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
