'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../lib/utils';
import { SITE_DATA } from '../data';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tattoos', href: '#tattoos' },
    { name: 'Barbershop', href: '#barbershop' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-bravado-dark/95 backdrop-blur-md border-bravado-surface py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white uppercase">
              {SITE_DATA.name}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-bravado-neon transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button size="sm" variant="outline">Book Now</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bravado-surface border-t border-bravado-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-white hover:text-bravado-neon uppercase tracking-wider text-center border-b border-bravado-dark last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-4 text-center">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Book Now</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
