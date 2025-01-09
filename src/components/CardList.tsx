import React from "react";
import card1 from "@/app/images/car.svg";
import card2 from "@/app/images/fast-delivery 1.svg";
import card3 from "@/app/images/cash-back.svg";
import card4 from "@/app/images/fast-delivery 1.svg";
import Card from "./Card";

const CardList: React.FC = () => {
  const cards = [
    {
      icon: card1, // Path to SVG image
      title: "Free Shipping",
      description: "Last Chance! Free shipping on all orders ends today.",
    },
    {
      icon: card2,
      title: "Quick Packaging",
      description: "Last Chance! Free shipping on all orders ends today.",
    },
    {
      icon: card3,
      title: "100% Money Back",
      description: "Last Chance! Free shipping on all orders ends today.",
    },
    {
      icon: card4,
      title: "Fast Delivery",
      description: "Last Chance! Free shipping on all orders ends today.",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
