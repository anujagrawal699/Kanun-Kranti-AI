import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const SearchProjects = () => {
  const location = useLocation(); // Get the location object
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const searchQuery = queryParams.get('query') || 'No query provided';

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    
    <div className="flex flex-col w-full ml-0 py-1">
      
      {/* Flex container for "Searched cases" and "Sort" */}
      <div className="absolute top-4 right-2 flex items-center justify-between py-2 text-xl font-bold">
        {/* <div className="flex items-center">
          <FaSearch size={24} />
          <span className="ml-2">Searched cases</span>
        </div> */}
        <div id="google_translate_element"></div>

        {/* Sort dropdown */}
        {/* <div className="relative inline-block">
          <span className="mr-2 text-sm font-normal">Sort :</span> 

          <select
            value={selectedOption}
            onChange={handleChange}
            className="p-2 w-48 border border-gray-300 rounded-md text-xs bg-white cursor-pointer appearance-none"
          >
            <option value="" disabled hidden>
              Sort
            </option>
            <option value="Recent">Recent</option>
            <option value="Most popular">Most popular</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <span className="text-xs text-gray-700">{selectedOption ? "▼" : "▼"}</span>
          </div>
        </div> */}

        {/* <div id="google_translate_element" class="inline-block p-2 border border-gray-300 rounded-md bg-white shadow-sm text-sm"></div> */}


        
      </div>
      

      {/* <h1 className="mt-2 text-md text-gray-600">Search Results for : {searchQuery}</h1> */}

      {/* Add other results page content here */}
    </div>
  );
};

export default SearchProjects;
