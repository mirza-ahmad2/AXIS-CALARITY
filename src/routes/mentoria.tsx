import { createFileRoute } from "@tanstack/react-router";
import { Users, Compass } from "lucide-react";
import heroMentoria from "@/assets/hero-mentoria.jpg";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/mentoria")({
  head: () =>
    pageMeta({
      title: "Mentoria — Axis Retail Advisory",
      description:
        "Mentoria Executiva para líderes C-level e Mentoria Individual para empresários e empreendedores que querem crescer com intenção.",
      path: "/mentoria",
      keywords:
        "mentoria executiva, mentoria C-level, mentoria individual, liderança varejo, Axis Retail Advisory",
    }),
  component: MentoriaPage,
});

const modalidades = [
  {
    icon: Users,
    label: "Modalidade 01",
    title: "Mentoria Executiva",
    who: "Líderes C-level e executivos seniores em varejo, moda, consumo e serviços.",
    what:
      "Um espaço estruturado de reflexão fora do dia a dia operacional — para pensar carreira, decisões críticas, gestão de times e o próprio papel de liderança.",
    outcome:
      "Mais clareza na leitura do negócio, decisões melhores em menos tempo, presença de liderança consistente.",
  },
  {
    icon: Compass,
    label: "Modalidade 02",
    title: "Mentoria Individual",
    who: "Empresários e empreendedores conduzindo negócios em crescimento.",
    what:
      "Acompanhamento personalizado para transformar ambição em plano — com foco em estratégia comercial, produto, gestão de pessoas e ritual de execução.",
    outcome:
      "Crescimento com intenção: menos improviso, mais direção, resultados sustentáveis.",
  },
] as const;

function MentoriaPage() {
  return (
    <>
      <Hero
        image={heroMentoria}
        imageAlt="Sessão de mentoria executiva em ambiente corporativo"
        eyebrow="Mentoria"
        title="Clareza para decidir. Presença para liderar."
        subtitle="Mentoria estruturada para líderes que querem sair do modo reativo e conduzir o negócio com método."
        cta={{ to: "/contato", label: "Vamos Conversar" }}
        height="full"
      />

      <section className="py-28 md:py-40">
        <div className="axis-container">
          <Reveal>
            <div className="max-w-3xl mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-4">
                Duas modalidades
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Um mesmo compromisso, dois pontos de partida.
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {modalidades.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-olive-deep)] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-sun)]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:p-14">
                  <div className="flex items-center gap-3 mb-6">
                    <m.icon size={22} className="text-[color:var(--color-sun)]" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)]">
                      {m.label}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl leading-tight mb-8">{m.title}</h3>

                  <div className="space-y-6 mt-auto">
                    <Row label="Para quem é" value={m.who} />
                    <Row label="O que oferece" value={m.what} />
                    <Row label="Resultado esperado" value={m.outcome} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-[color:var(--color-olive-deep)]">
        <div className="axis-container text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-8">
              Filosofia
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Sem jargão motivacional. Sem promessa fácil. Conversas honestas que devolvem clareza — e responsabilidade — para quem lidera.
            </h2>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[color:var(--color-border)] pt-4">
      <p className="text-xs uppercase tracking-widest text-[color:var(--color-sun)] mb-2">{label}</p>
      <p className="text-cream/85 leading-relaxed">{value}</p>
    </div>
  );
}
