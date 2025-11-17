import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { sendEmail, validateFormData } from '@/lib/emailjs';

interface ContactSectionProps {
  language: 'en' | 'id';
}

export default function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const texts = {
    en: {
      heading: 'Get In Touch',
      subheading: 'Have a project in mind? Let\'s work together!',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for reaching out. I\'ll get back to you soon!',
      errorTitle: 'Error',
      errorMessage: 'Failed to send message. Please try again or email directly.',
      contactInfo: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      validationErrors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address',
        subjectRequired: 'Subject is required',
        messageRequired: 'Message is required',
        messageTooShort: 'Message should be at least 10 characters long',
      },
    },
    id: {
      heading: 'Hubungi Saya',
      subheading: 'Punya proyek? Mari bekerja sama!',
      name: 'Nama Anda',
      email: 'Email Anda',
      subject: 'Subjek',
      message: 'Pesan Anda',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      successTitle: 'Pesan Terkirim!',
      successMessage: 'Terima kasih telah menghubungi. Saya akan segera membalas!',
      errorTitle: 'Error',
      errorMessage: 'Gagal mengirim pesan. Silakan coba lagi atau email langsung.',
      contactInfo: 'Informasi Kontak',
      emailLabel: 'Email',
      phoneLabel: 'Telepon',
      locationLabel: 'Lokasi',
      validationErrors: {
        nameRequired: 'Nama wajib diisi',
        emailRequired: 'Email wajib diisi',
        emailInvalid: 'Masukkan alamat email yang valid',
        subjectRequired: 'Subjek wajib diisi',
        messageRequired: 'Pesan wajib diisi',
        messageTooShort: 'Pesan harus minimal 10 karakter',
      },
    },
  };

  const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      const errorMessages = validation.errors.map(error => {
        // Map generic errors to localized messages
        if (error === 'Name is required') return t.validationErrors.nameRequired;
        if (error === 'Email is required') return t.validationErrors.emailRequired;
        if (error === 'Please enter a valid email address') return t.validationErrors.emailInvalid;
        if (error === 'Subject is required') return t.validationErrors.subjectRequired;
        if (error === 'Message is required') return t.validationErrors.messageRequired;
        if (error === 'Message should be at least 10 characters long') return t.validationErrors.messageTooShort;
        return error;
      });
      
      toast.error(t.errorTitle, {
        description: errorMessages.join(', '),
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        toast.success(t.successTitle, {
          description: t.successMessage,
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error(t.errorTitle, {
          description: result.message,
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(t.errorTitle, {
        description: t.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 id="contact-heading" className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-gray-200 dark:border-gray-700 shadow-xl dark:bg-slate-800 animate-in fade-in slide-in-from-left duration-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {t.send}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-purple-400"
                    placeholder={t.name}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-purple-400"
                    placeholder={t.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-purple-400"
                    placeholder={t.subject}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-2 focus:border-purple-400 resize-none"
                    placeholder={t.message}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      {t.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
            <Card className="border-2 border-gray-200 dark:border-gray-700 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {t.contactInfo}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                  <div className="p-3 bg-purple-600 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {t.emailLabel}
                    </h3>
                    <a
                      href="mailto:falikhrifqi69@gmail.com"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      falikhrifqi69@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {t.phoneLabel}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300">
                  <div className="p-3 bg-green-600 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {t.locationLabel}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Jakarta, Indonesia' : 'Jakarta, Indonesia'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}