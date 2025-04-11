import React, { useState } from 'react';
import { jobs } from '../data/jobs';

const ProfilePage = () => {
  // Set initial profile with empty fields instead of using userProfile
  const initialProfile = {
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: [],
    education: '',
    experience: [],
    resume: '',
    appliedJobs: [],
    savedJobs: []
  };

  const [profile, setProfile] = useState(initialProfile);
  const [activeTab, setActiveTab] = useState('profile');
  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  
  // State for the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    education: '',
    skills: ''
  });

  // State for work experience fields
  const [experience, setExperience] = useState({
    title: '',
    company: '',
    duration: '',
    description: ''
  });

  // State to track multiple experiences
  const [experiences, setExperiences] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value
    });
  };

  const handleAddExperience = () => {
    if (experience.title && experience.company) {
      setExperiences([...experiences, experience]);
      setExperience({
        title: '',
        company: '',
        duration: '',
        description: ''
      });
    }
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    
    // Create skills array from the comma-separated string
    const skillsArray = formData.skills.split(',')
      .map(skill => skill.trim())
      .filter(skill => skill !== '');

    // Create new profile object from form data
    const newProfile = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      skills: skillsArray,
      education: formData.education,
      experience: experiences,
      resume: '',
      appliedJobs: [],
      savedJobs: []
    };

    setProfile(newProfile);
    setIsProfileCreated(true);
  };

  const appliedJobs = jobs.filter(job => profile.appliedJobs.includes(job.id));
  const savedJobs = jobs.filter(job => profile.savedJobs.includes(job.id));

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {isProfileCreated ? 'My Profile' : 'Create Profile'}
        </h1>
        
        {!isProfileCreated ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 bg-blue-600 text-white">
              <h2 className="text-2xl font-bold">Create Your Profile</h2>
              <p className="text-blue-100">Fill in your details to get started</p>
            </div>
            
            <form onSubmit={handleSaveProfile} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-600 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-600 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-600 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-gray-600 mb-1">Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800">Skills</h3>
                  <div>
                    <label htmlFor="skills" className="block text-gray-600 mb-1">Skills (comma-separated)</label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleFormChange}
                      className="w-full p-2 border rounded"
                      placeholder="e.g. JavaScript, React, CSS, UI Design"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800">Education</h3>
                  <div>
                    <label htmlFor="education" className="block text-gray-600 mb-1">Education</label>
                    <textarea
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleFormChange}
                      className="w-full p-2 border rounded"
                      rows="3"
                      placeholder="e.g. Bachelor of Science in Computer Science, University Name"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Work Experience</h3>
                  
                  {/* Display added experiences */}
                  {experiences.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-gray-700">Added Experiences:</h4>
                      <div className="space-y-4">
                        {experiences.map((exp, index) => (
                          <div key={index} className="border-l-2 border-blue-500 pl-4 relative">
                            <button 
                              type="button"
                              onClick={() => handleRemoveExperience(index)}
                              className="absolute right-0 top-0 text-red-600 hover:text-red-800"
                            >
                              ✕
                            </button>
                            <h4 className="font-bold text-gray-800">{exp.title}</h4>
                            <p className="text-gray-600">{exp.company}</p>
                            <p className="text-gray-600 text-sm">{exp.duration}</p>
                            <p className="mt-1 text-gray-700">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Experience form */}
                  <div className="border p-4 rounded">
                    <h4 className="font-semibold mb-3 text-gray-700">Add Experience</h4>
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="title" className="block text-gray-600 text-sm mb-1">Job Title</label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={experience.title}
                          onChange={handleExperienceChange}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-600 text-sm mb-1">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={experience.company}
                          onChange={handleExperienceChange}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label htmlFor="duration" className="block text-gray-600 text-sm mb-1">Duration</label>
                        <input
                          type="text"
                          id="duration"
                          name="duration"
                          value={experience.duration}
                          onChange={handleExperienceChange}
                          className="w-full p-2 border rounded"
                          placeholder="e.g. Jan 2022 - Present"
                        />
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-gray-600 text-sm mb-1">Description</label>
                        <textarea
                          id="description"
                          name="description"
                          value={experience.description}
                          onChange={handleExperienceChange}
                          className="w-full p-2 border rounded"
                          rows="2"
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        onClick={handleAddExperience}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                      >
                        Add Experience
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800">Resume</h3>
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <p className="text-gray-600">Upload your resume (optional)</p>
                    <input 
                      type="file" 
                      className="hidden" 
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                    />
                    <label 
                      htmlFor="resume-upload"
                      className="mt-2 inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded cursor-pointer hover:bg-gray-300"
                    >
                      Upload Resume
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        ) : (
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
                <button 
                  className="px-4 py-2 bg-white text-blue-600 rounded font-bold hover:bg-blue-50 transition-colors"
                  onClick={() => setIsProfileCreated(false)} // Go back to edit form
                >
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
                      <div className="flex items-center">
                        <input
                          type="text"
                          placeholder="Add skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          className="border rounded-l px-2 py-1 w-32"
                        />
                        <button 
                          onClick={handleAddSkill}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                        >
                          +
                        </button>
                      </div>
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
                        <button 
                          className="mt-2 text-blue-600 font-medium"
                          onClick={() => setIsProfileCreated(false)} // Go back to edit form
                        >
                          Add Experience
                        </button>
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
                        <input 
                          type="file" 
                          className="hidden" 
                          id="resume-upload-view"
                          accept=".pdf,.doc,.docx"
                        />
                        <label 
                          htmlFor="resume-upload-view"
                          className="mt-2 inline-block text-blue-600 font-medium cursor-pointer"
                        >
                          Upload Resume
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'applied' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Applied Jobs</h3>
                
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
              </div>
            )}
            
            {activeTab === 'saved' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Saved Jobs</h3>
                
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
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;