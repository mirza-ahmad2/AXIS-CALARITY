import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { to: string; label: string };
  height?: "full" | "tall" | "medium";
  overlay?: "olive" | "dark";
  children?: ReactNode;
};

export function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  cta,
  height = "tall",
  overlay = "olive",
  children,
}: Props) {
  const heightClass =
    height === "full"
      ? "min-h-[100dvh] min-h-screen"
      : height === "tall"
        ? "min-h-[min(100dvh,85vh)] min-h-[85vh]"
        : "min-h-[65vh]";
  const overlayClass =
    overlay === "olive"
      ? "bg-gradient-to-b from-[color:var(--color-olive)]/85 via-[color:var(--color-olive)]/70 to-[color:var(--color-olive)]/90"
      : "bg-gradient-to-b from-[color:var(--color-olive-deep)]/90 via-[color:var(--color-olive-deep)]/75 to-[color:var(--color-olive-deep)]/95";

  return (
    <section
      className={`relative -mt-16 flex w-full items-center justify-center overflow-hidden md:-mt-20 ${heightClass}`}
      aria-labelledby={typeof title === "string" ? "hero-title" : undefined}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[axis-kenburns_28s_ease-out_forwards]"
        fetchPriority="high"
        decoding="async"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="axis-container relative z-10 flex flex-col items-center py-24 text-center md:py-28">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)]"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-4xl leading-[1.05] text-cream md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-sun)] px-7 py-3.5 font-medium text-[color:var(--color-olive-deep)] transition-all duration-300 hover:bg-[color:var(--color-sun-soft)] hover:shadow-[0_0_24px_rgba(201,162,74,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-olive-deep)]"
            >
              {cta.label}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
