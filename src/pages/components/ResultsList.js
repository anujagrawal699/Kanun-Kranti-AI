// src/components/ResultsList.js

import React from 'react';
import ResultCard from './ResultCard';

const ResultsList = ({ results }) => {
    return (
        <div>
            {results.map(result => (
                <ResultCard key={result.id} result={result} />
            ))}
        </div>
    );
};

export default ResultsList;
