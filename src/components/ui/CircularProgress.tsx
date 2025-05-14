import React, { useEffect, useRef, useState } from 'react';

interface CircularProgressProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  trailColor?: string;
  text: string;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 120,
  strokeWidth = 10,
  color = '#00FFFF',
  trailColor = '#22223E',
  text,
  className = '',
}) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasAnimated(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progressValue = Math.min(elapsed / duration, 1) * value;
      setProgress(progressValue);
      if (progressValue < value) {
        requestAnimationFrame(animate);
      } else {
        setProgress(value);
      }
    };
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center ${className}`}> 
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trailColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s' }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={size / 5}
          fill="#fff"
          fontFamily="'Orbitron', sans-serif"
          style={{ textShadow: '0 0 10px #80008080' }}
        >
          {Math.round(progress)}%
        </text>
      </svg>
      <div className="mt-2 text-center text-white font-orbitron text-lg" style={{ textShadow: '0 0 10px #80008080' }}>{text}</div>
    </div>
  );
};

export default CircularProgress;
