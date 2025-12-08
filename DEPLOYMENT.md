# A1 Tantra - Deployment Guide

This guide walks you through deploying your A1 Tantra website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free)
- EmailJS credentials (from .env.local)

## Step 1: Prepare Your Repository

### If using Git:

```bash
cd a1-tantra

# Initialize git if not already done
git init
git add .
git commit -m "Initial A1 Tantra website"

# Add remote and push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/a1-tantra.git
git push -u origin main
```

## Step 2: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

## Step 3: Import Project to Vercel

### Method A: Dashboard Import

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Import"

### Method B: GitHub Integration

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Choose your GitHub repository
4. Click "Import"

## Step 4: Configure Environment Variables

In the Vercel dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add these three variables:

   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key

4. Click "Save"

## Step 5: Deploy

### Automatic Deploy

- Once environment variables are set, click "Deploy"
- Vercel will automatically build and deploy

### Custom Domain

1. In project settings, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., a1tantra.com)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (24-48 hours)

## Step 6: Verify Deployment

1. Visit your Vercel deployment URL
2. Test all forms (they should send emails)
3. Check mobile responsiveness
4. Verify all links work

## Continuous Deployment

Once set up, your site will:

- Auto-deploy on every push to main branch
- Build in ~2-3 minutes
- Go live instantly

## Custom Domain Setup

### With Vercel Domain:

1. Buy domain on Vercel
2. Auto-configured and ready

### With External Domain (GoDaddy, Namecheap, etc.):

1. Go to project "Domains"
2. Add your domain
3. Copy Vercel nameservers
4. Update nameservers at your domain registrar
5. Wait 24-48 hours for propagation

## Environment Variables Reference

```env
# Required for forms to work
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_xxxxx

# Optional: Google Calendar (if using embedded calendar)
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id@gmail.com
```

## Troubleshooting

### Forms Not Sending Emails

- Verify EmailJS credentials in .env.local
- Check EmailJS dashboard for failed sends
- Ensure template ID matches between EmailJS and env vars

### Build Fails

- Check that all imports are correct
- Verify all components exist
- Run `npm install` locally and test build

### Slow Performance

- Optimize images in public/ folder
- Use Next.js Image component
- Check Lighthouse scores

## Monitoring

Vercel provides:

- **Analytics**: Page views and traffic
- **Edge Network**: Global CDN
- **Edge Middleware**: Request routing
- **Real-time Logs**: Error tracking

## Scaling

As your site grows:

- Vercel automatically scales
- No configuration needed
- Upgrade plan if needed for more builds
- Consider Vercel Pro for advanced features

## Security

Vercel includes:

- HTTPS/SSL encryption (automatic)
- DDoS protection
- Automatic backups
- Environment variable encryption

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: support@vercel.com
- **Community Discord**: discord.gg/vercel

## Rollback

If deployment goes wrong:

1. Go to project "Deployments"
2. Find previous working deployment
3. Click three dots → "Promote to Production"
4. Site reverts instantly

## Next Steps

1. ✅ Deploy to Vercel
2. Set up custom domain
3. Configure analytics
4. Monitor form submissions
5. Iterate on content and design

---

**Your A1 Tantra website is now live! 🎉**
