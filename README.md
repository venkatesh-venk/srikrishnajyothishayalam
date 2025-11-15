# Sri Krishna Sai Jyothishalayam - Modern Website

A modern, responsive Next.js website for Sri Krishna Sai Jyothishalayam - Expert Astrology & Vastu Consultation Services.

## 🌟 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Comprehensive Services**: Detailed pages for all astrological services
- **Easy Contact**: Multiple contact options and consultation booking form

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter & Playfair Display)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup Instructions

1. **Clone or navigate to the project directory**
   ```bash
   cd srikrishnajyothishayalam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
srikrishnajyothishayalam/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/               # About Us page
│   │   ├── contact/             # Contact page
│   │   ├── gallery/             # Gallery page
│   │   ├── services/            # Services pages
│   │   │   ├── marriage/        # Marriage Analysis
│   │   │   ├── education/       # Education Guidance
│   │   │   ├── finance/         # Finance Consultation
│   │   │   └── career/          # Career Guidance
│   │   ├── vastu/               # Vastu Shastra page
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── components/              # Reusable components
│       ├── Navbar.tsx           # Navigation bar
│       └── Footer.tsx           # Footer
├── public/                       # Static files
├── package.json                  # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.js               # Next.js configuration
```

## 🎨 Pages Overview

### Home Page (`/`)
- Hero section with CTA buttons
- Services overview with cards
- Vastu services introduction
- About astrologer section
- Call-to-action section

### Services Pages
- **Main Services** (`/services`)
  - Marriage and Love Analysis
  - Education Guidance
  - Finance Consultation
  - Career Guidance

### Individual Service Pages
- `/services/marriage` - Marriage compatibility and love analysis
- `/services/education` - Educational guidance and career path selection
- `/services/finance` - Financial astrology and wealth analysis
- `/services/career` - Career guidance and job prospects

### Other Pages
- `/about` - About the astrologer and expertise
- `/vastu` - Vastu Shastra services and consultation
- `/gallery` - Photo gallery (placeholder for future images)
- `/contact` - Contact information and consultation booking form

## 🛠️ Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { ... },  // Orange tones
  secondary: { ... } // Purple tones
}
```

### Content
- Update contact information in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- Modify services content in respective service pages
- Add images to the `public` folder and reference them in components

### Fonts
Currently using:
- **Inter**: Body text (sans-serif)
- **Playfair Display**: Headings (serif)

Change fonts in `src/app/layout.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Environment Variables (Optional)

Create a `.env.local` file for environment-specific configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=srikrishna.jyothishyam@gmail.com
NEXT_PUBLIC_PHONE_1=+919966012402
NEXT_PUBLIC_PHONE_2=+919866841250
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS/DigitalOcean**: Build and deploy the `.next` folder

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Support

For any queries or support:
- **Email**: srikrishna.jyothishyam@gmail.com
- **Phone**: +91 9966012402 / +91 9866841250
- **Address**: Door No: 16-12-172/1, Haranadhapuram, 2nd Street, Near Kalpana Indian Gas Godown, S.P.S.R Nellore - 524003

## 📝 License

This project is proprietary and confidential.

## 🙏 Credits

Developed for Sri Krishna Sai Jyothishalayam
By T. Bhaskaraiah Sindhanthi - Jyotish Ratna, Jyothisha Praveena

---

**Note**: This is a modernized version of the original PHP website, built with Next.js for better performance, SEO, and user experience.