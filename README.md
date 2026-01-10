# A1 Tantra - Sacred Tantra for the Modern Seeker

A modern, beautifully designed web platform dedicated to teaching authentic Tantra practices with a focus on Kundalini, Shakta, Kaula, Tibetan, and Left-Hand/Right-Hand traditions.

## 🌟 Features

### Core Features
- **Interactive Tantra Paths**: Explore 4 comprehensive Tantra traditions with detailed modal information
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Navigation**: Anchor-based scroll-to-section functionality
- **Professional UI**: Modern, clean, and spiritual aesthetic design
- **Social Integration**: Direct WhatsApp contact button and social media links

### Page Sections
1. **Hero Section**: Eye-catching landing with CTA buttons
2. **Our Story**: Origin and philosophy of A1 Tantra
3. **Instagram Invite**: Social media engagement with official gradient
4. **Tantra Paths**: 4 interactive, clickable cards with comprehensive details:
   - Kriya Tantra (Ritual-Based Path)
   - Carya Tantra (Service-Based Path)
   - Yoga Tantra (Meditation-Based Path)
   - Anuttarayoga Tantra (Non-Dual Path)
5. **Sessions & Pricing**: Detailed pricing tiers (90min to 3hrs)
6. **Newsletter**: Email subscription integration
7. **Footer**: Navigation links, social media, and contact information

## 📱 Interactive Features

### WhatsApp Integration
- **Floating Button**: Large green WhatsApp icon (bottom-right)
- **Direct Messaging**: Opens WhatsApp with pre-filled message
- **Phone Number**: +91 9217821866
- **URL Format**: `https://wa.me/919217821866?text=Hello%20A1%20Tantra`

### Tantra Paths Modal
- **Clickable Cards**: All 4 Tantra path cards are interactive
- **Comprehensive Details**: 6 sections per path:
  - Overview
  - Key Focus Areas
  - Key Benefits
  - Who Should Take This
  - Prerequisites
  - Session Details
- **Responsive Images**: Full-width path imagery
- **Close Button**: Positioned on image with accent-red background
- **Smooth Animations**: Hover effects and transitions

## 🛠️ Tech Stack

### Framework & Build
- **Next.js**: 16.0.7 with Turbopack
- **React**: Latest version with hooks
- **Node.js**: Package management via npm

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Extended color palette for branding
- **Responsive**: Mobile-first approach (xs, sm, md, lg, xl breakpoints)

### Icons
- **Remix Icon**: ri-whatsapp-fill and other icon sets
- **CDN**: https://cdn.jsdelivr.net/npm/remixicon@4.2.0/

### Code Quality
- **TypeScript**: Type-safe components
- **ESLint**: Code linting and standards
- **Prettier**: Code formatting

## 📦 Project Structure

```
a1-tantra/
├── app/
│   ├── layout.tsx           # Root layout with global styles
│   ├── page.tsx             # Home page component
│   └── globals.css          # Global CSS and Tailwind imports
├── components/
│   ├── CallMeButton.tsx     # Floating WhatsApp button
│   ├── Navbar.tsx           # Navigation bar with smooth scrolling
│   ├── Hero.tsx             # Hero section with CTAs
│   ├── OriginStory.tsx      # About/Origin story section
│   ├── InstagramInvite.tsx  # Instagram follow section
│   ├── TantraTypesSection.tsx # Interactive Tantra paths with modals
│   ├── SessionsPricing.tsx  # Pricing tiers section
│   ├── Newsletter.tsx       # Email subscription
│   └── Footer.tsx           # Footer with links and social
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎨 Color Palette

```
Primary Colors:
- Cream (Background): #F9F2E8
- Deep Brown (Text): #3F2F27
- Accent Red (CTAs): #E44426
- Soft Gold (Highlights): #D4AF37

Special Colors:
- Coral Gradient: #E6462E → #FF6A4D
- Instagram Gradient: #feda75 → #fa7e1e → #d92e7f → #9b36b7 → #515bd4
- WhatsApp Green: #25D366
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarshalPatel1972/a1-tantra.git
   cd a1-tantra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🧩 Key Components

### CallMeButton.tsx
Floating WhatsApp contact button with Remix Icon integration.
- **Icon**: ri-whatsapp-fill (Official WhatsApp logo)
- **Color**: #25D366 (WhatsApp official green)
- **Position**: Fixed bottom-right (z-50)
- **Size**: Responsive (56px font, container: w-20 h-20 / w-28 h-28)
- **Interactions**: Hover scale (1.1x), Click to WhatsApp

### Navbar.tsx
Navigation with smooth scroll-to-section functionality.
- **Scroll Behavior**: Smooth anchor-based scrolling
- **Mobile Menu**: Hamburger toggle with semi-transparent background
- **Responsive**: Different styling for mobile vs desktop
- **Active States**: Visual feedback for current section

### TantraTypesSection.tsx
Interactive Tantra paths showcase with comprehensive modals.
- **4 Paths**: Kriya, Carya, Yoga, Anuttarayoga
- **Modal Data**: 6 detailed sections per path
- **Close Button**: Positioned on image (absolute top-4 right-4)
- **Scroll Padding**: scroll-mt-24 sm:scroll-mt-32 (navbar offset)
- **Responsive**: Adaptive typography and spacing

### Footer.tsx
Comprehensive footer with navigation and social links.
- **Social Icons**: Instagram, Facebook, WhatsApp, Twitter, LinkedIn, Email
- **Icon Styling**: Remix Icon with color hover effects
- **Links**: All paths, resources, and company information
- **Copyright**: Dynamic year with custom branding

## 📋 Sessions & Pricing

| Duration | Price (₹) |
|----------|-----------|
| 90 min   | 25,000    |
| 120 min  | 30,000    |
| 150 min  | 40,000    |
| 3 hours  | 55,000    |

## 📞 Contact Information

- **WhatsApp**: +91 9217821866
- **Email**: hello@a1tantra.com
- **Instagram**: @a1ta.ntra
- **WhatsApp URL**: https://wa.me/919217821866?text=Hello%20A1%20Tantra

## 🔧 Configuration

### Tailwind Configuration
Custom colors and fonts defined in `tailwind.config.ts`:
```typescript
colors: {
  cream: '#F9F2E8',
  'deep-brown': '#3F2F27',
  'accent-red': '#E44426',
  'soft-gold': '#D4AF37',
}

fontFamily: {
  logo: ['Playfair Display', 'serif'],
  title: ['Crimson Text', 'serif'],
  body: ['Lora', 'serif'],
}
```

### Viewport & Breakpoints
- xs: < 640px (Mobile)
- sm: 640px - 768px (Small Tablet)
- md: 768px - 1024px (Tablet)
- lg: 1024px - 1280px (Desktop)
- xl: 1280px+ (Large Desktop)

## 🌐 Deployment

### GitHub Repository
- **Repository**: https://github.com/HarshalPatel1972/a1-tantra
- **Branch**: main
- **Access**: Public

### Ready for Deployment
The application is production-ready with:
- Zero build errors
- Responsive design optimized
- Performance optimizations
- SEO-friendly structure
- Cross-browser compatibility

## 📝 Git Workflow

### Recent Commits (Most Recent)
- `6fd1b9c`: Change button tooltip to 'Call me'
- `485b506`: Change tooltip text to 'Open WhatsApp'
- `9e106ad`: Add CSS with !important and visibility properties
- `603c392`: Increase WhatsApp icon size
- `4bf0d83`: Fix WhatsApp icon visibility
- `8968cc4`: Use exact Remix Icon WhatsApp logo from footer

### Commit Pattern
All changes are committed with descriptive messages following the format:
```
<action>: <component> - <description>
```

## 🎯 Best Practices

### Code Structure
- Component-based architecture for reusability
- Separate concerns (styling, logic, rendering)
- Responsive design with mobile-first approach
- Semantic HTML and accessibility considerations

### Styling
- Utility classes (Tailwind) for consistency
- Custom CSS only where necessary
- CSS variables for dynamic values
- Important flags only when override needed

### Performance
- Next.js optimizations (code splitting, lazy loading)
- Optimized images and assets
- Minimal re-renders with React hooks
- Smooth animations and transitions

## 🔄 Development Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make Changes**
   - Edit component files
   - Test in dev server
   - Verify responsive design

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Remix Icon Library](https://remixicon.com)

### Related Files
- `tailwind.config.ts`: Styling configuration
- `tsconfig.json`: TypeScript settings
- `package.json`: Dependencies and scripts
- `app/layout.tsx`: Global layout and meta tags

## 🤝 Contributing

This is a private project for A1 Tantra. For contributions or modifications, please contact the project owner.

## 📄 License

All rights reserved © A1 Tantra 2025-2026

---

**Last Updated**: January 10, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
