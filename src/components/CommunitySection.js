import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Join Our Supportive Community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Peer Support</h3>
            <p className="text-gray-600">Connect with others who understand your journey and share experiences.</p>
            <img src="/api/placeholder/300/200" alt="People in a support meeting" className="rounded-lg mt-4 w-full" />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Success Stories</h3>
            <p className="text-gray-600">Be inspired by stories of people who found their ideal job through our platform.</p>
            <img src="/api/placeholder/300/200" alt="Person celebrating job success" className="rounded-lg mt-4 w-full" />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Local Events</h3>
            <p className="text-gray-600">Join workshops, job fairs, and meetups in your local community.</p>
            <img src="/api/placeholder/300/200" alt="Community job fair" className="rounded-lg mt-4 w-full" />
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Join Community Forum
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;