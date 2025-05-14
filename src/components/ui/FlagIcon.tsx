import React from 'react';

interface FlagIconProps {
  country: 'UAE' | 'SA';
  className?: string;
  size?: number;
}

const FlagIcon: React.FC<FlagIconProps> = ({ country, className = '', size = 20 }) => {
  if (country === 'UAE') {
    // UAE flag SVG
    return (
      <span className={className} style={{ display: 'inline-block', width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#fff" />
          <rect width="8" height="24" fill="#e94e34" />
          <rect x="8" width="16" height="8" fill="#009a49" />
          <rect x="8" y="16" width="16" height="8" fill="#000" />
        </svg>
      </span>
    );
  }
  if (country === 'SA') {
    // South Africa flag SVG (simplified)
    return (
      <span className={className} style={{ display: 'inline-block', width: size, height: size }}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#007847" />
          <polygon points="0,0 10,12 0,24" fill="#ffb915" />
          <polygon points="0,0 24,0 24,24 0,24 10,12" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      </span>
    );
  }
  return null;
};

export default FlagIcon;
