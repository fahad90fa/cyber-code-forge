import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with edge function when backend is ready
    // For now, show success message
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'fahad1562009@gmail.com', href: 'mailto:fahad1562009@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 332 0407479', href: 'tel:+923320407479' },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
    { icon: Clock, label: 'Availability', value: 'Open for opportunities', status: 'available' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <div className="container max-w-6xl mx-auto">
        <SectionTitle command="contact --init" subtitle="LET'S CONNECT" />

        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Contact Form */}
          <div className="cyber-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-primary">&gt;</span> name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-primary">&gt;</span> email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-primary">&gt;</span> subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="terminal-input w-full"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-primary">&gt;</span> message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="terminal-input w-full resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90 glow-green group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="opacity-70 group-hover:opacity-100">&gt;</span>
                    send_message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-card space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-muted/50 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-mono">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground flex items-center gap-2">
                          {info.value}
                          {info.status === 'available' && (
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="cyber-card">
              <h3 className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">&gt;</span> social_links
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-muted/50 text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:fahad1562009@gmail.com"
                  className="p-4 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
