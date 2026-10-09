import Link from "next/link";
import Image from 'next/image';
import logoImg from '@/public/logotipo.svg';

export default function Header() {
  return (
    <div className="background-1">
        <header className="fixed top-5 left-5 right-5 z-20 p-5 border border-white/10 rounded-xl bg-white/2 backdrop-blur-sm overflow-hidden">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4 px-8">
                {/* Aqui é minha logo do navegador */}
                <Link href="/" className="inline-flex h-5 items-center gap-3 hover:opacity-80 transition-opacity">
                    <Image src={logoImg} alt="Logo do aplicativo" className="h-full w-auto object-contain"priority />
                </Link>
                {/*-- fim da logo do navegador */}
                 {/* Navegador do site*/}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                    <Link href="/" className="text-white transition-all duration-300 ease-in-out hover:text-orange-600 hover:scale-105 inline-block">Home</Link>
                    <Link href="#sobre" className="text-white transition-all duration-300 ease-in-out hover:text-orange-600 hover:scale-105 inline-block">Sobre</Link>
                    <Link href="#campeonatos" className="text-white transition-all duration-300 ease-in-out hover:text-orange-600 hover:scale-105 inline-block">Campeonatos</Link>
                    <Link href="#planos" className="text-white transition-all duration-300 ease-in-out hover:text-orange-600 hover:scale-105 inline-block">Planos</Link>
                    <Link href="#contato" className="text-white transition-all duration-300 ease-in-out hover:text-orange-600 hover:scale-105 inline-block">Contato</Link>   
                </nav>
                {/* fim do navegador */}
                 {/* login e registro */}
                <div className="hidden sm:flex items-center gap-4">
                    <Link href="/login" className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-md shadow-orange-950/20 active:scale-95">
                    Login
                    </Link>
                    <Link href="/register" className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-md shadow-orange-950/20 active:scale-95">
                    Registrar
                    </Link>
                </div>
                {/*- fim do login e registro */}
            </div>      
        </header>  
    </div>   
  );
}