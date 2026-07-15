
# Redesign — Água Engenho da Serra

Refazer o site com estética "natureza premium" no tom da imagem verde escura de referência — verde profundo, tipografia elegante, fotos grandes da fonte e da mata.

## Direção visual

- **Paleta**: verde escuro profundo (~#0d3d2a) como base, verde musgo, off-white cremoso, dourado suave como acento.
- **Tipografia**: serifa cursiva elegante nos títulos + sans-serif limpa no corpo.
- **Atmosfera**: hero com foto ampla, silhueta de floresta como textura de fundo, muito respiro, fades suaves ao rolar.

## Estrutura (7 rotas)

1. **/** — hero cinematográfico com logo + "Água Mineral Natural nascida a 2000m", trecho institucional, destaques (fonte, envase, logística), CTA WhatsApp.
2. **/empresa** — história, localização junto ao Parque Nacional de Itatiaia, fotos da sede, preservação, nascente e envase.
3. **/marcas** — apresentação da marca.
4. **/produtos** — garrafa 510ml + galão 20L, fotos e composição química.
5. **/localizacao** — endereço (Rodovia BR 354, Km 721, Itamonte/MG) + mapa Google embed.
6. **/contato** — telefone, e-mail, formulário simples (mailto).
7. **/pedidos** — botão grande de WhatsApp + telefone destacado.

Header fixo com logo redondo + navegação. Footer com endereço, contato e CNPJ.

## Assets (das suas fotos)

Logo, garrafa 510ml, galão 20L, sede, caminhão, envase, área de preservação e nascente — tudo via Lovable Assets CDN.

## Contato

- WhatsApp: **(35) 3363-2168** → `https://wa.me/553533632168`
- Endereço: Rodovia BR 354, Km 721 · Engenho da Serra · Itamonte/MG · Caixa Postal 45

## Técnico

- TanStack Start + Tailwind v4, tokens semânticos em `src/styles.css`.
- Uma rota por página com `head()` próprio (title/description/og).
- Fontes via `<link>` no `__root.tsx` (Playfair Display + Inter).
- Sem backend nessa etapa.
