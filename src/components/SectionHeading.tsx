import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  className,
  align = 'center' 
}) => {
  return (
    <div className={cn(
      "mb-12",
      {
        "text-left": align === 'left',
        "text-center": align === 'center',
        "text-right": align === 'right',
      },
      className
    )}>
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-bravado-neon font-mono uppercase tracking-widest text-sm text-glow">
          {subtitle}
        </p>
      )}
    </div>
  );
};
