import { createFileRoute } from "@tanstack/react-router";
import heroJean from "@/assets/hero-jean.jpg";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageMeta({
      title: "Sobre Jean Vieira — Axis Retail Advisory",
      description:
        "Quase 20 anos na Lojas Renner nas áreas comerciais, planejamento, produto e gestão de marcas. Formado pela UFRGS. Fundador da Axis Retail Advisory.",
      path: "/sobre",
      keywords:
        "Jean Vieira, Axis Retail Advisory, Lojas Renner, consultoria varejo, fundador Axis",
    }),
  component: SobrePage,
});

const values = [
  {
    n: "01",
    title: "Clareza",
    body: "Diagnóstico honesto antes de recomendação. Nada de complexidade estética para justificar o trabalho.",
  },
  {
    n: "02",
    title: "Direção",
    body: "Sem plano, não há execução. Estruturamos rota — e revisitamos quando a realidade muda.",
  },
  {
    n: "03",
    title: "Integridade",
    body: "Falamos o que precisa ser dito, no tempo que precisa ser dito. Confiança se constrói assim.",
  },
  {
    n: "04",
    title: "Presença",
    body: "Estamos junto da liderança — no comitê, no replanejamento, no dia difícil. Não à distância.",
  },
];

function SobrePage() {
  return (
    <>
      <Hero
        image={heroJean}
        imageAlt="Retrato de Jean Vieira, fundador da Axis Retail Advisory"
        eyebrow="Sobre"
        title="Jean Vieira"
        subtitle="Quase 20 anos dentro da maior varejista de moda do Brasil. Agora, um capítulo autoral."
        overlay="dark"
        height="full"
      />

      <section className="py-28 md:py-40">
        <div className="axis-container grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-4">
                Trajetória
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Do chão do varejo ao método.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed">
            <Reveal delay={0.1}>
              <p className="text-cream/90">
                Jean construiu quase duas décadas de carreira na{" "}
                <span className="text-[color:var(--color-sun)]">Lojas Renner</span> —
                maior varejista de moda do Brasil — passando pelas áreas comerciais, de
                planejamento, produto e gestão de marcas. Formou-se pela Universidade
                Federal do Rio Grande do Sul e viveu, na prática, ambientes de alta
                performance onde estratégia e execução precisam conversar todos os dias.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-cream/80">
                A Axis nasce em 2026 como uma decisão consciente: levar esse repertório
                para outras operações de varejo, empresários e líderes que precisam
                combinar rigor técnico com leitura fina de comportamento. Não é um novo
                framework — é método destilado de vivência real.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="border-l-2 border-[color:var(--color-sun)] pl-6 mt-4">
                <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug">
                  “Comunicação direta, integridade e presença. É esse o eixo que sustenta tudo o que a gente entrega.”
                </p>
                <footer className="mt-4 text-sm text-[color:var(--color-stone)]">— Jean Vieira</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-[color:var(--color-olive-deep)]">
        <div className="axis-container">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-4">
                Valores
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                Quatro compromissos, todos os dias.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-[color:var(--color-border)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-sun)]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                  <p className="mb-6 font-display text-3xl text-[color:var(--color-sun)]">{v.n}</p>
                  <h3 className="mb-3 font-display text-2xl">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-stone)]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
