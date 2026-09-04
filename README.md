# Varalakshmi Housing Infra LLP — Corporate Website

A premium, production-quality corporate real-estate website built with React, Vite, TypeScript, and Tailwind CSS.

## 🏗️ Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **React Router** for navigation (15 routes, lazy-loaded)
- **Lucide React** for icons
- Custom hooks: scroll reveal, form validation, page meta

## 📄 Pages (15 Routes)

| Route | Page |
|-------|------|
| `/` | Home (16 premium sections) |
| `/about` | About Us |
| `/projects` | Projects Listing |
| `/projects/:slug` | Dynamic Project Details |
| `/why-us` | Why Choose Us |
| `/locations` | Locations |
| `/gallery` | Gallery with Lightbox |
| `/site-visit` | Schedule Site Visit |
| `/insights` | Blog / Insights |
| `/faq` | FAQ with Search |
| `/contact` | Contact Us |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/disclaimer` | Disclaimer |
| `*` | 404 Not Found |

## 🎨 Premium Features

- **Hero**: Parallax scroll, floating animated shapes, cinematic overlays
- **Scroll Progress Bar**: Gradient indicator at top of page
- **TopBar**: Company info strip above navigation
- **Back-to-Top**: SVG circular scroll progress ring
- **Testimonials**: Auto-sliding carousel with dot navigation
- **Section Dividers**: SVG wave/diagonal transitions
- **Gallery**: Lightbox with category filtering and keyboard nav
- **FAQ**: Search + category accordion
- **Forms**: Contact & site visit with validation
- **WhatsApp**: Floating button + mobile CTA bar
- **Mobile**: Hamburger navigation, touch targets, responsive

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_WHATSAPP_NUMBER=91XXXXXXXXXX
VITE_GOOGLE_MAPS_API_KEY=your_api_key
VITE_API_URL=your_backend_url
```

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/          # ContactForm, SiteVisitForm
│   ├── layout/         # Header, Footer, TopBar, LoadingScreen
│   ├── sections/       # Hero, AboutIntro, Values, etc. (14 components)
│   └── ui/             # Button, Badge, Modal, ScrollReveal, etc. (12 components)
├── pages/              # 15 page components
├── data/               # projects, faqs, testimonials, blog, navigation
├── hooks/              # useScrollReveal, useFormValidation, usePageMeta
├── types/              # TypeScript interfaces
└── lib/                # Utilities, constants, helpers
```

## 🔧 Build & Quality

- ✅ TypeScript strict mode — zero errors
- ✅ Vite production build — optimized code splitting
- ✅ Zero console errors
- ✅ Responsive at all viewports (375px–1920px)
- ✅ Zero horizontal overflow
- ✅ 44px minimum touch targets
- ✅ Accessibility: semantic HTML, ARIA labels, keyboard nav
- ✅ SEO: meta tags, structured data, sitemap.xml

## 📝 License

© 2026 VARALAKSHMI HOUSING INFRA LLP. All Rights Reserved.
