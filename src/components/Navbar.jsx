import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
      isActive
        ? darkMode
          ? 'bg-yellow-400 text-gray-900 shadow-md'
          : 'bg-white text-yellow-600 shadow-md'
        : darkMode
        ? 'text-yellow-300 hover:bg-yellow-700/40 hover:backdrop-blur-sm'
        : 'text-white hover:bg-yellow-500/40 hover:backdrop-blur-sm'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 px-8 py-5 shadow-xl flex justify-between items-center transition-colors duration-500 ${
        darkMode
          ? 'bg-gray-900 text-yellow-300'
          : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide">uTodo</h1>

      {/* Links */}
      <ul className="flex gap-4">
        <li>
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={navLinkStyles}>
            User
          </NavLink>
        </li>
      </ul>

      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`ml-6 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow ${
          darkMode
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
            : 'bg-white text-yellow-600 hover:bg-yellow-200'
        }`}
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
}

export default Navbar;
