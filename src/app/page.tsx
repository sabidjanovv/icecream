import Hero from "../components/Hero";
import hero1 from "@/app/images/eep88j2SDJ-removebg-preview 1.png";
import CardList from "../components/CardList";

export default function Home() {
  return (
    <div>
      <Hero
        bgColor="#F8EDF0"
        title="Feel inside cold with our delicious ice-cream."
        subtitle="Sweet fun, full of milk."
        description="Some food has looked so awful that it’s looked like something that the dog’s brought home, yet after one mouthful I’ve been left eating my thoughts, my words."
        buttonText="Buy Now"
        buttonLink="/buy"
        imageSrc={hero1} // Pass the imported image object here
        imageAlt="Ice Cream"
      />
      
    </div>
  );
}
