import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const linkBase =
  'block px-3 py-2 rounded-md text-sm font-medium transition duration-200';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Title */}
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
              🌟 Customer Portal
            </span>
          </div>

          {/* Desktop Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? 'bg-white text-purple-600 shadow'
                    : 'text-white hover:bg-white hover:text-purple-600'
                }`
              }
            >
              Welcome
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? 'bg-white text-purple-600 shadow'
                    : 'text-white hover:bg-white hover:text-purple-600'
                }`
              }
            >
              Add
            </NavLink>
            <NavLink
              to="/view"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? 'bg-white text-purple-600 shadow'
                    : 'text-white hover:bg-white hover:text-purple-600'
                }`
              }
            >
              View
            </NavLink>
            <NavLink
              to="/search-by-id"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? 'bg-white text-purple-600 shadow'
                    : 'text-white hover:bg-white hover:text-purple-600'
                }`
              }
            >
              Search ID
            </NavLink>
            <NavLink
              to="/search-by-mob"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? 'bg-white text-purple-600 shadow'
                    : 'text-white hover:bg-white hover:text-purple-600'
                }`
              }
            >
              Search Mob
            </NavLink>
            <NavLink
              to="/delete"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? 'bg-white text-purple-600 shadow'
                    : 'text-white hover:bg-white hover:text-purple-600'
                }`
              }
            >
              Delete
            </NavLink>
          </div>

          {/* Hamburger Menu Button - Visible on mobile, positioned on right */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Slides down from top */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg border-t border-white/20 z-50">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-white hover:bg-white hover:text-purple-600'
                  }`
                }
              >
                Welcome
              </NavLink>
              <NavLink
                to="/add"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-white hover:bg-white hover:text-purple-600'
                  }`
                }
              >
                Add
              </NavLink>
              <NavLink
                to="/view"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-white hover:bg-white hover:text-purple-600'
                  }`
                }
              >
                View
              </NavLink>
              <NavLink
                to="/search-by-id"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-white hover:bg-white hover:text-purple-600'
                  }`
                }
              >
                Search ID
              </NavLink>
              <NavLink
                to="/search-by-mob"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-white hover:bg-white hover:text-purple-600'
                  }`
                }
              >
                Search Mob
              </NavLink>
              <NavLink
                to="/delete"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-white text-purple-600 shadow'
                      : 'text-white hover:bg-white hover:text-purple-600'
                  }`
                }
              >
                Delete
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;