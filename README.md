# 🎭 Mask of the King - Official Website

The official website for **Mask of the King**, an African kingdom-themed platformer adventure game built with Phaser 3.

## 🌟 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Dark Theme**: Elegant dark design inspired by African heritage
- **Responsive**: Fully responsive for desktop and mobile devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: High contrast typography and accessible color palette
- **Vercel Ready**: Optimized for deployment on Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── gameplay/
│   │   └── page.tsx        # Gameplay guide
│   ├── media/
│   │   └── page.tsx        # Media gallery
│   └── contact/
│       ├── layout.tsx      # Contact layout with metadata
│       └── page.tsx        # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Card.tsx        # Card component
│   │   ├── Section.tsx     # Section wrapper
│   │   ├── SectionHeader.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── MediaPlaceholder.tsx
│   │   └── index.ts        # UI exports
│   └── home/
│       ├── Hero.tsx        # Hero section
│       ├── GameOverview.tsx
│       ├── Features.tsx
│       ├── MediaSection.tsx
│       ├── CTASection.tsx
│       └── index.ts        # Home exports
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IshKevin/the_hive_web.git
   cd the_hive_web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Colors

The design uses an African-inspired gold color palette:

- **Primary Gold**: `#d4af37`
- **Primary Light**: `#f0d464`
- **Primary Dark**: `#b8941f`
- **Background**: `#0a0a0f`

### Environment Colors

Each game environment has its own accent color:

- **Savannah**: `#e6ccb2` (warm beige)
- **Swamp**: `#2d6a4f` (deep green)
- **Forest**: `#52b788` (bright green)
- **Mountain**: `#a8dadc` (cool blue)

### Typography

- **Headings**: Cinzel (serif, for regal feel)
- **Body**: Inter (sans-serif, for readability)

## 📝 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features, gallery, and CTAs |
| About | `/about` | Game story, design philosophy, and team info |
| Gameplay | `/gameplay` | Controls, mechanics, and environment guide |
| Media | `/media` | Screenshot gallery, videos, and press kit |
| Contact | `/contact` | Contact form, FAQs, and community links |

## 🖼️ Asset Placeholders

The website uses placeholder components for media assets. To add actual game assets:

1. **Screenshots**: Replace `MediaPlaceholder` components with actual `<Image>` components
2. **Videos**: Add video embeds or hosted video files
3. **Logo**: Create a proper game logo asset

Look for `TODO:` comments in the code for specific asset locations.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Inter, Cinzel)
- **Deployment**: Vercel-ready

## 📄 License

This project is created for educational and game jam purposes.

## 🙏 Credits

- **Game**: [Mask of the King](https://github.com/IshKevin/the_hive) by Kevin Ishimwe
- **Framework**: Phaser 3
- **Website**: Built with Next.js and Tailwind CSS

---

**Visit the game repository**: [github.com/IshKevin/the_hive](https://github.com/IshKevin/the_hive)
