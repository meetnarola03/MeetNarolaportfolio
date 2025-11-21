# What to Customize - Portfolio Configuration Checklist

This document lists all the fields and content you should customize after generation.

## 🎨 Essential Customizations (Required)

### 1. Personal Information

**Files to edit**: `src/components/Footer.tsx`, `src/pages/Home.tsx`, `src/pages/Contact.tsx`

- ✅ Already set: Email - `meetnarola9@gmail.com`
- ✅ Already set: Phone - `+91 8799460450`
- ✅ Already set: Name - Meet Vipulbhai Narola
- ✅ Already set: Qualification - BSc(IT)

### 2. Professional Links

**Files to edit**: `src/components/Footer.tsx`, `index.html` (JSON-LD)

- [ ] **GitHub Profile**: Replace `EDIT_ME` with your GitHub URL
  - Location: Footer component
  - Example: `https://github.com/meetnarola`

- [ ] **LinkedIn Profile**: Replace `EDIT_ME` with your LinkedIn URL
  - Location: Footer component
  - Example: `https://linkedin.com/in/meetnarola`

### 3. Project URLs

**File to edit**: `src/data/projects.ts`

For each of the 5 projects, update:

- [ ] **Car Rental System**
  - Live URL: Replace `EDIT_ME`
  - GitHub URL: Replace `EDIT_ME`

- [ ] **Ro Ro Ferry Booking**
  - Live URL: Replace `EDIT_ME`
  - GitHub URL: Replace `EDIT_ME`

- [ ] **Vassio Mobile App**
  - Live URL: Replace `EDIT_ME`
  - GitHub URL: Replace `EDIT_ME`

- [ ] **Screen Share Desktop App**
  - Live URL: Replace `EDIT_ME`
  - GitHub URL: Replace `EDIT_ME`

- [ ] **E-commerce Website**
  - Live URL: Replace `EDIT_ME`
  - GitHub URL: Replace `EDIT_ME`

### 4. Project Metrics

**File to edit**: `src/data/projects.ts`

Each project has 2-3 metrics marked with `isPlaceholder: true`. Replace these with real data:

**Car Rental System:**
- [ ] Daily Bookings: Replace `EDIT_ME`
- [ ] Fleet Size Managed: Replace `EDIT_ME`
- [ ] User Satisfaction: Replace `EDIT_ME`

**Ro Ro Ferry Booking:**
- [ ] Routes Managed: Replace `EDIT_ME`
- [ ] Monthly Bookings: Replace `EDIT_ME`
- [ ] Payment Success Rate: Replace `EDIT_ME`

**Vassio Mobile App:**
- [ ] Active Users: Replace `EDIT_ME`
- [ ] Orders Processed: Replace `EDIT_ME`
- [ ] Notification Delivery Rate: Replace `EDIT_ME`

**Screen Share Desktop App:**
- [ ] Concurrent Users Supported: Replace `EDIT_ME`
- [ ] Average Latency: Replace `EDIT_ME ms`
- [ ] Session Uptime: Replace `EDIT_ME`

**E-commerce Website:**
- [ ] Products Listed: Replace `EDIT_ME`
- [ ] Monthly Transactions: Replace `EDIT_ME`
- [ ] Page Load Time: Replace `EDIT_ME ms`

### 5. Resume PDF

**File to edit**: `src/pages/Home.tsx`

- [ ] **Resume Download Link**: Replace `EDIT_ME` with path to your resume
  - Upload your resume PDF to `public/resume.pdf`
  - Update href in Home page to `/resume.pdf`

### 6. Scheduling/Calendly Link

**File to edit**: `src/pages/Contact.tsx`

- [ ] **Calendly/Meeting Link**: Replace `EDIT_ME`
  - Example: `https://calendly.com/meetnarola/30min`
  - Or any other scheduling tool URL

### 7. SEO & Analytics

**Files to edit**: `index.html`, `public/sitemap.xml`

- [ ] **Domain Name**: Replace all instances of `EDIT_ME.vercel.app` with your actual domain
  - In `index.html`: Open Graph URLs, Twitter card URLs, canonical URL
  - In `sitemap.xml`: All `<loc>` URLs
  - In `index.html` JSON-LD: `url` field

- [ ] **GitHub/LinkedIn in JSON-LD**: Update `sameAs` array in `index.html`
  ```json
  "sameAs": [
    "YOUR_GITHUB_URL",
    "YOUR_LINKEDIN_URL"
  ]
  ```

- [ ] **Google Analytics** (Optional):
  - Add your GA4 Measurement ID to `index.html`
  - Add tracking script before closing `</head>` tag

### 8. Project Screenshots

**Location**: `src/data/projects.ts` - `images` array

- [ ] Add screenshots for each project:
  1. Take screenshots of your projects
  2. Optimize images (WebP format recommended)
  3. Upload to `public/projects/[project-name]/`
  4. Update `images` array in each project object

Example:
```typescript
images: [
  "/projects/car-rental/dashboard.webp",
  "/projects/car-rental/booking.webp"
]
```

## 🎯 Optional Customizations

### 9. About Section

**File to edit**: `src/pages/About.tsx`

- [ ] Customize the "Background" text to reflect your unique experience
- [ ] Add more details about your journey or philosophy

### 10. Hero Taglines

**File to edit**: `src/pages/Home.tsx`

Current taglines provided (you can change these):
1. "Building scalable full-stack solutions"
2. "Crafting seamless digital experiences"
3. "Transforming ideas into reality"

### 11. Experience Timeline

**File to edit**: `src/pages/Experience.tsx`

- [ ] Update dates, companies, and descriptions
- [ ] Add more experience entries if you have them
- [ ] Customize achievements and highlights

### 12. Skills Proficiency Levels

**File to edit**: `src/data/skills.ts`

- [ ] Update skill levels from "Intermediate" to your actual proficiency:
  - Beginner
  - Intermediate
  - Advanced
  - Expert

- [ ] Add new skills if needed

### 13. Theme Colors

**Files to edit**: `src/index.css`, `tailwind.config.ts`

- Current primary color: Teal (#14b8a6)
- [ ] Customize color palette if desired (optional)

### 14. Open Graph Image

**Files to create**: `public/og-image.png`

- [ ] Create a custom OG image (1200x630px recommended)
- [ ] Update reference in `index.html`

### 15. Favicon

**File to replace**: `public/favicon.ico` (read-only, but you can add more icons)

- [ ] Add custom favicon images:
  - `public/favicon-16x16.png`
  - `public/favicon-32x32.png`
  - `public/apple-touch-icon.png`
- [ ] Update `index.html` to reference new icons

## 📋 Pre-Deployment Checklist

Before deploying to production:

- [ ] All `EDIT_ME` placeholders replaced
- [ ] Project URLs and GitHub links verified
- [ ] Resume PDF uploaded and linked
- [ ] Contact form tested
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] Theme toggle works
- [ ] SEO meta tags updated with real domain
- [ ] Analytics configured (if using)
- [ ] Sitemap updated with real domain
- [ ] All social links working

## 🔧 Quick Search & Replace

Use your editor's search and replace feature to find all instances of:

```bash
# Search for placeholders
EDIT_ME

# Search for domain placeholders
EDIT_ME.vercel.app
```

## 📝 Notes

- All placeholder text is marked with `EDIT_ME` for easy searching
- Metrics marked with `isPlaceholder: true` are displayed with (EDIT) label on the site
- Most customizations can be done by editing data files without touching component code
- After customization, test locally with `npm run dev` before deploying

---

**Need Help?**
- Review the code comments in each file
- Check the README.md for project structure
- Contact: meetnarola9@gmail.com
