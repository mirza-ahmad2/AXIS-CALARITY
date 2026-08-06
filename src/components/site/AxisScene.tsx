import { useMemo } from "react";

// Lightweight CSS-based "axis" signature moment: particles converging to a
// central point. Zero JS animation cost, mobile-safe.
export function AxisScene() {
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.3;
      const distance = 180 + Math.random() * 260;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const delay = Math.random() * 4;
      const duration = 5 + Math.random() * 3;
      const size = 2 + Math.random() * 3;
      return { tx, ty, delay, duration, size, id: i };
    });
  }, []);

  const orbits = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => ({
        r: 90 + i * 70,
        duration: 18 + i * 8,
        id: i,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Central point */}
      <div className="relative">
        <div
          className="absolute -inset-16 rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, #C9A24A, transparent 70%)" }}
        />
        <div
          className="w-3 h-3 rounded-full bg-[color:var(--color-sun)]"
          style={{ animation: "axis-pulse 3.5s ease-in-out infinite" }}
        />

        {/* Orbit rings */}
        {orbits.map((o) => (
          <div
            key={o.id}
            className="absolute top-1/2 left-1/2 rounded-full border border-[color:var(--color-sun)]/15"
            style={{
              width: o.r * 2,
              height: o.r * 2,
              marginLeft: -o.r,
              marginTop: -o.r,
            }}
          >
            <span
              className="absolute w-1.5 h-1.5 rounded-full bg-[color:var(--color-sun)]/80"
              style={{
                top: -3,
                left: "50%",
                marginLeft: -3,
                transformOrigin: `3px ${o.r + 3}px`,
                animation: `axis-orbit ${o.duration}s linear infinite`,
                // @ts-expect-error css var
                "--r": `${o.r}px`,
              }}
            />
          </div>
        ))}

        {/* Converging particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute top-1/2 left-1/2 rounded-full bg-[color:var(--color-sun)]"
            style={{
              width: p.size,
              height: p.size,
              marginLeft: -p.size / 2,
              marginTop: -p.size / 2,
              animation: `axis-converge ${p.duration}s ease-out ${p.delay}s infinite`,
              // @ts-expect-error css var
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
