'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from './Button';
import { SITE_DATA } from '../data';

export const SplitHero = () => {
  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1597852075234-fd721ac361d3?auto=format&fit=crop&q=80&w=1600"
          alt="Tattoo artist at work"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bravado-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bravado-dark via-transparent to-bravado-dark/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-4 text-glow">
          {SITE_DATA.name}
        </h1>
        <p className="text-bravado-neon text-sm sm:text-base uppercase tracking-[0.3em] mb-10">
          {SITE_DATA.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact">
            <Button size="lg">Book a Consultation</Button>
          </a>
          <a href="#gallery">
            <Button size="lg" variant="outline">Explore Work</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
