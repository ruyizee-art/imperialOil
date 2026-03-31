import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroContent } from '../mockData';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroContent.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
            {heroContent.title}
          </h1>
          <a
            href={heroContent.ctaLink}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            {heroContent.ctaText}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;