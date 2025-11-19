# Panduan Integrasi Portfolio Developer

Panduan komprehensif ini menjelaskan cara menambahkan integrasi EmailJS, YouTube, dan Google Analytics ke dalam website portfolio developer yang sudah ada. Panduan ini mencakup instruksi langkah demi langkah, contoh kode, dan praktik terbaik untuk setiap integrasi.

## Daftar Isi
1. [Integrasi EmailJS](#integrasi-emailjs)
2. [Integrasi YouTube](#integrasi-youtube)
3. [Integrasi Google Analytics](#integrasi-google-analytics)

---

## Integrasi EmailJS

EmailJS memungkinkan pengiriman email langsung dari sisi klien tanpa server. Integrasi ini sudah sebagian diterapkan dalam proyek Anda.

### Prasyarat
Sebelum memulai, pastikan Anda memiliki:
- Akun EmailJS (daftar di [emailjs.com](https://www.emailjs.com/))
- Service ID, Template ID, dan User ID dari dashboard EmailJS

### Langkah-langkah Implementasi

#### 1. Instalasi Dependensi
Jika belum terinstal, tambahkan EmailJS ke proyek Anda:
```bash
npm install @emailjs/browser
```

#### 2. Konfigurasi Variabel Lingkungan
Buat atau perbarui file `.env` di root proyek dengan informasi berikut:
```env
VITE_EMAILJS_SERVICE_ID=service_your_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### 3. Pengaturan Library EmailJS
File `src/lib/emailjs.ts` sudah berisi fungsi helper dasar. Pastikan konfigurasinya seperti berikut:
```typescript
import emailjs from '@emailjs/browser';

// Inisialisasi EmailJS dengan Public Key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Fungsi untuk mengirim email
export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};
```

#### 4. Integrasi dengan Form Kontak
Komponen `ContactSection.tsx` sudah menggunakan fungsi ini. Pastikan form HTML memiliki atribut `ref` dan field-field berikut:
```tsx
<form ref={formRef} onSubmit={handleSubmit}>
  <input type="text" name="user_name" placeholder="Nama Anda" required />
  <input type="email" name="user_email" placeholder="Email Anda" required />
  <textarea name="message" placeholder="Pesan Anda" required />
  <button type="submit">Kirim Pesan</button>
</form>
```

### Praktik Terbaik
- Jangan pernah mengekspos private key di frontend
- Validasi input pengguna sebelum mengirim
- Tampilkan pesan sukses/error kepada pengguna
- Gunakan environment variables untuk menyimpan credential

---

## Integrasi YouTube

Website portfolio sudah memiliki komponen `VideoIntro.tsx` untuk menampilkan video YouTube dengan desain minimalis.

### Konfigurasi Video YouTube

#### 1. Menyiapkan Video ID
Dapatkan Video ID dari URL YouTube. Contoh: Untuk URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, Video ID-nya adalah `dQw4w9WgXcQ`.

#### 2. Menambahkan ke Variabel Lingkungan
Tambahkan Video ID ke file `.env`:
```env
VITE_YOUTUBE_VIDEO_ID=dQw4w9WgXcQ
```

#### 3. Komponen Video Intro
Komponen `VideoIntro.tsx` sudah dikonfigurasi untuk menggunakan Video ID dari environment variable:
```tsx
import React, { useState } from 'react';

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID;
  
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {!isPlaying ? (
        <div 
          className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl overflow-hidden cursor-pointer h-64 md:h-96 flex items-center justify-center"
          onClick={handlePlay}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-20 rounded-full p-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Tonton Perkenalan Saya</h3>
            <p className="text-sm opacity-90">Klik untuk memutar video</p>
          </div>
        </div>
      ) : (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-xl"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoIntro;
```

### Praktik Terbaik
- Gunakan thumbnail kustom untuk meningkatkan CTR
- Optimalkan ukuran iframe untuk responsivitas
- Tambahkan atribut aksesibilitas yang sesuai
- Pertimbangkan lazy loading untuk performa yang lebih baik

---

## Integrasi Google Analytics

Google Analytics sudah diinisialisasi dalam komponen `App.tsx` untuk melacak interaksi pengguna.

### Konfigurasi Google Analytics

#### 1. Membuat Property di Google Analytics
1. Kunjungi [Google Analytics](https://analytics.google.com/)
2. Buat property baru untuk website Anda
3. Pilih "Web" sebagai platform
4. Masukkan nama website dan URL
5. Dapatkan Measurement ID (format: GA4-XXXXXXXXX)

#### 2. Menambahkan Measurement ID ke Environment Variables
Tambahkan ke file `.env`:
```env
VITE_GOOGLE_ANALYTICS_ID=GA4-XXXXXXXXX
```

#### 3. Inisialisasi Google Analytics
Komponen `App.tsx` sudah berisi inisialisasi Google Analytics:
```tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import BlogSection from './BlogSection';
import BlogDetail from './pages/BlogDetail';
import PageLoader from './PageLoader';
import VideoIntro from './VideoIntro';
import WhatsAppButton from './WhatsAppButton';
import { initGA, logPageView } from './lib/analytics';

function App() {
  useEffect(() => {
    // Inisialisasi Google Analytics
    initGA(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
    
    // Log page view pertama
    logPageView();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={
            <>
              <PageLoader />
              <main>
                <HeroSection />
                <SkillsSection />
                <VideoIntro />
                <ProjectsSection />
                <TestimonialsSection />
                <PartnersSection />
                <BlogSection />
                <ContactSection />
              </main>
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

#### 4. Fungsi Analytics Helper
File `src/lib/analytics.ts` berisi fungsi-fungsi untuk melacak berbagai event:
```typescript
interface Window {
  gtag: (...args: any[]) => void;
}

declare const window: Window;

export const initGA = (trackingId: string) => {
  if (typeof window !== 'undefined' && trackingId) {
    // Script Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Fungsi gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    
    // Konfigurasi GA4
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const logPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const logEvent = (action: string, category?: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

### Praktik Terbaik
- Pastikan GDPR/privasi pengguna tetap dihormati
- Gunakan event tracking untuk elemen interaktif penting
- Hindari pelacakan data sensitif pengguna
- Uji implementasi dengan Google Analytics Debugger

---

## Kesimpulan

Dengan mengikuti panduan ini, Anda telah berhasil menambahkan tiga integrasi penting ke website portfolio Anda:
1. EmailJS untuk komunikasi langsung
2. YouTube untuk presentasi video
3. Google Analytics untuk analisis pengunjung

Pastikan semua credential disimpan dengan aman di environment variables dan jangan pernah mengekspos informasi sensitif di kode frontend. Lakukan pengujian menyeluruh setelah implementasi untuk memastikan semua fitur berfungsi dengan baik.