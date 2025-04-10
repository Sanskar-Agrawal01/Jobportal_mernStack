import React, { useState } from 'react';

const JobFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    jobType: [],
    location: '',
    accessibility: [],
    salary: ''
  });

  const handleCheckboxChange = (category, value) => {
    const newFilters = { ...filters };
    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    } else {
      newFilters[category] = [...newFilters[category], value];
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTextChange = (category, value) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Filter Jobs</h3>
      
      <div className="mb-6">
        <h4 className="font-bold mb-2 text-gray-700">Job Type</h4>
        <div className="space-y-2">
          {['Full-time', 'Part-time', 'Flexible'].map(type => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.jobType.includes(type)}
                onChange={() => handleCheckboxChange('jobType', type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-bold mb-2 text-gray-700">Location</h4>
        <input
          type="text"
          placeholder="Enter city or zip code"
          className="w-full p-2 border rounded"
          value={filters.location}
          onChange={(e) => handleTextChange('location', e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <h4 className="font-bold mb-2 text-gray-700">Accessibility Features</h4>
        <div className="space-y-2">
          {['Remote work', 'Flexible hours', 'Wheelchair accessible'].map(feature => (
            <label key={feature} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.accessibility.includes(feature)}
                onChange={() => handleCheckboxChange('accessibility', feature)}
              />
              {feature}
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-bold mb-2 text-gray-700">Minimum Salary</h4>
        <select
          className="w-full p-2 border rounded"
          value={filters.salary}
          onChange={(e) => handleTextChange('salary', e.target.value)}
        >
          <option value="">Any Salary</option>
          <option value="15">$15/hour</option>
          <option value="16">$16/hour</option>
          <option value="17">$17/hour</option>
          <option value="18">$18/hour</option>
          <option value="20">$20/hour</option>
        </select>
      </div>
      
      <button 
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        onClick={() => onFilterChange(filters)}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default JobFilter;