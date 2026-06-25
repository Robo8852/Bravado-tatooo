import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';

export const SplitHero = () => {
  return (
    <section className="relative w-full h-[100svh] flex flex-col md:flex-row overflow-hidden">
      {/* Tattoos Half */}
      <motion.div 
        className="relative flex-1 group cursor-pointer overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200')" }}
        >
          <div className="absolute inset-0 bg-bravado-dark/70 group-hover:bg-bravado-dark/50 transition-colors duration-500" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6 group-hover:text-glow transition-all duration-300">
            Tattoo<br/>Studio
          </h2>
          <a href="#tattoos">
            <Button variant="outline" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Explore Ink
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Divider for Desktop */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-bravado-neon z-10 box-glow" />
      <div className="md:hidden absolute left-0 right-0 top-1/2 h-px bg-bravado-neon z-10 box-glow" />

      {/* Barbershop Half */}
      <motion.div 
        className="relative flex-1 group cursor-pointer overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1200')" }}
        >
          <div className="absolute inset-0 bg-bravado-dark/70 group-hover:bg-bravado-dark/50 transition-colors duration-500" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6 group-hover:text-glow transition-all duration-300">
            Barber<br/>Shop
          </h2>
          <a href="#barbershop">
            <Button variant="outline" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Cuts
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
