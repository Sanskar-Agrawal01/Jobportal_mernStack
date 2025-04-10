import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedJobsSection from '../components/FeaturedJobsSection';
import CommunitySection from '../components/CommunitySection';
import homeimg from '../pages/home.png';


// Enhanced HomePage with full-screen hero image and social welfare emphasis
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Full screen background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={homeimg} 
            alt="Diverse group of people working together" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Empowering <span className="text-blue-400">Everyone</span> Through Employment
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Breaking barriers to employment and creating opportunities for all, regardless of background or ability.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/jobs" className="px-10 py-5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform">
              Find Jobs
            </Link>
            <Link to="/profile" className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform">
              Create Profile
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Mission Statement Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Our Social Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
            At EmpowerJobs, we believe that everyone deserves equal access to meaningful employment. Our platform is designed to remove barriers and create pathways to economic independence for underserved communities, people with disabilities, and those facing employment challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="text-blue-600 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Inclusive Opportunities</h3>
              <p className="text-gray-600">
                We partner with employers committed to diverse and inclusive hiring practices.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="text-purple-600 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Support Network</h3>
              <p className="text-gray-600">
                Connect with mentors, coaches, and peers who can help guide your career journey.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="text-green-600 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Free Skills Training</h3>
              <p className="text-gray-600">
                Access resources to develop job-ready skills, regardless of your starting point.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">How EmpowerJobs Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create Your Profile</h3>
              <p className="text-gray-600 mb-6 text-center">Our accessible profile builder focuses on your strengths and accommodations needed. No traditional resume required.</p>
              <img src="/api/placeholder/300/180" alt="Profile creation" className="rounded-xl mx-auto shadow-md" />
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Find Matching Jobs</h3>
              <p className="text-gray-600 mb-6 text-center">Our inclusive search tools match you with jobs based on your abilities, needs, and workplace accommodations.</p>
              <img src="/api/placeholder/300/180" alt="Job search" className="rounded-xl mx-auto shadow-md" />
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Apply with Confidence</h3>
              <p className="text-gray-600 mb-6 text-center">Our simplified application process connects you directly with employers who value diversity and inclusion.</p>
              <img src="/api/placeholder/300/180" alt="Job application" className="rounded-xl mx-auto shadow-md" />
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/profile" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Featured Jobs</h2>
          <FeaturedJobsSection />
        </div>
      </section>
      
      {/* Training Resources Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Free Training Resources</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Everyone deserves access to quality training regardless of background or circumstance. Our accessible learning modules help you build skills at your own pace, with accommodations for different learning styles and abilities.
              </p>
              <ul className="mb-10 space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Basic digital literacy for the modern workplace
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customer service and communication skills
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Job-specific certifications and qualifications
                </li>
              </ul>
              <Link to="/training" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform">
                Explore Free Training
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -left-8 -top-8 bg-blue-100 rounded-2xl w-full h-full"></div>
                <img 
                  src="/api/placeholder/500/350" 
                  alt="Person learning new skills" 
                  className="rounded-2xl shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <img src="/api/placeholder/60/60" alt="Profile" className="w-16 h-16 rounded-full shadow-md" />
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-800">Maria J.</h4>
                  <p className="text-gray-600">Healthcare Assistant</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a single mom with limited job experience, I struggled to find opportunities. EmpowerJobs connected me with a healthcare employer who provided on-the-job training. I'm now financially independent and building a career I love."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <img src="/api/placeholder/60/60" alt="Profile" className="w-16 h-16 rounded-full shadow-md" />
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-800">James T.</h4>
                  <p className="text-gray-600">IT Support Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Living with autism, traditional interviews were always challenging for me. EmpowerJobs helped me showcase my technical skills instead, and connected me with an employer who values neurodiversity. I'm thriving in my IT role."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <img src="/api/placeholder/60/60" alt="Profile" className="w-16 h-16 rounded-full shadow-md" />
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-gray-800">Sarah L.</h4>
                  <p className="text-gray-600">Administrative Assistant</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "After a workplace injury, I needed to change careers. The free training resources and supportive community at EmpowerJobs helped me gain office skills and find an accessible workplace that accommodates my physical needs."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <CommunitySection />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Find Your Next Job?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join thousands of job seekers who have found meaningful employment through EmpowerJobs. Everyone deserves the dignity and independence that comes with employment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/jobs" className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform">
              Browse Jobs
            </Link>
            <Link to="/employer" className="px-10 py-5 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-900 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform">
              I'm an Employer
            </Link>
          </div>
          <p className="mt-12 text-blue-200 text-lg">
            Together, we can create a more inclusive workforce for everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;