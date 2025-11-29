import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, Instagram, Code } from 'lucide-react';
import RangeshProfilePic from '/src/assets/rangesh-profile.jpg'; // Make sure this path is correct

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Tech Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 px-4 sm:px-6 lg:pt-24 lg:pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-muted/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rotate-45 animate-spin-slow" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/30 rotate-45 animate-spin-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up relative">
            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur-xl -z-10" />
            <div>
              <Badge variant="outline" className="mb-4 text-xs sm:text-sm glass-effect border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-pulse-glow">
                🚀 Building & Learning Every Day
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight whitespace-nowrap" style={{ animationDelay: '0.2s' }}>
                <span className="gradient-text">RANGESHPANDIAN PT</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-3 lg:mb-4 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Full Stack Developer • Data Scientist
              </p>
              <div className="h-8 mb-4 lg:mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground transition-all duration-500 animate-pulse-glow">
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Hey there! 👋 When I'm not coding, you'll find me experimenting with new frameworks or contributing to open-source projects. 
              This portfolio showcases projects I've actually built and the journey behind each one.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="break-all">+91 8190901516</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="break-all">rangeshpandian@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Chennai, TamilNadu</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 glow-effect btn-hover-lift hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-pulse-glow"
                onClick={() => scrollToSection('contact')}
              >
                Let's Chat! ☕
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto glass-effect border-primary/30 hover:bg-primary/10 btn-hover-lift hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                onClick={() => scrollToSection('experience')}
              >
                See My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group animate-pulse-glow"
                asChild
              >
                <a href="https://github.com/RangeshPandianPT" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
                asChild
              >
                <a href="https://www.linkedin.com/in/rangeshpandian-pt-428b04325/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
                asChild
              >
                <a href="https://leetcode.com/u/RANGESHPANDIAN/" target="_blank" rel="noopener noreferrer">
                  <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
                asChild
              >
                <a href="https://www.instagram.com/_rangesh_07/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
                asChild
              >
                <a href="mailto:rangeshpandian@gmail.com">
                  <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-effect border border-border/20">
                <img 
                  src={RangeshProfilePic}
                  alt="Rangesh Pandian PT Profile Picture"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-500" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 glass-effect p-2 sm:p-4 rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-300 transform group-hover:scale-105">
                  <p className="text-white text-xs sm:text-sm font-medium">"Code is poetry written in logic."</p>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full hover:scale-125 transition-transform duration-300" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full hover:scale-125 transition-transform duration-300" />
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-primary/50 rotate-45" />
              <div className="absolute bottom-1/3 -left-6 w-4 h-4 bg-accent/50 rounded-full" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
