# BotLeague - India's Ultimate Robotics Arena 🤖

A high performance, pixel perfect landing page built for the BotLeague robotics competition platform. Designed with a dark, cinematic esports aesthetic, this application features smooth scroll animations, dynamic leaderboards, and an interactive event showcase.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration, no `tailwind.config.js`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI Primitives)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Key Features

- **Cinematic UI/UX**: Dark mode by default with aggressive neon red and blue accents, styled after modern esports and gaming platforms.
- **Scroll Animations**: Staggered text reveals, fade-ups, and interactive hover states powered by Framer Motion's `whileInView`.
- **Dynamic Leaderboards**: Real-time ranking mockup featuring dynamic player avatars generated via the Dicebear API.
- **Sponsor Integration**: Live fetched high-quality logos of top Indian universities and robotics companies.
- **Asymmetric Grids**: Custom CSS Grid implementations for showcasing various competition disciplines (Robo Wars, Drone Racing, Line Follower, etc.).

## 🛠️ Getting Started

First, make sure you have Node.js installed. Then, clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 📁 Project Structure

- `/app` - Next.js App Router pages and global CSS configurations.
- `/components/sections` - Modular page sections (Hero, Leaderboard, Sponsors, Events).
- `/components/ui` - Reusable shadcn/ui components (Buttons, Cards).
- `/components/layout` - Global layout components (Navbar, Footer).
- `/lib` - Utility functions (`cn` for tailwind-merge) and centralized application data/constants (`constants.ts`).
- `/public/images` - Static image assets, high-res backgrounds, and AI-generated placeholders.

---
*Built for BotLeague - Build. Compete. Rank.*
