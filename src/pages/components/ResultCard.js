// src/components/ResultCard.js

import React from 'react';

const ResultCard = ({ result }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 max-w-4xl mx-auto mb-4">
            <img
                src={result.image}
                alt={result.title}
                className="w-1/3 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#302A2A] mb-2">{result.title}</h3>
                <p className="text-[#302A2A] mb-4">{result.description}</p>
                <p className="text-[#302A2A] font-semibold">{result.price}</p>
            </div>
        </div>
    );
};

export default ResultCard;
