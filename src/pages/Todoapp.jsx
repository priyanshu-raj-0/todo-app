import { useState, useEffect, useRef, useContext } from 'react';
import uuid from 'uuid-random';
import { DarkModeContext } from '../context/DarkModeContext';

function Todoapp() {
  const { darkMode } = useContext(DarkModeContext);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(true);
  const firstrender = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (firstrender.current) {
      firstrender.current = false;
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const handleSave = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: uuid(), mytodo: todo, isCompleted: false }]);
      setTodo('');
    }
  };

  const handleDelete = (id, ask) => {
    const del = () => setTodos(todos.filter(t => t.id !== id));
    if (ask) {
      const confirmDelete = confirm(`Delete todo: ${todos.find(t => t.id === id)?.mytodo}`);
      if (confirmDelete) del();
    } else {
      del();
    }
  };

  const handleEdit = (id, text) => {
    if (todo === '') {
      handleDelete(id, false);
      setTodo(text);
    } else {
      alert('Please save the current todo before editing another.');
    }
  };

  const handleCompleted = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  // Styling variables
  const pageBg = darkMode ? 'bg-gray-900 text-yellow-200' : 'bg-amber-100 text-gray-800';
  const cardBg = darkMode ? 'bg-gray-800 text-yellow-100' : 'bg-white text-gray-800';
  const inputBg = darkMode ? 'bg-gray-800 text-yellow-200' : 'bg-white';

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${pageBg}`}>
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">uTodo - Manage your tasks</h1>

        {/* Input Field */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            className={`flex-1 px-4 py-2 rounded-md shadow ${inputBg}`}
            placeholder="Enter your todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition text-sm sm:text-base"
            disabled={todo.trim().length < 3}
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        {/* Toggle for Hide Completed */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setHideCompleted(!hideCompleted)}
            className={`px-4 py-1 text-sm font-medium rounded-full border transition-all duration-300 ${
              darkMode
                ? hideCompleted
                  ? 'bg-yellow-600 text-gray-900 border-yellow-500'
                  : 'bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-800'
                : hideCompleted
                ? 'bg-yellow-500 text-white border-yellow-400'
                : 'bg-transparent border-yellow-600 text-yellow-700 hover:bg-yellow-100'
            }`}
          >
            {hideCompleted ? 'Show Completed' : 'Hide Completed'}
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3 pb-16">
          {todos.map((item) => {
            if (hideCompleted && item.isCompleted) return null;

            return (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl shadow-md transition-all duration-300 ${cardBg}`}
              >
                {/* Task and Status */}
                <div className="flex-1 w-full sm:w-auto mb-3 sm:mb-0">
                  <span className={`block text-base sm:text-lg break-words ${item.isCompleted ? 'line-through opacity-60' : ''}`}>
                    {item.mytodo}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 justify-end sm:justify-start w-full sm:w-auto">
                  <button
                    onClick={() => handleCompleted(item.id)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                      item.isCompleted
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                    }`}
                  >
                    {item.isCompleted ? 'Undo' : 'Complete'}
                  </button>

                  <button
                    onClick={() => handleEdit(item.id, item.mytodo)}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id, true)}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todoapp;
