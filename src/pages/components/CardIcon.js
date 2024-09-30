// src/components/CardIcon.js
import React from 'react';
import pic from '../../assets/case-closed.png'; // Adjust the path based on where your image is located

const CardIcon = () => (
    <div className="rounded-md bg-gray-100 p-1 w-10 h-7 flex items-center justify-center">
        <img src={pic} alt="Card Icon" className="w-15 h-15 object-contain" />
    </div>
);

export default CardIcon;
