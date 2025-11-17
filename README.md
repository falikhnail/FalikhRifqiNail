# 🎨 Portfolio Website - Falikh Rifqi Nail

A modern, responsive portfolio website built with React, TypeScript, Vite, and Shadcn-UI components.


## ✨ Features

- 🎯 **Modern Design** - Clean, professional UI with gradient effects and smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 🌍 **Bilingual** - English and Indonesian language support
- 📧 **Contact Form** - Integrated with EmailJS for direct email submissions
- 🎬 **Video Introduction** - Embedded YouTube video showcase
- 💬 **WhatsApp Integration** - Quick contact via WhatsApp button
- 📊 **Google Analytics** - Track visitor behavior and site performance
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Shadcn-UI Components** - Beautiful, accessible UI components
- 🔒 **SEO Optimized** - Meta tags and semantic HTML for better search rankings

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/falikhnail/FalikhRifqiNail.git
cd portfolio-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` and add your credentials (see [EmailJS Setup Guide](./EMAILJS_SETUP.md))

5. Start development server:
```bash
pnpm run dev
```

6. Open http://localhost:5173 in your browser

## 📧 Email Service Setup

The contact form uses EmailJS to send emails directly to **falikhrifqi69@gmail.com**.

**Follow the detailed setup guide:** [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

Quick summary:
1. Create free account at https://emailjs.com
2. Connect your Gmail account
3. Create email template
4. Get Service ID, Template ID, and Public Key
5. Update `.env` file with your credentials

## 🌐 Deployment

### Deploy to Netlify (Recommended)

**Follow the complete deployment guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

Quick steps:
1. Push code to GitHub
2. Connect repository to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy!

Your site will be live at: `https://your-site-name.netlify.app`

### Manual Build

```bash
pnpm run build
```

Build output will be in `dist/` directory.

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   └── assets/            # Images, logos, etc.
│       ├── profile.jpg
│       ├── projects/
│       ├── testimonials/
│       └── partners/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn-UI components
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   ├── lib/              # Utility functions
│   │   ├── emailjs.ts    # EmailJS integration
│   │   └── analytics.ts  # Google Analytics
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── .env                  # Environment variables (DO NOT COMMIT)
├── .env.example          # Environment variables template
├── netlify.toml          # Netlify configuration
├── DEPLOYMENT.md         # Deployment guide
├── EMAILJS_SETUP.md      # EmailJS setup guide
└── README.md            # This file
```

## 🛠️ Available Scripts

```bash
# Development
pnpm run dev              # Start dev server

# Build
pnpm run build            # Build for production
pnpm run preview          # Preview production build

# Code Quality
pnpm run lint             # Run ESLint
pnpm run type-check       # Run TypeScript type checking

# Deployment
netlify deploy            # Deploy to Netlify (draft)
netlify deploy --prod     # Deploy to Netlify (production)
```

## 🎨 Customization

### Update Personal Information

Edit the following files:
- `src/components/HeroSection.tsx` - Name, title, description
- `src/components/SkillsSection.tsx` - Your skills and expertise
- `src/components/ProjectsSection.tsx` - Your projects
- `src/components/TestimonialsSection.tsx` - Client testimonials
- `src/components/PartnersSection.tsx` - Partners/clients
- `src/components/ContactSection.tsx` - Contact information

### Change Colors/Theme

Edit `tailwind.config.js` to customize:
- Primary colors
- Font families
- Spacing
- Breakpoints

### Add New Sections

1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation if needed

## 📊 Analytics

### Google Analytics Setup

1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env`:
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```
4. Redeploy site

## 🔒 Security

- ✅ Environment variables are not committed to Git
- ✅ `.env` is in `.gitignore`
- ✅ EmailJS credentials are stored securely
- ✅ HTTPS enabled by default on Netlify
- ✅ Security headers configured in `netlify.toml`

## 🐛 Troubleshooting

### Email not sending?
- Check EmailJS credentials in `.env`
- Verify environment variables in Netlify dashboard
- Check EmailJS dashboard for error logs
- See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) troubleshooting section

### Build failing?
- Run `pnpm run lint` to check for errors
- Ensure all dependencies are installed
- Check Node.js version (18+)
- Clear cache: `rm -rf node_modules .vite dist && pnpm install`

### Images not loading?
- Ensure images are in `public/assets/` directory
- Use absolute paths: `/assets/image.jpg` not `./assets/image.jpg`
- Check file names match exactly (case-sensitive)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Falikh Rifqi Nail**
- Email: falikhrifqi69@gmail.com
- Portfolio: [Your Website URL]
- GitHub: [@falikhnail]https://github.com/falikhnail

## 🙏 Acknowledgments

- [Shadcn-UI](https://ui.shadcn.com/) - Beautiful UI components
- [EmailJS](https://www.emailjs.com/) - Email service
- [Netlify](https://www.netlify.com/) - Hosting platform
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📞 Support

If you have any questions or need help:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
2. Check [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for email setup
3. Open an issue on GitHub
4. Contact via email: falikhrifqi69@gmail.com

---

**Built with ❤️**