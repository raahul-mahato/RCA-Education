
import React, { useState, useMemo } from 'react';
import { COURSES } from '../constants.tsx';
import type { Course } from '../types';

const CourseGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'SSC', 'Railway', 'WBCS', 'Police', 'Banking'];

  const filteredCourses = useMemo(() => {
    return activeTab === 'All' 
      ? COURSES 
      : COURSES.filter(course => course.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-rca-blue sm:text-4xl">Explore Our Courses</h2>
          <p className="mt-4 text-xl text-gray-500">Quality education at the most affordable price points.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-rca-orange text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-rca-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {course.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rca-orange transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded border border-gray-100 uppercase font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <i className="far fa-calendar-alt mr-2 text-rca-orange"></i>
                  <span>{course.duration}</span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-black text-rca-blue">{course.price}</span>
                  <button className="bg-rca-orange/10 text-rca-orange hover:bg-rca-orange hover:text-white px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
