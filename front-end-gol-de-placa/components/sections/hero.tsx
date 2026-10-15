import Image from "next/image";
import Link from 'next/link';
import TextoDigitado from "@/components/textodigitado";

const palavras = ["FUTEBOL", "CAMPEONATO"];

export default function Hero() {
  return (
    <>
        <section id="home" className="relative min-h-screen bg-[url('/planodefundo.jpeg')] bg-cover bg-center bg-no-repeat"> 
            <div className="absolute inset-0 bg-black/80"></div>
            {/* texto do meio da pagina */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-60 text-center text-white">
                <h1 className="text-5xl font-bold leading-[1.2] tracking-[1px]">GESTÃO PROFISSIONAL DE <br/><span className="text-(--orange)"><TextoDigitado palavras={palavras} /> </span> AMADOR</h1>
                <h3 className="mx-auto mt-4 text-[15px] leading-[1.6]">Gestão completa de ligas e torneios, tornando os campeonatos mais fáceis de organizar, jogar e acompanhar.</h3>
                {/* fim do texto do meio */}
                {/* botão do meio da pagina */}
                <div className="mt-6">
                    <Link href="#planos">
                        <button type="button" className="border-0 rounded-lg bg-(--orange) px-6 py-3.5 text-base font-bold text-(--white) cursor-pointer transition-[background_250ms_ease,transform_200ms_ease] hover:bg-(--orange-dark) hover:-translate-y-px">ORGANIZAR UM CAMPEONATO</button>
                    </Link>
                </div> 
                {/*  fim do botão do meio */}
                {/* barra de pesquisa por */}
                <form className="mx-auto mt-10.5 flex w-full max-w-140 items-center rounded-full border border-white/20 bg-white/10 py-2 pr-2.5 pl-4.5 shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-250 focus-within:-translate-y-px focus-within:border-[rgba(255,77,0,0.9)] focus-within:shadow-[0_0_0_4px_rgba(255,77,0,0.18),0_12px_30px_rgba(0,0,0,0.2)]"
                >
                    <input
                        type="text"
                        placeholder="Procure um campeonato ou a equipe"
                        className="min-w-0 flex-1 border-0 bg-transparent py-3.5 pr-3.5 pl-0 text-base text-(--white) outline-none placeholder:text-white/70"
                    />

                    <button
                        type="submit"
                        aria-label="Pesquisar"
                        className="flex h-13 w-13 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff6a1a,var(--orange))] text-base text-(--white) shadow-[0_4px_12px_rgba(255,77,0,0.3)] transition-[transform,filter,background,box-shadow] duration-200 ease-[ease] hover:scale-[1.08] hover:bg-[linear-gradient(135deg,#ff7b2e,var(--orange-dark))] hover:brightness-[1.08] hover:shadow-[0_6px_16px_rgba(255,77,0,0.45)] active:scale-[1.04]"
                    >
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path strokeLinecap="round" d="m20 20-4-4" />
                        </svg>
                    </button>
                </form>
                {/* fim da barra de pesquisa */}
                {/* informações do site */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-7.5">
                    <p className="text-center text-[20px] leading-[1.3]">
                        <span className="block text-[30px] font-bold">+2000</span><br/>
                        Equipes
                    </p>
                    <p className="text-center text-[20px] leading-[1.3]">
                        <span className="block text-[30px] font-bold">+2000</span><br/>
                        Competições
                    </p>
                    <p className="text-center text-[20px] leading-[1.3]">
                        <span className="block text-[30px] font-bold">+2000</span><br/>
                        Clientes
                    </p>
                </div>
            </div> 
        </section> 
    </>
  );
}
        