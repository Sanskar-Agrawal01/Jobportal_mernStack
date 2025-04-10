import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EmpowerJobs</h3>
            <p>Connecting people with meaningful work opportunities regardless of skill level or ability.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/jobs" className="hover:text-blue-300">Find Jobs</Link></li>
              <li><Link to="/training" className="hover:text-blue-300">Training Resources</Link></li>
              <li><Link to="/accessibility" className="hover:text-blue-300">Accessibility Help</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-blue-300">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-blue-300">FAQs</Link></li>
              <li><Link to="#" className="hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-blue-300">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Subscribe to Job Alerts</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 rounded-l text-gray-800 w-full" 
                  aria-label="Email for job alerts"
                />
                <button className="bg-blue-600 px-4 rounded-r">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2025 EmpowerJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;