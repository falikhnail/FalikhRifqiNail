import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';


interface BlogSectionProps {
  language: 'en' | 'id';
}

export default function BlogSection({ language }: BlogSectionProps) {
  const texts = {
    en: {
      heading: 'Latest Insights',
      subheading: 'Discover articles about web development, design, and technology',
      readMore: 'Read Article',
      featured: 'Featured',
    },
    id: {
      heading: 'Wawasan Terbaru',
      subheading: 'Temukan artikel tentang pengembangan web, desain, dan teknologi',
      readMore: 'Baca Artikel',
      featured: 'Unggulan',
    },
  };

  const t = texts[language];

  // Split posts into featured and regular
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <section 
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Blog</span>
          </div>
          <h2 id="blog-heading" className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Featured Post */}
        <Link to={`/blog/${featuredPost.slug}`} className="block mb-12">
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 transition-all duration-500 animate-in fade-in slide-in-from-bottom-6 duration-700 bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-800 dark:to-purple-900/10">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {t.featured}
                  </Badge>
                </div>
                <img
                  src={featuredPost.image}
                  alt={language === 'en' ? featuredPost.title : featuredPost.titleId}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 border-0">
                  {language === 'en' ? featuredPost.category : featuredPost.categoryId}
                </Badge>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {language === 'en' ? featuredPost.title : featuredPost.titleId}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 line-clamp-3 leading-relaxed">
                  {language === 'en' ? featuredPost.excerpt : featuredPost.excerptId}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button 
                  className="w-fit group/btn bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </Link>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
              <Card
                className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 transition-all duration-500 animate-in fade-in slide-in-from-bottom-6 duration-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:-translate-y-2"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader className="p-0 relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={language === 'en' ? post.title : post.titleId}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-gray-900 dark:text-gray-100 border-0 shadow-lg">
                      {language === 'en' ? post.category : post.categoryId}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {language === 'en' ? post.title : post.titleId}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm leading-relaxed">
                    {language === 'en' ? post.excerpt : post.excerptId}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 pt-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20 text-purple-600 dark:text-purple-400 font-semibold"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}