# Deployment Guide - Stratum Wound Care Website

This guide will help you deploy your website to production.

## Pre-Deployment Checklist

### 1. Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in all environment variables with production values
- [ ] Test all forms locally
- [ ] Verify email notifications work
- [ ] Test file uploads (career applications)

### 2. Content Updates
- [ ] Update placeholder contact information with real details
- [ ] Add real clinic address and phone numbers
- [ ] Replace placeholder team member information
- [ ] Add Google Maps embed for location
- [ ] Review all page content for accuracy

### 3. Legal & Compliance
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Ensure HIPAA compliance measures are in place
- [ ] Add Cookie Consent banner if required
- [ ] Review all forms for proper data handling

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure build settings (auto-detected)
   - Add environment variables:
     - Go to Settings → Environment Variables
     - Add all variables from `.env.local`
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to Settings → Domains
   - Add `stratumwoundcare.com` or your domain
   - Follow DNS configuration instructions
   - Wait for SSL certificate to be provisioned (automatic)

4. **Configure Email Service**
   - Set up Resend or SendGrid account
   - Add API keys to environment variables
   - Test form submissions

#### Vercel Environment Variables to Add:
```
EMAIL_SERVICE=resend
RESEND_API_KEY=<your-key>
CONTACT_EMAIL=info@stratumwoundcare.com
REFERRAL_EMAIL=referrals@stratumwoundcare.com
HR_EMAIL=careers@stratumwoundcare.com
NEXT_PUBLIC_SITE_URL=https://stratumwoundcare.com
```

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. Add environment variables in Netlify dashboard
4. Connect custom domain
5. Enable HTTPS (automatic)

### Option 3: AWS Amplify

1. Connect GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables
4. Configure custom domain
5. Deploy

### Option 4: Self-Hosted (VPS)

Requirements:
- Node.js 18+
- PM2 for process management
- Nginx for reverse proxy
- SSL certificate (Let's Encrypt)

#### Steps:

1. **Server Setup**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Install Nginx
   sudo apt install nginx
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone <your-repo>
   cd stratum-woundcare

   # Install dependencies
   npm install

   # Build application
   npm run build

   # Start with PM2
   pm2 start npm --name "stratum-woundcare" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name stratumwoundcare.com www.stratumwoundcare.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL Certificate**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d stratumwoundcare.com -d www.stratumwoundcare.com
   ```

## Post-Deployment Tasks

### 1. Test All Features
- [ ] Test all page navigation
- [ ] Submit contact form
- [ ] Submit provider referral form
- [ ] Submit career application
- [ ] Verify email notifications arrive
- [ ] Test on mobile devices
- [ ] Test in different browsers

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Add meta descriptions to all pages
- [ ] Set up Google My Business
- [ ] Add schema.org markup for local business

### 3. Performance
- [ ] Run Lighthouse audit
- [ ] Check page load times
- [ ] Optimize images if needed
- [ ] Enable caching

### 4. Security
- [ ] Enable HTTPS (should be automatic)
- [ ] Set up security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Regular security updates
- [ ] Enable rate limiting on API routes

### 5. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Set up email notifications for errors
- [ ] Monitor form submission success rates

## Email Service Setup

### Using Resend (Recommended)

1. **Sign up**: [resend.com](https://resend.com)

2. **Verify Domain**
   - Add your domain
   - Add DNS records provided by Resend
   - Verify domain

3. **Get API Key**
   - Generate API key
   - Add to environment variables

4. **Update API Routes**

   Install Resend:
   ```bash
   npm install resend
   ```

   Update `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   // In your POST handler:
   await resend.emails.send({
     from: 'noreply@stratumwoundcare.com',
     to: process.env.CONTACT_EMAIL!,
     subject: `New Contact Inquiry - ${data.serviceInterest}`,
     html: `<h1>New Contact Form Submission</h1>...`,
   });
   ```

### Using SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify sender email
3. Generate API key
4. Install: `npm install @sendgrid/mail`
5. Update API routes with SendGrid integration

## Database Setup (Optional)

If you want to store form submissions:

### Using Vercel Postgres

1. Enable Vercel Postgres in your project
2. Install Prisma:
   ```bash
   npm install @prisma/client
   npm install -D prisma
   ```

3. Initialize Prisma:
   ```bash
   npx prisma init
   ```

4. Create schema in `prisma/schema.prisma`

5. Update API routes to save to database

### Using Supabase

1. Create project at [supabase.com](https://supabase.com)
2. Get database URL
3. Set up tables
4. Update API routes

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Forms Not Sending Emails
- Verify API keys are set correctly
- Check email service dashboard for errors
- Test with console.log in API routes
- Verify email addresses are valid

### Slow Performance
- Check image sizes
- Enable Next.js Image optimization
- Use CDN for static assets
- Check database query performance

### CORS Errors
- Verify API route configuration
- Check allowed origins
- Ensure proper headers are set

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup Strategy
- Regular database backups (if using database)
- Git repository backup
- Environment variables backup (secure location)

### Monitoring Checklist
- Weekly: Check error logs
- Monthly: Review form submissions
- Monthly: Check email delivery rates
- Quarterly: Security audit
- Quarterly: Performance review

## Support

For deployment support:
- Email: info@stratumwoundcare.com
- Documentation: [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

Last Updated: November 2024
