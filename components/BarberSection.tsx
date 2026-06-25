import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { BARBERS, BARBER_SERVICES, CUTS_PORTFOLIO } from '../data';
import { Button } from './Button';

export const BarberSection = () => {
  return (
    <section id="barbershop" className="py-24 bg-white text-bravado-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading title="Barbershop" subtitle="Clean Fades & Classic Cuts" className="text-bravado-dark" />
          <p className="text-gray-600 text-lg">
            Sharp lines, smooth fades, and a traditional barbershop atmosphere. 
            Walk-ins are welcome, but appointments guarantee your spot in the chair.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Services & Pricing */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl uppercase font-bold mb-10 border-b border-gray-200 pb-4">Services</h3>
            <div className="space-y-6">
              {BARBER_SERVICES.map((service, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-baseline border-b border-gray-100 pb-6 last:border-0 group">
                  <div className="pr-4">
                    <h4 className="font-bold text-lg uppercase tracking-tight group-hover:text-bravado-neon transition-colors">{service.name}</h4>
                    {service.description && (
                      <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                    )}
                  </div>
                  <div className="mt-2 sm:mt-0 font-display font-bold text-xl text-bravado-dark whitespace-nowrap">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 text-center rounded-sm">
              <p className="text-gray-600 mb-6 font-medium">Walk-ins always welcome, or secure your spot.</p>
              <a href="#contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Book a Cut</Button>
              </a>
            </div>
          </div>

          {/* Barbers & Gallery */}
          <div className="lg:col-span-5 space-y-16">
            
            <div>
              <h3 className="font-display text-2xl uppercase font-bold mb-8 border-b border-gray-200 pb-4">The Barbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BARBERS.map(barber => (
                  <div key={barber.id} className="group">
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 rounded-sm relative">
                      <Image
                        src={barber.image}
                        alt={barber.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <h4 className="font-display text-lg font-bold uppercase">{barber.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{barber.specialty}</p>
                    <a href={barber.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center text-gray-400 hover:text-bravado-dark transition-colors">
                      <Instagram size={16} className="mr-1" />
                      <span className="text-xs font-medium">Follow</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl uppercase font-bold mb-6 border-b border-gray-200 pb-4">Recent Cuts</h3>
              <div className="grid grid-cols-2 gap-4">
                {CUTS_PORTFOLIO.map(cut => (
                  <div key={cut.id} className="aspect-square bg-gray-100 overflow-hidden rounded-sm group relative">
                    <Image
                      src={cut.url}
                      alt="Haircut"
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
