import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink, TrendingUp, Code, Brain } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'EduSkills Foundation®',
      position: 'AWS CLOUD VIRTUAL INTERNSHIP',
      duration: 'Nov 2025 - Present',
      location: 'Remote',
      type: 'Internship',
      description: 'Working with Amazon Web Services (AWS) cloud technologies. Gaining hands-on experience with cloud infrastructure, services, and modern cloud development practices.',
      technologies: ['Amazon Web Services (AWS)', 'Cloud Computing', 'Cloud Infrastructure', 'Virtual Internship'],
      icon: TrendingUp,
      color: 'from-orange-500 to-yellow-600'
    },
    {
      company: 'Coding Ninjas 10x SRM',
      position: 'Technical Team Member',
      duration: 'Oct 2025 - Present',
      location: 'SRM University, Chennai, Tamil Nadu, India',
      type: 'Team Member',
      description: 'As a Web Developer on the technical team, I\'m the one who brings our club\'s ideas to life on the web! I love diving into code to build cool features for our website, whether it\'s making event sign-ups seamless or creating interactive elements.',
      technologies: ['Web Development', 'Full-Stack Development', 'Team Collaboration', 'Technical Leadership'],
      icon: Code,
      color: 'from-purple-500 to-pink-600'
    },
    {
      company: 'Edunet Foundation',
      position: 'Green Skills using AI technologies',
      duration: 'Jul 2025 - Aug 2025',
      location: 'Bengaluru, Karnataka, India',
      type: 'Internship',
      description: 'Focused on developing green technologies using artificial intelligence. Worked on sustainable AI solutions and gained expertise in environmentally conscious technology development.',
      technologies: ['Artificial Intelligence (AI)', 'Machine Learning', 'Green Technology', 'Sustainable Development'],
      icon: Brain,
      color: 'from-green-500 to-teal-600'
    },
    {
      company: 'ELEVATE LABS',
      position: 'AI ML',
      duration: 'Jun 2025 - Jul 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Developed AI and Machine Learning solutions at ELEVATE LABS. Gained practical experience in AI model development, data analysis, and implementing machine learning algorithms for real-world applications.',
      technologies: ['Artificial Intelligence (AI)', 'Machine Learning', 'Data Analysis', 'Model Development'],
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 mr-1" />
            Career Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 break-words">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A timeline of my professional journey and contributions in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line with Gradient */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60 blur-sm" />
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-12 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced Timeline Dot with Icon */}
                  <div className="absolute left-2 sm:left-4 lg:left-1/2 lg:-translate-x-1/2 z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br bg-card border-2 sm:border-4 border-primary/20 rounded-full flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300">
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`w-full lg:w-5/12 ml-14 sm:ml-20 lg:ml-0 ${index % 2 === 0 ? '' : 'lg:mr-20'}`}>
                    <Card className="glass-effect border-border/50 hover:border-primary/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
                      <CardContent className="p-6 relative overflow-hidden">
                        {/* Subtle Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        <div className="space-y-4 relative z-10">
                          <div className="flex flex-wrap items-center gap-2 justify-between">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-3 h-3 mr-1" />
                              {exp.type}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{exp.duration}</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {exp.position}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <span className="font-medium gradient-text">{exp.company}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="text-xs glass-effect border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-fade-in-up px-4" style={{animationDelay: '1s'}}>
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group">
            <CardContent className="p-6 sm:p-8 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-pulse-glow">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 gradient-text break-words">Looking for New Opportunities</h3>
                <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                  I'm currently open to full-time positions and exciting projects
                </p>
                <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
                  <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 px-4 py-2 text-sm transition-all duration-300">
                    ✨ Available
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 hover:bg-accent/10 px-4 py-2 text-sm transition-all duration-300">
                    🌍 Remote Friendly
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 px-4 py-2 text-sm transition-all duration-300">
                    🚀 Ready to Start
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;