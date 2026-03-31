import React from 'react';
import { ArrowRight } from 'lucide-react';
import { missionStatement } from '../mockData';

const MissionSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-light text-white leading-snug max-w-4xl">
            {missionStatement.text}
          </h2>
          <a
            href={missionStatement.ctaLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-slate-800 px-8 py-3 rounded text-sm font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            {missionStatement.ctaText}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;