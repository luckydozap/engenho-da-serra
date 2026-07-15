import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa — Engenho da Serra" },
      { name: "description", content: "Conheça a nossa sede, a nascente e o nosso processo de qualidade." },
    ],
  }),
  component: EmpresaPage,
});

function EmpresaPage() {
  const items = [
    { img: "/foto-sede-engenho-da-serra.png", label: "Nossa Sede" },
    { img: "/foto-local-nascente-engenho-serra.png", label: "Local da Nascente" },
    { img: "/foto-area-preservacao-engenho-serra.png", label: "Área de Preservação da Fonte" },
    { img: "/foto-nosso-envase-engenho-serra.png", label: "Nosso Envase" },
    { img: "/foto-nossa-logistica.png", label: "Logística Própria" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
      {/* Texto Institucional */}
      <div className="mb-16">
        <h1 className="font-script text-6xl text-cream mb-6">Fonte Engenho da Serra</h1>
        <p className="max-w-3xl text-lg text-cream/75 leading-relaxed">
          Junto ao nosso precioso produto, somos convitos em prestar excelentes serviços! 
          Desde o nosso envase, logística, pós-venda, suporte técnico ao nosso distribuidor 
          e consumidor, acompanhamos passo a passo nossa "Água" para que ela chegue aos 
          lares e nas empresas com a MAIOR GARANTIA DE QUALIDADE.
        </p>
      </div>

      {/* Galeria Centralizada: 3 em cima, 2 embaixo */}
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((it) => (
          <figure 
            key={it.label} 
            className="group w-full sm:w-[320px] overflow-hidden rounded-lg border border-white/5 bg-forest/30"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={it.img} 
                alt={it.label} 
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
              />
            </div>
            <figcaption className="px-6 py-4 font-display text-lg text-cream text-center">
              {it.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}