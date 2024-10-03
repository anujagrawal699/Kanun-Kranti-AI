import React from 'react';
import { BookOpen, FileText, Scale } from 'lucide-react';

const LawCard = ({ title, description, relevantSections, keyProvisions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-[#302A2A] mb-2 flex items-center">
        <Scale size={20} className="mr-2" />
        {title}
      </h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <BookOpen size={16} className="mr-2" />
        <span>Relevant Sections: {relevantSections}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <FileText size={16} className="mr-2" />
        <span>Key Provisions: {keyProvisions}</span>
      </div>
    </div>
  );
};

export default LawCard;