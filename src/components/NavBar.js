import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessibilityMenuOpen, setIsAccessibilityMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication state on mount and when location changes
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
    } else {
      setIsLoggedIn(false);
      setUserRole('');
    }
  }, [location]); // Re-run when location changes

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole('');
    navigate('/login');
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EmpowerJobs</Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link 
            to="/jobs" 
            className="hover:text-blue-200"
            onClick={(e) => handleNavigation(e, '/jobs')}
          >
            Find Jobs
          </Link>
          <Link 
            to="/training" 
            className="hover:text-blue-200"
            onClick={(e) => handleNavigation(e, '/training')}
          >
            Training
          </Link>
          <Link 
            to="/profile" 
            className="hover:text-blue-200"
            onClick={(e) => handleNavigation(e, '/profile')}
          >
            My Profile
          </Link>
          {userRole === 'employer' && (
            <Link 
              to="/employer" 
              className="hover:text-blue-200"
              onClick={(e) => handleNavigation(e, '/employer')}
            >
              For Employers
            </Link>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-blue-200">Login</Link>
              <Link to="/login?tab=signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm">Welcome, {JSON.parse(localStorage.getItem('user'))?.name}</span>
              <button 
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
              >
                Logout
              </button>
            </>
          )}
          
          <button 
            aria-label="Accessibility Options" 
            className="bg-blue-700 p-2 rounded-full"
            onClick={() => setIsAccessibilityMenuOpen(!isAccessibilityMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4l2 2"></path>
            </svg>
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container mx-auto mt-4 p-4 bg-blue-700 rounded-lg md:hidden">
          <Link to="/" className="block py-2 hover:text-blue-200">Home</Link>
          <Link 
            to="/jobs" 
            className="block py-2 hover:text-blue-200"
            onClick={(e) => handleNavigation(e, '/jobs')}
          >
            Find Jobs
          </Link>
          <Link 
            to="/training" 
            className="block py-2 hover:text-blue-200"
            onClick={(e) => handleNavigation(e, '/training')}
          >
            Training
          </Link>
          <Link 
            to="/profile" 
            className="block py-2 hover:text-blue-200"
            onClick={(e) => handleNavigation(e, '/profile')}
          >
            My Profile
          </Link>
          {userRole === 'employer' && (
            <Link 
              to="/employer" 
              className="block py-2 hover:text-blue-200"
              onClick={(e) => handleNavigation(e, '/employer')}
            >
              For Employers
            </Link>
          )}
        </div>
      )}
      
      {isAccessibilityMenuOpen && (
        <div className="absolute right-4 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg p-4">
          <h3 className="font-bold mb-2">Accessibility Options</h3>
          <div className="mb-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              High Contrast
            </label>
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Larger Text
            </label>
          </div>
          <div className="mb-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Screen Reader Mode
            </label>
          </div>
          <Link to="/accessibility" className="text-blue-600 block mt-2">
            More Accessibility Options
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;