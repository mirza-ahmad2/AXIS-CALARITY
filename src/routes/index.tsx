import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, LineChart, Package, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { AxisScene } from "@/components/site/AxisScene";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: SITE.defaultTitle,
      description: SITE.defaultDescription,
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[100dvh] min-h-screen items-center justify-center overflow-hidden md:-mt-20">
        <img
          src={heroHome}
          alt="Ambiente sofisticado representando o universo Axis Retail Advisory"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-olive)]/70 via-[color:var(--color-olive)]/85 to-[color:var(--color-olive-deep)]" />
        <AxisScene />

        <div className="axis-container relative z-10 flex flex-col items-center py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)]"
          >
            Axis — Retail Advisory & Executive Mentoring
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl font-display text-5xl leading-[1] text-cream md:text-7xl lg:text-8xl"
          >
            O ponto central em torno<br className="hidden md:block" /> do qual{" "}
            <em className="italic text-[color:var(--color-sun)]">tudo gira.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg"
          >
            Gestão comercial que transforma o varejo — método, clareza e direção
            para empresas e líderes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-sun)] px-8 py-4 font-medium text-[color:var(--color-olive-deep)] transition-all duration-300 hover:bg-[color:var(--color-sun-soft)] hover:shadow-[0_0_24px_rgba(201,162,74,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-olive)] active:scale-[0.98]"
            >
              Vamos Conversar <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              to="/advisory"
              className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
            >
              Conheça o método
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-[color:var(--color-olive-deep)]">
        <div className="axis-container text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-8">
              Pedigree operacional
            </p>
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.05] text-cream max-w-5xl mx-auto">
              Quase <em className="italic text-[color:var(--color-sun)]">20 anos</em> na maior varejista de moda do Brasil.
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-[color:var(--color-stone)] text-base md:text-lg leading-relaxed">
              Jean Vieira construiu carreira em ambientes de alta performance — comercial,
              planejamento, produto e gestão de marcas — na Lojas Renner. A Axis é a
              destilação desse repertório em método.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="axis-container">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-4">
                  Duas frentes
                </p>
                <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
                  Consultoria para varejistas. Mentoria para líderes.
                </h2>
              </div>
              <p className="max-w-md text-[color:var(--color-stone)] leading-relaxed">
                Duas frentes de atuação, uma mesma disciplina: estratégia, execução e pessoas caminhando juntas.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <FrontCard
                to="/advisory"
                eyebrow="01 — Advisory"
                title="Diagnóstico e estruturação da gestão comercial."
                items={[
                  { icon: LineChart, label: "Planejamento Comercial" },
                  { icon: ShieldCheck, label: "Governança" },
                  { icon: Package, label: "Estratégia de Produto" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <FrontCard
                to="/mentoria"
                eyebrow="02 — Mentoria"
                title="Presença, clareza e melhores decisões para líderes."
                items={[
                  { icon: Users, label: "Mentoria Executiva C-Level" },
                  { icon: Compass, label: "Mentoria Individual" },
                  { icon: Sparkles, label: "Crescimento com intenção" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-[color:var(--color-olive-deep)]">
        <div className="axis-container grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-4">
                Por que a Axis
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Feita a partir de operação real — não de teoria.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-lg text-cream/85 leading-relaxed">
                A Axis nasce em 2026 como o próximo capítulo de uma trajetória construída
                dentro do varejo brasileiro. Depois de quase duas décadas na Lojas Renner —
                sentando na cadeira comercial, de planejamento, de produto e de marca — Jean
                Vieira decidiu levar esse repertório para outras operações.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[color:var(--color-stone)] leading-relaxed">
                O que oferecemos não é um framework importado. É método construído dentro da
                complexidade real de um dos varejos mais exigentes do país — traduzido para
                cada empresa, cada estágio, cada líder.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="border-l-2 border-[color:var(--color-sun)] pl-6 mt-10">
                <p className="font-display text-2xl md:text-3xl italic leading-snug text-cream">
                  “Negócios prosperam quando estratégia, execução e pessoas caminham juntas.”
                </p>
                <footer className="mt-4 text-sm text-[color:var(--color-stone)]">— Jean Vieira, Fundador</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function FrontCard({
  to,
  eyebrow,
  title,
  items,
}: {
  to: "/advisory" | "/mentoria";
  eyebrow: string;
  title: string;
  items: { icon: React.ComponentType<{ size?: number }>; label: string }[];
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-olive-deep)] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-sun)]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] md:p-14"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)] mb-6">
        {eyebrow}
      </p>
      <h3 className="font-display text-3xl md:text-4xl leading-tight mb-10 max-w-md">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-3 text-cream/85">
            <it.icon size={18} />
            <span className="text-sm">{it.label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 inline-flex items-center gap-2 text-[color:var(--color-sun)] text-sm">
        Explorar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
