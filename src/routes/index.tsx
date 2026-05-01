import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { SocialProof } from "@/components/landing/SocialProof";
import { Process } from "@/components/landing/Process";
import { CtaStrip } from "@/components/landing/CtaStrip";
import { Benefits } from "@/components/landing/Benefits";
import { VideoDemo } from "@/components/landing/VideoDemo";
import { Stats } from "@/components/landing/Stats";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { ChatWidget } from "@/components/landing/ChatWidget";

const TITLE = "CoinCarrière — Développeurs qualifiés en 72h, sans trier de CV";
const DESCRIPTION =
  "Recevez uniquement des profils tech déjà qualifiés et prêts à être recrutés. Mise en ligne en 2 minutes — sans engagement. Premiers profils en 72h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <SocialProof />
      <Process />
      <CtaStrip
        source="strip-1"
        text="Recevez vos premiers développeurs qualifiés en 72h."
      />
      <Benefits />
      <VideoDemo />
      <Stats />
      <CtaStrip
        source="strip-2"
        text="Lancez votre recrutement — résultats en 72h."
      />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
      <ChatWidget />
    </main>
  );
}
