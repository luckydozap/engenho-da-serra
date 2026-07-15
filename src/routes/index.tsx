import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Água Engenho da Serra — Nascida a 2000m de altitude" },
      { name: "description", content: "Água mineral natural extraída no coração da Serra da Mantiqueira, ao lado do Parque Nacional de Itatiaia." },
      { property: "og:title", content: "Água Engenho da Serra" },
      { property: "og:description", content: "Pureza que nasce a 2000 metros de altitude." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const PRODUTOS = [
  { nome: "Garrafa Sem Gás", img: "/garrafa-510ml.jpg" },
  { nome: "Garrafa Com Gás", img: "/garrafa510.JPG" },
  { nome: "Garrafa 1,5L", img: "/IMG_3995.JPG" },
  { nome: "Galão 10L", img: "/galao6l.JPG" },
  { nome: "Galão 20L", img: "/galao20l.JPG" }
];

function HomePage() {
  const [index, setIndex] = useState(0);

  const nextProd = () => setIndex((prev) => (prev + 1) % PRODUTOS.length);
  const prevProd = () => setIndex((prev) => (prev - 1 + PRODUTOS.length) % PRODUTOS.length);

  // Efeito para trocar automaticamente a cada 6 segundos
  useEffect(() => {
    const timer = setInterval(nextProd, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/foto-local-nascente-engenho-serra.png" alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/85 to-forest-deep" />
        </div>
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.4em] text-gold/80">
            Fonte Engenho da Serra · Itamonte / MG
          </span>
          <h1 className="font-script text-5xl leading-none text-cream md:text-8xl">
            Conheça a Fonte
          </h1>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light text-cream/90 md:text-5xl">
            Água mineral natural nascida a <span className="text-gold">2000 metros</span> de altitude
          </h2>
          <p className="mt-8 max-w-xl text-base text-cream/70 md:text-lg">
            Em um local muito especial, ao lado do Parque Nacional de Itatiaia,
            em meio a uma floresta rica pela sua fauna e flora, nasce a mais pura água mineral.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5535991314468"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-8 py-3 text-sm font-medium uppercase tracking-widest text-forest-deep transition hover:bg-cream"
            >
              Fazer pedido
            </a>
            <Link
              to="/empresa"
              className="rounded-full border border-cream/30 px-8 py-3 text-sm font-medium uppercase tracking-widest text-cream transition hover:border-gold hover:text-gold"
            >
              Nossa história
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 forest-texture" />
      </section>

      {/* INSTITUCIONAL */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold/80">A Fonte</span>
            <h2 className="mt-4 font-script text-5xl text-cream md:text-6xl">
              Pureza da Mantiqueira
            </h2>
            <div className="mt-8 space-y-5 text-cream/75 md:text-lg">
              <p>
                Através da mais avançada tecnologia e precisão, a Engenho da Serra leva
                este produto tão precioso até o seu lar.
              </p>
              <p>
                Temos consciência da responsabilidade de trabalhar para que todo o processo
                de engarrafamento seja feito com extrema atenção. Tudo isso para que você
                tenha a melhor e mais pura <em className="text-gold not-italic">Água Mineral Natural</em>.
              </p>
            </div>
            <Link
              to="/empresa"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold hover:text-cream"
            >
              Veja mais →
            </Link>
          </div>
          <div className="relative">
            <img src="/foto-sede-engenho-da-serra.png" alt="Sede Engenho da Serra na mata" className="w-full rounded-lg object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-forest px-6 py-4 shadow-xl md:block">
              <div className="font-script text-3xl text-gold">2000m</div>
              <div className="text-xs uppercase tracking-widest text-cream/70">de altitude</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-y border-white/5 bg-black/20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold/80">Nosso processo</span>
            <h2 className="mt-3 font-display text-4xl text-cream">Da fonte até o seu lar</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: "/foto-area-preservacao-engenho-serra.png", title: "Preservação", text: "Área nativa protegida ao lado do Parque Nacional de Itatiaia." },
              { img: "/foto-nosso-envase-engenho-serra.png", title: "Envase", text: "Tecnologia avançada e precisão em cada garrafa." },
              { img: "/foto-nossa-logistica.png", title: "Logística", text: "Entrega própria pelas serras da Mantiqueira." },
            ].map((it) => (
              <div key={it.title} className="group overflow-hidden rounded-lg border border-white/5 bg-forest/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={it.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream">{it.title}</h3>
                  <p className="mt-2 text-sm text-cream/60">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTO EM DESTAQUE (CARROSSEL) */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex h-[400px] w-full items-center justify-center rounded-2xl bg-forest/30 border border-white/5 p-8 transition-all">
              <div className="absolute inset-0 mx-auto h-full w-3/4 rounded-full bg-gold/10 blur-3xl" />
              <img 
                key={PRODUTOS[index].img} 
                src={PRODUTOS[index].img} 
                alt={PRODUTOS[index].nome} 
                className="relative max-h-full object-contain drop-shadow-2xl animate-in fade-in duration-700" 
              />
            </div>
            
            {/* Bolinhas de navegação */}
            <div className="mt-8 flex gap-3">
              {PRODUTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === i ? "bg-gold scale-125" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Setas */}
            <div className="mt-6 flex gap-8">
              <button onClick={prevProd} className="text-gold/70 hover:text-gold uppercase tracking-widest text-xs">← Anterior</button>
              <button onClick={nextProd} className="text-gold/70 hover:text-gold uppercase tracking-widest text-xs">Próximo →</button>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold/80">Nossos produtos</span>
            <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
              Água que fala por si
            </h2>
            <p className="mt-6 text-cream/70 md:text-lg">
              Navegue pelos nossos formatos, da garrafa 510ml ao galão 20L. 
              Cada embalagem carrega a mesma pureza da nascente.
            </p>
            <Link
              to="/produtos"
              className="mt-8 inline-flex rounded-full border border-gold/60 px-6 py-3 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep"
            >
              Ver linha completa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}