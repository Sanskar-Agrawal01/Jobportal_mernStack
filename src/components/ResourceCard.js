import React from 'react';

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={resource.image} 
        alt={resource.title} 
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {resource.type}
          </span>
        </div>
        <p className="text-gray-600 mb-2">Duration: {resource.duration}</p>
        <p className="text-gray-700 mb-4">{resource.description}</p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;