# Engineering Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing mechanical engineering and computer science projects for Nathan Sivalingam, a final-year student at UNSW.

## Live Demo

Visit the live site: [engineering-portfolio-website.vercel.app](https://engineering-portfolio-website.vercel.app/)

## Overview

This portfolio website serves as a professional showcase for engineering projects, skills, and experience. It features a clean, modern design with smooth navigation and responsive layouts optimized for all devices.

**Purpose:** To present academic and professional work in mechanical engineering and computer science to potential employers, collaborators, and the academic community.

## Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Next.js for optimal loading speeds and SEO
- **Project Showcases** - Dedicated sections for mechanical engineering and computer science projects
- **CV Download** - Direct access to downloadable resume/CV
- **Contact Form** - Easy way for visitors to get in touch
- **Modern UI** - Clean, professional interface with smooth animations
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Type-Safe** - Built with modern JavaScript/TypeScript practices

## Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) - React framework with App Router
- **Styling:** CSS Modules / Tailwind CSS (based on your implementation)
- **Font Optimization:** [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with Geist font family
- **Deployment:** [Vercel](https://vercel.com)
- **Package Manager:** npm / yarn / pnpm / bun

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd engineering-portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Development

- The main page can be edited in `app/page.js`
- Pages auto-update as you edit files
- API routes can be added in `app/api/`

## Project Structure

```
engineering-portfolio-website/
├── app/
│   ├── page.js                 # Home page
│   ├── about/                  # About page
│   ├── me-projects/            # Mechanical Engineering projects
│   ├── cs-projects/            # Computer Science projects
│   ├── contact/                # Contact page
│   ├── layout.js               # Root layout
│   └── globals.css             # Global styles
├── public/
│   └── assets/
│       ├── profile_photo.jpg   # Profile image
│       └── nathan_sivalingam_cv.pdf  # CV document
├── components/                 # Reusable React components
├── package.json
├── next.config.js
└── README.md
```

## Key Pages

### Home (`/`)
Landing page with introduction and call-to-action

### About (`/about`)
Personal background, education, and experience

### Mechanical Engineering Projects (`/me-projects`)
Showcase of mechanical engineering coursework and personal projects

### Computer Science Projects (`/cs-projects`)
Portfolio of software development and CS projects

### Contact (`/contact`)
Contact form and professional links

## Customization

### Update Personal Information

1. Edit content in respective page files (`app/page.js`, `app/about/page.js`, etc.)
2. Replace profile photo in `public/assets/profile_photo.jpg`
3. Update CV in `public/assets/nathan_sivalingam_cv.pdf`

### Styling

- Global styles: `app/globals.css`
- Component-specific styles: Use CSS Modules or Tailwind classes
- Font customization: Modify in `app/layout.js`

### Adding Projects

Create new project entries in:
- `app/me-projects/page.js` for mechanical engineering projects
- `app/cs-projects/page.js` for computer science projects

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure build settings
4. Click "Deploy"

Your site will be live with automatic deployments on every push to main branch.

### Other Deployment Options

- **Netlify:** Use the Next.js build command
- **AWS Amplify:** Connect your Git repository
- **Self-hosted:** Build with `npm run build` and deploy the `.next` folder

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learning Resources

This project was inspired by and built using knowledge from:

- [Full Stack Next.js Portfolio Tutorial](https://www.youtube.com/watch?v=dImgZ_AH7uA&t=10835s)
- [Next.js Project Build Guide](https://www.youtube.com/watch?v=TCpwcsz97wo&t=5503s)
- [Portfolio Development Tutorial](https://www.youtube.com/watch?v=BgVjild0C9A&t=165s)

Additional resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## Contact

Nathan Sivalingam
- Portfolio: [engineering-portfolio-website.vercel.app](https://engineering-portfolio-website.vercel.app/)
- University: UNSW Sydney
- Role: Academic Demonstrator & Research Assistant

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com/)
