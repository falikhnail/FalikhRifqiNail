import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogData';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as 'en' | 'id' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {language === 'en' ? 'Post Not Found' : 'Postingan Tidak Ditemukan'}
          </h1>
          <Button onClick={() => navigate('/')} className="bg-purple-600 hover:bg-purple-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}
          </Button>
        </div>
      </div>
    );
  }

  const title = language === 'en' ? post.title : post.titleId;
  const category = language === 'en' ? post.category : post.categoryId;
  const readTime = language === 'en' ? post.readTime : post.readTimeId;
  const content = language === 'en' ? post.content : post.contentId;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'en' ? 'Back' : 'Kembali'}
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Category Badge */}
        <div className="mb-6">
          <Badge className="text-sm bg-purple-600 hover:bg-purple-700">
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12 shadow-2xl">
          <img
            src={post.image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 dark:prose-headings:text-gray-100
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-strong:font-semibold
            prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-gray-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-100 dark:prose-pre:bg-slate-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
            prose-img:rounded-lg prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Back Button at Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="gap-2 bg-purple-600 hover:bg-purple-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}
          </Button>
        </div>
      </article>
    </div>
  );
}