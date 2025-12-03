import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, BookOpen, Clock, Users } from 'lucide-react';

const BlogArticles = () => {
  const articles = [
    {
      title: 'Building Scalable React Applications: Lessons from Production',
      excerpt: 'Deep dive into architectural patterns and performance optimizations that helped improve our e-commerce platform by 40%. Covering code splitting, state management, and modern React patterns.',
      category: 'React',
      readTime: '8 min read',
      publishDate: 'Dec 15, 2024',
      views: '2.4k',
      url: '#',
      featured: true,
      tags: ['React', 'Performance', 'Architecture']
    },
    {
      title: 'AI in Sustainability: Building EcoLife for Better Food Choices',
      excerpt: 'How AI-powered platforms can revolutionize consumer behavior towards sustainability. Technical insights into building EcoLife - combining meal planning, environmental impact analysis, and smart grocery management.',
      category: 'AI/Sustainability',
      readTime: '12 min read',
      publishDate: 'Nov 28, 2024',
      views: '3.8k',
      url: '#',
      featured: true,
      tags: ['AI', 'Sustainability', 'Product Development']
    },
    {
      title: 'Machine Learning in Agriculture: A Practical Guide',
      excerpt: 'How we built HarvAI to help farmers increase crop yields by 30%. Technical insights into LSTM models, IoT sensor integration, and real-time data processing for agricultural predictions.',
      category: 'AI/ML',
      readTime: '10 min read',
      publishDate: 'Nov 10, 2024',
      views: '3.1k',
      url: '#',
      featured: true,
      tags: ['Machine Learning', 'Agriculture', 'IoT']
    },
    {
      title: 'AWS Cloud Journey: From Virtual Internship to Real-World Applications',
      excerpt: 'My experience with AWS Cloud Virtual Internship at EduSkills Foundation. Practical insights into cloud infrastructure, serverless architecture, and modern deployment strategies.',
      category: 'Cloud/AWS',
      readTime: '9 min read',
      publishDate: 'Oct 22, 2024',
      views: '2.7k',
      url: '#',
      featured: false,
      tags: ['AWS', 'Cloud Computing', 'Career Growth']
    },
    {
      title: 'Green Skills in Tech: AI for Environmental Impact',
      excerpt: 'Exploring the intersection of technology and environmental consciousness. Lessons from my Green Skills internship at Edunet Foundation and building sustainable AI solutions.',
      category: 'Green Tech',
      readTime: '7 min read',
      publishDate: 'Oct 5, 2024',
      views: '1.9k',
      url: '#',
      featured: false,
      tags: ['Green Technology', 'AI', 'Sustainability']
    },
    {
      title: 'From IIT Madras to Industry: Navigating Data Science Education',
      excerpt: 'My journey transitioning to IIT Madras for Data Science. Academic insights, career pivots, and what aspiring data scientists should know about modern education paths.',
      category: 'Career/Education',
      readTime: '8 min read',
      publishDate: 'Sep 18, 2024',
      views: '2.2k',
      url: '#',
      featured: false,
      tags: ['Education', 'Data Science', 'Career Development']
    }
  ];

  const newsletterStats = {
    subscribers: '1.2k+',
    articles: '15+',
    totalViews: '18k+',
    engagement: '94%'
  };

  const recentNewsletterTopics = [
    'Weekly Tech Digest: AI Trends & React Updates',
    'Sustainability in Tech: Green Coding Practices',
    'Career Insights: Landing Your First Tech Internship',
    'Deep Dive: Building Production-Ready Apps'
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'React': 'text-blue-500 bg-blue-500/10 border-blue-500/30',
      'AI/ML': 'text-green-500 bg-green-500/10 border-green-500/30',
      'AI/Sustainability': 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
      'CSS/Design': 'text-purple-500 bg-purple-500/10 border-purple-500/30',
      'Data Science': 'text-orange-500 bg-orange-500/10 border-orange-500/30',
      'DevOps': 'text-red-500 bg-red-500/10 border-red-500/30',
      'TypeScript': 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
      'Cloud/AWS': 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
      'Green Tech': 'text-teal-500 bg-teal-500/10 border-teal-500/30',
      'Career/Education': 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30'
    };
    return colors[category as keyof typeof colors] || 'text-gray-500 bg-gray-500/10 border-gray-500/30';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30">
            📝 Technical Writing & Content
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Blog & <span className="gradient-text">LinkedIn Newsletter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge through technical articles and regular LinkedIn content. 
            <strong className="text-foreground">{newsletterStats.articles} articles</strong> with <strong className="text-foreground">{newsletterStats.totalViews} total views</strong>
          </p>
        </div>

        {/* LinkedIn Newsletter Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="glass-effect border-primary/20 text-center hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{newsletterStats.subscribers}</div>
                <div className="text-sm text-muted-foreground">LinkedIn Followers</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-accent/20 text-center hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent mb-1">{newsletterStats.articles}</div>
                <div className="text-sm text-muted-foreground">Published Articles</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-primary/20 text-center hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{newsletterStats.totalViews}</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-accent/20 text-center hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-accent mb-1">{newsletterStats.engagement}</div>
                <div className="text-sm text-muted-foreground">Engagement Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Newsletter Topics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Newsletter Topics</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {recentNewsletterTopics.map((topic, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">{topic}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="glass-effect border-primary/30 hover:bg-primary/10" asChild>
              <a href="https://www.linkedin.com/in/rangeshpandian-pt-428b04325/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Follow on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {article.views}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {article.publishDate}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Article
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Recent Publications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-accent/30 transition-all duration-300 group">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className={`text-xs ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{article.views}</div>
                  </div>

                  <h4 className="font-bold mb-2 text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.publishDate}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Writing Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="glass-effect border-primary/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1">15+</div>
              <div className="text-xs text-muted-foreground">Articles Published</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-accent/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1">10k+</div>
              <div className="text-xs text-muted-foreground">Total Views</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-primary/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1">6</div>
              <div className="text-xs text-muted-foreground">Tech Categories</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-accent/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1">9.2</div>
              <div className="text-xs text-muted-foreground">Avg. Read Time</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;