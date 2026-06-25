import React from 'react';
import { SITE_DATA } from '../data';
import { Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-bravado-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-white mb-2">{SITE_DATA.name}</h2>
            <p className="text-gray-500 text-sm">{SITE_DATA.tagline}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={SITE_DATA.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-bravado-neon transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            {/* Add more social icons as needed */}
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
