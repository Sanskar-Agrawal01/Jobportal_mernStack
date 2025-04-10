import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedJobsSection from '../components/FeaturedJobsSection';
import CommunitySection from '../components/CommunitySection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How EmpowerJobs Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Create Your Profile</h3>
              <p className="text-gray-600">No resume? No problem! Our simple profile builder helps you showcase your skills and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Find Matching Jobs</h3>
              <p className="text-gray-600">Browse jobs that match your abilities and needs with our accessible search tools.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Apply with One Click</h3>
              <p className="text-gray-600">Our simplified application process makes it easy to connect with employers.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/profile" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Create Your Profile
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturedJobsSection />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Free Training Resources</h2>
              <p className="text-lg text-gray-600 mb-6">
                Boost your skills with our easy-to-follow training modules. From basic computer skills to customer service, we've got you covered.
              </p>
              <Link to="/training" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Explore Training
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/500/300" 
                alt="Person learning new skills on computer" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CommunitySection />
      
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Find Your Next Job?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of job seekers who have found meaningful employment through EmpowerJobs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/jobs" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Browse Jobs
            </Link>
            <Link to="/employer" className="px-8 py-3 bg-gray-600 text-white rounded-lg font-bold hover:bg-gray-700 transition-colors">
              I'm an Employer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;