/** Client-side error reporting hook (no third-party branding). */
export function reportClientError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Axis]", error, context);
}
