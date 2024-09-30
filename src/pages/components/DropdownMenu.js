import React, { useState } from 'react';
import { useTheme } from './ThemeContext'; // Make sure this path is correct
import './DropDownMenu.css'; // Import the CSS file

const DropdownMenu = () => {
    const [themeOpen, setThemeOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleThemeMenu = () => {
        setThemeOpen(!themeOpen);
    };

    const handleThemeChange = (newTheme, e) => {
        e.preventDefault();
        setTheme(newTheme);
        setThemeOpen(false);
    };

    return (
        <div className="relative">
            <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20 transition-transform transform opacity-100 animate-slide-down">
                <ul className="py-1 text-sm font-medium">
                    <li className="relative">
                        <button
                            onClick={toggleThemeMenu}
                            className="w-full text-left block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                        >
                            Theme
                            <span className="ml-auto">›</span>
                        </button>
                        {themeOpen && (
                            <div className="absolute right-full top-0 mt-0.5 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-30 transition-transform transform opacity-100 animate-slide-left">
                                <ul className="py-1 text-sm font-medium">
                                    <li>
                                        <a
                                            href="#"
                                            onClick={(e) => handleThemeChange('light', e)}
                                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                            Light
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={(e) => handleThemeChange('dark', e)}
                                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <circle cx="12" cy="12" r="10" fill="black"></circle>
                                            </svg>
                                            Dark
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={(e) => handleThemeChange('system', e)}
                                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                                <circle cx="12" cy="12" r="10" fill="gray"></circle>
                                            </svg>
                                            System
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a
                            href="/home"
                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/logout"
                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                        >
                            Log Out
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:anujagrawal380@gmail.com"
                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;