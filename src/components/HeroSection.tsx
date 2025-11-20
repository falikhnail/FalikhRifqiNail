import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import VideoIntro from './VideoIntro';

interface HeroSectionProps {
  language: 'en' | 'id';
}

export default function HeroSection({ language }: HeroSectionProps) {
  const texts = {
    en: {
      greeting: 'Hi, I\'m',
      name: 'Falikh Rifqi Nail',
      title: 'Web Developer & IT Specialist',
      description: 'I build fast, secure, and modern websites using Laravel, CodeIgniter, and React. I have experience in system development, IT infrastructure management, and delivering technology solutions for businesses.',
      cta: 'View My Work',
      downloadCV: 'Download CV',
      watchVideo: 'Watch Introduction',
    },
    id: {
      greeting: 'Hai, Saya',
      name: 'Falikh Rifqi Nail',
      title: 'Pengembang Web & Ahli TI',
      description: 'Saya membangun website yang cepat, aman, dan modern menggunakan Laravel, CodeIgniter, dan React. Berpengalaman dalam pengembangan sistem, manajemen infrastruktur IT, dan solusi teknologi untuk bisnis',
      cta: 'Lihat Karya Saya',
      downloadCV: 'Unduh CV',
      watchVideo: 'Tonton Perkenalan',
    },
  };

  const t = texts[language];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Falikh-Rifqi-Nail.pdf';
    link.download = 'CV-FALIKH-RIFQI-NAIL.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 py-20 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            {/* Profile Image - Mobile/Tablet */}
            <div className="lg:hidden flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                {/* 
                  === PERUBAHAN DIBUAT DI SINI ===
                  src telah diubah dari '/assets/profile.jpg' menjadi '/assets/falikh.webp'
                  untuk mencocokkan gambar yang digunakan di versi desktop.
                */}
                <img
                  src="/assets/falikh.webp"
                  alt="Falikh Rifqi Nail"
                  className="relative w-48 h-48 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                {t.greeting}
              </p>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                {t.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {t.title}
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5" />
                {t.downloadCV}
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image (Desktop) + Video intro */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 delay-300">
            {/* Profile Image - Desktop only */}
            <div className="hidden lg:flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src="/assets/falikh.webp"
                  alt="Falikh Rifqi Nail"
                  className="relative w-64 h-64 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Video Introduction */}
            <VideoIntro language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}