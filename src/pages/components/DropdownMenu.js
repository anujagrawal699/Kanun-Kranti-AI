import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Settings, Home, LogOut, Mail } from 'lucide-react'; // Assuming you're using lucide-react for icons

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    const handleLogout = () => {
        console.log('Logging out...');
        navigate('/login');
    };

    return (
        <div className="relative">
            {/* Only one button to toggle the dropdown */}
            <button 
                onClick={toggleDropdown}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
                <Settings size={20} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-700">
                    <div className="py-1">
                        <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
                        >
                            {theme === 'dark' ? <Sun size={18} className="mr-3" /> : <Moon size={18} className="mr-3" />}
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </a>
                    </div>
                    <div className="py-1">
                        <a
                            href="/home"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <Home size={18} className="mr-3" />
                            Home
                        </a>
                        <a
                            
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={handleLogout}
                        >
                            <LogOut size={18} className="mr-3" />
                            Log Out
                        </a>
                        <a
                            href="mailto:anujagrawal380@gmail.com"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <Mail size={18} className="mr-3" />
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
