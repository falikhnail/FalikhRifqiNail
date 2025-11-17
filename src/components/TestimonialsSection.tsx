import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  contentId: string;
  rating: number;
}

interface TestimonialsSectionProps {
  language: 'en' | 'id';
}

export default function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const texts = {
    en: {
      heading: 'Client Testimonials',
      subheading: 'What clients say about working with me',
    },
    id: {
      heading: 'Testimoni Klien',
      subheading: 'Apa kata klien tentang bekerja dengan saya',
    },
  };

  const t = texts[language];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Tech Innovations Inc',
      image: '/assets/testimonials/client1.jpg',
      content: 'Outstanding work! The developer delivered a high-quality product that exceeded our expectations. Professional, responsive, and highly skilled.',
      contentId: 'Pekerjaan luar biasa! Developer ini memberikan produk berkualitas tinggi yang melampaui ekspektasi kami. Profesional, responsif, dan sangat terampil.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Digital Solutions Ltd',
      image: '/assets/testimonials/client2.jpg',
      content: 'Excellent communication and technical expertise. The project was completed on time and the code quality was exceptional. Highly recommend!',
      contentId: 'Komunikasi dan keahlian teknis yang luar biasa. Proyek diselesaikan tepat waktu dan kualitas kode sangat baik. Sangat direkomendasikan!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      company: 'GrowthHub',
      image: '/assets/testimonials/client3.jpg',
      content: 'Working with this developer was a game-changer for our startup. They brought our vision to life with creativity and technical precision.',
      contentId: 'Bekerja dengan developer ini mengubah segalanya untuk startup kami. Mereka menghidupkan visi kami dengan kreativitas dan presisi teknis.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'CloudScale Systems',
      image: '/assets/testimonials/client4.jpg',
      content: 'Impressive problem-solving skills and attention to detail. The developer quickly understood our complex requirements and delivered perfectly.',
      contentId: 'Keterampilan pemecahan masalah dan perhatian terhadap detail yang mengesankan. Developer ini cepat memahami kebutuhan kompleks kami dan memberikan hasil yang sempurna.',
      rating: 5,
    },
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 id="testimonials-heading" className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700 dark:bg-slate-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1 mb-2" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{language === 'en' ? testimonial.content : testimonial.contentId}"
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Avatar className="w-14 h-14 ring-2 ring-purple-400 ring-offset-2">
                    <AvatarImage src={testimonial.image} alt={`${testimonial.name}'s profile picture`} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 dark:text-purple-400">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}