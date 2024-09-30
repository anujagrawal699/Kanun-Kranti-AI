import React from 'react';

const CardText = ({ title, description, date, link }) => (
    <div className="text-justify pr-10">
        <p className="text-sm font-bold">
            {title}
        </p>
        <p className="text-sm text-[#302A2A] mt-1">{date}</p>
        <p className="text-sm mt-1">
            {description}
            {link && (
                <a href={link} className="text-blue-600 hover:underline">
                    {' '} (Link)
                </a>
            )}
        </p>
        
    </div>
);

export default CardText;
