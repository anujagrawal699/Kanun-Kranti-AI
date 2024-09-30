import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import SearchHeader from '../components/SearchHeader'; // Adjust path as needed
import FilterBar from '../components/FilterBar';
import ResultsList from '../components/ResultsList';
import Pagination from '../components/Pagination'; // Import Pagination component

const SearchResults = () => {
    const location = useLocation(); // Get the location object
    const queryParams = new URLSearchParams(location.search); // Parse query parameters
    const searchQuery = queryParams.get('query') || 'No query provided'; // Get the 'query' parameter or default

    // Example results (replace with actual data fetching logic)
    const [results, setResults] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 5; // Adjust based on your data

    React.useEffect(() => {
        // Fetch results based on current page and search query
        // For demonstration, using static results
        setResults([
            { id: 1, title: 'Result 1', description: 'Description 1', price: '$100', image: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Result 2', description: 'Description 2', price: '$200', image: 'https://via.placeholder.com/150' },
            // Add more results
        ]);
    }, [currentPage, searchQuery]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <SearchHeader searchQuery={searchQuery} />
            <div className="flex flex-col md:flex-row gap-6">
                <FilterBar />
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-6">
                        Search Results for: <span className="text-blue-500">{searchQuery}</span>
                    </h1>
                    <ResultsList results={results} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
