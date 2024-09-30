import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Searchbar from './components/SearchBar';
import { useTheme } from './components/ThemeContext';

function Home() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className="z-10 sticky top-0 w-full">
                <Navbar />
            </div>
            <main className="px-8 sm:px-12 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col justify-center items-center space-y-6">
                <Header />
                <Searchbar />
            </main>
            <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
                <div className="flex justify-end space-x-2">
                    <button
                        className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                        aria-label="Help"
                        type="button"
                        id="radix-:R5ja:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-help"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default Home;