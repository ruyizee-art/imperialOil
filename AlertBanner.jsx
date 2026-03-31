import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { alertBanner } from '../mockData';

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Info size={20} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">
            {alertBanner.message}{' '}
            <a href={alertBanner.linkUrl} className="underline hover:text-gray-200 transition-colors">
              {alertBanner.linkText}
            </a>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default AlertBanner;