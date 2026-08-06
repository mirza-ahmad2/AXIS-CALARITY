import { createFileRoute } from "@tanstack/react-router";
import { LineChart, ShieldCheck, Package } from "lucide-react";
import heroAdvisory from "@/assets/hero-advisory.jpg";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/advisory")({
  head: () =>
    pageMeta({
      title: "Advisory — Axis Retail Advisory",
      description:
        "Diagnóstico e estruturação da gestão comercial para varejistas: Planejamento Comercial, Governança e Estratégia de Produto.",
      path: "/advisory",
      keywords:
        "advisory varejo, planejamento comercial, governança, estratégia de produto, consultoria varejo",
    }),
  component: AdvisoryPage,
});

const pillars = [
  {
    n: "01",
    icon: LineChart,
    title: "Planejamento Comercial",
    lead:
      "Da ambição à operação. Traduzimos objetivos comerciais em planos claros — com metas, ciclos e responsabilidades definidas.",
    capabilities: [
      "Ciclos de S&OP e planejamento de compras",
      "Estrutura de metas por canal, categoria e coleção",
      "Rituais de acompanhamento e replanejamento",
    ],
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Governança",
    lead:
      "Decisões consistentes exigem estrutura consistente. Desenhamos a arquitetura de decisão do seu negócio.",
    capabilities: [
      "Comitês, rituais e cadência de gestão",
      "Papéis, responsabilidades e matriz de decisão",
      "Indicadores que realmente movem o negócio",
    ],
  },
  {
    n: "03",
    icon: Package,
    title: "Estratégia de Produto",
    lead:
      "Produto certo, na hora certa, com a margem certa. Estruturamos a inteligência de sortimento e ciclo de vida.",
    capabilities: [
      "Arquitetura de sortimento e curadoria",
      "Precificação, margem e política comercial",
      "Ciclo de vida do produto e gestão de estoques",
    ],
  },
] as const;

function AdvisoryPage() {
  return (
    <>
      <Hero
        image={heroAdvisory}
        imageAlt="Equipe de liderança analisando estratégia comercial de varejo"
        eyebrow="Advisory"
        title="Método que estrutura a gestão comercial do seu varejo."
        subtitle="Diagnóstico, arquitetura e implementação. Trabalhamos junto à liderança para transformar intenção em execução previsível."
        cta={{ to: "/contato", label: "Vamos Conversar" }}
        height="full"
      />

      <section className="py-28 md:py-40">
        <div className="axis-container">
          <Reveal>
            <div className="max-w-3xl mb-24">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-4">
                Três pilares
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Não vendemos slides. Estruturamos operações.
              </h2>
              <p className="mt-6 text-[color:var(--color-stone)] text-lg leading-relaxed">
                Cada engajamento parte de um diagnóstico honesto do momento do negócio.
                A partir dele, atuamos em três frentes que se sustentam entre si.
              </p>
            </div>
          </Reveal>

          <div className="space-y-24">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <article className="grid lg:grid-cols-12 gap-10 items-start border-t border-[color:var(--color-border)] pt-16">
                  <div className="lg:col-span-1 font-display text-5xl text-[color:var(--color-sun)]">
                    {p.n}
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <p.icon size={22} className="text-[color:var(--color-sun)]" />
                      <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                    </div>
                    <p className="text-cream/80 text-lg leading-relaxed max-w-md">{p.lead}</p>
                  </div>
                  <div className="lg:col-span-6">
                    <ul className="space-y-4">
                      {p.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-4 border-b border-[color:var(--color-border)] pb-4"
                        >
                          <span className="text-[color:var(--color-sun)] font-mono text-xs mt-1.5">—</span>
                          <span className="text-cream/90">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[color:var(--color-olive-deep)]">
        <div className="axis-container text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-8">
              Como trabalhamos
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Diagnóstico honesto. Recomendações praticáveis. Implementação ao lado da liderança — não à distância dela.
            </h2>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
