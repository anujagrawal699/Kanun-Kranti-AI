import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Searchbar from './components/SearchBar';
import HistoryBar from './components/HistoryBar';
import { useTheme } from './components/ThemeContext';

function Home() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* HistoryBar */}
            <HistoryBar />

            {/* Main content */}
            <div className="md:ml-64"> {/* Add left margin on medium screens and up */}
                <div className="z-10 sticky top-0 w-full">
                    <Navbar />
                </div>
                <main className="px-8 sm:px-12 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col justify-center items-center space-y-6">
                    <Header />
                    <Searchbar />
                </main>
                <footer className="w-full sm:w-auto p-4 fixed bottom-0 right-0 sm:right-4 md:right-60 text-center sm:text-right text-sm">
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Kanun Kranti AI. All rights reserved. 
                        Developed with ❤️ for the betterment of legal research.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default Home;