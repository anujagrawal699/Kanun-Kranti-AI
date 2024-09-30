import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeedSelection from './SpeedSelection';
import { useTheme } from './ThemeContext'; // Make sure this path is correct
import axios from 'axios';
import Card from './Card';

const Searchbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSpeed, setSelectedSpeed] = useState('casestudy');
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const { theme } = useTheme();

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown if clicked outside
    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    // Handle search form submission
    

    // Handle Enter key in input
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSearchSubmit(e);
        }
    };

    // Get the label of the selected speed
    const getSelectedLabel = () => {
        const options = [
            { label: 'Case Study', value: 'casestudy' },
            { label: 'Legal Terms', value: 'legalterm' },
            { label: 'Case Summary', value: 'casesummary' },
        ];
        const selectedOption = options.find(option => option.value === selectedSpeed);
        return selectedOption ? selectedOption.label : 'Case Study';
    };
    const callGeminiApi = async (query) => {
        setIsLoading(true);
        const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
        const API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

        try {
            const response = await axios.post(API_ENDPOINT, {
                contents: [{
                    parts: [{
                        text: `${selectedSpeed}: ${query}`
                    }]
                }]
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('API Response:', response.data); // Log the response
            setIsLoading(false);
            return response.data;
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            setIsLoading(false);
            return { error: 'An error occurred while processing your request.' };
        }
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const apiResponse = await callGeminiApi(inputValue.trim());
            console.log('API Response before navigation:', apiResponse); // Log before navigation
            navigate('/search-results', { 
                state: { 
                    searchQuery: inputValue.trim(),
                    apiResponse: apiResponse
                } 
            });
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="max-w-2xl w-full px-6 relative z-10">
            <div className="h-10 w-full flex items-center space-x-1">
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        id="speed-dropdown"
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                        onClick={toggleDropdown}
                        className={`inline-flex items-center justify-center text-sm font-medium px-4 h-8 rounded-full whitespace-nowrap transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground ${
                            theme === 'dark' ? 'text-gray-300' : 'text-[#302A2A]'
                        }`}
                    >
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-fast-forward mr-1 text-green-500"
                            >
                                <polygon points="13 19 22 12 13 5 13 19" />
                                <polygon points="2 19 11 12 2 5 2 19" />
                            </svg>
                            {getSelectedLabel()}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-down ml-1 text-foreground/50"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </button>

                    {isOpen && (
                        <div className={`absolute right-0 mt-2 w-56 ${theme === 'dark' ? 'bg-[#302A2A]' : 'bg-white'} shadow-lg rounded-md animate-slide-down z-10`}>
                            <SpeedSelection
                                selectedSpeed={selectedSpeed}
                                setSelectedSpeed={(value) => {
                                    setSelectedSpeed(value);
                                    setIsOpen(false);
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="relative flex items-center w-full mt-2">
                <textarea
                    name="input"
                    placeholder="Enter about your case"
                    spellCheck="false"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`w-full min-h-12 pl-4 pr-10 pt-3 pb-1 text-sm placeholder:text-gray-500 border ${
                        theme === 'dark' ? 'border-[#302A2A] bg-[#302A2A] text-white' : 'border-gray-300 bg-white text-black'
                    } rounded-full resize-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    rows="1"
                    tabIndex="0"
                />
                <button
                    type="submit"
                    aria-label="Send message"
                    className={`inline-flex items-center justify-center h-10 w-10 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground ${
                        theme === 'dark' ? 'text-gray-300' : 'text-[#302A2A]'
                    }`}
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    )}
                </button>
                <div className={`absolute -bottom-5 right-2 transition-all duration-300 text-[10px] invisible md:visible ${
                    theme === 'dark' ? 'text-gray-400' : 'text-muted-foreground/0'
                }`}>
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[10px]">
                        <strong>Shift + Return</strong> to add a new line
                    </label>
                </div>
            </div>


            <div className="mx-auto max-w-2xl transition-all invisible">
                <div className="p-2">
                    <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
                        {/* Search results or additional content can be added here */}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Searchbar;
