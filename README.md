# Nextjs Conect Point

A modern and professional communication app built with Next.js using the pages router. Features a responsive contact form UI, portfolio showcase, animated UI elements, and local SQLite database integration for project data.

## Features

- Next.js with pages router for seamless navigation and API routes
- Responsive and accessible UI with animated gradient titles and buttons
- Contact page with form UI (no backend integrated yet)
- Portfolio page demonstrating static and SQLite dynamic project listings
- Modular CSS with CSS Modules and global styles
- Navigation header for easy page switching
- Modern animated gradient backgrounds without card overlays
- Fully responsive layouts for desktop and mobile devices

## Project Structure

```
nextjs-contact-app/
├── components/              # Reusable React components (Header, ContactForm, etc.)
├── data/                    # SQLite database file (mydatabase.sqlite) (if used)
├── lib/                     # Utility helpers for DB etc. (no MongoDB code included)
├── pages/
│   ├── api/                 # API routes (empty or sample, no MongoDB)
│   ├── about.js             # About page with Contact Us button
│   ├── contact.js           # Contact page with form UI (no backend)
│   ├── portfolio/
│   │   └── index.js         # Portfolio page with SQLite or static data
│   └── index.js             # Homepage
├── public/                  # Static assets (images, favicon)
├── styles/                  # Global and page/component CSS modules
├── package.json
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Notes

- The **contact form UI** is currently static and does not send messages to a backend. You can extend it later with any backend or serverless function you prefer.
- The portfolio page can fetch project data from a local SQLite file if set up, otherwise uses static data.
- The app uses modern React and Next.js features including CSS Modules and animated UI effects.

## Technologies

- Next.js (React framework)
- SQLite (optional local database)
- CSS Modules and global CSS
- Node.js

## License

This project is licensed under the [MIT License](LICENSE).
