import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
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

const TITLE = "CoinCarrière — Recrutez des développeurs qualifiés au Maroc";
const DESCRIPTION =
  "Trop de CV, pas assez de bons développeurs ? Recevez uniquement des profils tech pertinents grâce au matching intelligent CoinCarrière. Gratuit pour commencer.";

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
      <SocialProof />
      <Process />
      <CtaStrip
        source="strip-1"
        text="Prêt à recevoir des profils qualifiés cette semaine ?"
      />
      <Benefits />
      <VideoDemo />
      <Stats />
      <CtaStrip
        source="strip-2"
        text="Lancez votre première annonce en 2 minutes."
      />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
      <ChatWidget />
    </main>
  );
}
