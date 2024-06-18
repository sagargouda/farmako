import React from 'react';

function Card({ title, description, color }) {
    return (
        <div className={`max-w-sm mx-auto bg-${color} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{title}</div>
                <p className="text-gray-200 text-base">{description}</p>
            </div>
        </div>
    );
}

export default Card;

