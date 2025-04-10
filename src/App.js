// App.js - Main application file
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import JobApplicationForm from './components/JobApplicationForm';
import HomePage from './pages/HomePage';
import JobListingsPage from './pages/JobListingsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import LoginSignup from './pages/login';
import ProfilePage from './pages/ProfilePage';
import TrainingResourcesPage from './pages/TrainingResourcesPage';
import AccessibilityHelpCenter from './pages/AccessibilityHelpCenter';
import ResumeBuilder from './pages/ResumeBuilder';
import EmployerDashboard from './pages/EmployerDashboard';
import './App.css';
import './index.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Role Protected Route Component
const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <NavBar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobListingsPage />} />
              <Route path="/jobs/:id" element={<JobDetailsPage />} />
              <Route 
                path="/jobs/:id/apply" 
                element={
                  <ProtectedRoute>
                    <JobApplicationForm />
                  </ProtectedRoute>
                } 
              />
              <Route path="/login" element={<LoginSignup />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/training" 
                element={
                  <ProtectedRoute>
                    <TrainingResourcesPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/accessibility" element={<AccessibilityHelpCenter />} />
              <Route 
                path="/resume-builder" 
                element={
                  <ProtectedRoute>
                    <ResumeBuilder />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/employer/*" 
                element={
                  <RoleProtectedRoute allowedRoles={['employer']}>
                    <EmployerDashboard />
                  </RoleProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;