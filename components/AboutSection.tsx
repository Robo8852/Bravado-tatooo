import React from 'react';
import Image from 'next/image';
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
              <Image
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600"
                alt="Tattooing process"
                width={600}
                height={750}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="rounded-sm object-cover aspect-[4/5] w-full"
              />
              <Image
                src="https://images.unsplash.com/photo-1564426622559-5af68da63b96?auto=format&fit=crop&q=80&w=600"
                alt="Tattoo artist at work"
                width={600}
                height={750}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="rounded-sm object-cover aspect-[4/5] w-full mt-8"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeading title="The Shop" subtitle={SITE_DATA.tagline} align="left" />
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                {SITE_DATA.name} is a custom tattoo studio in Palmetto, Florida, built on a simple idea: every tattoo should be designed around you. Great work comes from precision, trust, and individual expression—and the time it takes to do it right.
              </p>
              <p>
                The space is welcoming but with an edge. Whether you're here for a full sleeve or your first small piece, you'll find a clean, focused environment and an artist who takes the work seriously without taking himself too seriously.
              </p>
              <p>
                No attitude. Just bold, custom ink.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 border-t border-bravado-surface pt-8">
              <div className="flex-1">
                <h4 className="font-display font-bold uppercase text-white mb-2">Studio Hours</h4>
                <p className="text-gray-400">{SITE_DATA.hours.tattoo}</p>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-bold uppercase text-white mb-2">Consultations</h4>
                <p className="text-gray-400">By appointment</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
