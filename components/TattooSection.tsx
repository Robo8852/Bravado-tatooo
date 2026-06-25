'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronDown, PenTool, ShieldCheck, CalendarCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { TATTOO_PORTFOLIO, TATTOO_FAQS } from '../data';
import { Button } from './Button';

const VALUES = [
  { icon: PenTool, title: 'Custom Work', description: 'Every piece is designed around your idea, placement, and style — never flash off a wall.' },
  { icon: ShieldCheck, title: 'Clean & Sterile', description: 'Single-use needles and a fully sterilized setup, every session. Clients 18 and older with valid photo ID.' },
  { icon: CalendarCheck, title: 'By Appointment', description: 'Book a consultation and get a focused, unrushed session — from first sketch to final line.' },
];

export const TattooSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filters = ['All', ...Array.from(new Set(TATTOO_PORTFOLIO.map(item => item.category)))];
  
  const filteredPortfolio = activeFilter === 'All' 
    ? TATTOO_PORTFOLIO 
    : TATTOO_PORTFOLIO.filter(item => item.category === activeFilter);

  return (
    <section id="tattoos" className="py-24 bg-bravado-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading title="Tattoo Studio" subtitle="Precision & Craft" />
          <p className="text-gray-400 text-lg">
            We specialize in custom, high-quality tattoos in a clean, professional, and welcoming environment.
            Every piece is brought to life with precision and care.
          </p>
        </div>

        {/* Why Bravado */}
        <div className="mb-32">
          <h3 className="font-display text-2xl uppercase font-bold mb-10 text-center border-b border-bravado-surface pb-4">Why Bravado</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-bravado-surface rounded-sm p-8 text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-bravado-neon/10 text-bravado-neon mb-6 group-hover:bg-bravado-neon/20 transition-colors">
                  <value.icon size={28} />
                </div>
                <h4 className="font-display text-xl font-bold uppercase mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-bravado-surface pb-4">
            <h3 className="font-display text-2xl uppercase font-bold mb-4 md:mb-0">Portfolio</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider rounded-sm transition-colors ${
                    activeFilter === filter 
                      ? 'bg-bravado-neon text-bravado-dark font-bold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {filteredPortfolio.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square bg-bravado-surface overflow-hidden group cursor-pointer relative"
                >
                  <Image
                    src={item.url}
                    alt={item.category}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* FAQ & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="font-display text-2xl uppercase font-bold mb-8">FAQ & Aftercare</h3>
            <div className="space-y-4">
              {TATTOO_FAQS.map((faq, index) => (
                <div key={index} className="bg-bravado-surface rounded-sm">
                  <button 
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown className={`transform transition-transform ${openFAQ === index ? 'rotate-180 text-bravado-neon' : 'text-gray-500'}`} />
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-gray-400 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-bravado-surface p-10 text-center rounded-sm border border-bravado-dark relative overflow-hidden group">
            <div className="absolute inset-0 bg-bravado-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-display text-3xl uppercase font-bold mb-4 relative z-10">Ready for Ink?</h3>
            <p className="text-gray-400 mb-8 relative z-10">
              Fill out our request form with your ideas, placement, and size. We typically respond within 48 hours.
            </p>
            <a href="#contact" className="relative z-10 block">
              <Button size="lg" className="w-full">Request a Consultation</Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
