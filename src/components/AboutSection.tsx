import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SITE_DATA } from '../data';
import { Button } from './Button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-bravado-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bravado-surface transform skew-x-12 translate-x-32 opacity-50 hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600" 
                alt="Tattooing process" 
                className="rounded-sm object-cover aspect-[4/5] w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" 
                alt="Barbering process" 
                className="rounded-sm object-cover aspect-[4/5] w-full mt-8"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeading title="The Shop" subtitle={SITE_DATA.tagline} align="left" />
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Founded in 2024, {SITE_DATA.name} was built on a simple idea: bring two time-honored crafts under one roof. We believe that getting a tattoo and getting a haircut share the same core values—precision, trust, and individual expression.
              </p>
              <p>
                Our space is designed to be welcoming but with an edge. Whether you're here for a 6-hour sleeve session or a 30-minute fade, you'll find a team of dedicated professionals who take their work seriously without taking themselves too seriously.
              </p>
              <p>
                No attitude. Just good cuts and bold ink.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 border-t border-bravado-surface pt-8">
              <div className="flex-1">
                <h4 className="font-display font-bold uppercase text-white mb-2">Tattoo Hours</h4>
                <p className="text-gray-400">{SITE_DATA.hours.tattoo}</p>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-bold uppercase text-white mb-2">Barber Hours</h4>
                <p className="text-gray-400">{SITE_DATA.hours.barber}</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
