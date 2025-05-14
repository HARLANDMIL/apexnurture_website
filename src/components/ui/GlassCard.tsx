import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  borderColor?: string;
  glowColor?: string;
  className?: string;
  onHoverClass?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  borderColor = 'border-purple-500',
  glowColor = 'shadow-[0_0_24px_4px_rgba(128,0,128,0.4)]',
  className = '',
  onHoverClass = '',
}) => (
  <div
    className={`glassmorphism-card border ${borderColor} ${glowColor} ${className} transition-transform duration-300 hover:scale-105 hover:${borderColor} ${onHoverClass}`}
    style={{
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
      borderRadius: '1.5rem',
      boxShadow: '0 4px 32px 0 rgba(128,0,128,0.15)',
    }}
  >
    {children}
  </div>
);

export default GlassCard;
