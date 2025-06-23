'use client';
import Header from "../../components/components - Generales/Header";
import Section1Home from "../../components/components - Home/components/section1 - Home";
import Section2Home from "../../components/components - Home/components/section2 - Home";
import Section3Home from "../../components/components - Home/components/section3 - Home";
import Section4Home from "../../components/components - Home/components/section4 - Home";
import { Geist } from 'next/font/google';
import { SetDeployMenu } from "../../components/components - Generales/Header";

const poppins = Geist({
  subsets: ['latin'],
});

export default function page() {
  return (
    <body className={`${poppins.className}`} onTouchMove={()=>{SetDeployMenu(false)}}>
      <Header/>
        <main>
          <Section1Home/>
          <Section2Home/>
          <Section3Home/>
          <Section4Home/>
        </main>
    </body>
  )
}
