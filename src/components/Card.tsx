import React from "react";

interface CardProps {
  icon: string; // Path to the SVG image
  title: string; // Card title
  description: string; // Card description
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="h-12 w-12" />{" "}
        {/* Adjust size as needed */}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
