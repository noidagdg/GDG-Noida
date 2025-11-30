# GDG Noida Landing Page

A modern, responsive landing page for Google Developer Group (GDG) Noida built with Next.js 16, React 19, and Tailwind CSS v4.

## 🚀 Features

- **Modern Stack**: Built with Next.js 16 App Router, React 19, and TypeScript
- **Beautiful UI**: Leverages Shadcn UI, Radix UI, and Magic UI components
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Performance Optimized**: Server Components, code splitting, and optimized images
- **Accessible**: Built with accessibility best practices in mind

## 📋 Sections

- **Hero**: Eye-catching hero section with animated elements
- **Marquee**: Scrolling partner/sponsor logos
- **Upcoming Events**: Showcase of upcoming community events
- **Star Speakers**: Featured speakers section
- **Who We Are**: Community introduction and values
- **Flagship Events**: Highlighting major community events
- **Sponsors**: Partner and sponsor showcase
- **Testimonials**: Community member testimonials
- **Photo Gallery**: Visual gallery of community events
- **Footer**: Contact information and links

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Radix Icons](https://www.radix-ui.com/icons)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/gdg-noida-landing.git
cd gdg-noida-landing
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 📁 Project Structure

```
gdg-noida-landing/
├── app/                    # Next.js App Router pages
│   ├── agenda/            # Agenda page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── magicui/          # Magic UI components
│   ├── sections/         # Page sections
│   └── ui/               # Shadcn UI components
├── lib/                   # Utility functions
├── public/                # Static assets
│   └── assets/           # Images, SVGs, etc.
└── ...config files
```

## 🎨 Customization

### Updating Content

Most content is managed in `lib/content.tsx`. Update testimonials, events, and other content there.

### Styling

- Global styles: `app/globals.css`
- Component styles: Use Tailwind CSS classes directly in components
- Theme customization: Modify CSS variables in `globals.css`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Follow the existing component structure and styling patterns

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- How to report bugs
- How to suggest new features
- How to submit pull requests
- Our code of conduct

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GDG Noida](https://gdgnoida.com) community
- [Shadcn UI](https://ui.shadcn.com/) for amazing components
- [Magic UI](https://magicui.design/) for beautiful animations
- All contributors and community members

## 📞 Contact

- **Website**: [gdgnoida.com](https://gdgnoida.com)
- **Community**: Join our [GDG Noida community](https://gdgnoida.com)

## ⭐ Show Your Support

If you find this project helpful, please give it a star ⭐ on GitHub!

---

Made with ❤️ by the GDG Noida community

