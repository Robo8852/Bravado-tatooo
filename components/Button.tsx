import { cn } from "../lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-display font-bold uppercase tracking-wider transition-all duration-300",
          {
            "bg-bravado-neon text-bravado-dark hover:bg-bravado-neon-hover box-glow-hover": variant === 'primary',
            "border-2 border-bravado-neon text-bravado-neon hover:bg-bravado-neon hover:text-bravado-dark box-glow-hover": variant === 'outline',
            "text-white hover:text-bravado-neon": variant === 'ghost',
            "px-4 py-2 text-sm": size === 'sm',
            "px-6 py-3 text-base": size === 'md',
            "px-8 py-4 text-lg": size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
