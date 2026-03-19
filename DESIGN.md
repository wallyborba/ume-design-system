# DESIGN.md — Ume Design System
Como o produto Ume deve se parecer e se sentir. Este documento é legível por humanos e por agentes de design — qualquer tela gerada deve seguir estas regras visuais.

## Conceito de marca

**"Progressão visual — crescimento e transformação"**
A identidade Ume traduz o conceito de crédito como crescimento. A linguagem visual usa:

- **Gradientes de energia** — transições de verde escuro → verde claro → roxo que representam progresso
- **Superfícies glass** — camadas translúcidas inspiradas no grafismo 3D cristalino do brandbook
- **Motion progressivo** — elementos que "crescem" e aparecem em sequência (stagger), nunca de uma vez

## Paleta de cores

### Cores da marca

| Nome | Hex | Uso |
|---|---|---|
| Cinza Escuro | `#1A1A1A` | Texto default, fundos escuros |
| Verde Escuro | `#014751` | Sidebar, headers institucionais, autoridade |
| Verde Médio | `#038C52` | Estados ativos, sucesso, overlines |
| Verde Claro | `#09CF7C` | **CTA primário**, accent, ênfase — a cor principal da marca |
| Roxo | `#974AFD` | Links, ações secundárias, focus ring |
| Lavanda | `#CEC1F7` | Highlights suaves, tags em fundo escuro |
| Menta | `#ABF4C4` | Fundos de seção claros |
| Cinza Claro | `#F2F2F2` | Fundos neutros, fills de cards |

### Regra de cor

- **Verde Claro** é o accent primário — botões de ação, CTAs, badges de sucesso
- **Roxo** é o accent secundário — links, focus rings, ações terciárias
- **Verde Escuro** é a cor de autoridade — sidebar, áreas institucionais
- **Nunca** usar cores da marca como texto em fundo branco (contraste insuficiente) — usar os tokens funcionais de texto

### Feedback semântico

| Estado | Cor | Background |
|---|---|---|
| Success | `#038C52` | `rgba(9,207,124,0.08)` |
| Error | `#E53E3E` | `rgba(229,62,62,0.08)` |
| Warning | `#A16207` | `rgba(234,179,8,0.08)` |
| Info | `#014751` | `rgba(1,71,81,0.08)` |

## Tipografia

### Fontes

| Família | Uso | Fallback |
|---|---|---|
| **Aeonik Fono** | Display, headings (h1–h6) | Helvetica Neue, Arial |
| **Aeonik** | Body text, labels, UI | Helvetica Neue, Arial |

### Escala tipográfica

Todos os line-heights são alinhados ao grid de 4px.

| Token | Tamanho | Line-height | Uso |
|---|---|---|---|
| display | 56px | 64px | Hero titles, landing pages |
| h1 | 48px | 60px | Page titles |
| h2 | 36px | 44px | Section headings |
| h3 | 24px | 32px | Subsections |
| h4 | 20px | 28px | Card titles |
| h5 | 18px | 24px | Subtitles |
| body | 16px | 24px | Parágrafo default |
| body-sm | 14px | 24px | Labels, meta |
| caption | 12px | 20px | Captions, timestamps |
| overline | 11px | 20px | Section markers (uppercase, spaced) |

### Letter spacing

- Display e H1–H3: `-0.02em` (tracking apertado)
- H4–H6: `-0.01em`
- Body: `0em`
- Overline: `0.1em` (tracking aberto, sempre uppercase)

## Espaçamento

**Base unit: 4px.** Todo espaçamento é múltiplo de 4.

| Token | Valor | Uso comum |
|---|---|---|
| 1 | 4px | Gaps mínimos |
| 2 | 8px | Gaps entre form fields, padding compacto |
| 3 | 12px | Padding interno de cards compactos |
| 4 | 16px | Padding default de componentes |
| 6 | 24px | Padding de cards, gap entre grupos |
| 8 | 32px | Margin de página, gap de seção |
| 12 | 48px | Gap entre seções |
| 16 | 64px | Padding de hero, cover sections |
| 20 | 80px | Margin entre seções grandes |

## Elevação e sombras

O sistema tem 5 níveis de elevação. Em dark mode, sombras são substituídas por fundos progressivamente mais claros.

| Nível | Shadow | Uso |
|---|---|---|
| 0 | none | Fundo da página |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | Cards, list items, sidebar |
| 2 | `0 4px 12px rgba(0,0,0,0.1)` | Cards elevados, dropdowns |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | Modais, toasts |
| 4 | `0 16px 48px rgba(0,0,0,0.16)` | Overlays críticos |

## Border radius

| Token | Valor | Uso |
|---|---|---|
| sm | 4px | Badges, chips |
| md | 8px | Botões, inputs |
| lg | 12px | Cards (default do shadcn `--radius`) |
| xl | 16px | Containers grandes |
| full | 9999px | Avatares, pills |

## Gradientes

| Nome | Definição | Quando usar |
|---|---|---|
| Dark | `135deg: #1A1A1A → #2D1520 → #1A2A2A → #014751 → #038C52 → #09CF7C` | Covers, hero sections, momentos de autoridade |
| Light | `180deg: #09CF7C → #12C27E → #6FB8C8 → #7AAFD3 → #C6B4E5 → #D2C4EE` | Momentos de marca, cultura, fechamentos |
| Border | `135deg: #09CF7C → #6FB8C8 → #974AFD` | Borda gradiente (assinatura de marca) |
| Accent line | `90deg: #09CF7C → #974AFD` | Linha decorativa em cards e seções |

## Glass (superfícies translúcidas)

Inspiradas no grafismo 3D cristalino da marca. Usar sobre gradientes.

| Nível | Background | Blur | Quando |
|---|---|---|---|
| Level 1 | `rgba(255,255,255,0.08)` | 12px | Sidebars, containers grandes |
| Level 2 | `rgba(255,255,255,0.14)` | 16px | Cards, dropdowns |
| Level 3 | `rgba(255,255,255,0.22)` | 24px | Modais, tooltips |

## Motion

### Filosofia

Motion na Ume segue o conceito de **progressão** — coisas crescem, surgem, revelam-se. Nunca aparecem abruptamente.

### Easing

| Token | Curva | Uso |
|---|---|---|
| standard | `cubic-bezier(0.2, 0, 0, 1)` | Default — maioria das transições |
| decelerate | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Elementos entrando na tela |
| accelerate | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Elementos saindo da tela |
| emphasis | `cubic-bezier(0.2, 0, 0, 1.4)` | Overshoot playful — usar com parcimônia |

### Duração

| Token | Valor | Uso |
|---|---|---|
| fastest | 100ms | Micro — opacity, color shifts |
| fast | 200ms | Hover, toggle, tooltip |
| normal | 300ms | Dropdown, accordion, tab switch |
| slow | 400ms | Modal enter, page transition |
| slower | 500ms | Stagger reveals |
| slowest | 700ms | Brand moments, onboarding |

### Stagger

Delay entre itens em sequência: **80ms**. Aplicar em listas, grids, cards que aparecem juntos.

### Acessibilidade

Quando `prefers-reduced-motion: reduce`:
- Remover todas as animações de transform (translate, scale, rotate)
- Remover animações infinitas/loop
- Manter transições de opacity com duração máxima de 100ms
- Manter transições de cor na duração normal

## Ícones

- **Biblioteca:** Google Material Symbols
- **Estilo:** Rounded
- **Peso:** 400
- **Tamanhos:** 20px (com body text), 24px (com headings), 40px (decorativo)

## Componentes (padrões visuais)

### Botões

- **Primary:** fundo Verde Claro, texto Cinza Escuro — para CTAs principais
- **Secondary:** outline Verde Claro, fundo transparente — ação alternativa
- **Ghost:** sem fundo, sem borda — ação terciária
- **Destructive:** fundo vermelho, texto branco — ações destrutivas
- **Tamanho mínimo:** 44px de altura (touch target)
- **Border radius:** 8px

### Cards

- **Default:** fundo branco, borda `#E5E5E5`, shadow sm, radius 12px, padding 24px
- **Glass:** fundo translúcido, blur, sem shadow — usar sobre gradientes
- **Gradient border:** borda gradiente verde→roxo — destaque de marca
- **Accent:** fundo Verde Escuro, texto branco — seções institucionais

### Sidebar

- **Largura:** 260px
- **Fundo:** Verde Escuro (`#014751`)
- **Texto:** `rgba(255,255,255,0.75)` — item ativo usa Verde Claro
- **Item ativo:** `rgba(9,207,124,0.12)` background + Verde Claro text

### Inputs

- **Border:** 1px solid `#E5E5E5`
- **Focus:** border Roxo + outline `rgba(151,74,253,0.2)`
- **Error:** border vermelho
- **Border radius:** 8px
- **Min height:** 44px

## Dark mode

Ativado via classe `.dark` no `<html>`. Mudanças principais:

- **Fundos:** `#0F0F0F` (page) → `#141414` → `#1A1A1A` → `#1E1E1E` (progressive lightening)
- **Texto:** `#F2F2F2` (primary), `#A3A3A3` (secondary)
- **Bordas:** `#2D2D2D` (default), `#404040` (strong)
- **Focus ring:** troca de Roxo para Verde Claro
- **Elevação:** fundos mais claros substituem sombras como indicador de profundidade

## Princípios de design

1. **Consistência sobre criatividade** — usar tokens, não inventar valores
2. **Hierarquia clara** — overline → heading → body → caption
3. **Espaço para respirar** — generoso com whitespace, especialmente entre seções
4. **Progressão, não surpresa** — transições suaves, reveals em sequência
5. **Acessibilidade** — contraste mínimo AA (4.5:1), touch targets 44px, `prefers-reduced-motion`
