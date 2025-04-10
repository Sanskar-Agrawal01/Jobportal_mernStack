import React from 'react';
import JobCard from './JobCard';
import { jobs } from '../data/jobs';
import { Link } from 'react-router-dom';

const FeaturedJobsSection = () => {
  // Get 3 featured jobs
  const featuredJobs = jobs.slice(0, 3);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Jobs</h2>
          <Link to="/jobs" className="text-blue-600 hover:underline">
            Browse All Jobs
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
