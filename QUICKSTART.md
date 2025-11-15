# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Available Pages

- **Home**: `http://localhost:3000/`
- **About**: `http://localhost:3000/about`
- **Services**: `http://localhost:3000/services`
  - Marriage: `http://localhost:3000/services/marriage`
  - Education: `http://localhost:3000/services/education`
  - Finance: `http://localhost:3000/services/finance`
  - Career: `http://localhost:3000/services/career`
- **Vastu**: `http://localhost:3000/vastu`
- **Gallery**: `http://localhost:3000/gallery`
- **Contact**: `http://localhost:3000/contact`

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Making Changes

### Update Contact Information
Edit these files:
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

### Change Colors
Edit `tailwind.config.ts` and modify the primary/secondary color palettes.

### Add Images
1. Place images in the `public` folder
2. Reference them in components using `/image-name.jpg`

### Modify Content
All page content is in `src/app/` directory. Each folder represents a route.

## Deployment

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

## Need Help?

Check the full `README.md` for detailed documentation.

