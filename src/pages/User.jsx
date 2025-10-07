import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function User() {
  const { darkMode } = useContext(DarkModeContext);
  const [stats] = useState({
    totalTodos: 18,
    completed: 11,
    active: 7,
  });

  const containerClass = darkMode
    ? 'min-h-screen bg-gray-900 text-gray-100 px-4 py-10 font-sans transition-colors duration-500'
    : 'min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 px-4 py-10 font-sans transition-colors duration-500';

  const cardClass = darkMode
    ? 'bg-gray-800/80 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-8'
    : 'bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-8';

  const statsCardClass = darkMode
    ? 'bg-gray-700 p-4 sm:p-5 rounded-xl shadow hover:shadow-md transition text-gray-100'
    : 'bg-yellow-100 p-4 sm:p-5 rounded-xl shadow hover:shadow-md transition text-yellow-900';

  return (
    <div className={containerClass}>
      <div className={`max-w-4xl mx-auto ${cardClass}`}>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-600 text-center mb-8 sm:mb-10">
          User Profile
        </h1>

        {/* Profile Card */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          {/* Avatar */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-yellow-300 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-inner">
            U
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">Username</h2>
            <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">user@example.com</p>
            <p className="text-sm italic mt-2 dark:text-gray-400">
              "Staying productive, one todo at a time."
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className={statsCardClass}>
            <h3 className="text-base sm:text-lg font-semibold mb-2">📋 Total Todos</h3>
            <p className="text-2xl sm:text-3xl font-bold">{stats.totalTodos}</p>
          </div>
          <div className={statsCardClass}>
            <h3 className="text-base sm:text-lg font-semibold mb-2">✅ Completed</h3>
            <p className="text-2xl sm:text-3xl font-bold">{stats.completed}</p>
          </div>
          <div className={statsCardClass}>
            <h3 className="text-base sm:text-lg font-semibold mb-2">🕒 Active</h3>
            <p className="text-2xl sm:text-3xl font-bold">{stats.active}</p>
          </div>
        </div>

        {/* Settings Card */}
        <div
          className={`p-5 sm:p-6 rounded-xl shadow border ${
            darkMode
              ? 'border-gray-700 bg-gray-800 text-gray-200'
              : 'border-yellow-100 bg-white text-gray-800'
          }`}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Settings</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Dark Mode is now controlled from the navbar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;
