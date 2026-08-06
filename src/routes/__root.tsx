import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportClientError } from "../lib/report-error";
import { SITE } from "../lib/site";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { SmoothScroll } from "../components/site/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[color:var(--color-sun)]">404</h1>
        <h2 className="mt-4 text-xl font-medium text-cream">Página não encontrada</h2>
        <p className="mt-2 text-sm text-[color:var(--color-stone)]">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-sun)] px-6 py-3 text-sm font-medium text-[color:var(--color-olive-deep)] transition-all duration-300 hover:bg-[color:var(--color-sun-soft)] hover:shadow-[0_0_24px_rgba(201,162,74,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-olive)]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportClientError(error, { boundary: "root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-cream">Algo deu errado.</h1>
        <p className="mt-2 text-sm text-[color:var(--color-stone)]">
          Tente novamente ou volte para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-sun)] px-6 py-3 text-sm font-medium text-[color:var(--color-olive-deep)] transition-all duration-300 hover:bg-[color:var(--color-sun-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)]"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-[color:var(--color-sun)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sun)]"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.defaultTitle },
      { name: "description", content: SITE.defaultDescription },
      { name: "keywords", content: SITE.keywords },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#2B2B22" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: SITE.locale },
      { property: "og:title", content: SITE.defaultTitle },
      { property: "og:description", content: SITE.defaultDescription },
      { property: "og:image", content: `${SITE.url}/logo-axis.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.defaultTitle },
      { name: "twitter:description", content: SITE.defaultDescription },
      { name: "twitter:image", content: `${SITE.url}/logo-axis.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: `${SITE.url}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[color:var(--color-sun)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[color:var(--color-olive-deep)]"
        >
          Ir para o conteúdo
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
