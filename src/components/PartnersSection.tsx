import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Briefcase } from 'lucide-react';

interface Partner {
  name: string;
  type: string;
  typeId: string;
  image?: string;
  description: string;
  descriptionId: string;
  icon: 'building' | 'users' | 'briefcase';
  logo?: string;
}

interface PartnersSectionProps {
  language: 'en' | 'id';
}

export default function PartnersSection({ language }: PartnersSectionProps) {
  const texts = {
    en: {
      heading: 'Trusted Partners & Clients',
      subheading: 'Proud to collaborate with amazing companies and organizations',
      andMore: 'and many more amazing clients across various industries...',
      projectsCompleted: '50+ Projects Completed',
      clientSatisfaction: '98% Client Satisfaction',
      yearsExperience: '5+ Years Experience',
    },
    id: {
      heading: 'Partner & Klien Terpercaya',
      subheading: 'Bangga berkolaborasi dengan perusahaan dan organisasi yang luar biasa',
      andMore: 'dan masih banyak klien luar biasa di berbagai industri...',
      projectsCompleted: '50+ Proyek Diselesaikan',
      clientSatisfaction: '98% Kepuasan Klien',
      yearsExperience: '5+ Tahun Pengalaman',
    },
  };

  const t = texts[language];

  const partners: Partner[] = [
    {
      name: 'Master Music',
      type: 'Corporate client',
      typeId: 'Client Korporat',
      image: '/assets/partners/mast.jpeg',
      description: 'Music management platform dashboard',
      descriptionId: 'Platform manajemen musik modern',
      icon: 'building',
    },
    {
      name: 'Nusadroids Production',
      type: 'Startup Partners & Clients',
      typeId: 'Mitra & Klien Startup',
      image: '/assets/partners/nusadev.jpg',
      description: 'Innovative startup accelerator',
      descriptionId: 'Akselerator startup inovatif',
      icon: 'briefcase',
    },
    {
      name: 'RSIA MIRIAM',
      type: 'Enterprise client',
      typeId: 'Klien perusahaan',
      image: '/assets/partners/mir.png',
      description: 'Innovative startup accelerator',
      descriptionId: 'Akselerator startup inovatif',
      icon: 'building',
    },
    {
      name: 'Kejaksaan Kudus',
      type: 'Enterprise client',
      typeId: 'Klien perusahaan',
      image: '/assets/partners/kejak.jpeg',
      description: 'Companies and Internal Institutions',
      descriptionId: 'Perusahaan dan Institusi Internal',
      icon: 'building',
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'building':
        return <Building2 className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 id="partners-heading" className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Partner companies">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 dark:bg-slate-800"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                  {partner.image ? (
                    <img
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      className="w-32 h-32 object-contain rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <span className="text-4xl font-bold text-white">{partner.logo}</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg">
                    {getIcon(partner.icon)}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-purple-700 dark:text-purple-300 border-0"
                  >
                    {language === 'en' ? partner.type : partner.typeId}
                  </Badge>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {language === 'en' ? partner.description : partner.descriptionId}
                  </p>

                  {/* Decorative Bottom Bar */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            {t.andMore}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-sm px-4 py-2 border-purple-400 text-purple-600 dark:text-purple-400">
              {t.projectsCompleted}
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2 border-blue-400 text-blue-600 dark:text-blue-400">
              {t.clientSatisfaction}
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2 border-green-400 text-green-600 dark:text-green-400">
              {t.yearsExperience}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}