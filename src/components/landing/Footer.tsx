export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 pb-28 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} CoinCarrière. Tous droits réservés.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Mentions légales</a>
          <a href="#" className="hover:text-foreground">Confidentialité</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
