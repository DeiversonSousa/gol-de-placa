import Link from "next/link";

const destaques = [
  { numero: "01", titulo: "Sem contrato longo", texto: "Escolha o plano ideal para cada campeonato." },
  { numero: "02", titulo: "Configuração rápida", texto: "Comece a organizar sua competição hoje." },
  { numero: "03", titulo: "Suporte especializado", texto: "Conte com ajuda sempre que precisar." },
];

const planos = [
  {
    tipo: "Para começar",
    nome: "Essencial",
    descricao: "O básico para tirar seu campeonato do papel.",
    valor: 49,
    beneficios: [
      "Até 8 equipes",
      "Tabela de jogos e classificação",
      "Cadastro de atletas",
      "Resultados e artilharia",
    ],
    destaque: false,
  },
  {
    tipo: "Mais completo",
    nome: "Profissional",
    descricao: "Mais controle para competições que crescem.",
    valor: 99,
    beneficios: [
      "Equipes ilimitadas",
      "Súmulas e estatísticas avançadas",
      "Notificações para os participantes",
      "Suporte prioritário",
    ],
    destaque: true,
  },
];

export default function Planos() {
  return (
    <section id="planos" className="scroll-mt-27.5 px-5 py-17.5">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between max-[600px]:px-4">
        <div className="mt-10 grid w-full grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] gap-10 max-[960px]:grid-cols-1">
          {/* lado esquerdo */}
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[1px] text-(--orange) uppercase">
              PLANOS
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08] font-extrabold">
              <span className="text-(--orange)">ESCOLHA</span> O PLANO
              <br /> IDEAL PARA SUA
              <br /> COMPETIÇÃO
            </h2>
            <p className="mt-6 text-lg leading-[1.6] max-[960px]:text-center">
              Tenha as ferramentas certas para organizar
              <br /> qualquer campeonato de futebol amador.
            </p>

            <div
              className="mt-9.5 grid max-w-107.5 gap-4"
              aria-label="Vantagens dos planos"
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

          {/* lista de planos */}
          <div
            className="grid grid-cols-2 items-stretch gap-4.5 max-[600px]:grid-cols-1"
            aria-label="Planos disponíveis"
          >
            {planos.map((plano) => (
              <article
                key={plano.nome}
                className={`flex flex-col rounded-[10px] border px-6 py-7 ${
                  plano.destaque
                    ? "border-(--orange) bg-[linear-gradient(145deg,rgba(255,77,0,0.18),rgba(255,255,255,0.06))]"
                    : "border-white/14 bg-white/6"
                }`}
              >
                <p className="text-xs font-bold tracking-[1px] text-(--orange) uppercase">
                  {plano.tipo}
                </p>
                <h3 className="mt-2 text-[28px] font-bold">{plano.nome}</h3>
                <p className="mt-2 min-h-13 leading-normal text-white/75">
                  {plano.descricao}
                </p>

                <p className="mt-5 text-[42px] leading-none font-extrabold text-(--orange)">
                  <span className="text-sm font-medium text-white">R$</span>{" "}
                  {plano.valor}
                  <small className="ml-1 text-sm font-medium text-white">
                    /mês
                  </small>
                </p>

                <ul className="my-6.5 grid gap-3 leading-[1.35] text-white/88">
                  {plano.beneficios.map((item) => (
                    <li
                      key={item}
                      className="before:mr-2.25 before:font-extrabold before:text-(--orange) before:content-['✓']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className="mt-auto block rounded-md border border-(--orange) px-4 py-3 text-center font-bold text-white transition-[background-color,color] duration-250 hover:bg-(--orange)"
                >
                  Escolher plano
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
