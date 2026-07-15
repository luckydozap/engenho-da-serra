import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização — Engenho da Serra" },
      { name: "description", content: "Rodovia BR 354, Km 721, Engenho da Serra, Itamonte/MG." },
      { property: "og:title", content: "Localização — Engenho da Serra" },
      { property: "og:url", content: "/localizacao" },
    ],
    links: [{ rel: "canonical", href: "/localizacao" }],
  }),
  component: LocalizacaoPage,
});

function LocalizacaoPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-24 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Onde estamos</span>
        <h1 className="mt-4 font-script text-6xl text-cream md:text-7xl">No coração da Mantiqueira</h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {/* Mapa Grande Ocupando a Largura Total */}
        <div className="overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
          <iframe
            title="Mapa Engenho da Serra"
            src="https://www.google.com/maps?ll=-22.3487423,+-44.7882639&z=0&t=h&hl=pt-BR&gl=BR&mapclient=embed&saddr&daddr=-22.3487423,+-44.7882639&z=18&iwloc=A&output=embed" 
            className="h-[500px] w-full md:h-[600px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Informações de Endereço Abaixo em Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-forest/30 p-8">
            <h2 className="font-display text-xl text-cream">Endereço</h2>
            <p className="mt-4 text-sm text-cream/75">
              Rodovia BR 354, Km 721<br />
              Engenho da Serra, Itamonte / MG<br />
              Caixa Postal 45
            </p>
          </div>
          
          <div className="rounded-2xl border border-white/5 bg-forest/30 p-8">
            <h2 className="font-display text-xl text-cream">Contato</h2>
            <div className="mt-4 space-y-2 text-sm">
              <a href="tel:+553533632168" className="block text-gold hover:text-cream">
                (35) 3363-2168
              </a>
              <a href="https://wa.me/553533632168" target="_blank" rel="noreferrer" className="block text-gold hover:text-cream">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-forest/30 p-8 flex items-center justify-center text-center">
            <p className="text-sm text-cream/70 italic">
              "Pureza que nasce a 2000 metros de altitude, direto da fonte para sua casa."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}