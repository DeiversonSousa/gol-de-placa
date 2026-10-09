import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full min-h-screen pt-32 px-5 bg-slate-950 text-white"> 
        {/* texto do meio da pagina */}
        <div className="headline">
            <h1 className="frase-gestao">GESTÃO PROFISSIONAL DE <br/><span className="words-wrappen"> </span><span>&nbsp;AMADOR</span></h1>
            <h3 className="frase-em-branco">Gestão completa de ligas e torneios, tornando os campeonatos mais fáceis de organizar, jogar e acompanhar.</h3>
            {/* fim do texto do meio */}
             {/* botão do meio da pagina */}
            <div className="planosvip">
                <a href="#planos">
                    <button type="button" className="organizar">ORGANIZAR UM CAMPEONATO</button>
                </a>   
            </div> 
            {/*  fim do botão do meio */}
              {/* barra de pesquisa por */}
            <form className="search-bar">
                <input type="text" placeholder="Procure um campeonato ou a equipe" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>  
            {/* fim da barra de pesquisa */}
             {/* informações do site */}
            <div className="informacoes">
                <p><span>+2000</span><br/>Equipes</p>
                <p><span>+2000</span><br/>Competições</p>
                <p><span>+2000</span><br/>Clientes</p>
            </div>
        </div> 
    </main>      
  );
}
