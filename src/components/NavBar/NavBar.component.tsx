import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      isActive(path)
        ? "bg-blue-500 text-white shadow-lg"
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-200">
                <span className="text-white font-bold text-lg">🏒</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                NHL Stats
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
              <Link to="/single-team" className={linkClass("/single-team")}>
                Single Team
              </Link>
              <Link to="/compare-teams" className={linkClass("/compare-teams")}>
                Compare Teams
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors duration-200"
            >
              <svg
                className={`h-6 w-6 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 pt-3 pb-4 space-y-2">
            <Link
              to="/"
              className={`block ${linkClass("/")} w-full text-left`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/single-team"
              className={`block ${linkClass("/single-team")} w-full text-left`}
              onClick={closeMenu}
            >
              Single Team
            </Link>
            <Link
              to="/compare-teams"
              className={`block ${linkClass("/compare-teams")} w-full text-left`}
              onClick={closeMenu}
            >
              Compare Teams
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}