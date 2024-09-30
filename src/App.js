import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import { ThemeProvider } from './pages/components/ThemeContext';




function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <ThemeProvider>
      <div className="font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults searchQuery={searchQuery} />} />
        </Routes>
      </div>
      </ThemeProvider>
    
  );
}

export default App;
