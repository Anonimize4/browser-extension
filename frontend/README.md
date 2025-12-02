# Frontend - React Browser Extension

This is the frontend for the browser extension built with React, TypeScript, and Vite.

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # React assets (images, etc.)
│   ├── components/        # Reusable React components
│   ├── constants/         # Configuration constants
│   ├── extension/         # Browser extension files
│   │   ├── background.js  # Background script
│   │   └── content.js     # Content script
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services and external integrations
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   ├── App.css            # App-specific styles
│   └── index.css          # Global styles
├── docs/                  # Documentation files
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Browser Extension Structure

The browser extension files are located in `src/extension/`:
- `background.js` - Service worker for background tasks
- `content.js` - Content script injected into web pages

## Development

This project uses:
- React 19 with TypeScript
- Vite for build tooling
- ESLint for code linting

## Build Process

1. TypeScript compilation (`tsc -b`)
2. Vite bundling (`vite build`)
3. Output in `dist/` directory
