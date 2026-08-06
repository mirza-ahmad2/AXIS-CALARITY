import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroContato from "@/assets/hero-contato.jpg";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CONTACT, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () =>
    pageMeta({
      title: "Contato — Axis Retail Advisory",
      description:
        "Vamos conversar sobre o momento do seu negócio. Advisory, Mentoria Executiva ou Mentoria Individual — comece por aqui.",
      path: "/contato",
      keywords:
        "contato Axis Retail Advisory, consultoria varejo, mentoria executiva, WhatsApp, Instagram axis.retail",
    }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <Hero
        image={heroContato}
        imageAlt="Ambiente de reunião executiva — Axis Retail Advisory"
        eyebrow="Contato"
        title="Vamos Conversar."
        subtitle="Comece por um diagnóstico honesto do momento do seu negócio. Retornaremos em até dois dias úteis."
        overlay="dark"
        height="full"
      />

      <section className="flex min-h-[calc(100dvh-5rem)] items-center py-24 md:py-32">
        <div className="axis-container grid w-full gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)]">
                Formulário
              </p>
              <h2 className="mb-12 font-display text-3xl md:text-4xl">
                Conte-nos sobre o momento do seu negócio.
              </h2>
              <EnquiryForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <Reveal delay={0.1}>
              <div className="space-y-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-olive-deep)] p-8 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-10">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--color-sun)]">
                    Contato direto
                  </p>
                  <h3 className="font-display text-2xl leading-snug">
                    Prefere iniciar por outro canal?
                  </h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Mail size={18} className="mt-1 shrink-0 text-[color:var(--color-sun)]" aria-hidden />
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[color:var(--color-stone)]">
                        E-mail
                      </p>
                      <p className="text-cream">{CONTACT.emailLabel}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={18} className="mt-1 shrink-0 text-[color:var(--color-sun)]" aria-hidden />
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[color:var(--color-stone)]">
                        WhatsApp
                      </p>
                      <a
                        href={CONTACT.phoneHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                      >
                        {CONTACT.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Instagram size={18} className="mt-1 shrink-0 text-[color:var(--color-sun)]" aria-hidden />
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[color:var(--color-stone)]">
                        Instagram
                      </p>
                      <a
                        href={CONTACT.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                      >
                        {CONTACT.instagramHandle}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Linkedin size={18} className="mt-1 shrink-0 text-[color:var(--color-sun)]" aria-hidden />
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[color:var(--color-stone)]">
                        LinkedIn
                      </p>
                      <a
                        href={CONTACT.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream transition-colors hover:text-[color:var(--color-sun)] focus-visible:outline-none focus-visible:text-[color:var(--color-sun)]"
                      >
                        {CONTACT.linkedinLabel}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin size={18} className="mt-1 shrink-0 text-[color:var(--color-sun)]" aria-hidden />
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[color:var(--color-stone)]">
                        Base
                      </p>
                      <p className="text-cream">{CONTACT.location}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
