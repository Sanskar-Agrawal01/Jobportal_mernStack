import React from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

const JobCard = ({ job }) => {
  // Ensure skills is an array, default to empty array if undefined
  const skills = job.skills || [];
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
           
            <img
                src={jobs.logo || '/images/placeholder-logo.png'}
                alt={`${jobs.company} logo`}
                className="w-16 h-16 rounded object-cover mr-4"
            />

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                <Link to={`/jobs/${job.id}`} className="hover:text-blue-600">
                  {job.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {job.location}
                </span>
                {job.isRemote && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Remote
                  </span>
                )}
                {job.isFlexible && (
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Flexible Hours
                  </span>
                )}
                {job.isDisabilityFriendly && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Disability Friendly
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-800 mb-1">{job.salary}</p>
            <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
        
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <Link
            to={`/jobs/${job.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details
          </Link>
          <Link
            to={`/jobs/${job.id}/apply`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;