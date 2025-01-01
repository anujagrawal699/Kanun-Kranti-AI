# Kanun Kranti AI

A legal assistance platform for commercial courts powered by AI, providing law search, analysis, and multilingual support.

## Features
- Legal document search and analysis
- Multilingual support via Google Translate
- Interactive law cards with detailed analysis
- Pagination for search results
- Dark/Light theme support
- Responsive design

## Structure
```
└── anujagrawal699-Kanun-Kranti-AI/
    ├── public/               # Static assets
    └── src/
        ├── assets/          # Images and media
        └── pages/
            └── components/  # React components
```

## Key Components
- **SearchBar**: Advanced legal document search
- **LawCard**: Displays law summaries and analysis
- **FullAnalysis**: Detailed legal analysis view
- **GoogleTranslate**: Multilingual support
- **FilterBar**: Search result filtering
- **ResultsList**: Paginated search results

## Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Environment Variables
```env
REACT_APP_GOOGLE_TRANSLATE_API_KEY=your_key
REACT_APP_API_URL=backend_url
```

## Tech Stack
- React.js
- Tailwind CSS
- Google Translate API
- Context API for theme management

## Development
1. Clone repository
2. Install dependencies
3. Set up environment variables
4. Start development server
