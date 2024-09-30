import React, { useState } from 'react';
import CardIcon from './CardIcon';
import CardText from './CardText';
import CardActions from './CardActions';

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
        <div className="relative min-h-[105px] p-4 mb-2 border rounded-md w-full bg-white shadow-md transition-all duration-300">
            <div className={`flex flex-col transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-auto'}`}>
                <div className="flex w-full">
                    <div className="flex flex-col justify-between h-full flex-1">
                        <a
                            href={link}
                            className="text-[#302A2A] no-underline cursor-pointer"
                            onClick={e => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleExpandToggle(); // Toggle expansion
                            }}
                        >
                            <div className="flex items-start gap-2">
                                <CardIcon />
                                <CardText
                                    title={title}
                                    date={date}
                                    description={description}
                                    link={link}
                                />
                            </div>
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <CardActions onExpandToggle={handleExpandToggle} isExpanded={isExpanded} />
                    </div>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded
                            ? 'max-h-auto animate-slideDown'
                            : 'max-h-0 animate-slideUp'
                        }`}
                >
                    <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-md shadow-sm">
                        <div className="space-y-4">
                            <div className="text-sm font-semibold text-[#302A2A] border-b border-gray-300 pb-2">
                                <p className="text-lg font-bold text-[#302A2A]">Case Details</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Case No:</strong> {caseno}</p>
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Case Name:</strong> {casename}</p>
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Date:</strong> {date}</p>
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Court:</strong> {court}</p>
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Case Status:</strong> {casestatus}</p>
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Judge:</strong> {judge}</p>
                                <p className="text-xs text-gray-600"><strong className="text-[#302A2A]">Section:</strong> {sect}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Facts:</strong></p>
                                <p className="text-xs text-gray-600">{facts}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Petition:</strong></p>
                                <p className="text-xs text-gray-600">{petition}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Legal Issues:</strong></p>
                                <p className="text-xs text-gray-600">{legalissues}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Key Legal Questions:</strong></p>
                                <p className="text-xs text-gray-600">{keylegalques}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Plaintiff Arguments:</strong></p>
                                <p className="text-xs text-gray-600">{plaintiffarguments}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Defendant Arguments:</strong></p>
                                <p className="text-xs text-gray-600">{defendantarguments}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Court's Reasoning:</strong></p>
                                <p className="text-xs text-gray-600">{courtsreasoning}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Decision:</strong></p>
                                <p className="text-xs text-gray-600">{decision}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Conclusion:</strong></p>
                                <p className="text-xs text-gray-600">{conclusion}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-[#302A2A] mt-2"><strong className="text-[#302A2A]">Case Summary:</strong></p>
                                <p className="text-xs text-gray-600">{casesummary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
