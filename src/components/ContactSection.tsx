import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SITE_DATA } from '../data';
import { Button } from './Button';

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bravado-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading title="Booking & Contact" subtitle="Get in touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start">
              <MapPin className="text-bravado-neon w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-display font-bold uppercase text-xl mb-2">Location</h4>
                <p className="text-gray-400">{SITE_DATA.location}</p>
                <a href="#" className="inline-block mt-2 text-bravado-neon hover:text-white transition-colors text-sm uppercase tracking-wider font-bold">Get Directions &rarr;</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-bravado-neon w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-display font-bold uppercase text-xl mb-2">Phone</h4>
                <a href={`tel:${SITE_DATA.phone.replace(/[^0-9]/g, '')}`} className="text-gray-400 hover:text-white transition-colors text-lg">
                  {SITE_DATA.phone}
                </a>
                <p className="text-gray-500 text-sm mt-1">Call for walk-in availability.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="text-bravado-neon w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-display font-bold uppercase text-xl mb-2">Email</h4>
                <a href={`mailto:${SITE_DATA.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {SITE_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-bravado-surface">
              <h4 className="font-display font-bold uppercase text-xl mb-4">Hours of Operation</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span className="font-medium text-white">Tattoos</span>
                  <span>{SITE_DATA.hours.tattoo}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span className="font-medium text-white">Barbershop</span>
                  <span>{SITE_DATA.hours.barber}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-bravado-surface p-8 rounded-sm border border-gray-800">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-bravado-neon/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-bravado-neon rounded-full" />
                </div>
                <h4 className="font-display text-2xl font-bold uppercase mb-2">Request Sent</h4>
                <p className="text-gray-400">We've received your inquiry and will be in touch shortly.</p>
                <Button 
                  className="mt-8" 
                  variant="outline"
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="font-display text-2xl font-bold uppercase mb-6 border-b border-gray-800 pb-4">Request an Appointment</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" id="name" required className="w-full bg-bravado-dark border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-bravado-neon transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" id="email" required className="w-full bg-bravado-dark border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-bravado-neon transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" id="phone" required className="w-full bg-bravado-dark border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-bravado-neon transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Service</label>
                    <select id="service" className="w-full bg-bravado-dark border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-bravado-neon transition-colors appearance-none">
                      <option value="tattoo">Tattoo Consultation</option>
                      <option value="barber">Haircut / Barber Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Details (Idea, Placement, Artist)</label>
                  <textarea id="message" rows={4} required className="w-full bg-bravado-dark border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-bravado-neon transition-colors resize-none"></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
