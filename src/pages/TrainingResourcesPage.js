import React, { useState } from 'react';

const TrainingResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Resource categories - added crafts category
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'career', name: 'Career Development' },
    { id: 'technical', name: 'Technical Skills' },
    { id: 'soft', name: 'Soft Skills' },
    { id: 'industry', name: 'Industry Knowledge' },
    { id: 'crafts', name: 'Arts & Crafts' }
  ];

  // Resource data with mixed content types and actual YouTube links
  const resources = [
    {
      id: 1,
      title: 'Resume Writing Workshop',
      description: 'Learn how to craft a compelling resume that highlights your skills and experience.',
      type: 'video',
      category: 'career',
      duration: '45 min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=8RGx-9jAXm4',
      author: 'Career Experts',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Interview Preparation Guide',
      description: 'Practice common interview questions and develop effective strategies for success.',
      type: 'document',
      category: 'career',
      pages: 24,
      format: 'PDF',
      link: 'https://www.indeed.com/career-advice/interviewing/job-interview-preparation-checklist',
      author: 'HR Professionals Association',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Programming Fundamentals: JavaScript Basics',
      description: 'Introduction to JavaScript programming with hands-on exercises.',
      type: 'video',
      category: 'technical',
      duration: '1h 20min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      author: 'Code Academy',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      title: 'Data Analysis with Python',
      description: 'Learn to use Python for data analysis including pandas and matplotlib libraries.',
      type: 'course',
      category: 'technical',
      modules: 8,
      duration: '12 hours',
      link: 'https://www.coursera.org/learn/python-data-analysis',
      author: 'Data Science Institute',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Effective Communication in the Workplace',
      description: 'Develop key communication skills to enhance workplace relationships and productivity.',
      type: 'video',
      category: 'soft',
      duration: '52 min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=F5TfOZ_Ao3k',
      author: 'Communication Skills Academy',
      difficulty: 'All Levels'
    },
    {
      id: 6,
      title: 'Time Management Strategies',
      description: 'Practical techniques to improve productivity and manage your workload effectively.',
      type: 'document',
      category: 'soft',
      pages: 15,
      format: 'PDF',
      link: 'https://www.mindtools.com/pages/article/newHTE_00.htm',
      author: 'Productivity Experts',
      difficulty: 'All Levels'
    },
    {
      id: 7,
      title: 'Industry Trends in Tech 2025',
      description: 'Comprehensive overview of current technology trends and future predictions.',
      type: 'webinar',
      category: 'industry',
      duration: '1h 15min',
      date: 'March 15, 2025',
      link: 'https://www.brighttalk.com/webcast/8251/357029',
      author: 'Tech Insights Group',
      difficulty: 'Advanced'
    },
    {
      id: 8,
      title: 'Software Engineering Best Practices',
      description: 'Learn industry-standard software development methodologies and coding practices.',
      type: 'document',
      category: 'technical',
      pages: 42,
      format: 'PDF',
      link: 'https://www.sei.cmu.edu/our-work/software-engineering/',
      author: 'Software Engineering Institute',
      difficulty: 'Intermediate'
    },
    {
      id: 9,
      title: 'Networking for Career Growth',
      description: 'Strategies for building and leveraging professional relationships.',
      type: 'video',
      category: 'career',
      duration: '38 min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=8xdEhJtBnBk',
      author: 'Professional Development Channel',
      difficulty: 'All Levels'
    },
    {
      id: 10,
      title: 'Introduction to Cloud Computing',
      description: 'Fundamentals of cloud services, deployment models, and popular platforms.',
      type: 'course',
      category: 'technical',
      modules: 6,
      duration: '8 hours',
      link: 'https://www.edx.org/course/introduction-to-cloud-computing',
      author: 'Cloud Technology Institute',
      difficulty: 'Beginner'
    },
    {
      id: 11,
      title: 'Leadership Skills for New Managers',
      description: 'Essential leadership techniques for those transitioning into management roles.',
      type: 'video',
      category: 'soft',
      duration: '1h 05min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=m18Hnfai_Xg',
      author: 'Leadership Academy',
      difficulty: 'Intermediate'
    },
    {
      id: 12,
      title: 'Market Analysis for Tech Sectors',
      description: 'Comprehensive market research and analysis of various technology sectors.',
      type: 'document',
      category: 'industry',
      pages: 35,
      format: 'PDF',
      link: 'https://www.gartner.com/en/research/methodologies',
      author: 'Tech Market Research Group',
      difficulty: 'Advanced'
    },
    // New crafting resources
    {
      id: 13,
      title: 'Introduction to Hand Weaving Techniques',
      description: 'Learn the fundamentals of weaving with a focus on small loom projects for beginners.',
      type: 'video',
      category: 'crafts',
      duration: '1h 22min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=BrExY-hOxUY',
      author: 'Fiber Arts Studio',
      difficulty: 'Beginner'
    },
    {
      id: 14,
      title: 'Pottery for Beginners: Wheel Throwing Basics',
      description: 'Start your pottery journey with this comprehensive guide to wheel throwing techniques.',
      type: 'course',
      category: 'crafts',
      modules: 5,
      duration: '6 hours',
      link: 'https://www.youtube.com/watch?v=PXbmYFqzS8Q',
      author: 'Ceramic Arts Network',
      difficulty: 'Beginner'
    },
    {
      id: 15,
      title: 'Advanced Macramé Wall Hangings',
      description: 'Take your macramé skills to the next level with these intricate wall hanging designs.',
      type: 'video',
      category: 'crafts',
      duration: '56 min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=V9PgXLk0YT4',
      author: 'Knot Modern',
      difficulty: 'Intermediate'
    },
    {
      id: 16,
      title: 'Traditional Basket Weaving Methods',
      description: 'Explore traditional basket weaving techniques from various cultures with step-by-step instructions.',
      type: 'document',
      category: 'crafts',
      pages: 28,
      format: 'PDF',
      link: 'https://www.nationalbasketry.org/resources/education/',
      author: 'Global Weaving Collective',
      difficulty: 'Intermediate'
    },
    {
      id: 17,
      title: 'Hand-Dyeing Fabrics with Natural Materials',
      description: 'Learn eco-friendly dyeing techniques using plants, flowers, and other natural materials.',
      type: 'course',
      category: 'crafts',
      modules: 4,
      duration: '4 hours',
      link: 'https://www.skillshare.com/classes/Natural-Dyeing-Techniques/',
      author: 'Sustainable Textiles Studio',
      difficulty: 'All Levels'
    },
    {
      id: 18,
      title: 'Ceramic Glazing Techniques and Recipes',
      description: 'Comprehensive guide to pottery glazing methods, color mixing, and application techniques.',
      type: 'document',
      category: 'crafts',
      pages: 42,
      format: 'PDF',
      link: 'https://ceramicartsnetwork.org/daily/ceramic-glaze-recipes/',
      author: 'Modern Ceramics Institute',
      difficulty: 'Advanced'
    },
    {
      id: 19,
      title: 'Leather Crafting Essentials',
      description: 'Master the basics of working with leather to create handcrafted wallets, bags, and accessories.',
      type: 'video',
      category: 'crafts',
      duration: '1h 10min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=qJZAUOVIf0U',
      author: 'Heritage Craft Workshop',
      difficulty: 'Beginner'
    },
    {
      id: 20,
      title: 'Block Printing: Creating Patterns for Fabric',
      description: 'Learn to carve printing blocks and create custom patterns for fabric printing.',
      type: 'webinar',
      category: 'crafts',
      duration: '1h 25min',
      date: 'February 12, 2025',
      link: 'https://www.youtube.com/watch?v=bDd_8VBVpw0',
      author: 'Textile Arts Collective',
      difficulty: 'Intermediate'
    },
    {
      id: 21,
      title: 'Art of Japanese Paper Folding (Origami)',
      description: 'From basic folds to complex designs, learn the meditative art of origami paper folding.',
      type: 'course',
      category: 'crafts',
      modules: 8,
      duration: '5 hours',
      link: 'https://www.youtube.com/watch?v=q6izHmwWEkQ',
      author: 'Paper Arts Academy',
      difficulty: 'All Levels'
    },
    {
      id: 22,
      title: 'Woodworking Fundamentals: Small Projects',
      description: 'Start woodworking with simple tools and techniques to create beautiful handcrafted items.',
      type: 'video',
      category: 'crafts',
      duration: '1h 45min',
      thumbnail: '/api/placeholder/320/180',
      source: 'YouTube',
      link: 'https://www.youtube.com/watch?v=zCNgrOR8FEU',
      author: 'Woodcraft Studio',
      difficulty: 'Beginner'
    }
  ];

  // Filter resources based on active tab
  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeTab);

  // Handle resource access - opens resource in new tab
  const handleAccessResource = (resource) => {
    if (resource.link) {
      window.open(resource.link, '_blank');
    }
  };

  // Component for resource card based on type
  const ResourceCard = ({ resource }) => {
    const getResourceIcon = () => {
      switch(resource.type) {
        case 'video':
          return (
            <div className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
          );
        case 'document':
          return (
            <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
          );
        case 'course':
          return (
            <div className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
          );
        case 'webinar':
          return (
            <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
              </svg>
            </div>
          );
        default:
          return null;
      }
    };

    // For video resources, extract YouTube video ID from link for thumbnail
    const getVideoThumbnail = (link) => {
      if (link && link.includes('youtube.com')) {
        const videoId = link.split('v=')[1]?.split('&')[0];
        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        }
      }
      return resource.thumbnail;
    };

    const videoThumbnail = resource.type === 'video' ? getVideoThumbnail(resource.link) : null;

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        {resource.type === 'video' && (
          <div className="relative cursor-pointer" onClick={() => handleAccessResource(resource)}>
            <img 
              src={videoThumbnail} 
              alt={resource.title} 
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white text-sm px-2 py-1">
              {resource.duration}
            </div>
          </div>
        )}
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            {getResourceIcon()}
            <span className="ml-2 text-sm font-medium text-gray-500 uppercase">
              {resource.type}
            </span>
            <span className="ml-auto text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
              {resource.difficulty}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
          <p className="text-gray-600 mb-4">{resource.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-3">By: {resource.author}</span>
            {resource.format && <span>Format: {resource.format}</span>}
            {resource.pages && <span>{resource.pages} pages</span>}
            {resource.modules && <span>{resource.modules} modules</span>}
          </div>
          
          <button 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => handleAccessResource(resource)}
          >
            Access Resource
          </button>
        </div>
      </div>
    );
  };

  // Search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [levelFilter, setLevelFilter] = useState('All Levels');

  // Apply all filters
  const applyFilters = () => {
    let filtered = resources;
    
    // Filter by category
    if (activeTab !== 'all') {
      filtered = filtered.filter(resource => resource.category === activeTab);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(term) || 
        resource.description.toLowerCase().includes(term) ||
        resource.author.toLowerCase().includes(term)
      );
    }
    
    // Filter by type
    if (typeFilter !== 'All Types') {
      const type = typeFilter.toLowerCase().slice(0, -1); // Remove plural 's'
      filtered = filtered.filter(resource => resource.type === type);
    }
    
    // Filter by difficulty level
    if (levelFilter !== 'All Levels') {
      filtered = filtered.filter(resource => resource.difficulty === levelFilter);
    }
    
    return filtered;
  };

  const displayedResources = applyFilters();

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Training Resources</h1>
          <p className="text-gray-600 mt-2">
            Enhance your skills with our curated collection of learning materials including videos, documents, courses, and webinars.
          </p>
        </header>

        {/* Category filters */}
        <div className="flex overflow-x-auto pb-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search and filters section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row items-center">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:ml-auto">
            <select 
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option>All Types</option>
              <option>Videos</option>
              <option>Documents</option>
              <option>Courses</option>
              <option>Webinars</option>
            </select>
            
            <select 
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {/* Empty state */}
        {displayedResources.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No resources found</h3>
            <p className="mt-1 text-sm text-gray-500">Try changing your search or filter criteria.</p>
          </div>
        )}

        {/* Featured resources section - added crafts learning path */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Frontend Development Path</h3>
              <p className="mb-4">Master HTML, CSS, JavaScript and modern frameworks with this curated learning path.</p>
              <div className="flex items-center text-sm mb-4">
                <span className="mr-4">12 Resources</span>
                <span>Beginner to Advanced</span>
              </div>
              <button 
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G', '_blank')}
              >
                Start Learning
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Leadership & Management</h3>
              <p className="mb-4">Develop essential leadership skills needed to manage teams and drive organizational success.</p>
              <div className="flex items-center text-sm mb-4">
                <span className="mr-4">8 Resources</span>
                <span>Intermediate</span>
              </div>
              <button 
                className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50 transition-colors"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PLnQnm7iBiA909E7BLp4HDs8TkgWzShI4E', '_blank')}
              >
                Start Learning
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Handcrafts & Fiber Arts</h3>
              <p className="mb-4">Explore traditional crafting techniques from pottery and weaving to paper arts and textiles.</p>
              <div className="flex items-center text-sm mb-4">
                <span className="mr-4">10 Resources</span>
                <span>All Levels</span>
              </div>
              <button 
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition-colors"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PLJaXtpOy5YCMPnK9xZQd5qe8s_CscJ157', '_blank')}
              >
                Start Learning
              </button>
            </div>
          </div>
        </section>

        {/* Need help section */}
        <section className="mt-12 bg-gray-100 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Need personalized learning recommendations?</h2>
              <p className="text-gray-600">Our learning advisors can help you create a customized learning plan based on your career goals.</p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 text-center">
              <button 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => window.open('https://calendly.com/', '_blank')}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrainingResourcesPage;