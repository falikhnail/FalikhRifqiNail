import { Github, Linkedin, Twitter, Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialMediaProps {
  language: 'en' | 'id';
  variant?: 'default' | 'footer';
}

export default function SocialMedia({ language, variant = 'default' }: SocialMediaProps) {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/falikhrifqi',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/falikhrifqi',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/falikhrifqi',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/falikhrifqi',
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50 dark:hover:bg-pink-900/20',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/falikhrifqi',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:falikhrifqi69@gmail.com',
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    },
  ];

  const texts = {
    en: {
      heading: 'Connect With Me',
      subheading: 'Follow me on social media for updates and insights',
    },
    id: {
      heading: 'Terhubung Dengan Saya',
      subheading: 'Ikuti saya di media sosial untuk update dan wawasan',
    },
  };

  const t = texts[language];

  if (variant === 'footer') {
    return (
      <div className="flex gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 transform hover:scale-110`}
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className={`group border-2 ${social.bgColor} ${social.color} transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700`}
                style={{ animationDelay: `${index * 100}ms` }}
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{social.name}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}