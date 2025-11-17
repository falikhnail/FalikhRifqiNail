import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  language: 'en' | 'id';
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const texts = {
    en: {
      heading: 'Featured Projects',
      subheading: 'Some of my recent work',
      viewLive: 'View Live',
      viewCode: 'View Code',
    },
    id: {
      heading: 'Proyek Unggulan',
      subheading: 'Beberapa karya terbaru saya',
      viewLive: 'Lihat Live',
      viewCode: 'Lihat Kode',
    },
  };

  const t = texts[language];

  const projects = [
    {
      title: language === 'en' ? 'E-Commerce Platform' : 'Platform E-Commerce',
      description: language === 'en' 
        ? 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.'
        : 'Platform e-commerce lengkap dengan integrasi pembayaran, manajemen inventori, dan dashboard admin.',
      image: '/assets/projects/project1.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'en' ? 'Task Management App' : 'Aplikasi Manajemen Tugas',
      description: language === 'en'
        ? 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.'
        : 'Tool manajemen tugas kolaboratif dengan update real-time, kolaborasi tim, dan tracking progress.',
      image: '/assets/projects/project2.jpg',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'en' ? 'Social Media Dashboard' : 'Dashboard Media Sosial',
      description: language === 'en'
        ? 'Analytics dashboard for social media metrics with beautiful data visualizations and insights.'
        : 'Dashboard analytics untuk metrik media sosial dengan visualisasi data yang indah dan insights.',
      image: '/assets/projects/project3.jpg',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'en' ? 'Portfolio Website Builder' : 'Builder Website Portfolio',
      description: language === 'en'
        ? 'Drag-and-drop portfolio builder with customizable templates and one-click deployment.'
        : 'Builder portfolio drag-and-drop dengan template yang dapat disesuaikan dan deployment satu klik.',
      image: '/assets/projects/project4.jpg',
      tags: ['React', 'DnD Kit', 'Vercel', 'CMS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'en' ? 'Fitness Tracking App' : 'Aplikasi Tracking Fitness',
      description: language === 'en'
        ? 'Mobile-first fitness app with workout plans, progress tracking, and nutrition guidance.'
        : 'Aplikasi fitness mobile-first dengan rencana workout, tracking progress, dan panduan nutrisi.',
      image: '/assets/projects/project5.jpg',
      tags: ['React Native', 'MongoDB', 'Express', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'en' ? 'AI Content Generator' : 'Generator Konten AI',
      description: language === 'en'
        ? 'AI-powered content generation tool for blogs, social media, and marketing copy.'
        : 'Tool generator konten bertenaga AI untuk blog, media sosial, dan copy marketing.',
      image: '/assets/projects/project6.jpg',
      tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
      liveUrl: '#',
      githubUrl: '#',
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

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.viewLive}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {t.viewCode}
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