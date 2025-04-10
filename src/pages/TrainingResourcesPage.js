import React from 'react';

const TrainingResourcesPage = () => {
  return (
    <div className="training-resources">
      <h1>Training Resources</h1>
      <div className="resources-container">
        <div className="resource-category">
          <h2>Career Development</h2>
          <ul>
            <li>
              <h3>Resume Writing Workshop</h3>
              <p>Learn how to craft a compelling resume that highlights your skills and experience.</p>
              <button className="resource-btn">Access Resource</button>
            </li>
            <li>
              <h3>Interview Preparation</h3>
              <p>Practice common interview questions and develop effective strategies for success.</p>
              <button className="resource-btn">Access Resource</button>
            </li>
          </ul>
        </div>
        <div className="resource-category">
          <h2>Technical Skills</h2>
          <ul>
            <li>
              <h3>Programming Fundamentals</h3>
              <p>Introduction to programming concepts and popular languages.</p>
              <button className="resource-btn">Access Resource</button>
            </li>
            <li>
              <h3>Data Analysis Tools</h3>
              <p>Learn to use industry-standard data analysis software and techniques.</p>
              <button className="resource-btn">Access Resource</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingResourcesPage;
