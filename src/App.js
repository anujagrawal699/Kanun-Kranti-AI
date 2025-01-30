import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { ThemeProvider } from './pages/components/ThemeContext';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider>
      <div className="font-sans antialiased">
        <Routes>
          <Route 
            path="/login" 
            element={
              isLoggedIn ? 
              <Navigate to="/" replace /> : 
              <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              isLoggedIn ? 
              <Home setSearchQuery={setSearchQuery} /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/search-results" 
            element={
              isLoggedIn ? 
              <SearchResults searchQuery={searchQuery} /> : 
              <Navigate to="/login" replace />
            } 
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;