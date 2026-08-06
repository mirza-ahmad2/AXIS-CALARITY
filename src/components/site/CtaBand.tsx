import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-sun)] text-[color:var(--color-olive-deep)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(26,26,22,0.12), transparent 50%)",
        }}
      />
      <div className="axis-container relative py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] opacity-70">O próximo passo</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            Crescimento previsível não acontece por acaso. Ele é construído.
          </h2>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-olive-deep)] px-8 py-4 font-medium text-cream transition-all duration-300 hover:bg-[color:var(--color-olive)] hover:shadow-[0_12px_32px_rgba(26,26,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-olive-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-sun)] active:scale-[0.98]"
          >
            Vamos Conversar <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
