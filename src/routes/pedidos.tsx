import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/pedidos")({
  component: PedidosPage,
});

const PRODUTOS = [
  { id: 0, nome: "Garrafa Sem Gás", tamanho: "510ml", img: "/garrafa-510ml.jpg" },
  { id: 1, nome: "Garrafa Com Gás", tamanho: "510ml", img: "/garrafa510.JPG" },
  { id: 2, nome: "Garrafa 1,5L", tamanho: "1,5L", img: "/IMG_3995.JPG" },
  { id: 3, nome: "Galão", tamanho: "10L", img: "/galao6l.JPG" },
  { id: 4, nome: "Galão", tamanho: "20L", img: "/galao20l.JPG" }
];

function PedidosPage() {
  // Estado para controlar qual produto está selecionado (começa no primeiro)
  const [selecionado, setSelecionado] = useState(PRODUTOS[0]);
  const numeroWhatsApp = "5535991314468";

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    `Olá! Gostaria de pedir: ${selecionado.nome} (${selecionado.tamanho})`
  )}`;

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-center font-script text-6xl text-cream mb-16">Central de Pedidos</h1>
      
      <div className="grid gap-12 md:grid-cols-2 items-center">
        
        {/* Coluna de Seleção */}
        <div className="space-y-3">
          {PRODUTOS.map((prod) => (
            <button 
              key={prod.id}
              onClick={() => setSelecionado(prod)}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition border ${
                selecionado.id === prod.id 
                ? "bg-gold/10 border-gold" 
                : "bg-forest/30 border-white/5 hover:bg-forest/50"
              }`}
            >
              <span className={`font-medium ${selecionado.id === prod.id ? "text-gold" : "text-cream"}`}>
                {prod.nome} ({prod.tamanho})
              </span>
            </button>
          ))}
        </div>

        {/* Coluna da Imagem e Botão (Muda conforme o estado 'selecionado') */}
        <div className="flex flex-col items-center p-8 rounded-3xl bg-forest/20 border border-white/5">
          <div className="h-64 flex items-center justify-center">
            <img 
              src={selecionado.img} 
              alt={selecionado.nome} 
              className="max-h-full object-contain transition-all duration-500 animate-in fade-in" 
            />
          </div>
          
          <h2 className="mt-8 text-2xl text-cream font-display">{selecionado.nome}</h2>
          <p className="text-gold uppercase tracking-widest text-sm mb-8">{selecionado.tamanho}</p>
          
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="w-full py-4 rounded-full bg-gold text-forest-deep font-bold text-center uppercase tracking-widest hover:bg-cream transition"
          >
            Pedir Agora
          </a>
        </div>
      </div>
    </section>
  );
}