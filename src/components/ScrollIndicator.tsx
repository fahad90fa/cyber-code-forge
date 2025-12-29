import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
      aria-label="Scroll down"
    >
      <span className="text-sm font-mono opacity-60 group-hover:opacity-100">scroll</span>
      <div className="animate-bounce-scroll">
        <ChevronDown className="w-6 h-6" />
      </div>
    </button>
  );
};

export default ScrollIndicator;
