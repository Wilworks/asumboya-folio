import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--background)", padding: "24px" }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <h1 style={{ fontSize: "5rem", fontFamily: "var(--font-display)", color: "var(--cyan)" }}>404</h1>
        <h2 style={{ marginTop: 12 }}>Page not found</h2>
        <p style={{ color: "var(--muted-color)", marginTop: 8 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <h2>Something went wrong</h2>
        <p style={{ color: "var(--muted-color)", marginTop: 8 }}>Try refreshing the page.</p>
        <button
          className="btn btn-primary"
          style={{ marginTop: 24 }}
          onClick={() => { router.invalidate(); reset(); }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wilfred Asumboya — Biomedical AI Researcher" },
      { name: "description", content: "Biomedical AI researcher building intelligent clinical systems for low-resource healthcare in Africa." },
      { name: "author", content: "Wilfred Asumboya" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wilfred Asumboya" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
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
      <Outlet />
    </QueryClientProvider>
  );
}
