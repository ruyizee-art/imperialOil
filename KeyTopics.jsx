import React from 'react';
import { keyTopics } from '../mockData';

const KeyTopics = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-gray-900 mb-12">Key topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyTopics.map((topic, index) => (
            <a
              key={index}
              href={topic.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-gray-300 font-light mb-2 block">{topic.category}</span>
                <h3 className="text-xl font-light text-white group-hover:text-blue-300 transition-colors">
                  {topic.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;