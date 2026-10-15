import Hero from "@/components/sections/hero";
import Sobre from "@/components/sections/Sobre";
import Image from "next/image";
import Link from 'next/link';
import Campeonatos from "@/components/sections/campeonatos";
import Planos from "@/components/sections/planos";
import Contato from "@/components/sections/contato";

export default function Home() {
  return (
    <> 
        <Hero />
        <Sobre />
        <Campeonatos />
        <Planos />
        <Contato />
    </>
  );
}
