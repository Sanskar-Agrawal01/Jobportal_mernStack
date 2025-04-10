import React from 'react';

const EmployerDashboard = () => {
  return (
    <div className="employer-dashboard">
      <h1>Employer Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Job Postings</h2>
          <p>Manage your current job listings and create new opportunities.</p>
          <button className="dashboard-btn">Post New Job</button>
        </div>
        <div className="dashboard-section">
          <h2>Applicant Tracking</h2>
          <p>Review applications and track candidate progress.</p>
          <button className="dashboard-btn">View Applicants</button>
        </div>
        <div className="dashboard-section">
          <h2>Company Profile</h2>
          <p>Update your company information and branding.</p>
          <button className="dashboard-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
