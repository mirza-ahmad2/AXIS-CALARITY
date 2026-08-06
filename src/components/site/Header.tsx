import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoMark from "@/assets/logo-mark.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/advisory", label: "Advisory" },
  { to: "/mentoria", label: "Mentoria" },
  { to: "/sobre", label: "Sobre Jean" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-[color:var(--color-border)] bg-[color:var(--color-olive)]/90 backdrop-blur-md"
          : "border-transparent bg-[color:var(--color-olive)]/55 backdrop-blur-sm"
      }`}
    >
      <div className="axis-container flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-olive)] rounded-sm"
          onClick={() => setOpen(false)}
          aria-label="Axis Retail Advisory — Início"
        >
          <img
            src={logoMark}
            alt="Axis Retail Advisory"
            width={28}
            height={28}
            className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105"
            decoding="async"
          />
          <span className="font-display text-base tracking-tight text-cream sm:text-lg">
            Axis <span className="text-[color:var(--color-sun)]">/</span>{" "}
            <span className="text-cream/85">Retail Advisory</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm text-cream/70 transition-colors duration-200 hover:text-cream focus-visible:outline-none focus-visible:text-cream after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[color:var(--color-sun)] after:transition-transform after:duration-300 hover:after:scale-x-100"
              activeProps={{
                className:
                  "relative text-sm text-[color:var(--color-sun)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-100 after:bg-[color:var(--color-sun)]",
              }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="rounded-full bg-[color:var(--color-sun)] px-4 py-2 text-sm font-medium text-[color:var(--color-olive-deep)] transition-all duration-300 hover:bg-[color:var(--color-sun-soft)] hover:shadow-[0_0_20px_rgba(201,162,74,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-olive)]"
          >
            Vamos Conversar
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-cream transition-colors hover:bg-cream/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-olive)] md:hidden"
          >
            <nav className="axis-container flex flex-col gap-1 py-6" aria-label="Mobile">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base text-cream/80 transition-colors hover:bg-cream/5 hover:text-cream"
                    activeProps={{ className: "block rounded-lg px-2 py-3 text-base text-[color:var(--color-sun)]" }}
                    activeOptions={{ exact: true }}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-[color:var(--color-sun)] px-4 py-3 text-center text-sm font-medium text-[color:var(--color-olive-deep)] transition-colors hover:bg-[color:var(--color-sun-soft)]"
              >
                Vamos Conversar
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
