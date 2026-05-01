import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
});

const SYSTEM_PROMPT = `Tu es l'assistant officiel de CoinCarrière, une plateforme de recrutement tech au Maroc destinée aux entreprises qui cherchent des développeurs qualifiés.

TON ROLE:
- Répondre aux questions des recruteurs et entreprises visiteurs.
- Les rassurer, lever les objections, et les guider vers la création d'un compte recruteur.
- Toujours répondre en français, ton clair, professionnel et chaleureux.
- Réponses courtes (2-4 phrases max sauf si on te demande des détails).

CE QUE TU SAIS SUR COINCARRIÈRE:
- Plateforme dédiée au recrutement de développeurs au Maroc.
- Matching intelligent : l'entreprise reçoit uniquement des profils tech pertinents (pas une avalanche de CV).
- Plus de 451 entreprises recrutent déjà via la plateforme (ex: Alten Maroc, CGI, Capgemini, Deloitte, SoftGroup).
- Process en 4 étapes : 1) Publier l'annonce, 2) Recevoir les profils matchés, 3) Évaluer/entretiens, 4) Embaucher.
- Stats clés : 3x plus rapide qu'un recrutement classique, 70% de taux de pertinence des profils, +1000 développeurs qualifiés disponibles.
- Offre actuelle : 3 mois gratuits pour les nouveaux recruteurs (offre limitée).
- Création de compte gratuite et sans engagement.

CE QUE TU NE SAIS PAS / NE FAIS PAS:
- Tu ne connais pas les tarifs détaillés au-delà des 3 mois gratuits → invite à créer un compte ou contacter l'équipe.
- Tu ne peux pas créer de compte ni publier d'annonce toi-même → redirige vers le bouton "Publier votre annonce".
- Si la question sort du sujet recrutement / CoinCarrière, recentre poliment.

À CHAQUE FOIS QUE C'EST PERTINENT, termine par une invitation à passer à l'action :
"Vous pouvez publier votre première annonce gratuitement en cliquant sur 'Publier votre annonce' en haut de la page."`;

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }),
      POST: async ({ request }) => {
        const cors = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        };

        let parsed;
        try {
          parsed = BodySchema.parse(await request.json());
        } catch {
          return new Response(
            JSON.stringify({ error: "Requête invalide" }),
            { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
          );
        }

        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return new Response(
            JSON.stringify({ error: "Service IA non configuré" }),
            { status: 500, headers: { ...cors, "Content-Type": "application/json" } },
          );
        }

        const upstream = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              stream: true,
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...parsed.messages,
              ],
            }),
          },
        );

        if (upstream.status === 429) {
          return new Response(
            JSON.stringify({
              error: "Trop de demandes, réessayez dans un instant.",
            }),
            { status: 429, headers: { ...cors, "Content-Type": "application/json" } },
          );
        }
        if (upstream.status === 402) {
          return new Response(
            JSON.stringify({
              error: "Crédits IA épuisés. Contactez l'administrateur du site.",
            }),
            { status: 402, headers: { ...cors, "Content-Type": "application/json" } },
          );
        }
        if (!upstream.ok || !upstream.body) {
          const text = await upstream.text().catch(() => "");
          console.error("AI gateway error:", upstream.status, text);
          return new Response(
            JSON.stringify({ error: "Erreur du service IA" }),
            { status: 500, headers: { ...cors, "Content-Type": "application/json" } },
          );
        }

        return new Response(upstream.body, {
          headers: {
            ...cors,
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
          },
        });
      },
    },
  },
});
