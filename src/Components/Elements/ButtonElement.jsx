import React from 'react';

const ButtonElement = ({ text, onClick, className = '' }) => {
    return (
        
        <button
            onClick={onClick}
            className={`relative overflow-hidden text-white text-lg py-2 px-4 rounded bg-primaryGreen transition-all duration-700 flex justify-center items-center gap-2 ${className}`}>
            {/* Adjusted span for hover */}
            <span className="overflow-hidden absolute inset-0 bg-secondaryGreen transform translate-x-full transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 overflow-hidden">{text}</span>
        </button>
    );
}

export default ButtonElement;
