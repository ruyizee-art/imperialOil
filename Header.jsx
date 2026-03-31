import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { navigationItems } from '../mockData';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xs">I</span>
              </div>
              <span className="text-xl font-light tracking-wide">Imperial</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="text-sm font-light hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">EN</a>
              <span className="text-gray-500">•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">FR</a>
            </div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-gray-300 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 z-50">
          <div className="max-w-4xl mx-auto px-4 pt-32">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light">Search</h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-transparent border-b-2 border-white py-4 text-2xl font-light focus:outline-none focus:border-blue-500 transition-colors"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;