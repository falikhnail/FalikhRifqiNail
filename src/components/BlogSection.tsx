import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  titleId: string;
  excerpt: string;
  excerptId: string;
  date: string;
  readTime: string;
  category: string;
  categoryId: string;
  thumbnail: string;
  slug: string;
}

interface BlogSectionProps {
  language: 'en' | 'id';
}

export default function BlogSection({ language }: BlogSectionProps) {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with React',
      titleId: 'Membangun Aplikasi Web Scalable dengan React',
      excerpt: 'Learn best practices for creating maintainable and scalable React applications that can grow with your business needs.',
      excerptId: 'Pelajari praktik terbaik untuk membuat aplikasi React yang maintainable dan scalable yang dapat berkembang sesuai kebutuhan bisnis Anda.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Web Development',
      categoryId: 'Pengembangan Web',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      slug: 'building-scalable-web-applications',
    },
    {
      id: 2,
      title: 'Modern UI/UX Design Principles',
      titleId: 'Prinsip Desain UI/UX Modern',
      excerpt: 'Explore the latest trends in user interface and user experience design that make applications intuitive and beautiful.',
      excerptId: 'Jelajahi tren terbaru dalam desain antarmuka pengguna dan pengalaman pengguna yang membuat aplikasi intuitif dan indah.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Design',
      categoryId: 'Desain',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      slug: 'modern-ui-ux-design-principles',
    },
    {
      id: 3,
      title: 'TypeScript Best Practices for Large Projects',
      titleId: 'Praktik Terbaik TypeScript untuk Proyek Besar',
      excerpt: 'Discover how to leverage TypeScript features to write safer, more maintainable code in enterprise applications.',
      excerptId: 'Temukan cara memanfaatkan fitur TypeScript untuk menulis kode yang lebih aman dan maintainable dalam aplikasi enterprise.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Programming',
      categoryId: 'Pemrograman',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      slug: 'typescript-best-practices',
    },
    {
      id: 4,
      title: 'Optimizing Web Performance',
      titleId: 'Mengoptimalkan Performa Web',
      excerpt: 'Learn techniques to improve your website loading speed and overall performance for better user experience.',
      excerptId: 'Pelajari teknik untuk meningkatkan kecepatan loading website dan performa keseluruhan untuk pengalaman pengguna yang lebih baik.',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Performance',
      categoryId: 'Performa',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      slug: 'optimizing-web-performance',
    },
    {
      id: 5,
      title: 'Introduction to Cloud Architecture',
      titleId: 'Pengenalan Arsitektur Cloud',
      excerpt: 'Understanding cloud computing fundamentals and how to design scalable cloud-based solutions.',
      excerptId: 'Memahami fundamental cloud computing dan cara mendesain solusi berbasis cloud yang scalable.',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Cloud Computing',
      categoryId: 'Komputasi Cloud',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      slug: 'introduction-to-cloud-architecture',
    },
    {
      id: 6,
      title: 'Responsive Design Techniques',
      titleId: 'Teknik Desain Responsif',
      excerpt: 'Master the art of creating websites that look great on all devices, from mobile to desktop.',
      excerptId: 'Kuasai seni membuat website yang terlihat bagus di semua perangkat, dari mobile hingga desktop.',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Web Design',
      categoryId: 'Desain Web',
      thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop',
      slug: 'responsive-design-techniques',
    },
  ];

  const texts = {
    en: {
      heading: 'Latest Blog Posts',
      subheading: 'Insights, tutorials, and thoughts on web development',
      readMore: 'Read More',
    },
    id: {
      heading: 'Artikel Blog Terbaru',
      subheading: 'Wawasan, tutorial, dan pemikiran tentang pengembangan web',
      readMore: 'Baca Selengkapnya',
    },
  };

  const t = texts[language];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 id="blog-heading" className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 dark:bg-slate-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={language === 'en' ? post.title : post.titleId}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700">
                    {language === 'en' ? post.category : post.categoryId}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {language === 'en' ? post.title : post.titleId}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {language === 'en' ? post.excerpt : post.excerptId}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  aria-label={`${t.readMore}: ${language === 'en' ? post.title : post.titleId}`}
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}