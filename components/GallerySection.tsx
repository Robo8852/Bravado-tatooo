'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { TATTOO_PORTFOLIO } from '../data';
import { SectionHeading } from './SectionHeading';

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-bravado-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading title="Gallery" subtitle="Our Work" />

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TATTOO_PORTFOLIO.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-bravado-dark overflow-hidden group rounded-sm relative"
            >
              <Image
                src={item.url}
                alt={item.category}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
