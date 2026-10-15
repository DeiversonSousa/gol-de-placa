import Hero from "@/components/sections/hero";
import Sobre from "@/components/sections/Sobre";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <> 
        <Hero />
        <Sobre />
    </>
  );
}
