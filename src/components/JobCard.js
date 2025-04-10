import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className="w-12 h-12 rounded object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {job.isDisabilityFriendly && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full" title="Disability Friendly">
              Inclusive
            </span>
          )}
          {job.isFlexible && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full" title="Flexible Schedule">
              Flexible
            </span>
          )}
          {job.isRemote && (
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full" title="Remote Work">
              Remote
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="text-gray-600">
          <span className="font-medium">Location:</span> {job.location}
        </div>
        <div className="text-gray-600">
          <span className="font-medium">Type:</span> {job.type}
        </div>
        <div className="text-gray-600">
          <span className="font-medium">Salary:</span> {job.salary}
        </div>
        <div className="text-gray-600">
          <span className="font-medium">Posted:</span> {job.postedDate}
        </div>
      </div>
      
      <p className="mt-4 text-gray-700 line-clamp-2">{job.description}</p>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {job.requirements.slice(0, 3).map((req, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
            {req}
          </span>
        ))}
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link 
          to={`/jobs/${job.id}`} 
          className="px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          View Details
        </Link>
        <button 
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors w-full sm:w-auto"
        >
          Quick Apply
        </button>
        <button 
          className="px-4 py-2 text-gray-600 rounded-full hover:text-blue-600 transition-colors"
          aria-label="Save job"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JobCard;