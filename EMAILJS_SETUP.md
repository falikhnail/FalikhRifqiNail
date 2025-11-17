# 📧 Panduan Setup EmailJS untuk Contact Form

## 🎯 Tujuan
Mengkonfigurasi EmailJS agar form kontak di website portfolio mengirim email ke **falikhrifqi69@gmail.com**

---

## 📝 Langkah-langkah Detail

### 1. Buat Akun EmailJS (5 menit)

1. Buka browser dan kunjungi: **https://www.emailjs.com/**
2. Klik tombol **"Sign Up"** di pojok kanan atas
3. Isi form registrasi:
   - Email: `falikhrifqi69@gmail.com` (atau email lain untuk login)
   - Password: Buat password yang kuat
   - Centang "I agree to the Terms of Service"
4. Klik **"Sign Up"**
5. Cek inbox email Anda dan klik link verifikasi
6. Login ke dashboard EmailJS

---

### 2. Tambahkan Gmail Service (3 menit)

1. Di dashboard EmailJS, klik menu **"Email Services"** di sidebar kiri
2. Klik tombol **"Add New Service"**
3. Pilih **"Gmail"** dari daftar email providers
4. Akan muncul popup, klik **"Connect Account"**
5. Login dengan akun Gmail: **falikhrifqi69@gmail.com**
6. Klik **"Allow"** untuk memberikan akses ke EmailJS
7. Beri nama service Anda (contoh: "Portfolio Contact Form")
8. **PENTING:** Copy dan simpan **Service ID** yang muncul
   - Contoh Service ID: `service_abc1234`
   - Anda akan butuh ini nanti!
9. Klik **"Create Service"**

---

### 3. Buat Email Template (5 menit)

1. Klik menu **"Email Templates"** di sidebar kiri
2. Klik tombol **"Create New Template"**
3. Anda akan melihat template editor dengan 3 bagian:

#### A. Settings (Tab pertama)
- **Template Name:** `Portfolio Contact Form`
- **From Name:** `{{from_name}}` (jangan ubah, ini variable)
- **From Email:** Biarkan default atau isi `noreply@yourwebsite.com`
- **Subject:** Isi dengan:
  ```
  New Message from {{from_name}} - Portfolio Contact
  ```

#### B. Content (Tab kedua)
Hapus semua isi default dan ganti dengan template ini:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background: white;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: bold;
      color: #667eea;
      margin-bottom: 5px;
    }
    .value {
      padding: 10px;
      background-color: #f5f5f5;
      border-left: 4px solid #667eea;
      margin-top: 5px;
    }
    .message-box {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 5px;
      border-left: 4px solid #764ba2;
      white-space: pre-wrap;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid #eee;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🎉 New Contact Form Submission</h2>
    </div>
    <div class="content">
      <p>You have received a new message from your portfolio website:</p>
      
      <div class="field">
        <div class="label">👤 Name:</div>
        <div class="value">{{from_name}}</div>
      </div>
      
      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value">{{from_email}}</div>
      </div>
      
      <div class="field">
        <div class="label">📱 Phone:</div>
        <div class="value">{{phone}}</div>
      </div>
      
      <div class="field">
        <div class="label">💬 Message:</div>
        <div class="message-box">{{message}}</div>
      </div>
      
      <div class="footer">
        <p>This email was automatically sent from your portfolio contact form.</p>
        <p>Reply directly to {{from_email}} to respond to this inquiry.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

#### C. Test (Tab ketiga)
1. Klik tab **"Test"**
2. Isi test data:
   - `from_name`: Test User
   - `from_email`: test@example.com
   - `phone`: 081234567890
   - `message`: This is a test message from EmailJS setup
3. Klik **"Send Test"**
4. Cek inbox **falikhrifqi69@gmail.com** - email test harus masuk!

4. Jika test berhasil, klik **"Save"**
5. **PENTING:** Copy dan simpan **Template ID** yang muncul
   - Contoh Template ID: `template_xyz5678`

---

### 4. Dapatkan Public Key (1 menit)

1. Klik menu **"Account"** di sidebar kiri (icon gear/settings)
2. Scroll ke bagian **"API Keys"**
3. Copy **Public Key** Anda
   - Contoh Public Key: `abcdefghij1234567`
4. Simpan key ini dengan aman

---

### 5. Update File .env di Project (2 menit)

1. Buka project portfolio di code editor
2. Buka file `.env` di root folder
3. Update dengan credentials Anda:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcdefghij1234567

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**⚠️ GANTI dengan nilai yang sebenarnya:**
- `service_abc1234` → Service ID Anda dari langkah 2
- `template_xyz5678` → Template ID Anda dari langkah 3
- `abcdefghij1234567` → Public Key Anda dari langkah 4

4. Save file `.env`

---

### 6. Test di Local Development (3 menit)

1. Buka terminal di folder project
2. Jalankan development server:
```bash
pnpm run dev
```

3. Buka browser dan akses: `http://localhost:5173`
4. Scroll ke bagian **Contact Form**
5. Isi form dengan data test:
   - Name: Your Name
   - Email: your@email.com
   - Phone: 081234567890
   - Message: Test message from local development
6. Klik **"Send Message"**
7. Anda harus melihat notifikasi sukses
8. Cek inbox **falikhrifqi69@gmail.com** - email harus masuk!

**✅ Jika email masuk, setup berhasil!**

---

### 7. Setup untuk Production/Netlify

Ketika deploy ke Netlify, Anda perlu set environment variables:

1. Login ke Netlify dashboard
2. Pilih site Anda
3. Klik **"Site settings"** → **"Environment variables"**
4. Klik **"Add a variable"** dan tambahkan satu per satu:

| Key | Value |
|-----|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_abc1234` (ganti dengan milik Anda) |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xyz5678` (ganti dengan milik Anda) |
| `VITE_EMAILJS_PUBLIC_KEY` | `abcdefghij1234567` (ganti dengan milik Anda) |

5. Klik **"Save"**
6. Trigger new deployment

---

## 🔒 Keamanan

### ⚠️ PENTING - Jangan Share Credentials!

- **JANGAN** commit file `.env` ke GitHub
- **JANGAN** share Service ID, Template ID, atau Public Key di public
- File `.env` sudah ada di `.gitignore` untuk keamanan

### Gmail Security

Jika mendapat error "Less secure app access":
1. Buka https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Buat "App Password" khusus untuk EmailJS
4. Gunakan app password tersebut saat connect Gmail di EmailJS

---

## 📊 Monitoring Email

### Cek Email History:
1. Login ke EmailJS dashboard
2. Klik **"Email History"** di sidebar
3. Anda bisa lihat semua email yang terkirim:
   - Status (Success/Failed)
   - Timestamp
   - Recipient
   - Template used

### Quota Limits (Free Plan):
- **200 emails per month**
- Jika butuh lebih, upgrade ke paid plan ($7/month untuk 1000 emails)

---

## 🐛 Troubleshooting

### Problem 1: Email Tidak Masuk

**Cek:**
1. Apakah Service ID, Template ID, dan Public Key sudah benar?
2. Cek folder **Spam** di Gmail
3. Cek EmailJS dashboard → Email History untuk error messages
4. Pastikan Gmail account sudah terverifikasi di EmailJS

**Solusi:**
- Re-connect Gmail service di EmailJS
- Pastikan tidak ada typo di `.env`
- Test ulang dengan Send Test di EmailJS dashboard

### Problem 2: Error "Invalid Public Key"

**Solusi:**
1. Copy ulang Public Key dari EmailJS dashboard
2. Pastikan tidak ada spasi di awal/akhir key
3. Restart development server setelah update `.env`

### Problem 3: Error "Template Not Found"

**Solusi:**
1. Pastikan Template ID benar
2. Pastikan template sudah di-save (bukan draft)
3. Cek di EmailJS dashboard apakah template masih ada

### Problem 4: CORS Error di Browser

**Solusi:**
- EmailJS sudah handle CORS secara otomatis
- Jika masih error, pastikan menggunakan EmailJS SDK versi terbaru
- Clear browser cache dan reload

---

## ✅ Checklist Setup

- [ ] Akun EmailJS dibuat dan verified
- [ ] Gmail service connected dengan falikhrifqi69@gmail.com
- [ ] Email template dibuat dengan HTML design
- [ ] Test email berhasil dikirim dari EmailJS dashboard
- [ ] Service ID, Template ID, dan Public Key sudah dicopy
- [ ] File `.env` sudah diupdate dengan credentials
- [ ] Development server dijalankan
- [ ] Contact form ditest di local (http://localhost:5173)
- [ ] Email test masuk ke falikhrifqi69@gmail.com
- [ ] Environment variables di-set di Netlify (untuk production)

---

## 📞 Support

Jika masih ada masalah:
1. Cek EmailJS Documentation: https://www.emailjs.com/docs/
2. Cek EmailJS FAQ: https://www.emailjs.com/docs/faq/
3. Contact EmailJS Support: support@emailjs.com

---

**Setup Time:** ~20 menit  
**Difficulty:** Easy  
**Cost:** FREE (up to 200 emails/month)

**Selamat! Email service Anda sudah siap digunakan! 🎉**