import React from 'react'
import CardList from '../../components/CardList';
import Hero from '../../components/Hero';
import hero2 from "@/app/images/section2-image.png";

const page = () => {
  return (
    <div>
      <CardList />
      <Hero
        bgColor="#F8EDF0"
        title="Brown Sugar Oatmeal"
        subtitle="Freshly made for you."
        description="Together with McDonald's, Burger King has grown to become synonymous with burgers in the US."
        buttonText="See Details"
        buttonLink="/details"
        imageSrc={hero2} // Pass the imported image object here
        imageAlt="Oatmeal Image"
      />
    </div>
  );
}

export default page