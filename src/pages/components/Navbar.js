import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from './ThemeContext'; // Make sure the path is correct
import DropdownMenu from './DropdownMenu';
import { LogOut, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();

    const toggleMenu = useCallback(() => {
        setMenuOpen(prevState => !prevState);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen, closeMenu]);

    return (
        <header className="w-full p-2 md:p-2 flex justify-between items-center z-10 bg-background/80 dark:bg-gray-900">
            <div className="flex items-center space-x-3">
                {/* Add any left-side content here */}
            </div>
            <div className="flex items-center space-x-3 relative" ref={menuRef}>
                <button
                    onClick={onLogout}
                    className="p-1.5 flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                    aria-label="Log out"
                >
                    <LogOut size={24} />
                    <span className="sr-only">Log out</span>
                </button>
                <button
                    onClick={handleThemeChange}
                    className="p-1.5 flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    <span className="sr-only">{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                </button>
                <DropdownMenu closeMenu={closeMenu} navigate={navigate} />
            </div>
        </header>
    );
};

export default Navbar;