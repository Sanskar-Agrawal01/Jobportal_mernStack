// App.js - Main application file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobListingsPage from './pages/JobListingsPage';
import ProfilePage from './pages/ProfilePage';
import EmployerDashboard from './pages/EmployerDashboard';
import TrainingResourcesPage from './pages/TrainingResourcesPage';
import AccessibilityHelpCenter from './pages/AccessibilityHelpCenter';
import JobDetailsPage from './pages/JobDetailsPage';
import ResumeBuilder from './pages/ResumeBuilder';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobListingsPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/training" element={<TrainingResourcesPage />} />
            <Route path="/accessibility" element={<AccessibilityHelpCenter />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;