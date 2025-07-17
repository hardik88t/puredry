'use client';

import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'aria-label'?: string;
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const icons = {
  onion: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 4 2 5.5C9 15 10 16 12 16s3-1 4-2.5c1-1.5 2-3.5 2-5.5 0-3.5-2.5-6-6-6zm0 2c2.5 0 4 1.5 4 4 0 1.5-.5 3-1.5 4-.5.5-1 1-2.5 1s-2-.5-2.5-1C8.5 11 8 9.5 8 8c0-2.5 1.5-4 4-4z"/>
      <circle cx="12" cy="8" r="2" opacity="0.6"/>
    </svg>
  ),
  carrot: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M16 6c0-1.1-.9-2-2-2s-2 .9-2 2v2h4V6zm-6 4V8c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h5z"/>
      <path d="M8 14h8v2H8v-2zm0 4h8v2H8v-2z" opacity="0.6"/>
    </svg>
  ),
  pepper: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2c-1.1 0-2 .9-2 2v1c-2.8 0-5 2.2-5 5v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-2.8-2.2-5-5-5V4c0-1.1-.9-2-2-2zm0 5c1.7 0 3 1.3 3 3v8H9v-8c0-1.7 1.3-3 3-3z"/>
      <circle cx="12" cy="12" r="1" opacity="0.6"/>
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2c-1.1 0-2 .9-2 2 0 .5.2 1 .6 1.4C9.8 6.2 9 7.5 9 9v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V9c0-1.5-.8-2.8-1.6-3.6.4-.4.6-.9.6-1.4 0-1.1-.9-2-2-2z"/>
      <path d="M11 9h2v8h-2V9z" opacity="0.6"/>
      <circle cx="12" cy="6" r="1"/>
    </svg>
  ),
  herbs: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L8 6v4l4-4 4 4V6l-4-4zm0 8L8 14v4l4-4 4 4v-4l-4-4z"/>
      <path d="M6 12c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-6z" opacity="0.3"/>
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.8L18.2 12H17v6H7v-6H5.8L12 5.8z"/>
      <rect x="9" y="14" width="2" height="4" opacity="0.6"/>
      <rect x="13" y="14" width="2" height="4" opacity="0.6"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <line x1="4" y1="6" x2="20" y2="6"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M9 5l7 7-7 7"/>
    </svg>
  ),
  'arrow-right': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M9 5l7 7-7 7"/>
    </svg>
  ),
  'shopping-cart': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  ),
  package: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  minus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  ),
  loading: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  )
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  className = '', 
  'aria-label': ariaLabel 
}) => {
  const iconElement = icons[name as keyof typeof icons];
  
  if (!iconElement) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <div 
      className={`${iconSizes[size]} ${className}`}
      role="img"
      aria-label={ariaLabel || `${name} icon`}
    >
      {iconElement}
    </div>
  );
};

export default Icon;
