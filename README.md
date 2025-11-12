# Stratum Wound Care - Website

A professional, modern website for Stratum Wound Care clinic in Pennsylvania, built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Features

### Pages
- **Home Page**: Hero section, services overview, testimonials, and call-to-action
- **About Us**: Mission statement, leadership team, compliance information, and company history
- **Services**: Comprehensive wound care services with detailed descriptions
- **Patient Information**: Insurance details, new patient forms, FAQ, and billing information
- **Provider Referrals**: Secure HIPAA-compliant referral form for healthcare providers
- **Contact**: Contact form, location map, office hours, and multiple contact methods
- **Careers**: Job listings, benefits, company culture, and online application form

### Key Features
- 📱 Fully responsive design (mobile-first approach)
- 🔒 HIPAA-compliant secure forms
- 🎨 Professional medical-themed design
- ⚡ Fast performance with Next.js 15
- 🔍 SEO optimized
- ♿ Accessibility considerations
- 📧 Contact and referral form submission (API routes ready for email integration)
- 💼 Career application with resume upload

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (Google Fonts)
- **Forms**: Client-side validation with server-side API routes

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration (email service API keys, etc.)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
stratum-woundcare/
├── app/
│   ├── about/          # About Us page
│   ├── api/            # API routes
│   │   ├── careers/    # Career application endpoint
│   │   ├── contact/    # Contact form endpoint
│   │   └── referral/   # Provider referral endpoint
│   ├── careers/        # Careers page
│   ├── contact/        # Contact page
│   ├── patients/       # Patient Information page
│   ├── providers/      # Provider Referrals page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with navbar and footer
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation component
├── public/             # Static assets
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore file
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # This file
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Email Integration

The website includes API routes for form submissions but requires email service integration. To enable email notifications:

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Add your API key to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
```

3. Install Resend:
```bash
npm install resend
```

4. Update API routes to use Resend (see comments in API route files)

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Add API key to `.env.local`
3. Install SendGrid SDK
4. Update API routes accordingly

### Option 3: Custom SMTP

1. Configure SMTP settings in `.env.local`
2. Install nodemailer: `npm install nodemailer`
3. Update API routes to use nodemailer

## Database Integration (Optional)

To store form submissions in a database:

1. Set up PostgreSQL database
2. Install Prisma or your preferred ORM:
```bash
npm install @prisma/client
npm install -D prisma
```

3. Initialize Prisma:
```bash
npx prisma init
```

4. Create database schema
5. Update API routes to save data to database

## File Upload Storage (Optional)

For career application resume storage:

1. Set up AWS S3 bucket or similar storage
2. Install AWS SDK: `npm install @aws-sdk/client-s3`
3. Update careers API route with upload logic

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Self-hosted with PM2

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Adjust these values
  }
}
```

### Content

- Update clinic information in component files
- Replace placeholder contact details
- Add actual Google Maps embed in Contact page
- Update team member information in About page

### Forms

All forms have basic client-side validation. Add server-side validation and database integration as needed for production use.

## HIPAA Compliance Notes

While the website includes security best practices:

1. ✅ HTTPS required in production
2. ✅ Form data validation
3. ✅ Secure API routes
4. ⚠️ Implement proper encryption for stored data
5. ⚠️ Add authentication for patient portal
6. ⚠️ Use HIPAA-compliant email service
7. ⚠️ Conduct security audit before handling PHI
8. ⚠️ Implement proper access controls
9. ⚠️ Add audit logging for data access

**Important**: Consult with HIPAA compliance experts before handling Protected Health Information (PHI) in production.

## License

Proprietary - Stratum Wound Care

## Support

For technical support or questions:
- Email: info@stratumwoundcare.com
- Phone: (555) 123-4567

---

Built with ❤️ for Stratum Wound Care
