import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  language: 'en' | 'id';
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const texts = {
    en: {
      heading: 'Featured Projects',
      subheading: 'Some of my recent work',
      viewLive: 'View Live',
    },
    id: {
      heading: 'Proyek Unggulan',
      subheading: 'Beberapa karya terbaru saya',
      viewLive: 'Lihat Live',
    },
  };

  const t = texts[language];

  const projects = [
    {
      title: language === 'en' ? 'Master Music Management System' : 'Sistem Master Music Managemen',
      description: language === 'en'
        ? 'Platform for managing artists, events, and music catalogs with a clean and modern dashboard interface.'
        : 'Platform untuk mengelola artis, event, dan katalog musik dengan dashboard modern dan mudah digunakan.',
      image: '/assets/projects/mastermusic.webp',
      tags: ['Laravel', 'PHP', 'Cpanel', 'JavaScript'],
      liveUrl: 'https://mastermusic.co.id/',
    },
    {
      title: language === 'en' ? 'SIMAS INTEL System' : 'Sistem SIMAS INTEL',
      description: language === 'en'
        ? 'Platform for internal data management and monitoring with a modern, responsive interface delivering fast and accessible information.'
        : 'Platform untuk manajemen internal dan monitoring data dengan tampilan modern, cepat & responsif.',
      image: '/assets/projects/keja.webp',
      tags: ['Next.js', 'TypeScript', 'Cpanel', 'CSS', 'JavaScript'],
      liveUrl: 'https://simas-intel.knkudus.com/',
    },
    {
      title: language === 'en' ? 'Portfolio & Online Registration' : 'Portofolio & Pendaftaran Online',
      description: language === 'en'
        ? 'Official hospital site showcasing services, doctors, facilities & fast online registration.'
        : 'Situs resmi rumah sakit dengan layanan, dokter, fasilitas & pendaftaran pasien online.',
      image: '/assets/projects/mir.webp',
      tags: ['Laravel', 'Blade', 'Cpanel', 'CSS', 'JavaScript'],
      liveUrl: 'https://rsiamiriam.com/',
    },
    {
      title: language === 'en' ? 'Miriam Attendance' : 'Miriam Presensi',
      description: language === 'en'
        ? 'Real-time employee attendance system with smart automatic logs and activity tracking.'
        : 'Sistem absensi karyawan real-time dengan rekapan otomatis & pemantauan aktivitas.',
      image: '/assets/projects/presensi.webp',
      tags: ['Laravel', 'Blade', 'Cpanel', 'CSS', 'JavaScript'],
      liveUrl: 'https://e-presensi.rsiamiriam.com/',
    },
    {
      title: language === 'en' ? 'Digital Wedding Invitation' : 'Undangan Digital',
      description: language === 'en'
        ? 'Interactive online wedding site with modern UI and RSVP features.'
        : 'Website pernikahan interaktif, modern, dan dilengkapi RSVP.',
      image: '/assets/projects/Weding.webp',
      tags: ['JavaScript', 'API', 'HTML', 'Vercel', 'CSS'],
      liveUrl: 'https://undangan-pernikahan-falikh-ghina.vercel.app/',
    },
    {
      title: language === 'en' ? 'Pharmacy POS System' : 'POS Manajemen Apotek-',
      description: language === 'en'
        ? 'Pharmacy POS for sales and inventory control.'
        : 'Sistem POS apotek untuk penjualan dan manajemen stok obat.',
      image: '/assets/projects/posapotik.webp',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      liveUrl: 'https://demo-pos-apotik.netlify.app/',
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 id="projects-heading" className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 dark:bg-slate-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.viewLive}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
