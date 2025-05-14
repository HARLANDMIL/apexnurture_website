import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  endDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft('Offer Ended');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    };
    update();
    const interval = setInterval(update, 1000 * 60); // update every minute
    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className={`font-orbitron text-lg text-orange-400 neon-orange-glow mt-4 ${className}`}>{`Offer Ends in ${timeLeft}!`}</div>
  );
};

export default CountdownTimer;
