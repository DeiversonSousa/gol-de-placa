import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const contatos = [
  {
    icone: FaPhone,
    titulo: "Telefone",
    valor: "(62) 99266-5329",
    href: "tel:+5562992665329",
  },
  {
    icone: FaEnvelope,
    titulo: "Email",
    valor: "contato@arenabrasil.com",
    href: "mailto:contato@arenabrasil.com",
  },
  {
    icone: FaLocationDot,
    titulo: "Localização",
    valor: "Goiânia, Brasil",
    href: undefined,
  },
];

// classe compartilhada entre os inputs e o textarea
const campo =
  "w-full rounded-[10px] border border-white/12 bg-white/3 px-4 py-3.5 text-[15px] text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-white/60 focus:border-(--orange)/80 focus:ring-3 focus:ring-(--orange)/12";

export default function Contato() {
  return (
    <section
      id="contato"
      className="scroll-mt-27.5 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,77,0,0.06))] px-5 pt-16 pb-20 sm:pt-22.5 sm:pb-30"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 min-[961px]:grid-cols-[1.1fr_1fr] min-[961px]:gap-14">
        {/* texto e canais de contato */}
        <div className="min-w-0">
          <p className="text-sm font-bold tracking-[1px] text-(--orange) uppercase">
            CONTATO
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] font-extrabold">
            Fale com a <span className="text-(--orange)">Arena Brasil</span>
          </h2>
          <p className="mt-4.5 max-w-135 text-base leading-[1.8] text-white/80 sm:text-[17px]">
            Quer organizar um campeonato, tirar dúvidas sobre planos ou
            solicitar uma demonstração? Nossa equipe está pronta para ajudar.
          </p>

          <ul className="mt-8.5 grid gap-4.5">
            {contatos.map(({ icone: Icone, titulo, valor, href }) => {
              const conteudo = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-(--orange)/14 text-lg text-(--orange)">
                    <Icone aria-hidden="true" />
                  </span>
                  <span className="grid min-w-0 gap-1">
                    <strong className="text-[15px] text-white">{titulo}</strong>
                    <span className="text-sm wrap-break-word text-white/72">
                      {valor}
                    </span>
                  </span>
                </>
              );

              const classe =
                "flex items-center gap-4 rounded-xl border border-white/12 bg-white/3 px-4.5 py-4";

              return (
                <li key={titulo}>
                  {href ? (
                    <a
                      href={href}
                      className={`${classe} transition-colors duration-200 hover:border-(--orange)/50`}
                    >
                      {conteudo}
                    </a>
                  ) : (
                    <div className={classe}>{conteudo}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* formulário */}
        <form className="grid min-w-0 gap-4 rounded-[18px] border border-white/12 bg-white/2 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:p-7">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              aria-label="Nome"
              autoComplete="name"
              required
              className={campo}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              aria-label="E-mail"
              autoComplete="email"
              required
              className={campo}
            />
          </div>
          <input
            type="text"
            name="assunto"
            placeholder="Assunto"
            aria-label="Assunto"
            className={campo}
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            aria-label="Mensagem"
            rows={5}
            required
            className={`${campo} min-h-35 resize-y`}
          />
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-[linear-gradient(135deg,#ff6a1a,var(--orange))] px-6 py-3.5 font-bold text-white transition duration-200 hover:-translate-y-px hover:brightness-[1.08] sm:w-fit"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
