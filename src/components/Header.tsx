"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo_icecream from "@/app/images/logo_icecream.png";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header className="bg-[#F8EDF0] shadow-md w-full h-[79px]">
        <div className="container mx-auto flex items-center justify-between px-10 h-full">
          <Link href={"/"}>
            <Image
              alt="Ice Cream Logo"
              src={logo_icecream}
              width={79}
              height={79}
              priority
              className="w-[79px] h-[79px]"
            />
          </Link>

          <nav className="flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-medium ${
                  pathname === href
                    ? "text-[#D23166]"
                    : "text-[#726163] hover:text-[#D23166]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Buy Now Button */}
          <Link
            href="/buy"
            className="bg-[#D23166] text-white px-6 py-2 rounded-md hover:bg-[#b82055] transition"
          >
            Buy Now
          </Link>
        </div>
      </header>
    </>
  );
}
