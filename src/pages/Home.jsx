import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';

function Home() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const goToApp = () => {
    navigate('/todo-app');
  };

  const containerClass = darkMode
    ? 'min-h-screen bg-gray-900 text-gray-100 font-sans transition-colors duration-500'
    : 'min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 font-sans transition-colors duration-500';

  const cardClass = darkMode
    ? 'bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-gray-100'
    : 'bg-white p-6 rounded-xl shadow hover:shadow-lg transition';

  const textSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={containerClass}>
      {/* Navbar */}
      <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">uTodo</h1>
        <button
          onClick={goToApp}
          className="bg-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-yellow-600 transition-all duration-300"
        >
          Open App
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 mt-10">
        <h2 className="text-5xl font-extrabold mb-4 leading-tight">
          Your Productivity, <br className="hidden md:block" />
          All in One Place
        </h2>
        <p className={`text-lg max-w-xl mb-8 ${textSecondary}`}>
          uTodo is a modern, minimal, and blazing fast todo app. Keep track of your tasks effortlessly.
        </p>
        <button
          onClick={goToApp}
          className="bg-yellow-500 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:bg-yellow-600 transition-all duration-300"
        >
          Get Started
        </button>
      </main>

      {/* Features Section */}
      <section className="mt-20 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Why uTodo?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cardClass}>
            <h4 className="text-xl font-semibold mb-2">Fast & Simple</h4>
            <p className={`text-sm ${textSecondary}`}>
              Just open and start adding your tasks. No clutter, no distractions.
            </p>
          </div>
          <div className={cardClass}>
            <h4 className="text-xl font-semibold mb-2">Auto Save</h4>
            <p className={`text-sm ${textSecondary}`}>
              Your todos are saved in your browser automatically. Zero setup needed.
            </p>
          </div>
          <div className={cardClass}>
            <h4 className="text-xl font-semibold mb-2">Modern Design</h4>
            <p className={`text-sm ${textSecondary}`}>
              Built with TailwindCSS and React, it's smooth and responsive.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-20 text-center text-sm py-6 ${textSecondary}`}>
        &copy; {new Date().getFullYear()} uTodo. Built with ❤️ using React + TailwindCSS.
      </footer>
    </div>
  );
}

export default Home;
