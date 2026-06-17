# Inspire Classes 🎓

A modern, responsive portfolio-style website for a tuition teacher offering classes for Grades 1–10. Built to feel like a premium personal brand site rather than a generic coaching-institute page — designed to build trust with parents and drive admissions inquiries.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?logo=framer&logoColor=white)

## ✨ Features

- **Fully responsive** — looks great on mobile, tablet, and desktop
- **Scroll-triggered animations** powered by Framer Motion, with an `IntersectionObserver`-based hook so animations only fire once elements enter the viewport
- **Sticky navbar** with a live scroll-progress indicator
- **Floating WhatsApp button** and a **back-to-top** button that appears on scroll
- **Animated stat counters** for student results
- **Interactive FAQ accordion**
- **Contact form** with client-side validation and a success state (see [Backend Note](#-backend-note) below)
- **SEO-friendly** meta tags and semantic structure
## 🗂️ Sections

1. Hero — headline, CTAs, animated particle background
2. About the Teacher — bio, philosophy, experience
3. Classes & Subjects — Grades 1–8 (All Subjects) and Grades 9–10 (Math & Science)
4. Student Results — animated stats + sample score-improvement cards
5. Testimonials — parent reviews
6. FAQ — batch timings, fees, demo classes, online/offline, batch size
7. Contact — form, phone/WhatsApp/email links, map placeholder

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon set |

## 📁 Project Structure

```
inspire-classes/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Classes.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Results.jsx
│   │   ├── Method.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingActions.jsx
│   ├── hooks/
│   │   └── useInView.js        # IntersectionObserver hook for scroll animations
│   ├── App.jsx                  # Composes all sections
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives + global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

