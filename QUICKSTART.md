# Quick Start Guide

Get your Stratum Wound Care website up and running in minutes!

## Prerequisites

- Node.js 18 or higher installed
- A code editor (VS Code recommended)
- Terminal/Command Prompt access

## Installation (5 minutes)

1. **Open Terminal** in the project directory

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

🎉 Your website is now running locally!

## What You'll See

- **Home Page** (`/`): Hero section, services, testimonials
- **About Us** (`/about`): Team, mission, compliance info
- **Services** (`/services`): Detailed treatment information
- **Patient Info** (`/patients`): Insurance, forms, FAQ
- **Provider Referrals** (`/providers`): Secure referral form
- **Contact** (`/contact`): Contact form and location
- **Careers** (`/careers`): Job listings and applications

## Next Steps

### 1. Update Contact Information (5 minutes)

Edit `components/Footer.tsx`:
- Replace phone numbers
- Update email addresses
- Add real office hours

### 2. Customize Content (10 minutes)

Edit page files in `app/` directory:
- Update clinic name and branding
- Modify service descriptions
- Add team member photos/names

### 3. Configure Email (10 minutes)

Option A - Use Resend (Free tier available):
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=info@stratumwoundcare.com
   ```
4. Install Resend:
   ```bash
   npm install resend
   ```
5. Uncomment email code in `app/api/contact/route.ts`

### 4. Test Forms (5 minutes)

1. Fill out contact form
2. Check console for form data
3. Verify email is sent (if configured)

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Run production server

# Linting
npm run lint         # Check for code issues
```

## Customization Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: '#0284c7',  // Your brand color
    700: '#0369a1',  // Darker shade
  }
}
```

### Add Google Maps
Edit `app/contact/page.tsx` and replace the placeholder with:
```html
<iframe
  src="https://maps.google.com/maps?q=YOUR_ADDRESS&output=embed"
  className="w-full h-96 rounded-lg"
/>
```

### Update Navigation
Edit `components/Navbar.tsx` to add/remove menu items

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Form Submissions Not Working
1. Check browser console for errors
2. Verify API routes are running
3. Check `.env.local` configuration

## File Structure

```
stratum-woundcare/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── patients/page.tsx     # Patient info page
│   ├── providers/page.tsx    # Provider referrals
│   ├── contact/page.tsx      # Contact page
│   ├── careers/page.tsx      # Careers page
│   └── api/                  # API endpoints
│       ├── contact/route.ts
│       ├── referral/route.ts
│       └── careers/route.ts
├── components/
│   ├── Navbar.tsx            # Navigation
│   └── Footer.tsx            # Footer
└── public/                   # Static files (images, etc.)
```

## Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions to:
- Vercel (1-click deploy)
- Netlify
- AWS
- Your own server

## Need Help?

- 📚 Read the full [README.md](README.md)
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment
- 📧 Email: info@stratumwoundcare.com

## Features Checklist

Before going live, ensure:
- [ ] Contact information updated
- [ ] Email service configured
- [ ] Forms tested
- [ ] Content reviewed
- [ ] Mobile responsiveness checked
- [ ] All links working
- [ ] Privacy policy added
- [ ] SSL certificate enabled
- [ ] Domain configured

---

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4
