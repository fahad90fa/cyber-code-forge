import { useState, useEffect } from 'react';

interface TerminalTextProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  onComplete?: () => void;
  className?: string;
}

const TerminalText = ({ 
  lines, 
  typingSpeed = 30, 
  lineDelay = 500,
  onComplete,
  className = '' 
}: TerminalTextProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    if (currentChar <= lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = lines[currentLine].slice(0, currentChar);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, lineDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, typingSpeed, lineDelay, onComplete]);

  return (
    <div className={`font-mono ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="text-primary">
          <span className="text-muted-foreground">&gt; </span>
          {line}
          {index === currentLine && !isComplete && (
            <span className="animate-cursor">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalText;
