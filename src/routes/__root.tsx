import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CoinCarrière — Recrutez des développeurs qualifiés au Maroc" },
      {
        name: "description",
        content:
          "Recevez uniquement des profils tech pertinents grâce au matching intelligent CoinCarrière.",
      },
      { name: "author", content: "CoinCarrière" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "CoinCarrière — Recrutez des développeurs qualifiés au Maroc" },
      { name: "twitter:title", content: "CoinCarrière — Recrutez des développeurs qualifiés au Maroc" },
      { name: "description", content: "Talent Connect Pro is a mobile-first landing page designed to generate leads for the CoinCarrière recruitment platform." },
      { property: "og:description", content: "Talent Connect Pro is a mobile-first landing page designed to generate leads for the CoinCarrière recruitment platform." },
      { name: "twitter:description", content: "Talent Connect Pro is a mobile-first landing page designed to generate leads for the CoinCarrière recruitment platform." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7da5654-50e9-4fe1-b032-82975f9afa45/id-preview-4fd88f65--66629f96-eff0-4c1c-8744-d6ede0ecfabe.lovable.app-1777592683026.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7da5654-50e9-4fe1-b032-82975f9afa45/id-preview-4fd88f65--66629f96-eff0-4c1c-8744-d6ede0ecfabe.lovable.app-1777592683026.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

// Meta Pixel Code
const META_PIXEL_SNIPPET = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '26936205326000595');
fbq('track', 'PageView');
`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: META_PIXEL_SNIPPET }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
