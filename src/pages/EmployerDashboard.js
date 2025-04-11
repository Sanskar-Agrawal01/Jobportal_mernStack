import React, { useState } from 'react';

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobPostings, setJobPostings] = useState([
    { 
      id: 1, 
      title: 'Handicraft Trainer', 
      location: 'Anandwan Workshops & Online', 
      applicants: 15 
    }, 
    { 
      id: 2, 
      title: 'Agricultural Skills Mentor', 
      location: 'Anandwan Campus & Nearby Villages', 
      applicants: 10 
    }
    
  ]);
  const [newJob, setNewJob] = useState({ title: '', description: '', location: '', requirements: '' });
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicants, setApplicants] = useState([
    { id: 1, name: 'Neel Wankhade', jobId: 1, status: 'Review', resume: 'resume_link', coverLetter: 'cover_letter_link' },
    { id: 2, name: 'Rahul Zade', jobId: 1, status: 'Interview', resume: 'resume_link', coverLetter: 'cover_letter_link' },
    { id: 3, name: 'Rajat Patidar', jobId: 2, status: 'New', resume: 'resume_link', coverLetter: 'cover_letter_link' },
    { id: 4, name: 'Shivam Dube', jobId: 1, status: 'New', resume: 'resume_link', coverLetter: 'cover_letter_link' },
  ]);

  // Function to handle creating a new job
  const handleCreateJob = (e) => {
    e.preventDefault();
    const newJobPost = {
      id: jobPostings.length + 1,
      ...newJob,
      applicants: 0
    };
    setJobPostings([...jobPostings, newJobPost]);
    setNewJob({ title: '', description: '', location: '', requirements: '' });
    setActiveTab('jobs');
  };

  // Function to handle input changes for new job form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  // Function to delete a job posting
  const handleDeleteJob = (jobId) => {
    // Remove the job posting
    setJobPostings(jobPostings.filter(job => job.id !== jobId));
    
    // If the deleted job is currently selected, clear the selection
    if (selectedJob === jobId) {
      setSelectedJob(null);
      if (activeTab === 'applicants') {
        setActiveTab('jobs');
      }
    }
    
    // Optionally, also remove associated applicants
    setApplicants(applicants.filter(applicant => applicant.jobId !== jobId));
  };

  // View applicants for a specific job
  const viewApplicants = (jobId) => {
    setSelectedJob(jobId);
    setActiveTab('applicants');
  };

  // Function to update applicant status
  const updateApplicantStatus = (applicantId, newStatus) => {
    setApplicants(
      applicants.map(applicant =>
        applicant.id === applicantId ? { ...applicant, status: newStatus } : applicant
      )
    );
  };

  // Get the current job title
  const getSelectedJobTitle = () => {
    const job = jobPostings.find(job => job.id === selectedJob);
    return job ? job.title : '';
  };

  // Get applicants for the selected job
  const getApplicantsForSelectedJob = () => {
    return applicants.filter(applicant => applicant.jobId === selectedJob);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Employer Dashboard</h1>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-300 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'jobs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('jobs')}
          >
            Job Postings
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'post' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('post')}
          >
            Post New Job
          </button>
          {selectedJob && (
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'applicants' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('applicants')}
            >
              View Applicants
            </button>
          )}
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('profile')}
          >
            Company Profile
          </button>
        </div>

        {/* Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Job Postings</h2>
              <p className="text-gray-600 mb-4">Manage your current job listings and create new opportunities.</p>
              <div className="text-4xl font-bold text-blue-600 mb-4">{jobPostings.length}</div>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setActiveTab('post')}
              >
                Post New Job
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Applicant Tracking</h2>
              <p className="text-gray-600 mb-4">Review applications and track candidate progress.</p>
              <div className="text-4xl font-bold text-green-600 mb-4">{applicants.length}</div>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => {
                  if (jobPostings.length > 0) {
                    setSelectedJob(jobPostings[0].id);
                    setActiveTab('applicants');
                  }
                }}
                disabled={jobPostings.length === 0}
              >
                View Applicants
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Company Profile</h2>
              <p className="text-gray-600 mb-4">Update your company information and branding.</p>
              <button 
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                onClick={() => setActiveTab('profile')}
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {/* Job Postings List */}
        {activeTab === 'jobs' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Current Job Postings</h2>
              <p className="text-gray-600">Manage your active job listings</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicants</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jobPostings.map((job) => (
                    <tr key={job.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {applicants.filter(applicant => applicant.jobId === job.id).length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          className="text-blue-600 hover:text-blue-900 mr-3"
                          onClick={() => viewApplicants(job.id)}
                        >
                          View Applicants
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 mr-3">Edit</button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {jobPostings.length === 0 && (
                <div className="text-center p-6 text-gray-500">No job postings yet. Create your first job posting!</div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setActiveTab('post')}
              >
                Post New Job
              </button>
            </div>
          </div>
        )}

        {/* Create New Job Form */}
        {activeTab === 'post' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Post a New Job</h2>
              <p className="text-gray-600">Create a new job opportunity for potential candidates</p>
            </div>
            
            <form onSubmit={handleCreateJob} className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Job Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={newJob.title}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={newJob.location}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Job Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={newJob.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  value={newJob.requirements}
                  onChange={handleInputChange}
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  onClick={() => setActiveTab('jobs')}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        )}

        {/* View Applicants */}
        {activeTab === 'applicants' && selectedJob && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">
                Applicants for {getSelectedJobTitle()}
              </h2>
              <p className="text-gray-600">Review and manage candidate applications</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {getApplicantsForSelectedJob().map((applicant) => (
                    <tr key={applicant.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{applicant.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${applicant.status === 'New' ? 'bg-blue-100 text-blue-800' : 
                            applicant.status === 'Review' ? 'bg-yellow-100 text-yellow-800' : 
                            applicant.status === 'Interview' ? 'bg-green-100 text-green-800' : 
                            applicant.status === 'Offer' ? 'bg-purple-100 text-purple-800' :
                            applicant.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'}`}>
                          {applicant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Resume</a>
                        <a href="#" className="text-blue-600 hover:text-blue-900">Cover Letter</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <select
                          className="border border-gray-300 rounded px-2 py-1"
                          value={applicant.status}
                          onChange={(e) => updateApplicantStatus(applicant.id, e.target.value)}
                        >
                          <option value="New">New</option>
                          <option value="Review">Review</option>
                          <option value="Interview">Interview</option>
                          <option value="Offer">Offer</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {getApplicantsForSelectedJob().length === 0 && (
                <div className="text-center p-6 text-gray-500">No applicants for this job posting yet.</div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <button 
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => setActiveTab('jobs')}
              >
                Back to Jobs
              </button>
            </div>
          </div>
        )}

        {/* Company Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Company Profile</h2>
            <p className="text-gray-600 mb-6">Update your company information and branding.</p>
            
            <div className="bg-gray-100 p-6 rounded">
              <p className="text-center text-gray-500">Company profile editing form would go here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;