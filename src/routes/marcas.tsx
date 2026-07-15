import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas — Engenho da Serra" },
      { name: "description", content: "As marcas da família Engenho da Serra." },
      { property: "og:title", content: "Marcas — Engenho da Serra" },
      { property: "og:url", content: "/marcas" },
    ],
    links: [{ rel: "canonical", href: "/marcas" }],
  }),
  component: MarcasPage,
});

const MARCAS = [
  {
    nome: "Água Engenho da Serra",
    img: "/Logo-engenho.png",
    desc: "A nossa marca principal, sinônimo de pureza e tradição, levando a essência da Serra da Mantiqueira até você."
  },
  {
    nome: "Água Minas Gerais",
    img: "/Agua-Minas-Gerais.png",
    desc: "Tradição e qualidade que representam a riqueza das águas do nosso estado."
  },
  {
    nome: "Água Serra do Picu",
    img: "/Agua-Serra-do-Picu.png",
    desc: "Inspirada nas belezas naturais e na força da serra, uma água de leveza ímpar."
  },
  {
    nome: "Água Terras Altas",
    img: "/Agua-Terras-Altas.png",
    desc: "Nascida nas altitudes preservadas, trazendo frescor e pureza incomparáveis."
  },
  {
    nome: "Água Vale do Monte",
    img: "/Agua-Vale-doMonte.png",
    desc: "A essência do vale engarrafada para oferecer hidratação e saúde ao seu dia a dia."
  }
];

function MarcasPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Nossas Marcas</span>
      <h1 className="mt-4 font-script text-6xl text-cream md:text-7xl">Uma família de pureza</h1>
      
      {/* Container flexível e centralizado */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {MARCAS.map((marca) => (
          <div 
            key={marca.nome} 
            className="flex w-full sm:w-[340px] flex-col items-center rounded-2xl border border-white/5 bg-forest/30 p-8 transition hover:bg-forest/40"
          >
            <img src={marca.img} alt={marca.nome} className="h-48 w-48 object-contain drop-shadow-xl" />
            <h2 className="mt-6 font-display text-2xl text-cream">{marca.nome}</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {marca.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}