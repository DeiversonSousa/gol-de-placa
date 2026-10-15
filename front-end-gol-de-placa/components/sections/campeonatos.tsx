"use client";

import { useState } from "react";

const destaques = [
  { numero: "01", titulo: "Tudo em um só lugar", texto: "Equipes, partidas e resultados organizados." },
  { numero: "02", titulo: "Atualização rápida", texto: "Publique os placares em poucos cliques." },
  { numero: "03", titulo: "Mais tempo para o jogo", texto: "Menos planilhas, mais campeonato." },
];

const etapas = [
  { nome: "Equipes", titulo: "Cadastre suas equipes", descricao: "Adicione equipes e deixe o sistema cuidar do resto." },
  { nome: "Partidas", titulo: "Monte a tabela de jogos", descricao: "Defina dias e horários e a tabela fica pronta." },
  { nome: "Resultados", titulo: "Lance os placares", descricao: "Registre cada resultado em poucos cliques." },
  { nome: "Classificação", titulo: "Acompanhe a classificação", descricao: "A tabela se atualiza sozinha a cada resultado." },
];

const equipes = [
  { sigla: "A", nome: "Vila Nova", jogadores: "12 jogadores", cor: "bg-[#6d8e7c]" },
  { sigla: "B", nome: "Real Jardim", jogadores: "15 jogadores", cor: "bg-(--orange)" },
  { sigla: "C", nome: "União FC", jogadores: "11 jogadores", cor: "bg-[#68727a]" },
];

const partidas = [
  { casa: "Vila Nova", hora: "16:00", fora: "Real Jardim" },
  { casa: "União FC", hora: "18:00", fora: "Vila Nova" },
  { casa: "Real Jardim", hora: "20:00", fora: "União FC" },
];

const resultados = [
  { casa: "Vila Nova", a: 3, b: 1, fora: "Real Jardim" },
  { casa: "União FC", a: 2, b: 2, fora: "Vila Nova" },
  { casa: "Real Jardim", a: 1, b: 0, fora: "União FC" },
];

const classificacao = [
  { pos: 1, nome: "Vila Nova", pg: "4", sg: "+2" },
  { pos: 2, nome: "Real Jardim", pg: "3", sg: "0" },
  { pos: 3, nome: "União FC", pg: "1", sg: "-2" },
];

// classes que se repetem nas linhas do simulador (.equipe, .partida, .resultado, .tabela-linha)
const linha ="grid min-h-11 items-center gap-3 rounded-[5px] bg-white/6 px-3 py-2";
const linhaJogo = `${linha} grid-cols-[1fr_auto_1fr] text-[13px]`;
const linhaTabela = `${linha} grid-cols-[24px_1fr_30px_30px] text-[13px]`;
const visual = "grid animate-[aparecer_0.25s_ease] gap-2.5";

export default function Campeonatos() {
  const [etapa, setEtapa] = useState(0);
  const atual = etapas[etapa];
  const ultima = etapa === etapas.length - 1;

  return (
    <section id="campeonatos" className="scroll-mt-27.5 bg-(--dark) px-5 py-17.5 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between max-[600px]:px-4">
        <div className="grid max-w-7xl grid-cols-2 gap-75 max-[960px]:grid-cols-1 max-[960px]:gap-12 max-[960px]:text-center">
          {/* lado esquerdo */}
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[1px] text-(--orange) uppercase">
              COMO FUNCIONA?
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08] font-extrabold">
              <span className="text-(--orange)">ORGANIZAR</span> COM
              <br /> O GOL DE PLACA É
              <br /> SIMPLES
            </h2>
            <p className="mt-6 text-lg leading-[1.6]">
              Entenda como usar o{" "}
              <span className="text-(--orange)">GoldePlaca</span> para organizar
              <br /> qualquer campeonato de futebol amador.
            </p>

            <div
              className="mt-9.5 grid max-w-107.5 gap-4 max-[960px]:mx-auto"
              aria-label="Benefícios da plataforma"
            >
              {destaques.map((item) => (
                <div
                  key={item.numero}
                  className="grid grid-cols-[34px_1fr] items-start gap-3 border-l-2 border-(--orange)/60 pl-3"
                >
                  <span className="font-mono text-xs leading-[1.6] font-bold text-(--orange)">
                    {item.numero}
                  </span>
                  <p className="text-sm leading-[1.4] text-white/60">
                    <strong className="text-base text-white">
                      {item.titulo}
                    </strong>
                    <br />
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* simulador */}
          <div
            className="min-w-0 overflow-hidden rounded-[10px] border border-white/16 bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
            aria-label="Simulador de campeonato"
          >
            <div className="flex items-center justify-between gap-4 px-6.5 py-6 max-[600px]:flex-col max-[600px]:items-start">
              <div>
                <p className="text-[11px] font-bold tracking-[1.4px] text-(--orange)">
                  SIMULADOR DE GESTÃO
                </p>
                <h3 className="mt-1.5 text-2xl font-bold">{atual.titulo}</h3>
              </div>
              <span className="text-sm text-white/55">
                <span className="text-[25px] font-bold text-white">
                  {etapa + 1}
                </span>
                /{etapas.length}
              </span>
            </div>

            <div
              className="grid grid-cols-4 border-y border-white/10"
              role="tablist"
              aria-label="Etapas do campeonato"
            >
              {etapas.map((item, i) => (
                <button
                  key={item.nome}
                  type="button"
                  role="tab"
                  aria-selected={i === etapa}
                  onClick={() => setEtapa(i)}
                  className={`cursor-pointer border-r border-white/10 px-2 py-3.5 text-left text-xs font-bold last:border-r-0 ${
                    i === etapa
                      ? "bg-(--orange)/12 text-(--orange)"
                      : "bg-transparent text-white/48"
                  }`}
                >
                  0{i + 1}
                  <span className="mt-1 block font-medium max-[600px]:text-[10px]">
                    {item.nome}
                  </span>
                </button>
              ))}
            </div>

            <div role="tabpanel" className="min-h-52.5 px-6.5 pt-6 pb-2">
              {etapa === 0 && (
                <div className={visual}>
                  {equipes.map((eq) => (
                    <div key={eq.nome} className={`${linha} grid-cols-[auto_1fr]`}>
                      <span
                        className={`grid size-7 place-items-center rounded-full font-extrabold text-white ${eq.cor}`}
                      >
                        {eq.sigla}
                      </span>
                      <strong>{eq.nome}</strong>
                      <small className="col-start-2 -mt-2.5 text-[11px] text-white/50">
                        {eq.jogadores}
                      </small>
                    </div>
                  ))}
                </div>
              )}

              {etapa === 1 && (
                <div className={visual}>
                  {partidas.map((p) => (
                    <div key={p.casa + p.hora} className={linhaJogo}>
                      <span>{p.casa}</span>
                      <b className="whitespace-nowrap text-(--orange)">{p.hora}</b>
                      <span className="text-right">{p.fora}</span>
                    </div>
                  ))}
                </div>
              )}

              {etapa === 2 && (
                <div className={visual}>
                  {resultados.map((r) => (
                    <div key={r.casa + r.fora} className={linhaJogo}>
                      <span>{r.casa}</span>
                      <strong className="whitespace-nowrap text-(--orange)">
                        {r.a} <small className="text-[11px] text-white/45">x</small>{" "}
                        {r.b}
                      </strong>
                      <span className="text-right">{r.fora}</span>
                    </div>
                  ))}
                </div>
              )}

              {etapa === 3 && (
                <div className={visual}>
                  <div
                    className={`${linhaTabela} min-h-7 bg-transparent pt-0 pb-1 text-[11px] text-white/45 uppercase`}
                  >
                    <span>#</span>
                    <span>Equipe</span>
                    <span>PG</span>
                    <span>SG</span>
                  </div>
                  {classificacao.map((c) => (
                    <div key={c.nome} className={linhaTabela}>
                      <span>{c.pos}</span>
                      <strong>{c.nome}</strong>
                      <span>{c.pg}</span>
                      <span>{c.sg}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-end justify-between gap-4 px-6.5 pt-3 pb-6 max-[600px]:flex-col max-[600px]:items-stretch">
              <p className="max-w-57.5 text-[13px] leading-[1.4] text-white/55">
                {atual.descricao}
              </p>
              <button
                type="button"
                onClick={() => setEtapa(ultima ? 0 : etapa + 1)}
                className="shrink-0 cursor-pointer rounded-[5px] border border-(--orange) bg-(--orange) px-3.5 py-2.5 text-xs font-bold text-white"
              >
                {ultima ? "Recomeçar" : "Próxima etapa"}
                <span className="ml-1.5 text-base" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}