import AnimatedCounter from '../AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const achievements = [
    { value: 40, suffix: '+', label: 'Projects', description: 'Delivered' },
    { value: 40, suffix: '%', label: 'Faster', description: 'Delivery' },
    { value: 95, suffix: '+', label: 'Lighthouse', description: 'Score' },
    { value: 60, suffix: '%', label: 'Engagement', description: 'Boost' },
    { value: 4, suffix: '+', label: 'Years', description: 'Experience' },
    { value: 2, suffix: '+', label: 'Years', description: 'Security' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="container max-w-6xl mx-auto px-4">
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary group-hover:text-glow-green transition-all">
                <AnimatedCounter 
                  end={achievement.value} 
                  suffix={achievement.suffix} 
                />
              </div>
              <div className="font-mono text-sm text-foreground">{achievement.label}</div>
              <div className="text-xs text-muted-foreground">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
