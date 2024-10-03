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

    const defaultPrompts = [
        "What are the guidelines for awarding damages in high-value commercial cases?",
        "Explain Section 4 of Indian Commercial Court Act 2015",
        "Summarize recent Indian Supreme Court judgments on property rights",
        "What are the procedural timelines for commercial cases under the Commercial Courts Act?"
    ];


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
                        text: `${'Answer everything in the context of commercial court of India. You are reseacrh engine for indian commercial courts and respond each query based on it. Provide some historical cases on the query if you know and Add this speciific note at ending of Response, "The AI research should be considered as suggestion and should be verified for legal judgements."'}: ${query}`
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
        <div className="max-w-2xl w-full px-6 relative z-10">
            <form onSubmit={handleSearchSubmit} className="relative">
                <textarea
                    name="input"
                    placeholder="Enter about your research query in detail"
                    spellCheck="false"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`w-full min-h-12 pl-4 pr-10 pt-3 pb-1 text-sm placeholder:text-gray-500 border ${
                        theme === 'dark' ? 'border-[#302A2A] bg-[#060202] text-white' : 'border-gray-300 bg-gray-200 text-black'
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
                            className="lucide lucide-arrow-up"
                        >
                            <path d="m5 12 7-7 7 7" />
                            <path d="M12 19V5" />
                        </svg>
                    )}
                </button>
            </form>

            <div className="mt-4">
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Note: Please write complete prompts to provide context for the research AI. For example:
                </p>
                <div className="flex flex-wrap gap-2">
                    {defaultPrompts.map((prompt, index) => (
                        <button
                            key={index}
                            onClick={() => setInputValue(prompt)}
                            className={`text-sm px-3 py-1 rounded-full ${
                                theme === 'dark'
                                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            } transition-colors`}
                        >
                            {prompt}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Searchbar;