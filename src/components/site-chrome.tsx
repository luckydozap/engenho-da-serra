import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/empresa", label: "Empresa" },
  { to: "/marcas", label: "Marcas" },
  { to: "/produtos", label: "Produtos" },
  { to: "/localizacao", label: "Localização" },
  { to: "/contato", label: "Contato" },
  { to: "/pedidos", label: "Pedidos" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-forest-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Logo-engenho.png" alt="Água Engenho da Serra" className="h-12 w-12 rounded-full ring-1 ring-gold/40" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-script text-2xl text-cream">Engenho da Serra</span>
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-gold/80">Água Mineral Natural</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm text-cream/70 transition hover:bg-white/5 hover:text-cream"
              activeProps={{ className: "text-gold bg-white/5" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/5535991314468"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-gold/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold transition hover:bg-gold hover:text-forest-deep md:inline-flex"
        >
          (35) 99131-4468
        </a>
      </div>
      <nav className="flex overflow-x-auto border-t border-white/5 px-4 py-2 lg:hidden">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="shrink-0 rounded-full px-3 py-1 text-xs text-cream/70"
            activeProps={{ className: "text-gold" }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/Logo-engenho.png" alt="" className="h-14 w-14 rounded-full ring-1 ring-gold/40" />
            <div>
              <div className="font-script text-2xl text-cream">Engenho da Serra</div>
              <div className="text-[0.65rem] uppercase tracking-[0.28em] text-gold/70">Água Mineral Natural</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/60">
            Nascida a quase 2000 metros de altitude, ao lado do Parque Nacional de Itatiaia.
          </p>
        </div>
        <div className="text-sm text-cream/70">
          <h4 className="mb-3 font-display text-lg text-cream">Fonte</h4>
          <p>Rodovia BR 354, Km 721</p>
          <p>Engenho da Serra · Itamonte / MG</p>
          <p>Caixa Postal 45</p>
        </div>
        <div className="text-sm text-cream/70">
          <h4 className="mb-3 font-display text-lg text-cream">Contato</h4>
          <p>
            <a href="tel:+5535991314468" className="hover:text-gold">Disque Engenho: (35)- 99131-4468</a>
          </p>
          <p>
            <a href="mailto:contato@aguasengenhodaserra.com.br" className="hover:text-gold">contato@aguasengenhodaserra.com.br</a>
          </p>
          <p>
            <a href="https://wa.me/5535991314468" target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Empresa de Águas Engenho da Serra Ltda. · CNPJ 00.828.821/0001-10
      </div>
    </footer>
  );
}