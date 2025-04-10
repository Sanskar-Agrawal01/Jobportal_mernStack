import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import JobPostings from './employer/JobPostings';
import ApplicantTracking from './employer/ApplicantTracking';
import CompanyProfile from './employer/CompanyProfile';

const EmployerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('job-postings');

  // Redirect if not an employer
  if (!user || user.role !== 'employer') {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Employer Dashboard</h2>
            <nav className="space-y-2">
              <Link
                to="/employer/job-postings"
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  activeTab === 'job-postings'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('job-postings')}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Job Postings</span>
              </Link>

              <Link
                to="/employer/applicants"
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  activeTab === 'applicants'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('applicants')}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>Applicant Tracking</span>
              </Link>

              <Link
                to="/employer/profile"
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Company Profile</span>
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Routes>
              <Route path="job-postings" element={<JobPostings />} />
              <Route path="applicants" element={<ApplicantTracking />} />
              <Route path="profile" element={<CompanyProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard; 