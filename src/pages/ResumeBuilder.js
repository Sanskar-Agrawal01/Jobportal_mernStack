import React from 'react';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <h1>Resume Builder</h1>
      <div className="resume-builder-container">
        <div className="resume-sidebar">
          <h2>Resume Sections</h2>
          <ul className="section-list">
            <li className="active">Personal Information</li>
            <li>Professional Summary</li>
            <li>Work Experience</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Certifications</li>
            <li>References</li>
          </ul>
          <div className="resume-actions">
            <button className="action-btn primary">Save Progress</button>
            <button className="action-btn">Preview Resume</button>
            <button className="action-btn">Download PDF</button>
          </div>
        </div>
        
        <div className="resume-form">
          <h2>Personal Information</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" placeholder="City, State" />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input type="url" id="linkedin" name="linkedin" placeholder="LinkedIn URL" />
            </div>
            <div className="form-actions">
              <button type="button" className="next-btn">Next: Professional Summary</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
