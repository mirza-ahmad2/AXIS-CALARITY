import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/lib/site";

const BASE_URL = SITE.url.replace(/\/$/, "");

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/advisory", changefreq: "monthly", priority: "0.9" },
  { path: "/mentoria", changefreq: "monthly", priority: "0.9" },
  { path: "/sobre", changefreq: "monthly", priority: "0.7" },
  { path: "/contato", changefreq: "monthly", priority: "0.6" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path === "/" ? "/" : e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
