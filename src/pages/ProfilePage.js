import React, { useState } from 'react';
import { userProfile } from '../data/user';
import { jobs } from '../data/jobs';

const ProfilePage = () => {
  const [profile, setProfile] = useState(userProfile);
  const [activeTab, setActiveTab] = useState('profile');
  
  const appliedJobs = jobs.filter(job => profile.appliedJobs.includes(job.id));
  const savedJobs = jobs.filter(job => profile.savedJobs.includes(job.id));
  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 bg-blue-600 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-20 h-20 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl mr-6">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-blue-100">{profile.location}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white text-blue-600 rounded font-bold hover:bg-blue-50 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
          
          <div className="flex border-b">
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile Details
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'applied' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('applied')}
            >
              Applied Jobs ({appliedJobs.length})
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'saved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('saved')}
            >
              Saved Jobs ({savedJobs.length})
            </button>
          </div>
          
          {activeTab === 'profile' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-medium">{profile.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone</p>
                      <p className="font-medium">{profile.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Location</p>
                      <p className="font-medium">{profile.location}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Add Skill
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800">Education</h3>
                  <p className="text-gray-700">{profile.education}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Work Experience</h3>
                  {profile.experience.length > 0 ? (
                    <div className="space-y-6">
                      {profile.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-blue-500 pl-4">
                          <h4 className="font-bold text-gray-800">{exp.title}</h4>
                          <p className="text-gray-600">{exp.company}</p>
                          <p className="text-gray-600 text-sm">{exp.duration}</p>
                          <p className="mt-2 text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded text-center">
                      <p className="text-gray-600">No work experience added yet</p>
                      <button className="mt-2 text-blue-600 font-medium">Add Experience</button>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800">Resume</h3>
                  {profile.resume ? (
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span className="text-gray-800 font-medium">{profile.resume}</span>
                      <button className="ml-4 text-blue-600">View</button>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded text-center">
                      <p className="text-gray-600">No resume uploaded</p>
                      <button className="mt-2 text-blue-600 font-medium">Upload Resume</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'applied' && (
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Applied Jobs</h3>
              
              {appliedJobs.length > 0 ? (
                <div className="space-y-4">
                  {appliedJobs.map(job => (
                    <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-bold text-lg text-gray-800">{job.title}</h4>
                            <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {job.status || 'Application Sent'}
                            </span>
                          </div>
                          <p className="text-gray-600">{job.company}</p>
                          <p className="text-gray-600 text-sm">{job.location}</p>
                          <div className="mt-2 flex gap-2">
                            {job.tags?.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-sm">Applied on {job.appliedDate}</p>
                          <button className="mt-2 text-blue-600 text-sm">View Application</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400 mb-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <h4 className="font-bold text-gray-700 mb-2">No Applications Yet</h4>
                  <p className="text-gray-600 mb-4">You haven't applied to any jobs yet. Start exploring opportunities!</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors">
                    Browse Jobs
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'saved' && (
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Saved Jobs</h3>
              
              {savedJobs.length > 0 ? (
                <div className="space-y-4">
                  {savedJobs.map(job => (
                    <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">{job.title}</h4>
                          <p className="text-gray-600">{job.company}</p>
                          <p className="text-gray-600 text-sm">{job.location}</p>
                          <div className="mt-2 flex gap-2">
                            {job.tags?.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Saved on {job.savedDate}</p>
                          <div className="mt-2 flex justify-end space-x-2">
                            <button className="text-red-600 text-sm">Remove</button>
                            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400 mb-4">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <h4 className="font-bold text-gray-700 mb-2">No Saved Jobs</h4>
                  <p className="text-gray-600 mb-4">You haven't saved any jobs yet. Save jobs to apply later!</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors">
                    Browse Jobs
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;