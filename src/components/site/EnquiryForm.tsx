import { useState } from "react";
import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AREAS = [
  { value: "advisory", label: "Advisory" },
  { value: "mentoria-executiva", label: "Mentoria Executiva" },
  { value: "mentoria-individual", label: "Mentoria Individual" },
] as const;

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [area, setArea] = useState<string>("");
  const [areaError, setAreaError] = useState(false);

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (!area) {
          setAreaError(true);
          return;
        }
        setAreaError(false);
        setSent(true);
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="Empresa" name="empresa" />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="area-trigger"
          className="text-xs uppercase tracking-widest text-[color:var(--color-sun)]"
        >
          Área de interesse
        </label>
        <Select
          value={area || undefined}
          onValueChange={(value) => {
            setArea(value);
            setAreaError(false);
          }}
        >
          <SelectTrigger
            id="area-trigger"
            aria-label="Área de interesse"
            aria-invalid={areaError}
            className="h-auto w-full rounded-none border-0 border-b border-[color:var(--color-border)] bg-transparent px-0 py-3 text-base text-cream shadow-none ring-offset-[color:var(--color-olive)] transition-colors hover:border-[color:var(--color-sun)]/50 focus:ring-0 focus:ring-offset-0 focus-visible:border-[color:var(--color-sun)] data-[placeholder]:text-cream/40 [&>svg]:text-[color:var(--color-sun)]"
          >
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent
            className="z-[60] border border-[color:var(--color-border)] bg-[color:var(--color-olive-deep)] text-cream shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
            position="popper"
          >
            {AREAS.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="cursor-pointer rounded-sm py-2.5 text-cream focus:bg-[color:var(--color-sun)]/20 focus:text-cream data-[highlighted]:bg-[color:var(--color-sun)]/20 data-[highlighted]:text-cream data-[state=checked]:text-[color:var(--color-sun)]"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="area" value={area} />
        {areaError && (
          <p role="alert" className="text-xs text-[color:var(--color-sun)]">
            Selecione uma área de interesse.
          </p>
        )}
      </div>

      <Field label="E-mail" name="email" type="email" required autoComplete="email" />

      <div className="grid gap-2">
        <label htmlFor="mensagem" className="text-xs uppercase tracking-widest text-[color:var(--color-sun)]">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          className="resize-none border-b border-[color:var(--color-border)] bg-transparent py-3 text-cream transition-colors placeholder:text-cream/35 focus:border-[color:var(--color-sun)] focus:outline-none"
          placeholder="Conte-nos sobre o momento do seu negócio."
        />
      </div>

      <div className="pt-4">
        {sent ? (
          <div
            role="status"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-sun)]/40 bg-[color:var(--color-sun)]/15 px-6 py-3 text-[color:var(--color-sun)]"
          >
            <Check size={16} aria-hidden /> Mensagem recebida. Entraremos em contato em breve.
          </div>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-sun)] px-8 py-4 font-medium text-[color:var(--color-olive-deep)] transition-all duration-300 hover:bg-[color:var(--color-sun-soft)] hover:shadow-[0_0_24px_rgba(201,162,74,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-olive)] active:scale-[0.98]"
          >
            Enviar Mensagem <span aria-hidden>→</span>
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-[color:var(--color-sun)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border-b border-[color:var(--color-border)] bg-transparent py-3 text-cream transition-colors focus:border-[color:var(--color-sun)] focus:outline-none"
      />
    </div>
  );
}
