import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function About() {
  const { darkMode } = useContext(DarkModeContext);

  const containerClass = darkMode
    ? 'min-h-screen bg-gray-900 text-gray-100 font-sans px-4 py-10 transition-colors duration-500'
    : 'min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 font-sans px-4 py-10 transition-colors duration-500';

  const cardClass = darkMode
    ? 'bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-10'
    : 'bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10';

  const featureCardClass = darkMode
    ? 'p-5 bg-gray-700 rounded-xl shadow hover:shadow-md transition-all text-gray-100'
    : 'p-5 bg-yellow-100 rounded-xl shadow hover:shadow-md transition-all text-gray-800';

  const highlightTextClass = darkMode
    ? 'font-medium text-yellow-400'
    : 'font-medium text-yellow-500';

  return (
    <div className={containerClass}>
      <div className={`max-w-4xl mx-auto ${cardClass}`}>
        <h1 className="text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-6 text-center">
          About uTodo
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          <strong>uTodo</strong> is a modern, minimal, and efficient todo application designed for simplicity and productivity.
          It helps you keep track of your tasks with a clean interface, smooth animations, and lightning-fast performance —
          all built using <span className={highlightTextClass}>React</span> and <span className={highlightTextClass}>Tailwind CSS</span>.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether you’re managing your daily tasks, work projects, or just simple reminders, uTodo makes it effortless.
          You can create, edit, complete, and delete tasks — and everything is saved in your browser automatically using local storage.
        </p>

        {/* Feature Highlights */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className={featureCardClass}>
            <h3 className="font-semibold text-lg mb-2 text-yellow-500 dark:text-yellow-300">🧠 Simple & Intuitive</h3>
            <p className="text-sm">
              Zero learning curve. Just open and start writing your todos.
            </p>
          </div>
          <div className={featureCardClass}>
            <h3 className="font-semibold text-lg mb-2 text-yellow-500 dark:text-yellow-300">⚡ Fast Performance</h3>
            <p className="text-sm">
              Built with React, it’s snappy and responsive even on low-end devices.
            </p>
          </div>
          <div className={featureCardClass}>
            <h3 className="font-semibold text-lg mb-2 text-yellow-500 dark:text-yellow-300">💾 Auto Save</h3>
            <p className="text-sm">
              Your tasks are saved in local storage. No login required.
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-center text-sm mt-10 italic text-gray-500 dark:text-gray-400">
          Designed with ❤️ by a passionate developer for people who love simplicity.
        </p>
      </div>
    </div>
  );
}

export default About;
