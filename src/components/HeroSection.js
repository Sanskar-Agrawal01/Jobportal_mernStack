import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Job, No Matter Your Background
            </h1>
            <p className="text-xl mb-6">
              EmpowerJobs connects you with employers who value your unique abilities and potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/jobs" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors text-center"
              >
                Find Jobs
              </Link>
              <Link 
                to="/training" 
                className="px-6 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors text-center"
              >
                Free Training
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Diverse people working in various jobs" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;