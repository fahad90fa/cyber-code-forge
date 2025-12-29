import SectionTitle from '../SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Lahore, Pakistan + International Remote',
      duration: '2021 – Present',
      type: 'Self-Employed',
      responsibilities: [
        'Led 30+ web projects including crypto dashboards and eCommerce systems',
        'Built real-time gaming systems with WebSocket integration',
        'Integrated AI voice bots for enhanced user experiences',
        'Created automated scraping tools for data collection',
        'Leveraged OpenAI, Web3.js, and WhatsApp APIs for custom solutions',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'OpenAI', 'Web3.js', 'Python'],
      color: 'primary',
    },
    {
      title: 'Backend Developer',
      company: 'TechNova Solutions',
      location: 'Remote',
      duration: 'July 2020 – February 2022',
      type: 'Full-time Remote',
      responsibilities: [
        'Designed and implemented scalable RESTful APIs using Node.js and Express',
        'Developed backend services for user authentication, data processing, and system logging',
        'Integrated MySQL and MongoDB databases to manage structured and unstructured data',
      ],
      technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs', 'JWT'],
      color: 'secondary',
    },
    {
      title: 'Frontend Developer',
      company: 'MicroTech Star',
      location: 'Lahore, Pakistan',
      duration: 'January 2019 – August 2019',
      type: 'Full-time On-site',
      responsibilities: [
        'Developed responsive UIs using React.js, HTML, and CSS',
        'Improved website performance by optimizing images, lazy loading, and reducing bundle size',
        'Built reusable components using React Hooks, TypeScript, reducing development time by 30%',
      ],
      technologies: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Webpack', 'Vite'],
      color: 'accent',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; dot: string }> = {
      primary: { border: 'border-l-primary', bg: 'bg-primary', dot: 'bg-primary glow-green' },
      secondary: { border: 'border-l-secondary', bg: 'bg-secondary', dot: 'bg-secondary glow-cyan' },
      accent: { border: 'border-l-accent', bg: 'bg-accent', dot: 'bg-accent glow-purple' },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle command="work_history" subtitle="EXPERIENCE" />

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div 
            className={`absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transition-all duration-1000 ${isVisible ? 'h-full' : 'h-0'}`}
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${colorClasses.dot} transition-all duration-500`} style={{ transform: 'translate(-50%, 0)' }} />

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`cyber-card border-l-4 ${colorClasses.border}`}>
                      <div className="mb-4">
                        <h3 className="font-heading text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.duration}</span>
                          <span>•</span>
                          <span className="text-secondary">{exp.type}</span>
                        </div>
                      </div>

                      <ul className={`space-y-2 mb-4 text-sm text-muted-foreground ${isEven ? 'md:text-left' : ''}`}>
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">›</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-start' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
