import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Engenho da Serra" },
      { name: "description", content: "Fale com a Fonte Engenho da Serra." },
      { property: "og:title", content: "Contato — Engenho da Serra" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [f, setF] = useState({ nome: "", email: "", msg: "" });
  const mailto = `mailto:contato@aguasengenhodaserra.com.br?subject=${encodeURIComponent(
    "Contato via site — " + (f.nome || "Sem nome")
  )}&body=${encodeURIComponent(
    `Nome: ${f.nome}\nE-mail: ${f.email}\n\n${f.msg}`
  )}`;

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-24 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold/80">Contato</span>
        <h1 className="mt-4 font-script text-6xl text-cream md:text-7xl">Fale com a gente</h1>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-24 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-white/5 bg-forest/30 p-6">
            <div className="text-xs uppercase tracking-widest text-gold/80">Disque Engenho</div>
            <a href="tel:+553533632168" className="mt-2 block font-display text-3xl text-cream hover:text-gold">
              (35) 3363-2168
            </a>
          </div>
          <div className="rounded-xl border border-white/5 bg-forest/30 p-6">
            <div className="text-xs uppercase tracking-widest text-gold/80">WhatsApp</div>
            <a href="https://wa.me/553533632168" target="_blank" rel="noreferrer" className="mt-2 block font-display text-3xl text-cream hover:text-gold">
              Enviar mensagem
            </a>
          </div>
          <div className="rounded-xl border border-white/5 bg-forest/30 p-6">
            <div className="text-xs uppercase tracking-widest text-gold/80">E-mail</div>
            <a href="mailto:contato@aguasengenhodaserra.com.br" className="mt-2 block break-all font-display text-xl text-cream hover:text-gold">
              contato@aguasengenhodaserra.com.br
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
          className="space-y-4 rounded-2xl border border-white/5 bg-forest/30 p-8"
        >
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/70">Nome</label>
            <input
              value={f.nome}
              onChange={(e) => setF({ ...f, nome: e.target.value })}
              className="mt-2 w-full rounded-md border border-white/10 bg-forest-deep/60 px-4 py-3 text-cream outline-none focus:border-gold"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/70">E-mail</label>
            <input
              type="email"
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
              className="mt-2 w-full rounded-md border border-white/10 bg-forest-deep/60 px-4 py-3 text-cream outline-none focus:border-gold"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/70">Mensagem</label>
            <textarea
              rows={5}
              value={f.msg}
              onChange={(e) => setF({ ...f, msg: e.target.value })}
              className="mt-2 w-full rounded-md border border-white/10 bg-forest-deep/60 px-4 py-3 text-cream outline-none focus:border-gold"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-widest text-forest-deep transition hover:bg-cream"
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
