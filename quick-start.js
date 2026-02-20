#!/usr/bin/env node
/* eslint-disable */

/**
 * A1 Tantra Quick Start Helper
 * This script helps you quickly get started with your A1 Tantra website
 */

const fs = require("fs");
const path = require("path");

console.log("\n🙏 Welcome to A1 Tantra Setup Helper\n");
console.log("=".repeat(50));

// Check if .env.local exists
const envPath = path.join(__dirname, ".env.local");
const envExamplePath = path.join(__dirname, ".env.local.example");

if (!fs.existsSync(envPath)) {
  console.log("\n⚠️  .env.local not found!\n");

  if (fs.existsSync(envExamplePath)) {
    console.log("📋 Found .env.local.example");
    console.log("📝 Steps to get started:\n");
    console.log("1. Go to https://emailjs.com");
    console.log("2. Create a free account");
    console.log("3. Add an email service (Gmail, Outlook, etc.)");
    console.log("4. Create an email template");
    console.log("5. Copy your credentials:\n");
    console.log("   - Service ID");
    console.log("   - Template ID");
    console.log("   - Public Key\n");
    console.log("6. Create .env.local in the project root");
    console.log("7. Add your credentials:\n");
    console.log("   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id");
    console.log("   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id");
    console.log("   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key\n");
  }
} else {
  console.log("✅ .env.local found - you're ready to go!\n");
}

console.log("📖 Available Commands:\n");
console.log(
  "  npm run dev       Start development server (http://localhost:3000)"
);
console.log("  npm run build     Build for production");
console.log("  npm start         Start production server");
console.log("  npm run lint      Check code quality\n");

console.log("📚 Documentation:\n");
console.log("  SETUP.md          - Setup and installation guide");
console.log("  DEPLOYMENT.md     - Deploy to Vercel");
console.log("  CUSTOMIZE.md      - Customize your site");
console.log("  PROJECT_COMPLETE.md - Full project overview\n");

console.log("🔗 Useful Links:\n");
console.log("  - EmailJS: https://emailjs.com");
console.log("  - Vercel: https://vercel.com");
console.log("  - Next.js: https://nextjs.org");
console.log("  - TailwindCSS: https://tailwindcss.com\n");

console.log("🎯 Quick Start:\n");
console.log("1. npm install                 # Install dependencies");
console.log("2. Configure .env.local        # Add EmailJS credentials");
console.log("3. npm run dev                 # Start development server");
console.log("4. Visit http://localhost:3000 # See your site");
console.log("5. Edit components & pages     # Customize");
console.log("6. Deploy to Vercel            # Go live!\n");

console.log("=".repeat(50));
console.log("\n✨ Your A1 Tantra website is ready to customize!\n");
console.log("Happy building! 🙏\n");
