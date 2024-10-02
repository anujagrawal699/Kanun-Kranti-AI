import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Share2, BookOpen, Scale, Gavel } from 'lucide-react';

const Card = ({
    title,
    description,
    date,
    link,
    caseno,
    casename,
    court,
    casestatus,
    judge,
    sect,
    facts,
    petition,
    legalissues,
    keylegalques,
    plaintiffarguments,
    defendantarguments,
    courtsreasoning,
    decision,
    conclusion,
    casesummary
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                        <BookOpen size={20} className="text-[#302A2A] mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 leading-tight">{title}</h3>
                            <p className="text-xs text-gray-500">{court}</p>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-[#302A2A] bg-blue-50 px-2 py-1 rounded-full">{date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={handleExpandToggle}
                        className="text-[#302A2A] hover:text-blue-800 text-sm font-medium flex items-center focus:outline-none"
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp size={16} className="mr-1" />
                                Less Details
                            </>
                        ) : (
                            <>
                                <ChevronDown size={16} className="mr-1" />
                                More Details
                            </>
                        )}
                    </button>
                    <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-[#302A2A] focus:outline-none">
                            <Download size={16} />
                        </button>
                        <button className="text-gray-500 hover:text-[#302A2A] focus:outline-none">
                            <Share2 size={16} />
                        </button>
                    </div>
                </div>
            </div>
            {isExpanded && (
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                                <Scale size={16} className="mr-1 text-[#302A2A]" />
                                Case Details
                            </h4>
                            <div className="bg-white p-2 rounded">
                                <p><span className="font-medium">Case No:</span> {caseno}</p>
                                <p><span className="font-medium">Case Name:</span> {casename}</p>
                                <p><span className="font-medium">Status:</span> {casestatus}</p>
                                <p><span className="font-medium">Judge:</span> {judge}</p>
                                <p><span className="font-medium">Section:</span> {sect}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Case Summary</h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{casesummary}</p>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                                <Gavel size={16} className="mr-1 text-[#302A2A]" />
                                Legal Issues
                            </h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{legalissues}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Key Legal Questions</h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{keylegalques}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Facts</h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{facts}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Plaintiff Arguments</h4>
                                <p className="text-gray-600 bg-white p-2 rounded">{plaintiffarguments}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Defendant Arguments</h4>
                                <p className="text-gray-600 bg-white p-2 rounded">{defendantarguments}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Court's Reasoning</h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{courtsreasoning}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Decision</h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{decision}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Conclusion</h4>
                            <p className="text-gray-600 bg-white p-2 rounded">{conclusion}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;