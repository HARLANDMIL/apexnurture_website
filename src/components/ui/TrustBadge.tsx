import React from 'react';

interface TrustBadgeProps {
  text: string;
  colorClass?: string; // e.g. 'bg-purple-600', 'bg-green-500', 'bg-pink-500'
  icon?: React.ReactNode;
  className?: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ text, colorClass = 'bg-purple-600', icon, className = '' }) => (
  <div
    className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-orbitron font-bold text-white shadow-lg ${colorClass} neon-badge-glow ${className}`}
    style={{
      textShadow: '0 0 8px #800080, 0 0 16px #800080',
      border: '2px solid #fff3',
      boxShadow: '0 0 16px 2px #80008080',
    }}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {text}
  </div>
);

export default TrustBadge;
