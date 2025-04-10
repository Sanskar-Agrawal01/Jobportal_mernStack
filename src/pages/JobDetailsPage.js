import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));
  
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
        <Link to="/jobs" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Back to Jobs
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/jobs" className="inline-flex items-center text-blue-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Jobs
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-20 h-20 rounded object-cover mr-6"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
                <p className="text-xl text-gray-600">{job.company}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.isDisabilityFriendly && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full" title="Disability Friendly">
                  Disability Friendly
                </span>
              )}
              {job.isFlexible && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full" title="Flexible Schedule">
                  Flexible Hours
                </span>
              )}
              {job.isRemote && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full" title="Remote Work">
                  Remote Work
                </span>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Location</h3>
              <p className="text-gray-800">{job.location}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Job Type</h3>
              <p className="text-gray-800">{job.type}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Salary</h3>
              <p className="text-gray-800">{job.salary}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Posted Date</h3>
              <p className="text-gray-800">{job.postedDate}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Description</h2>
            <p className="text-gray-700 mb-6">{job.description}</p>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">Requirements</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              {job.requirements.map((req, index) => (
                <li key={index} className="mb-2">{req}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">Benefits</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="mb-2">{benefit}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">Accessibility Features</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              {job.accessibility.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-800">How to Apply</h2>
            <p className="text-gray-700 mb-4">You can easily apply to this job with your EmpowerJobs profile. We'll send your information directly to the employer.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                Save Job
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">About {job.company}</h2>
            <p className="text-gray-700">
              {job.company} is an equal opportunity employer committed to diversity and inclusion in the workplace. We encourage all qualified individuals to apply for our open positions.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Similar Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.filter(j => j.id !== job.id).slice(0, 2).map(similarJob => (
              <Link key={similarJob.id} to={`/jobs/${similarJob.id}`} className="block">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <img 
                      src={similarJob.logo} 
                      alt={`${similarJob.company} logo`} 
                      className="w-10 h-10 rounded object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{similarJob.title}</h3>
                      <p className="text-gray-600">{similarJob.company}</p>
                    </div>
                  </div>
                  <div className="text-gray-700 line-clamp-2">{similarJob.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
