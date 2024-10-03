import React, { useState, useEffect, useRef } from 'react';
import { Settings, Home, Mail, Languages } from 'lucide-react';

const DropdownMenu = ({ closeMenu, navigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
        closeMenu();
    };

    const handleButtonClick = (action) => (e) => {
        e.stopPropagation();
        action();
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
                <Settings size={20} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-700 z-50">
                    <div className="py-1">
                        <button
                            onClick={handleButtonClick(() => {
                                window.location.href = 'mailto:anujagrawal380@gmail.com';
                                closeMenu();
                            })}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 w-full text-left cursor-pointer transition-colors duration-150"
                        >
                            <Mail size={18} className="mr-3" />
                            Contact Us
                        </button>
                        <button
                            onClick={handleButtonClick(() => handleNavigation('/languages'))}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 w-full text-left cursor-pointer transition-colors duration-150"
                        >
                            <Languages size={18} className="mr-3" />
                            Languages
                        </button>
                        <button
                            onClick={handleButtonClick(() => handleNavigation('/'))}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 w-full text-left cursor-pointer transition-colors duration-150"
                        >
                            <Home size={18} className="mr-3" />
                            Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;