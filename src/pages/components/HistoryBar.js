import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';
import ministryOfLaw from '../../assets/ministry_of_law.jpeg';
import { Menu, Search } from 'lucide-react';

const HistoryBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const historyBarRef = useRef(null);

    const toggleButtonRef = useRef(null);
    const dummyData = {
        today: [
            { id: 458, title: 'Case 458' },
            { id: 69, title: 'Case 69' },
            { id: 778, title: 'Case 778' },
            { id: 32, title: 'Case 32' },
        ],
        yesterday: [
            { id: 'tutorial', title: 'Case Tutorial' },
        ],
        previous30Days: [
            { id: 9999, title: 'Case 99' },
        ],
        january: [
            { id: 'ongoing', title: 'Ongoing Case' },
        ],
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (historyBarRef.current && 
                !historyBarRef.current.contains(event.target) &&
                toggleButtonRef.current && 
                !toggleButtonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getThemeClasses = () => {
        return theme === 'dark'
            ? 'bg-gray-700 text-white'
            : 'bg-[#302A2A] text-white';
    };

    const getHoverClasses = () => {
        return theme === 'dark'
            ? 'hover:bg-gray-500'
            : 'hover:bg-gray-800';
    };

    const toggleHistoryBar = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile dropdown toggle */}
            <button
                ref={toggleButtonRef}
                className={`md:hidden fixed top-3 left-2 z-50 p-2 rounded-md ${getThemeClasses()}`}
                onClick={toggleHistoryBar}
            >
                <Menu size={24} />
            </button>
            {/* HistoryBar content */}
            <div 
                ref={historyBarRef}
                className={`
                    ${getThemeClasses()}
                    fixed top-0 left-0 h-screen w-64
                    transform transition-transform duration-300 ease-in-out
                    overflow-y-auto
                    md:translate-x-0 z-40
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="p-2 mt-16 md:mt-4">
                    <img
                        src={ministryOfLaw}
                        alt="Ministry of Law"
                        className="h-25 w-70 rounded-lg mb-3 mx-auto"
                    />
                    <div className="mb-6">
                        <h2 className="flex items-center text-sm font-semibold mb-2">
                            <Search size={16} className="mr-2" />
                            Explore Kanun Kranti
                        </h2>
                    </div>
                   
                    <div className="space-y-5">
                        {Object.entries(dummyData).map(([section, items]) => (
                            <div key={section}>
                                <h3 className="text-xs font-semibold mb-1 text-gray-500 uppercase">{section}</h3>
                                <ul className="space-y-1">
                                    {items.map(item => (
                                        <li
                                            key={item.id}
                                            className={`text-xs 'text-gray-300' ${getHoverClasses()} px-2 py-1 rounded transition-colors duration-150 ease-in-out`}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoryBar;