import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogData';


export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [readingProgress, setReadingProgress] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as 'en' | 'id' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // Reading progress indicator
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = language === 'en' ? post?.title : post?.titleId;
    
    const shareUrls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert(language === 'en' ? 'Link copied to clipboard!' : 'Link disalin ke clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

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

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'en' ? 'Back' : 'Kembali'}
          </Button>

          {/* Share Button */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              {language === 'en' ? 'Share' : 'Bagikan'}
            </Button>

            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 z-50">
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                >
                  <Twitter className="h-4 w-4 text-blue-400" />
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  Facebook
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-blue-700" />
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                >
                  <LinkIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  {language === 'en' ? 'Copy Link' : 'Salin Link'}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container max-w-4xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Category Badge */}
        <div className="mb-6 flex justify-center">
          <Badge className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg">
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center text-gray-900 dark:text-gray-100 tracking-tight">
          {title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-12 pb-8 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date} className="text-sm">
              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">{readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img
            src={post.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Article Content with Enhanced Typography */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <style>{`
            .prose {
              font-size: 1.125rem;
              line-height: 1.8;
              color: #374151;
            }
            .dark .prose {
              color: #d1d5db;
            }
            .prose p {
              margin-bottom: 1.75rem;
              text-align: justify;
            }
            .prose p:first-of-type::first-letter {
              font-size: 3.5rem;
              font-weight: 700;
              float: left;
              line-height: 1;
              margin-right: 0.5rem;
              margin-top: 0.1rem;
              background: linear-gradient(135deg, #9333ea, #3b82f6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .prose h2 {
              font-size: 2rem;
              font-weight: 700;
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              color: #111827;
              letter-spacing: -0.025em;
            }
            .dark .prose h2 {
              color: #f9fafb;
            }
            .prose h3 {
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 2rem;
              margin-bottom: 1rem;
              color: #1f2937;
            }
            .dark .prose h3 {
              color: #e5e7eb;
            }
            .prose a {
              color: #9333ea;
              text-decoration: none;
              font-weight: 500;
              border-bottom: 2px solid transparent;
              transition: border-color 0.2s;
            }
            .prose a:hover {
              border-bottom-color: #9333ea;
            }
            .dark .prose a {
              color: #a78bfa;
            }
            .dark .prose a:hover {
              border-bottom-color: #a78bfa;
            }
            .prose strong {
              color: #111827;
              font-weight: 600;
            }
            .dark .prose strong {
              color: #f9fafb;
            }
            .prose code {
              color: #9333ea;
              background: #f3f4f6;
              padding: 0.25rem 0.5rem;
              border-radius: 0.375rem;
              font-size: 0.9em;
              font-weight: 500;
            }
            .dark .prose code {
              color: #a78bfa;
              background: #1e293b;
            }
            .prose pre {
              background: #1e293b;
              border: 1px solid #334155;
              border-radius: 0.75rem;
              padding: 1.5rem;
              overflow-x: auto;
              margin: 2rem 0;
            }
            .prose blockquote {
              border-left: 4px solid #9333ea;
              padding-left: 1.5rem;
              font-style: italic;
              color: #4b5563;
              margin: 2rem 0;
            }
            .dark .prose blockquote {
              border-left-color: #a78bfa;
              color: #9ca3af;
            }
            .prose ul, .prose ol {
              margin: 1.5rem 0;
              padding-left: 1.75rem;
            }
            .prose li {
              margin: 0.75rem 0;
              padding-left: 0.5rem;
            }
            .prose ul li::marker {
              color: #9333ea;
            }
            .dark .prose ul li::marker {
              color: #a78bfa;
            }
            .prose img {
              border-radius: 0.75rem;
              margin: 2rem auto;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Related Articles' : 'Artikel Terkait'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <button
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="group text-left bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={language === 'en' ? relatedPost.title : relatedPost.titleId}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-0">
                      {language === 'en' ? relatedPost.category : relatedPost.categoryId}
                    </Badge>
                    <h3 className="font-bold text-sm mb-2 line-clamp-2 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {language === 'en' ? relatedPost.title : relatedPost.titleId}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {language === 'en' ? relatedPost.excerpt : relatedPost.excerptId}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Back Button at Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'en' ? 'Back to All Articles' : 'Kembali ke Semua Artikel'}
          </Button>
        </div>
      </article>
    </div>
  );
}