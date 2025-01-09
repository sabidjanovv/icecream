"use client";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import Link from "next/link";
import React from "react";

interface HeroProps {
  bgColor?: string; // Background color for the hero
  title: string; // Main title
  subtitle: string; // Subtitle
  description: string; // Description text
  buttonText: string; // Text for the button
  buttonLink: string; // URL for the button
  imageSrc: string | StaticImageData; // Allow both string and StaticImageData
  imageAlt: string; // Alt text for the image
}

const Hero: React.FC<HeroProps> = ({
  bgColor = "#fcf1f4", // Default background color
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="py-20" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-10">
        {/* Hero Text */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-sm font-fredoka text-[#0F0101] mb-3 font-medium">
            {subtitle}
          </p>
          <h1 className="text-5xl font-fredoka font-bold text-[#222] leading-tight mb-5">
            {title}
          </h1>
          <p className="text-[#726163] mb-8">{description}</p>
          <Link
            href={buttonLink}
            className="bg-[#D23166] text-white px-6 py-3 rounded-md hover:bg-[#b82055] transition"
          >
            {buttonText}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            alt={imageAlt}
            src={imageSrc} // Supports both imported images and string URLs
            width={500}
            height={500}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
