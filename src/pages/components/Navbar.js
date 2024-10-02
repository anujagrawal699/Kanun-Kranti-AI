import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from './ThemeContext'; // Make sure the path is correct
import DropdownMenu from './DropdownMenu';
import { LogOut } from 'lucide-react';
import ministryOfLaw from '../../assets/ministry_of_law.jpeg';

const Navbar = ({onLogout}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const { theme } = useTheme();

    const toggleMenu = useCallback(() => {
        setMenuOpen(prevState => !prevState);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

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
        <header className="w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur bg-background/80 dark:bg-gray-800/80">
            <div className="flex items-center space-x-3">
            <a href="/">
                {/* Logout button */}
                <button
                    onClick={onLogout}
                    className="p-1.5 flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                    aria-label="Log out"
                >
                    <LogOut size={24} />
                    <span className="sr-only">Log out</span>
                </button>
           
            </a>
            </div>

            <div className="flex items-center space-x-1 relative" ref={menuRef}>
            <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background dark:bg-gray-700 hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-600 w-8 h-8 rounded-full"
                    type="button" aria-haspopup="menu" aria-expanded={menuOpen} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-menu">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
                {menuOpen && (
                    <DropdownMenu closeMenu={closeMenu} toggleMenu={toggleMenu} onLogout={onLogout} />
                )}
            </div>
        </header>
    );
};

export default Navbar;