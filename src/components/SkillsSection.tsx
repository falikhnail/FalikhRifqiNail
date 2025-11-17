import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Database, Smartphone } from 'lucide-react';

interface SkillsSectionProps {
  language: 'en' | 'id';
}

export default function SkillsSection({ language }: SkillsSectionProps) {
  const texts = {
    en: {
      heading: 'Skills & Expertise',
      subheading: 'Technologies and tools I work with',
    },
    id: {
      heading: 'Keahlian & Expertise',
      subheading: 'Teknologi dan tools yang saya gunakan',
    },
  };

  const t = texts[language];

  const skillCategories = [
    {
      icon: Code2,
      title: language === 'en' ? 'Frontend Development' : 'Pengembangan Frontend',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: [
        { name: 'React / Next.js', level: 95, gradient: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, gradient: 'from-blue-600 to-indigo-600' },
        { name: 'Tailwind CSS', level: 95, gradient: 'from-cyan-500 to-blue-500' },
        { name: 'Vue.js', level: 85, gradient: 'from-green-500 to-teal-500' },
      ],
    },
    {
      icon: Database,
      title: language === 'en' ? 'Backend Development' : 'Pengembangan Backend',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: [
        { name: 'Node.js / Express', level: 90, gradient: 'from-green-500 to-emerald-500' },
        { name: 'Python / Django', level: 85, gradient: 'from-green-600 to-lime-600' },
        { name: 'PostgreSQL / MongoDB', level: 88, gradient: 'from-emerald-500 to-green-500' },
        { name: 'REST API / GraphQL', level: 92, gradient: 'from-teal-500 to-cyan-500' },
      ],
    },
    {
      icon: Palette,
      title: language === 'en' ? 'UI/UX Design' : 'Desain UI/UX',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: [
        { name: 'Figma / Adobe XD', level: 93, gradient: 'from-purple-500 to-pink-500' },
        { name: 'User Research', level: 87, gradient: 'from-purple-600 to-violet-600' },
        { name: 'Prototyping', level: 90, gradient: 'from-pink-500 to-rose-500' },
        { name: 'Design Systems', level: 88, gradient: 'from-violet-500 to-purple-500' },
      ],
    },
    {
      icon: Smartphone,
      title: language === 'en' ? 'Mobile Development' : 'Pengembangan Mobile',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: [
        { name: 'React Native', level: 85, gradient: 'from-orange-500 to-amber-500' },
        { name: 'Flutter', level: 80, gradient: 'from-orange-600 to-red-600' },
        { name: 'iOS / Android', level: 82, gradient: 'from-amber-500 to-yellow-500' },
        { name: 'Progressive Web Apps', level: 90, gradient: 'from-yellow-500 to-orange-500' },
      ],
    },
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 id="skills-heading" className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 dark:bg-slate-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className={`text-lg font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}