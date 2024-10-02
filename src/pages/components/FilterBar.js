import React, { useState } from 'react';
import ministryOfLaw from '../../assets/ministry_of_law.jpeg';

const FilterBar = ({ onLanguageChange }) => {
    const [filters, setFilters] = useState({
        courts: [],
        caseStatus: [],
        languages: 'English',
        year: 2024,
        judges: [],
        keywords: '',
        caseTypes: [],
    });
    const [expandedSections, setExpandedSections] = useState({
        courts: true,
        caseStatus: true,
        languages: true,
        judges: false,
        caseTypes: false,
    });
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleCheckboxChange = (category, item) => {
        setFilters(prev => ({
            ...prev,
            [category]: prev[category].includes(item)
                ? prev[category].filter(i => i !== item)
                : [...prev[category], item]
        }));
    };

    const handleYearChange = (e) => {
        setFilters(prev => ({ ...prev, year: parseInt(e.target.value) }));
    };

    const handleLanguageChange = (e) => {
        setFilters(prev => ({ ...prev, languages: e.target.value }));
        onLanguageChange(e.target.value);
    };

    const handleKeywordsChange = (e) => {
        setFilters(prev => ({ ...prev, keywords: e.target.value }));
    };

    const handleSearch = (category) => {
        console.log(`Searching for "${searchTerm}" in ${category}`);
    };

    const FilterSection = ({ title, category, items, isExpanded, onToggle }) => (
        <div className="mb-4">
            <button
                onClick={() => onToggle(category)}
                className="flex justify-between items-center w-full text-left font-medium text-xs mb-2 focus:outline-none hover:bg-gray-700 p-1.5 rounded"
            >
                {title}
                <span>{isExpanded ? '▲' : '▼'}</span>
            </button>
            {isExpanded && (
                <div className="mt-1 space-y-1">
                    <div className="flex items-center mb-1">
                        <input
                            type="text"
                            placeholder={`Search ${title.toLowerCase()}...`}
                            className="w-full px-2 py-1 bg-gray-700 text-white rounded text-xs"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            onClick={() => handleSearch(category)}
                            className="ml-1 px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
                        >
                            🔍
                        </button>
                    </div>
                    {items.map((item) => (
                        <div key={item} className="flex items-center justify-between hover:bg-gray-700 p-1 rounded">
                            <span className="text-xs">{item}</span>
                            <input
                                type="checkbox"
                                checked={filters[category].includes(item)}
                                onChange={() => handleCheckboxChange(category, item)}
                                className="form-checkbox h-3 w-3"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="p-3 mt-18 bg-[#302A2A] text-white h-screen overflow-y-auto text-xs w-70"> {/* Reduced width */}
            <img 
                src={ministryOfLaw}
                alt="Ministry of Law"
                className="h-14 w-48 rounded-lg mb-4 mx-auto" 
            />

            <div className="flex items-center justify-between mb-4">
                <h1 className="text-sm font-semibold">Advanced Filters</h1>
                <button onClick={() => setFilters({
                    courts: [],
                    caseStatus: [],
                    languages: 'English',
                    year: 2024,
                    judges: [],
                    keywords: '',
                    caseTypes: [],
                })} className="text-xs text-blue-400 hover:text-blue-300">
                    Reset All
                </button>
            </div>

            <FilterSection
                title="Courts"
                category="courts"
                items={['Madras High Court', 'Delhi High Court', 'Supreme Court', 'Gujarat High Court', 'Kerala High Court', 'Assam High Court']}
                isExpanded={expandedSections.courts}
                onToggle={toggleSection}
            />

            <FilterSection
                title="Case Status"
                category="caseStatus"
                items={['Judgement', 'Disposed Off', 'Decree', 'Order']}
                isExpanded={expandedSections.caseStatus}
                onToggle={toggleSection}
            />

            <FilterSection
                title="Case Types"
                category="caseTypes"
                items={['Civil', 'Criminal', 'Constitutional', 'Tax', 'Intellectual Property']}
                isExpanded={expandedSections.caseTypes}
                onToggle={toggleSection}
            />

            <FilterSection
                title="Judges"
                category="judges"
                items={['Justice A', 'Justice B', 'Justice C', 'Justice D', 'Justice E']}
                isExpanded={expandedSections.judges}
                onToggle={toggleSection}
            />

            <div className="mb-4">
                <h2 className="font-medium text-xs mb-1">Languages</h2>
                <div className="relative">
                    <select
                        value={filters.languages}
                        onChange={handleLanguageChange}
                        className="w-full bg-gray-700 text-white border border-gray-600 rounded py-1 px-2 text-xs appearance-none"
                    >
                        {['English', 'Hindi', 'Marathi', 'Telugu', 'Tamil', 'Kannada'].map((language) => (
                            <option key={language} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="font-medium text-xs mb-2">Year</h2>
                <input
                    type="range"
                    min={1950}
                    max={2024}
                    value={filters.year}
                    onChange={handleYearChange}
                    className="w-full"
                />
                <div className="flex justify-between mt-1 text-xs">
                    <span>1950</span>
                    <span>{filters.year}</span>
                    <span>2024</span>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="font-medium text-xs mb-1">Keywords</h2>
                <div className="relative">
                    <input
                        type="text"
                        value={filters.keywords}
                        onChange={handleKeywordsChange}
                        placeholder="Enter keywords..."
                        className="w-full bg-gray-700 text-white border border-gray-600 rounded py-1 px-2 text-xs pr-8"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <svg className="h-4 w-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <button className="w-full px-3 py-1.5 bg-gray-400 text-white text-xs rounded-md shadow-md hover:bg-gray-500 transition duration-300 ease-in-out">
                Apply Filters
            </button>
        </div>
    );
};

export default FilterBar;