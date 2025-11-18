# 🚀 Panduan Deployment Website Portfolio ke Netlify

## 📋 Prasyarat

1. Akun GitHub (untuk menyimpan repository)
2. Akun Netlify (gratis di https://netlify.com)
3. Akun EmailJS (gratis di https://emailjs.com)

---

## 📧 BAGIAN 1: Setup EmailJS untuk Contact Form

### Langkah 1: Buat Akun EmailJS

1. Kunjungi https://www.emailjs.com/
2. Klik **"Sign Up"** dan buat akun gratis
3. Verifikasi email Anda

### Langkah 2: Tambahkan Email Service

1. Login ke dashboard EmailJS
2. Klik **"Email Services"** di sidebar
3. Klik **"Add New Service"**
4. Pilih **Gmail** (atau email provider lain)
5. Klik **"Connect Account"** dan login dengan email **falikhrifqi69@gmail.com**
6. Beri nama service (contoh: "Portfolio Contact")
7. **Simpan Service ID** yang muncul (contoh: `service_0xb2zks`)

### Langkah 3: Buat Email Template

1. Klik **"Email Templates"** di sidebar
2. Klik **"Create New Template"**
3. Gunakan template berikut:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Klik **"Save"**
5. **Simpan Template ID** (contoh: `template_phvb2s7`)

### Langkah 4: Dapatkan Public Key

1. Klik **"Account"** di sidebar
2. Scroll ke bagian **"API Keys"**
3. Copy **Public Key** Anda (contoh: `abcdefghij1234567`)

### Langkah 5: Update File .env Lokal

Buka file `.env` di root project dan update dengan credentials Anda:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcdefghij1234567

# Google Analytics (opsional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**⚠️ PENTING:** Ganti `service_abc1234`, `template_xyz5678`, dan `abcdefghij1234567` dengan nilai yang sebenarnya dari EmailJS dashboard Anda!

### Langkah 6: Test Email Lokal

1. Jalankan development server:
```bash
pnpm run dev
```

2. Buka http://localhost:5173
3. Scroll ke bagian Contact Form
4. Isi form dan klik "Send Message"
5. Cek email **falikhrifqi69@gmail.com** untuk memastikan email masuk

---

## 🌐 BAGIAN 2: Deploy ke Netlify

### Metode 1: Deploy via GitHub (Recommended)

#### Langkah 1: Push ke GitHub

1. Buat repository baru di GitHub:
   - Kunjungi https://github.com/new
   - Beri nama repository (contoh: `portfolio-website`)
   - Set visibility: Public atau Private
   - Klik "Create repository"

2. Push code ke GitHub:
```bash
# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Langkah 2: Connect Netlify ke GitHub

1. Login ke https://app.netlify.com
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **"Deploy with GitHub"**
4. Authorize Netlify untuk akses GitHub Anda
5. Pilih repository **portfolio-website**
6. Konfigurasi build settings:
   - **Branch to deploy:** `main`
   - **Build command:** `pnpm install && pnpm run build`
   - **Publish directory:** `dist`
7. **JANGAN klik Deploy yet!** Lanjut ke langkah 3

#### Langkah 3: Set Environment Variables di Netlify

1. Scroll ke bagian **"Environment variables"**
2. Klik **"Add environment variables"**
3. Tambahkan variabel berikut satu per satu:

| Key | Value | Contoh |
|-----|-------|--------|
| `VITE_EMAILJS_SERVICE_ID` | Service ID dari EmailJS | `service_abc1234` |
| `VITE_EMAILJS_TEMPLATE_ID` | Template ID dari EmailJS | `template_xyz5678` |
| `VITE_EMAILJS_PUBLIC_KEY` | Public Key dari EmailJS | `abcdefghij1234567` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID (opsional) | `G-XXXXXXXXXX` |

4. Klik **"Deploy site"**

#### Langkah 4: Tunggu Build Selesai

1. Netlify akan mulai build (biasanya 2-5 menit)
2. Anda bisa melihat progress di **"Deploys"** tab
3. Jika build sukses, Anda akan melihat status **"Published"**
4. Klik URL yang diberikan (contoh: `https://random-name-123456.netlify.app`)

---

### Metode 2: Deploy via Netlify CLI

#### Langkah 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Langkah 2: Login ke Netlify

```bash
netlify login
```

#### Langkah 3: Initialize Site

```bash
netlify init
```

Ikuti prompt:
- Create & configure a new site
- Pilih team Anda
- Beri nama site (contoh: `portfolio-falikh`)
- Build command: `pnpm install && pnpm run build`
- Publish directory: `dist`

#### Langkah 4: Set Environment Variables

```bash
netlify env:set VITE_EMAILJS_SERVICE_ID "service_abc1234"
netlify env:set VITE_EMAILJS_TEMPLATE_ID "template_xyz5678"
netlify env:set VITE_EMAILJS_PUBLIC_KEY "abcdefghij1234567"
```

#### Langkah 5: Deploy

```bash
netlify deploy --prod
```

---

## 🎨 BAGIAN 3: Custom Domain (Opsional)

### Jika Anda Punya Domain Sendiri:

1. Di Netlify dashboard, klik **"Domain settings"**
2. Klik **"Add custom domain"**
3. Masukkan domain Anda (contoh: `falikhrifqi.com`)
4. Update DNS records di domain provider Anda:
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5`
   
   atau
   
   - Type: `CNAME`
   - Name: `www`
   - Value: `random-name-123456.netlify.app`

5. Tunggu propagasi DNS (bisa 1-48 jam)
6. Netlify akan otomatis setup SSL certificate (HTTPS)

---

## 🔧 BAGIAN 4: Update dan Redeploy

### Cara Update Website:

1. Edit file yang ingin diubah
2. Commit dan push ke GitHub:
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push origin main
```

3. Netlify akan otomatis detect perubahan dan rebuild
4. Website akan update dalam 2-5 menit

### Cara Rollback ke Versi Sebelumnya:

1. Di Netlify dashboard, klik **"Deploys"**
2. Pilih deploy yang ingin di-restore
3. Klik **"Publish deploy"**

---

## 🐛 Troubleshooting

### Problem 1: Build Failed - "pnpm: command not found"

**Solusi:**
1. Di Netlify dashboard, klik **"Site settings"** → **"Build & deploy"**
2. Scroll ke **"Build settings"**
3. Ubah build command menjadi:
```bash
npm install -g pnpm && pnpm install && pnpm run build
```

### Problem 2: Email Tidak Terkirim di Production

**Solusi:**
1. Pastikan environment variables sudah di-set di Netlify
2. Cek di Netlify dashboard: **"Site settings"** → **"Environment variables"**
3. Pastikan tidak ada typo di key name (harus persis `VITE_EMAILJS_SERVICE_ID`, dll)
4. Trigger redeploy: **"Deploys"** → **"Trigger deploy"** → **"Clear cache and deploy site"**

### Problem 3: 404 Error saat Refresh Page

**Solusi:**
File `netlify.toml` sudah include redirect rules. Jika masih error:
1. Pastikan file `netlify.toml` ada di root project
2. Redeploy site

### Problem 4: Images Tidak Muncul

**Solusi:**
1. Pastikan semua images ada di folder `public/assets/`
2. Pastikan path di code menggunakan `/assets/` bukan `./assets/`
3. Check browser console untuk error messages

### Problem 5: Environment Variables Tidak Terdeteksi

**Solusi:**
1. Pastikan semua env vars diawali dengan `VITE_`
2. Setelah update env vars, harus trigger new deploy
3. Jangan gunakan quotes di Netlify env vars (kecuali value memang mengandung spasi)

---

## 📊 Monitoring

### Check Website Status:
- Netlify Dashboard: https://app.netlify.com
- Uptime monitoring: Netlify otomatis monitor
- Analytics: Aktifkan di **"Site settings"** → **"Analytics"**

### Check Email Delivery:
- EmailJS Dashboard: https://dashboard.emailjs.com
- Lihat **"Email History"** untuk log semua email yang terkirim
- Free tier: 200 emails/month

---

## ✅ Checklist Deployment

- [ ] EmailJS account created
- [ ] Email service connected (Gmail)
- [ ] Email template created
- [ ] Environment variables di `.env` sudah di-update
- [ ] Email form tested locally
- [ ] Code pushed ke GitHub
- [ ] Netlify site created
- [ ] Environment variables di Netlify sudah di-set
- [ ] Site successfully deployed
- [ ] Email form tested di production
- [ ] Custom domain setup (opsional)
- [ ] SSL certificate active (otomatis via Netlify)

---

## 🎉 Selamat!

Website portfolio Anda sekarang sudah live dan bisa diakses oleh siapa saja! 

**Next Steps:**
1. Share link website Anda di social media
2. Tambahkan link ke CV dan LinkedIn
3. Monitor email submissions di EmailJS dashboard
4. Update konten secara berkala

**Support:**
- Netlify Docs: https://docs.netlify.com
- EmailJS Docs: https://www.emailjs.com/docs/
- GitHub Issues: Buat issue di repository untuk bug reports

---

**Dibuat oleh:** Alex (Engineer)  
**Tanggal:** November 2024  
**Website:** https://your-portfolio.netlify.app