# A1 Tantra - Customization Quick Reference

Quick guide to customize the website for your needs.

## 🎨 Color Changes

File: `tailwind.config.ts`

```typescript
colors: {
  cream: '#F9F2E8',           // Background
  'deep-brown': '#3F2F27',    // Text
  'accent-red': '#E44426',    // CTAs
  'soft-gold': '#D4AF37',     // Accents
}
```

## 📝 Homepage Content

File: `data/content.ts`

```typescript
export const tantraPaths = [
  { name: "Shakta Tantra", description: "..." },
  // Add/edit paths here
];

export const tantricTools = [
  { name: "Rudraksha Mala", price: "₹999" },
  // Add/edit tools here
];
```

## 🗂️ Page Text

### Home Hero

File: `components/Hero.tsx`

- Line 27-28: Main heading
- Line 29-31: Subheading

### Welcome Section

File: `components/WelcomeHome.tsx`

- Line 6-18: Feature cards

### Real Talk

File: `components/RealTalk.tsx`

- Line 9-22: Article cards

### Sessions

File: `components/SessionsGrid.tsx`

- Line 10-27: Session types

### Footer Links

File: `components/Footer.tsx`

- Edit all section links

## 🖼️ Replace Images

1. Save images to `public/` folder
2. In components, replace emoji with:

```tsx
import Image from "next/image";

<Image src="/image-name.jpg" alt="Description" width={300} height={300} />;
```

## 📧 Setup EmailJS

### Quick Steps:

1. Go to [emailjs.com](https://emailjs.com)
2. Create account
3. Add email service
4. Create template
5. Copy credentials to `.env.local`

### Email Template Variables:

```
{from_name}      - Sender name
{from_email}     - Sender email
{subject}        - Email subject
{message}        - Email message
{reply_to}       - Reply-to address
```

## 🗺️ Add Navigation Links

File: `components/Navbar.tsx`

```tsx
// Left links (line ~40)
<Link href="/your-page">Your Link</Link>

// Right links (line ~50)
<Link href="/your-page">Your Link</Link>
```

## 🎯 Create New Pages

1. Create folder in `app/`
2. Add `page.tsx` file
3. Use layout template:

```tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function YourPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        {/* Your content */}
      </div>
      <Footer />
    </div>
  );
}
```

## 📱 Update Metadata

File: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: "your, keywords",
};
```

## 🔗 Update Links

### Instagram Link

File: `components/InstagramGrid.tsx`

- Line 35: Replace @A1TantraOfficial

### Google Calendar

File: `components/BookingForm.tsx`

- Line 67: Replace calendar link

### Contact Email

File: `components/Footer.tsx`

- Update email link

## ✏️ Edit Section Order

File: `app/page.tsx`

```tsx
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Reorder these sections */}
      <Hero />
      <WelcomeHome />
      <RealTalk />
      {/* etc... */}
      <Footer />
    </div>
  );
}
```

## 🎭 Customize Colors Per Section

In component files, override colors:

```tsx
// Dark section
<div className="bg-deep-brown text-cream">

// Light section
<div className="bg-cream text-deep-brown">

// Accent section
<div className="bg-accent-red text-cream">
```

## 📐 Typography Classes

```tsx
// Serif heading
<h1 className="serif-heading text-4xl font-bold">Title</h1>

// Regular text
<p className="text-lg text-deep-brown/70">Text</p>

// Small text
<p className="text-sm text-deep-brown/60">Small</p>
```

## 🔘 Button Styles

```tsx
// Primary button
<button className="bg-accent-red text-cream hover:bg-deep-brown">
  ACTION
</button>

// Secondary button
<button className="border-2 border-deep-brown hover:bg-deep-brown">
  ACTION
</button>

// Link button
<a href="#" className="text-accent-red hover:text-deep-brown">
  Link →
</a>
```

## 🔍 Common File Locations

- **Colors**: `tailwind.config.ts`
- **Fonts**: `app/layout.tsx`
- **Globals**: `app/globals.css`
- **Homepage**: `app/page.tsx`
- **Components**: `components/`
- **Pages**: `app/*/page.tsx`
- **Data**: `data/content.ts`
- **Forms**: `utils/emailjs.ts`
- **Environment**: `.env.local`

## 💡 Pro Tips

1. **Test locally**: `npm run dev` before deploying
2. **Use DevTools**: Inspect element to test changes
3. **Mobile first**: Test on phone at `192.168.1.5:3000`
4. **Build test**: `npm run build` to catch errors
5. **Version control**: Commit regularly

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Google Fonts](https://fonts.google.com)

## ❌ Don't Forget

- [ ] Update environment variables
- [ ] Customize all text
- [ ] Add your images
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Monitor analytics

---

**Questions? Check the SETUP.md and DEPLOYMENT.md files!**
