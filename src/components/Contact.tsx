import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS with public key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    console.log('🔧 Environment Variables Loaded:');
    console.log('   Service ID:', serviceId || 'MISSING ❌');
    console.log('   Template ID:', templateId || 'MISSING ❌');
    console.log('   Public Key:', publicKey ? 'SET ✅' : 'MISSING ❌');
    
    if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(publicKey);
      console.log('✅ EmailJS initialized with public key');
    } else {
      console.warn('⚠️ EmailJS public key not found in environment variables');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // Debug: Log what we're getting from environment
      console.log('🔍 Environment check:', {
        serviceId: serviceId || 'UNDEFINED',
        templateId: templateId || 'UNDEFINED',
        allEnvVars: import.meta.env
      });

      // Validate credentials
      if (!serviceId || serviceId === 'YOUR_SERVICE_ID') {
        throw new Error(`EmailJS Service ID not configured. Got: ${serviceId || 'undefined'}`);
      }
      if (!templateId || templateId === 'YOUR_TEMPLATE_ID') {
        throw new Error(`EmailJS Template ID not configured. Got: ${templateId || 'undefined'}`);
      }

      // Debug logging
      console.log('Sending email with:', { 
        serviceId, 
        templateId,
        data: {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        }
      });

      // Send email using EmailJS (public key already initialized in useEffect)
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        }
      );

      console.log('Email sent successfully:', result);

      toast({
        title: "Message Sent! ✅",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      console.error('Error text:', error?.text);
      console.error('Error status:', error?.status);
      console.error('Full error object:', error);
      
      toast({
        title: "Error",
        description: `Failed to send: ${error?.text || error?.message || 'Unknown error'}. Opening mail client as fallback.`,
        variant: "destructive",
      });

      // Fallback: open user's mail client with prefilled subject and body so messages are still delivered
      try {
        const mailto = `mailto:rangeshpandian@gmail.com?subject=${encodeURIComponent(
          'Portfolio Contact: ' + formData.subject
        )}&body=${encodeURIComponent(
          'Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\n' + formData.message
        )}`;
        // Open in a new window/tab to not disrupt SPA routing
        window.open(mailto);
      } catch (e) {
        console.error('Failed to open mail client fallback:', e);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rangeshpandian@gmail.com',
      href: 'mailto:rangeshpandian@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8190901516',
      href: 'tel:+918190901516',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, TamilNadu',
      href: '#',
      color: 'text-primary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RangeshPandianPT',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rangeshpandian-pt-428b04325/',
      color: 'hover:text-accent'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/_rangesh_07/',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 glass-effect text-xs sm:text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 break-words">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <a 
                        href={contact.href}
                        className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
                      >
                        <div className={`p-3 rounded-lg bg-secondary/20 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                        {contact.href !== '#' && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`glass-effect border-border/50 ${social.color} transition-all duration-300 hover:scale-110`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold gradient-text">Available for Work</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I'm currently open to new opportunities and exciting projects. 
                  Whether you're looking for a full-time developer or need help with a specific project, 
                  I'd love to hear from you!
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-primary/20">✅ Full-time</Badge>
                  <Badge variant="outline" className="border-accent/20">🌍 Remote</Badge>
                  <Badge variant="outline" className="border-primary/20">💼 Freelance</Badge>
                  <Badge variant="outline" className="border-accent/20">🚀 Startup Ready</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-effect border-border/50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="glass-effect border-border/50 focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass-effect border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="glass-effect border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project or how I can help..."
                      rows={6}
                      required
                      className="glass-effect border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 glow-effect disabled:opacity-50"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;