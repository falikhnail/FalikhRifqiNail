import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  language: 'en' | 'id';
}

export default function WhatsAppButton({ language }: WhatsAppButtonProps) {
  // Get WhatsApp number from environment variables
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6285156796373';
  
  const messages = {
    en: 'Hello! I am interested in discussing a project with you.',
    id: 'Halo! Saya tertarik untuk berdiskusi tentang proyek dengan Anda.',
  };

  const message = encodeURIComponent(messages[language]);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce p-0"
      aria-label="Contact via WhatsApp"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
      </a>
    </Button>
  );
}