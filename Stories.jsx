import React from 'react';
import { Linkedin } from 'lucide-react';
import { stories } from '../mockData';

const Stories = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-gray-900 mb-8">Stories</h2>
        
        {/* LinkedIn CTA */}
        <div className="bg-white rounded-lg p-6 mb-12 border border-gray-200 hover:border-blue-500 transition-colors">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <Linkedin size={24} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 mb-2">
                See more information about Imperial, find and apply to jobs that match your skills, and connect with people to advance your career.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 transition-colors"
              >
                @ImperialOil
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <a
              key={index}
              href={story.link}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span>{story.category}</span>
                  <span className="text-gray-300">•</span>
                  <span>{story.type}</span>
                  <span className="text-gray-300">•</span>
                  <span>{story.date}</span>
                </div>
                <h3 className="text-lg font-light text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {story.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;