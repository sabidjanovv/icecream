"use client";
import React from "react";
import Product from "../../components/Product";
import product1 from "@/app/images/product1.png";
import product2 from "@/app/images/product2.png";
import product3 from "@/app/images/product3.png";

const ProductPage: React.FC = () => {
  const products = [
    {
      id: 1,
      image: product1, // Replace with your image path
      title: "Brown Bread",
      description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
      price: "$22.55",
      discountedPrice: "$19.55",
    },
    {
      id: 2,
      image: product2, // Replace with your image path
      title: "Cayenne Chocolate",
      description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
      price: "$22.55",
      discountedPrice: "$19.55",
    },
    {
      id: 3,
      image: product3, // Replace with your image path
      title: "Sweet Corn",
      description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
      price: "$22.55",
      discountedPrice: "$19.55",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl text-black font-bold text-center mb-8">Our Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
