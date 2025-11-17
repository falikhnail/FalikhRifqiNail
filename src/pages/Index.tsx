import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import BlogSection from '@/components/BlogSection';
import SocialMedia from '@/components/SocialMedia';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PageLoader from '@/components/PageLoader';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import WhatsAppButton from '@/components/WhatsAppButton';
import SkipToContent from '@/components/SkipToContent';

export default function Index() {
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language') as 'en' | 'id' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'id') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <>
      <SkipToContent />
      <CustomCursor />
      <PageLoader />
      <ThemeToggle />
      <LanguageSwitcher currentLanguage={language} onLanguageChange={handleLanguageChange} />
      <WhatsAppButton language={language} />
      
      <main id="main-content">
        <HeroSection language={language} />
        <SkillsSection language={language} />
        <div id="projects-section">
          <ProjectsSection language={language} />
        </div>
        <TestimonialsSection language={language} />
        <PartnersSection language={language} />
        <BlogSection language={language} />
        <SocialMedia language={language} />
        <ContactSection language={language} />
      </main>
      
      <Footer language={language} />
    </>
  );
}