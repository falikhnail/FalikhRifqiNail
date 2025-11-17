import SocialMedia from './SocialMedia';

interface FooterProps {
  language: 'en' | 'id';
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const texts = {
    en: {
      madeBy: 'Made with',
      by: 'by',
      rights: 'All rights reserved.',
      contact: 'Contact',
      email: 'falikhrifqi69@gmail.com',
    },
    id: {
      madeBy: 'Dibuat dengan',
      by: 'oleh',
      rights: 'Hak cipta dilindungi.',
      contact: 'Kontak',
      email: 'falikhrifqi69@gmail.com',
    },
  };

  const t = texts[language];

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Falikh Rifqi Nail
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {t.contact}
            </h4>
            <a
              href={`mailto:${t.email}`}
              className="text-purple-600 dark:text-purple-400 hover:underline block"
            >
              {t.email}
            </a>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Social Media
            </h4>
            <SocialMedia language={language} variant="footer" />
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            {t.madeBy} <span className="text-red-500">♥</span> {t.by}{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Falikh Rifqi Nail
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Falikh Rifqi Nail. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}