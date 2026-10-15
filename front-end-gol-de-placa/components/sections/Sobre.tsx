"use client";
import Image from "next/image";
import Link from 'next/link';
import {  Users, CalendarDays } from "lucide-react";
import { FaAlignLeft } from "react-icons/fa6";


const pontos = [
  {
    icone: Users,
    titulo: "Prepare a competição",
    texto: "Cadastre equipes e atletas com as informações organizadas.",
  },
  {
    icone: CalendarDays,
    titulo: "Organize os jogos",
    texto: "Monte partidas e rodadas para dar ritmo ao campeonato.",
  },
  {
    icone: FaAlignLeft,
    titulo: "Acompanhe cada resultado",
    texto: "Consulte placares e classificação durante a disputa.",
  },
];


export default function Sobre() {
  return (
    <>
        <section id="sobre" className="scroll-mt-27.5 border-y border-white/7 bg-[#0b0b0b] bg-[radial-gradient(ellipse_at_85%_50%,rgba(255,77,0,0.09),transparent_42%)] py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                <div className="min-w-0">
                    <p className="text-[13px] font-extrabold tracking-[1px] text-(--orange)">SOBRE O GOL DE PLACA</p>
                    <h2 className="mt-3.5 text-4xl leading-[1.08] font-extrabold lg:text-5xl text-white">Mais organização para quem faz o <span className="text-(--orange)">futebol amador acontecer.</span></h2>
                    <p className="mt-5.5 max-w-135 text-base leading-[1.7] text-white/74">O Gol de Placa nasceu para facilitar a rotina de quem organiza campeonatos. Em vez de espalhar informações entre planilhas, mensagens e anotações, você acompanha a competição em um só lugar.</p>
                    <p className="mt-3 max-w-135 text-base leading-[1.7] text-white/74">Da montagem das equipes à divulgação dos resultados, a plataforma ajuda organizadores, atletas e torcedores a seguirem cada etapa do campeonato.</p>
                    <ul className="my-6.5 grid gap-4.5">{pontos.map(({ icone: Icone, titulo, texto }) => (
                        <li key={titulo} className="flex items-start gap-3.5 text-sm text-white/90">
                        <Icone className="mt-0.75 size-5 shrink-0 text-(--orange)" /><span className="grid gap-1"><strong>{titulo}</strong><small className="text-[13px] leading-[1.45] text-white/58">{texto}</small></span>
                        </li>
                    ))}
                    </ul>
                    <Link href="#planos" className="inline-flex items-center gap-3 rounded-md border border-(--orange) bg-(--orange) px-4.5 py-3.25 font-bold text-(--white) transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-(--orange-dark)">Conheça os planos <span aria-hidden="true">→</span></Link>
                </div>
                <div className="min-w-0 self-center">
                    <Image
                        src="/sobre.png"
                        alt="Descrição da imagem"
                        width={1200}
                        height={800}
                        className="h-auto w-full rounded-lg border border-white/12"
                    />
                    <span className="mt-3 block text-right text-[13px] text-white/55">Acompanhe as informações do campeonato em uma só plataforma.</span>
                </div>
            </div>
        </section>
    </>
  );
}
        