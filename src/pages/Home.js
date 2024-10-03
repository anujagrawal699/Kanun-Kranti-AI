import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Searchbar from './components/SearchBar';
import HistoryBar from './components/HistoryBar';
import { useTheme } from './components/ThemeContext';

function Home() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Navbar */}
            <div className="z-35 top-0 w-full">
                <Navbar />
            </div>
            
            {/* HistoryBar */}
            <HistoryBar />
            
            {/* Main content */}
            <div className="flex-grow md:ml-64 relative z-10 flex flex-col">
                <main className="flex-grow px-4 sm:px-8 pb-24 max-w-3xl mx-auto w-full flex flex-col items-center space-y-6 pt-16">
                    <Header />
                    <Searchbar />
                </main>
                
                {/* Footer */}
                <footer className="w-full bg-inherit mt-auto"> {/* Added mt-auto */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-4 text-center sm:text-right text-sm">
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            © {new Date().getFullYear()} Kanun Kranti AI. All rights reserved.
                            Developed with ❤️ for the betterment of legal research.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;