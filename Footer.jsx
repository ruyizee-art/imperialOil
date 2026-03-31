import React from 'react';
import { Facebook, Linkedin, Youtube, Phone } from 'lucide-react';
import { footerLinks, contactInfo } from '../mockData';

const Footer = () => {
  const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Footer Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.url}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-gray-600">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Contact and Social Icons */}
          <div className="flex items-center gap-6">
            {/* Contact Phone */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Contact phone"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">{contactInfo.phone}</span>
            </a>

            <span className="text-gray-600">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;