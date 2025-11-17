import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'id';
  onLanguageChange: (lang: 'en' | 'id') => void;
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === 'en' ? 'id' : 'en')}
      className="fixed top-4 right-20 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-purple-400 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 shadow-lg"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4 mr-2" />
      <span className="font-semibold">{currentLanguage === 'en' ? 'ID' : 'EN'}</span>
    </Button>
  );
}