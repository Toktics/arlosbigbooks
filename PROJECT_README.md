# Arlo's Big Books Website

A vibrant, playful website for the Arlo's Big picture book series by Martin King.

## 🚀 Getting Started

### Development

1. Install dependencies (if needed):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  - layout.tsx (Header with logo & navigation)
  - page.tsx (Homepage with all sections)
  - globals.css (Global styles)

/public
  /images
    - logo.png (Arlo's Big Books logo)
    /books
      - big-yawn-cover.png
      - big-yawn-back.png
      - big-head-cover.png
    /pages
      - (All 32 book pages 1.png - 32.png)
```

## 🎨 Design Features

- **White space** with **bold color pops** (red, yellow, blue)
- Vibrant felt-tip pen style matching the books
- Cream-yellow (#FFF8E1) and sky-blue (#E3F2FD) section backgrounds
- Fredoka font for headings (playful)
- Poppins font for body text (clean & readable)
- Fully responsive design
- Sticky header navigation

## 📦 Deployment to Vercel

### 1. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub

### 2. Connect GitHub Repository

First, create a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit - Arlo's Big Books website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js settings
4. Click "Deploy"

### 4. Add Custom Domain

1. In Vercel dashboard, go to your project
2. Go to **Settings** → **Domains**
3. Add your domains:
   - arlosbigbooks.co.uk
   - arlosbigbooks.com

4. Update DNS settings at your domain registrar:
   - **Type**: A
   - **Name**: @ (or leave blank)
   - **Value**: 76.76.21.21

   And/or:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com

5. Wait for DNS propagation (5 minutes - 48 hours)

## 📧 Contact Form Setup

To add the contact form functionality, we can use one of these free services:

### Option 1: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create account
3. Create a new form
4. Get your form endpoint
5. Add to the website

### Option 2: EmailJS
1. Go to [emailjs.com](https://emailjs.com)
2. Create account
3. Set up email service
4. Get API credentials
5. Add to the website

## 🎥 Video Integration

When you have your Vimeo video ready:
1. Upload to Vimeo
2. Get the embed code
3. Add to the Books section on the homepage

## 📚 Adding New Books

To add new books to the series:

1. Add cover image to `/public/images/books/`
2. Edit `/app/page.tsx`
3. Add new card to the "Coming Soon" section

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Fredoka, Poppins)
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component

## 📝 Future Enhancements

- [ ] Add contact form with email service
- [ ] Embed Vimeo video
- [ ] Add "For Educators" page with downloadable resources
- [ ] Mobile menu functionality
- [ ] Newsletter signup
- [ ] Blog/news section (using markdown files)
- [ ] Amazon affiliate links integration

## 🎯 Marketing & SEO

The site includes:
- Proper meta tags for SEO
- Semantic HTML structure
- Fast loading with Next.js Image optimization
- Mobile-responsive design
- Clear call-to-actions

## 📞 Support

For questions about this website, contact the developer through the project conversation.
