import { Metadata } from 'next'
import React from 'react'
import logo from "@/app/images/logo1-removebg-preview.png"
import Image from 'next/image';

export const metadata: Metadata={
  title: "Next About",
  description: "About next app",
}

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <Image alt='' src={logo} width={300} className='w-[400px]' height={300} priority={true}/>
    </div>
  );
}
