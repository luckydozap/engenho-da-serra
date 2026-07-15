import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Engenho da Serra" },
      { name: "description", content: "Conheça a linha completa de Água Mineral Engenho da Serra." },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProdutosPage,
});

const PRODUTOS = [
  { nome: "Garrafa Sem Gás", tamanho: "510 ml", desc: "Perfeita para o dia a dia.", img: "/garrafa-510ml.jpg" },
  { nome: "Garrafa Com Gás", tamanho: "510 ml", desc: "Refrescância com gás.", img: "/garrafa510.JPG" },
  { nome: "Garrafa", tamanho: "1,5 L", desc: "Hidratação para a família.", img: "/IMG_3995.JPG" },
  { nome: "Galão", tamanho: "10 L", desc: "Para uso residencial.", img: "/galao6l.JPG" },
  { nome: "Galão", tamanho: "20 L", desc: "Ideal para escritórios.", img: "/galao20l.JPG" }
];

const COMPOSICAO = [
  ["Bicarbonato", "13,50"],
  ["Sódio", "2,856"],
  ["Potássio", "2,083"],
  ["Cálcio", "0,881"],
  ["Sulfato", "0,16"],
  ["Cloreto", "0,15"],
  ["Nitrato", "0,15"],
  ["Magnésio", "0,157"],
  ["Fluoreto", "0,06"],
  ["Estrônico", "0,019"],
];

function ProdutosPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-24 text-center">
        <h1 className="font-script text-6xl text-cream">Nossos Produtos</h1>
      </section>

      <section className="mx-auto mb-24 max-w-6xl px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {PRODUTOS.map((prod, i) => (
            <div 
              key={i} 
              className="flex w-full sm:w-[320px] flex-col items-center rounded-2xl border border-white/5 bg-forest/30 p-8 transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-56 w-full items-center justify-center">
                <img src={prod.img} alt={prod.nome} className="max-h-full object-contain" />
              </div>
              <h3 className="mt-6 text-xl text-cream">{prod.nome}</h3>
              <p className="text-gold text-sm font-medium">{prod.tamanho}</p>
              <p className="mt-4 text-center text-sm text-cream/70 leading-relaxed">{prod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Composição Química */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-2xl border border-white/5 bg-forest/30 p-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl text-cream mb-6">Composição Química (mg/L)</h2>
              <div className="space-y-2">
                {COMPOSICAO.map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-cream/70">{k}</span>
                    <span className="font-medium text-cream">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl text-cream mb-6">Características Físico-Químicas</h2>
              <div className="space-y-3 text-cream/80 text-sm">
                <p>Ph à 25ºC: <span className="text-cream">5,71</span></p>
                <p>Temperatura da Água na Fonte: <span className="text-cream">17,2ºC</span></p>
                <p>Condutividade Elétrica a 25ºC: <span className="text-cream">24,5uS/cm</span></p>
                <p>Resíduo de Evaporação a 180ºC: <span className="text-cream">36,37 mg/L</span></p>
                <p>Radioatividade na fonte a 20ºC: <span className="text-cream">10,20 Maches</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}