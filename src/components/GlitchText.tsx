import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerOnMount?: boolean;
}

const GlitchText = ({ text, className = '', triggerOnMount = true }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (triggerOnMount) {
      const timeout = setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 500);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [triggerOnMount]);

  return (
    <span 
      className={`relative inline-block ${className} ${isGlitching ? 'animate-glitch' : ''}`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 hsl(var(--cyber-cyan)), -2px 0 hsl(var(--destructive))' 
          : 'none'
      }}
    >
      {text}
    </span>
  );
};

export default GlitchText;
