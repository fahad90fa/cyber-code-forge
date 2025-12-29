interface SectionTitleProps {
  command: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ command, subtitle, className = '' }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-2 text-glow-green">
        <span className="text-muted-foreground">&gt; </span>
        {command}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg ml-6">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
