import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { CONTACT } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-border)] bg-[color:var(--color-olive-deep)]">
      <div className="axis-container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2.5 rounded-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)]"
              aria-label="Axis Retail Advisory — Início"
            >
              <img
                src={logoMark}
                alt="Axis Retail Advisory"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                decoding="async"
              />
              <span className="font-display text-lg text-cream">Axis Retail Advisory</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-stone)]">
              O ponto central em torno do qual estratégia, execução e pessoas caminham juntas.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs uppercase tracking-widest text-[color:var(--color-sun)]">
              Navegação
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Início" },
                { to: "/advisory", label: "Advisory" },
                { to: "/mentoria", label: "Mentoria" },
                { to: "/sobre", label: "Sobre Jean" },
                { to: "/contato", label: "Contato" },
              ].map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-cream/70 transition-colors duration-200 hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs uppercase tracking-widest text-[color:var(--color-sun)]">
              Contato
            </h2>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>{CONTACT.locationShort}</li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[color:var(--color-sun)]" aria-hidden />
                <span>{CONTACT.emailLabel}</span>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                >
                  <Phone size={14} aria-hidden />
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li className="flex flex-wrap gap-4 pt-1">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                  aria-label="Instagram Axis Retail"
                >
                  <Instagram size={14} aria-hidden /> Instagram
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                  aria-label="LinkedIn Axis Retail Advisory"
                >
                  <Linkedin size={14} aria-hidden /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[color:var(--color-border)] pt-8 text-xs text-[color:var(--color-stone)] md:flex-row">
          <span>© {new Date().getFullYear()} Axis Retail Advisory. Todos os direitos reservados.</span>
          <span>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--color-sun)] transition-opacity hover:opacity-80 hover:underline focus-visible:outline-none focus-visible:underline"
            >
              The Innovations
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
