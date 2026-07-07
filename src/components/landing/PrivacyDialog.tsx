import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PrivacyDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85vh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto border-white/10 bg-card/95 p-0 backdrop-blur-xl">
        <article className="px-5 py-6 text-sm leading-relaxed text-foreground sm:px-8 sm:py-8">
          <DialogHeader className="mb-6 text-left">
            <DialogTitle className="text-2xl font-bold text-foreground">
              Politique de Confidentialité
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Dernière mise à jour : 19 avril 2026
            </DialogDescription>
          </DialogHeader>

          <p className="mb-6 rounded-lg border border-primary/20 bg-primary/10 p-4 text-foreground">
            Cette page est maintenue par CoinCarrière pour répondre aux questions courantes de sécurité et de confidentialité. Elle constitue une politique approuvée par le responsable du traitement et n’est pas une certification ou une vérification indépendante par Lovable.
          </p>

          <Section title="1. Identité du responsable du traitement">
            <p>
              Le site coincarriere.com (ci-après « CoinCarrière » ou « la Plateforme ») est exploité par :
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Raison sociale : 9558-9321 Québec inc., faisant affaire sous le nom CoinCarrière</li>
              <li>NEQ : 1181724304</li>
              <li>Siège social : Québec, QC, Canada</li>
              <li>Courriel : contact@coincarriere.com</li>
              <li>Site web : https://coincarriere.com</li>
            </ul>
            <p>
              Le responsable de la protection des renseignements personnels est le plus haut dirigeant de l’entreprise, joignable à l’adresse ci-dessus.
            </p>
          </Section>

          <Section title="2. Champ d’application">
            <p>
              La présente politique s’applique à tous les utilisateurs de la Plateforme, qu’ils soient candidats, recruteurs, employeurs ou simples visiteurs, et ce, quel que soit leur lieu de résidence. Elle couvre l’ensemble des renseignements personnels collectés via le site web, les formulaires, le dépôt de CV, la création de compte et l’utilisation des services de recrutement.
            </p>
            <p>CoinCarrière se conforme aux lois applicables en matière de protection des renseignements personnels, notamment :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>La Loi sur la protection des renseignements personnels dans le secteur privé du Québec (RLRQ, c. P-39.1), telle que modernisée par la Loi 25</li>
              <li>La Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) du Canada</li>
              <li>Le Règlement général sur la protection des données (RGPD) de l’Union européenne, pour les utilisateurs situés dans l’Espace économique européen</li>
              <li>La Loi n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel du Maroc, pour les utilisateurs situés au Maroc</li>
            </ul>
          </Section>

          <Section title="3. Renseignements personnels collectés">
            <SubTitle>3.1 Renseignements fournis directement par l’utilisateur</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Identification : prénom, nom, adresse courriel, numéro de téléphone</li>
              <li>Informations professionnelles : curriculum vitae (CV), lettre de motivation, expérience professionnelle, formation, compétences, certifications</li>
              <li>Informations de profil : ville, pays, lien LinkedIn, site web personnel</li>
              <li>Informations de compte : identifiants de connexion, mot de passe (chiffré), préférences de notification</li>
              <li>Correspondances : messages échangés via la Plateforme, réponses aux formulaires de candidature</li>
            </ul>

            <SubTitle>3.2 Renseignements collectés automatiquement</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Données techniques : adresse IP, type et version du navigateur, système d’exploitation, résolution d’écran</li>
              <li>Données de navigation : pages consultées, durée des visites, pages de renvoi, parcours de navigation</li>
              <li>Témoins (cookies) : témoins de session, témoins analytiques, témoins publicitaires (voir section 8)</li>
              <li>Données de localisation : pays et région déduits de l’adresse IP</li>
            </ul>

            <SubTitle>3.3 Renseignements reçus de tiers</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Informations transmises par un employeur ou recruteur qui crée un profil candidat dans le cadre d’un processus de recrutement</li>
              <li>Informations provenant de sources publiques (offres d’emploi publiées sur des sites tiers)</li>
            </ul>
          </Section>

          <Section title="4. Finalités et bases légales du traitement">
            <div className="overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Finalité</th>
                    <th className="px-4 py-2 font-semibold">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <TableRow finality="Fournir les services de recrutement (mise en relation candidats-employeurs)" basis="Exécution du contrat" />
                  <TableRow finality="Créer et gérer les comptes utilisateurs" basis="Exécution du contrat" />
                  <TableRow finality="Permettre le dépôt et la consultation de CV" basis="Consentement" />
                  <TableRow finality="Transmettre les candidatures aux employeurs" basis="Consentement" />
                  <TableRow finality="Envoyer des notifications relatives aux candidatures (étape, entretien, offre)" basis="Exécution du contrat" />
                  <TableRow finality="Envoyer des communications marketing et newsletters" basis="Consentement" />
                  <TableRow finality="Améliorer la Plateforme et analyser son utilisation" basis="Intérêt légitime" />
                  <TableRow finality="Prévenir la fraude et assurer la sécurité" basis="Intérêt légitime" />
                  <TableRow finality="Respecter les obligations légales et réglementaires" basis="Obligation légale" />
                  <TableRow finality="Répondre aux demandes et au support" basis="Intérêt légitime" />
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Partage et communication des renseignements">
            <SubTitle>5.1 Employeurs et recruteurs</SubTitle>
            <p>
              Lorsque vous postulez à une offre d’emploi ou déposez votre CV, vos informations professionnelles (CV, coordonnées, expérience) sont transmises aux employeurs concernés afin de traiter votre candidature. Les employeurs sont tenus de respecter la confidentialité de ces informations.
            </p>

            <SubTitle>5.2 Sous-traitants et fournisseurs de services</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Cloudflare, Inc. (San Francisco, USA) — hébergement, stockage des fichiers (R2), base de données (D1), réseau de diffusion de contenu (CDN)</li>
              <li>Google LLC (USA) — Google Analytics (analyse de trafic), Google Ads (publicité)</li>
              <li>Meta Platforms, Inc. (USA) — Facebook Ads (publicité)</li>
              <li>Amazon Web Services (USA) — envoi de courriels transactionnels (SES)</li>
            </ul>
            <p>Ces sous-traitants n’utilisent vos données que dans le cadre des services qu’ils nous fournissent et sont liés par des obligations contractuelles de confidentialité.</p>

            <SubTitle>5.3 Autorités légales</SubTitle>
            <p>
              Nous pouvons communiquer vos renseignements aux autorités compétentes lorsque la loi l’exige, dans le cadre d’une procédure judiciaire, ou pour protéger nos droits légaux.
            </p>

            <SubTitle>5.4 Ce que nous ne faisons pas</SubTitle>
            <p>
              Nous ne vendons jamais vos renseignements personnels à des tiers. Nous ne louons pas, n’échangeons pas et ne monétisons pas vos données personnelles.
            </p>
          </Section>

          <Section title="6. Transferts hors du Québec et du Canada">
            <p>
              Certains de nos sous-traitants sont situés aux États-Unis (Cloudflare, Google, Meta, AWS). Vos renseignements personnels peuvent donc être transférés et traités en dehors du Québec et du Canada.
            </p>
            <p>
              Conformément à la Loi 25, avant tout transfert, nous réalisons une évaluation des facteurs relatifs à la vie privée (EFVP) pour nous assurer que les renseignements bénéficieront d’une protection adéquate. Ces transferts sont encadrés par des clauses contractuelles appropriées.
            </p>
            <p>
              Pour les utilisateurs situés dans l’Union européenne, ces transferts sont effectués sur la base de clauses contractuelles types approuvées par la Commission européenne ou de toute autre garantie prévue par le RGPD.
            </p>
          </Section>

          <Section title="7. Conservation des renseignements">
            <div className="overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Type de données</th>
                    <th className="px-4 py-2 font-semibold">Durée de conservation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <TableRow finality="Curriculum vitae (CV) déposés" basis="5 ans à compter du dépôt ou de la dernière mise à jour" />
                  <TableRow finality="Comptes candidats" basis="5 ans après la dernière connexion" />
                  <TableRow finality="Comptes employeurs / recruteurs" basis="Durée de la relation contractuelle + 3 ans" />
                  <TableRow finality="Données de candidature" basis="5 ans après la clôture du poste" />
                  <TableRow finality="Journaux d’audit" basis="3 ans" />
                  <TableRow finality="Données analytiques (anonymisées)" basis="26 mois" />
                  <TableRow finality="Correspondances / messages" basis="5 ans" />
                </tbody>
              </table>
            </div>
            <p>
              À l’expiration de ces délais, les renseignements sont supprimés ou anonymisés de manière irréversible. Vous pouvez demander la suppression anticipée de vos données à tout moment (voir section 9).
            </p>
          </Section>

          <Section title="8. Témoins (cookies) et technologies de suivi">
            <SubTitle>8.1 Catégories de témoins utilisés</SubTitle>
            <div className="overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Catégorie</th>
                    <th className="px-4 py-2 font-semibold">Finalité</th>
                    <th className="px-4 py-2 font-semibold">Durée</th>
                    <th className="px-4 py-2 font-semibold">Fournisseur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr>
                    <td className="px-4 py-2">Essentiels</td>
                    <td className="px-4 py-2">Authentification, sécurité, fonctionnement du site</td>
                    <td className="px-4 py-2">Session / 7 jours</td>
                    <td className="px-4 py-2">CoinCarrière</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Analytiques</td>
                    <td className="px-4 py-2">Mesure d’audience, amélioration du service</td>
                    <td className="px-4 py-2">26 mois</td>
                    <td className="px-4 py-2">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Publicitaires</td>
                    <td className="px-4 py-2">Publicités personnalisées, mesure de performance</td>
                    <td className="px-4 py-2">90 jours</td>
                    <td className="px-4 py-2">Google Ads, Meta Ads</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <SubTitle>8.2 Gestion des témoins</SubTitle>
            <p>Vous pouvez à tout moment modifier vos préférences en matière de témoins :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Via les paramètres de votre navigateur (bloquer ou supprimer les témoins)</li>
              <li>Via les outils de désactivation de Google Analytics</li>
              <li>Via les paramètres publicitaires de votre compte Google ou Facebook</li>
            </ul>
            <p>Le refus des témoins essentiels peut affecter le fonctionnement de la Plateforme.</p>
          </Section>

          <Section title="9. Vos droits">
            <SubTitle>Pour tous les utilisateurs (Loi 25 / LPRPDE)</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Droit d’accès : obtenir la confirmation que nous détenons des renseignements vous concernant et en recevoir une copie</li>
              <li>Droit de rectification : faire corriger des renseignements inexacts, incomplets ou équivoques</li>
              <li>Droit de suppression : demander la suppression de vos renseignements lorsqu’ils ne sont plus nécessaires</li>
              <li>Droit de retirer votre consentement : retirer à tout moment un consentement préalablement donné</li>
              <li>Droit à la désindexation : demander la cessation de la diffusion de vos renseignements (déréférencement)</li>
              <li>Droit à la portabilité : recevoir vos renseignements dans un format technologique structuré et couramment utilisé</li>
            </ul>

            <SubTitle>Droits additionnels pour les utilisateurs dans l’UE/EEE (RGPD)</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Droit d’opposition : vous opposer au traitement fondé sur l’intérêt légitime</li>
              <li>Droit à la limitation : demander la restriction du traitement dans certains cas</li>
              <li>Droit d’introduire une réclamation : auprès de l’autorité de contrôle compétente (ex. : CNIL en France)</li>
            </ul>

            <SubTitle>Droits additionnels pour les utilisateurs au Maroc (Loi 09-08)</SubTitle>
            <ul className="list-disc space-y-1 pl-5">
              <li>Droit d’opposition : vous opposer, pour des motifs légitimes, au traitement de vos données</li>
              <li>Droit d’introduire une réclamation : auprès de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)</li>
            </ul>

            <SubTitle>Comment exercer vos droits</SubTitle>
            <p>
              Envoyez votre demande à contact@coincarriere.com en précisant votre nom, votre adresse courriel et le droit que vous souhaitez exercer. Nous répondrons dans un délai de 30 jours.
            </p>
          </Section>

          <Section title="10. Sécurité des renseignements">
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos renseignements personnels, notamment :
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Chiffrement des mots de passe (hachage irréversible)</li>
              <li>Chiffrement des communications (HTTPS/TLS)</li>
              <li>Authentification par jetons sécurisés (JWT) avec expiration</li>
              <li>Isolation des données par organisation (architecture multi-tenant)</li>
              <li>Contrôle d’accès basé sur les rôles (RBAC)</li>
              <li>Journaux d’audit sur toutes les opérations sensibles</li>
              <li>Limitation du débit des requêtes (rate limiting)</li>
              <li>Sauvegardes régulières des données</li>
            </ul>
            <p>
              Malgré ces mesures, aucune méthode de transmission ou de stockage électronique n’est totalement sécurisée. En cas d’incident de confidentialité, nous vous en aviserons conformément aux lois applicables.
            </p>
          </Section>

          <Section title="11. Protection des mineurs">
            <p>
              La Plateforme est destinée aux personnes âgées de 16 ans et plus. Nous ne collectons pas sciemment de renseignements personnels auprès de personnes de moins de 16 ans. Si nous apprenons que nous avons collecté des renseignements d’un mineur, nous les supprimerons dans les plus brefs délais.
            </p>
          </Section>

          <Section title="12. Incident de confidentialité">
            <p>
              Conformément à la Loi 25, en cas d’incident de confidentialité présentant un risque de préjudice sérieux, nous :
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Prendrons les mesures raisonnables pour diminuer les risques et prévenir de nouveaux incidents</li>
              <li>Aviserons la Commission d’accès à l’information du Québec (CAI)</li>
              <li>Aviserons les personnes concernées</li>
              <li>Tiendrons un registre de l’incident</li>
            </ul>
          </Section>

          <Section title="13. Modifications de cette politique">
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité périodiquement. En cas de modification substantielle, nous vous en informerons par courriel ou par un avis bien visible sur la Plateforme. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>Pour toute question relative à cette politique ou pour exercer vos droits :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Courriel : contact@coincarriere.com</li>
              <li>Entreprise : 9558-9321 Québec inc. (CoinCarrière)</li>
              <li>Siège social : Québec, QC, Canada</li>
            </ul>
            <p>Si vous estimez que vos droits n’ont pas été respectés, vous pouvez déposer une plainte auprès de :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Québec : Commission d’accès à l’information du Québec (CAI) — cai.gouv.qc.ca</li>
              <li>Canada : Commissariat à la protection de la vie privée du Canada — priv.gc.ca</li>
              <li>Union européenne : l’autorité de contrôle de votre pays de résidence</li>
              <li>Maroc : Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) — cndp.ma</li>
            </ul>
          </Section>
        </article>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <div className="space-y-2 text-muted-foreground">{children}</div>
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="mb-1 mt-4 font-semibold text-foreground">{children}</h4>;
}

function TableRow({ finality, basis }: { finality: string; basis: string }) {
  return (
    <tr>
      <td className="px-4 py-2">{finality}</td>
      <td className="px-4 py-2">{basis}</td>
    </tr>
  );
}
