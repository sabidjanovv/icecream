"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProductProps {
  image: string | StaticImageData; // Supports both string and StaticImageData
  title: string;
  description: string;
  price: string;
  discountedPrice: string;
}

const Product: React.FC<ProductProps> = ({
  image,
  title,
  description,
  price,
  discountedPrice,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
      {/* Product Image */}
      <div className="flex justify-center md:w-1/2">
        <Image
          alt={title}
          src={image}
          width={300}
          height={300}
          priority={true}
          className="rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="mt-6 md:mt-0 md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xl text-pink-500 font-bold">
            {discountedPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">{price}</span>
        </div>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
