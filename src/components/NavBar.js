import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays } from 'lucide-react';

/**
 * A simple navigation bar with links to the Insights and Tracker pages. The
 * active link is highlighted using Tailwind classes. Icons from lucide‑react
 * provide visual cues for each link.
 */
const NavBar = () => {
  const location = useLocation();
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-indigo-600">
          BELT Tracker
        </Link>
        <nav className="space-x-6">
          <Link
            to="/insights"
            className={
              'inline-flex items-center space-x-1 ' +
              (location.pathname === '/insights' || location.pathname === '/' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600')
            }
          >
            <Home size={18} />
            <span>Insights</span>
          </Link>
          <Link
            to="/tracker"
            className={
              'inline-flex items-center space-x-1 ' +
              (location.pathname === '/tracker' ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-600')
            }
          >
            <CalendarDays size={18} />
            <span>Tracker</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
