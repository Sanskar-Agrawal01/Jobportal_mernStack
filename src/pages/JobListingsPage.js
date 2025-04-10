import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import JobFilter from '../components/JobFilter';
import { jobs } from '../data/jobs';

const JobListingsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    jobType: [],
    location: '',
    accessibility: [],
    salary: ''
  });
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    applyFilters(filters, searchQuery);
  };
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(activeFilters, query);
  };
  
  const applyFilters = (filters, query) => {
    let results = jobs;
    
    // Apply search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(job => 
        job.title.toLowerCase().includes(lowerQuery) ||
        job.company.toLowerCase().includes(lowerQuery) ||
        job.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Apply job type filter
    if (filters.jobType.length > 0) {
      results = results.filter(job => {
        const jobType = job.type.toLowerCase();
        return filters.jobType.some(type => jobType.includes(type.toLowerCase()));
      });
    }
    
    // Apply location filter
    if (filters.location) {
      const lowerLocation = filters.location.toLowerCase();
      results = results.filter(job => 
        job.location.toLowerCase().includes(lowerLocation)
      );
    }
    
    // Apply accessibility filters
    if (filters.accessibility.length > 0) {
      results = results.filter(job => {
        if (filters.accessibility.includes('Remote work') && !job.isRemote) return false;
        if (filters.accessibility.includes('Flexible hours') && !job.isFlexible) return false;
        if (filters.accessibility.includes('Wheelchair accessible')) {
          // This is a simplified check. In a real app, you'd have more detailed accessibility data
          return job.accessibility.some(a => a.toLowerCase().includes('wheelchair'));
        }
        return true;
      });
    }
    
    // Apply salary filter
    if (filters.salary) {
      const minSalary = parseFloat(filters.salary);
      results = results.filter(job => {
        // Extract the minimum salary from ranges like "$15-17/hour"
        const jobSalaryMatch = job.salary.match(/\$(\d+(\.\d+)?)/);
        if (jobSalaryMatch) {
          const jobMinSalary = parseFloat(jobSalaryMatch[1]);
          return jobMinSalary >= minSalary;
        }
        return true;
      });
    }
    
    setFilteredJobs(results);
  };
  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Find Your Next Job</h1>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs by title, company, or keywords..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute left-4 top-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <JobFilter onFilterChange={handleFilterChange} />
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Found <span className="font-bold">{filteredJobs.length}</span> jobs
              </p>
              <div className="flex items-center">
                <label className="mr-2 text-gray-600">Sort by:</label>
                <select className="p-2 border rounded">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Highest Salary</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">No jobs found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filters to find more jobs.</p>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilters({
                        jobType: [],
                        location: '',
                        accessibility: [],
                        salary: ''
                      });
                      setFilteredJobs(jobs);
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingsPage;