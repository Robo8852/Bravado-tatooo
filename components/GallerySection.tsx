'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { TATTOO_PORTFOLIO, CUTS_PORTFOLIO } from '../data';
import { SectionHeading } from './SectionHeading';

export const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Tattoos' | 'Cuts'>('All');

  const getItems = () => {
    const tattoos = TATTOO_PORTFOLIO.map(item => ({ ...item, type: 'tattoo' }));
    const cuts = CUTS_PORTFOLIO.map(item => ({ ...item, type: 'cut' }));
    
    if (activeTab === 'Tattoos') return tattoos;
    if (activeTab === 'Cuts') return cuts;
    
    // Interleave them for 'All'
    const combined = [];
    const maxLength = Math.max(tattoos.length, cuts.length);
    for (let i = 0; i < maxLength; i++) {
      if (tattoos[i]) combined.push(tattoos[i]);
      if (cuts[i]) combined.push(cuts[i]);
    }
    return combined;
  };

  const items = getItems();

  return (
    <section id="gallery" className="py-24 bg-bravado-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading title="Gallery" subtitle="Our Work" />
        
        <div className="flex justify-center space-x-4 mb-12">
          {['All', 'Tattoos', 'Cuts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 uppercase tracking-wider font-bold transition-colors border-2 rounded-sm ${
                activeTab === tab 
                  ? 'border-bravado-neon text-bravado-dark bg-bravado-neon box-glow' 
                  : 'border-bravado-dark text-gray-400 hover:border-gray-700 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="aspect-square bg-bravado-dark overflow-hidden group rounded-sm relative"
              >
                <Image
                  src={item.url}
                  alt={item.type}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
