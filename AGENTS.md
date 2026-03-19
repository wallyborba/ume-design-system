# AGENTS.md — Ume Design System

Instruções para agentes de código que precisam modificar ou estender este projeto.

## Arquitetura

Este é um site de documentação estático — **não há build step, bundler ou framework**. Cada página é um arquivo HTML independente com CSS inline no `<style>`.

### Arquivos editáveis (o site em si)

| Arquivo | Função |
|---|---|
| `index.html` | Landing page com cards de navegação |
| `foundations.html` | Documentação de tokens: cores, tipografia, grid, espaçamento, elevação, motion, ícones |
| `components.html` | Catálogo de componentes UI com demos visuais |
| `patterns.html` | Padrões de composição: layouts de página, formulários, estados |

### Arquivos de referência (para projetos consumidores)

| Arquivo | Função |
|---|---|
| `globals.css` | CSS global com variáveis, utilities e dark mode — copiar para projetos shadcn/ui |
| `tokens.json` | Tokens de design em formato JSON — source of truth para todas as decisões |
| `tailwind.config.ts` | Config Tailwind — mapeia tokens para classes utilitárias |

Estes 3 arquivos **não são consumidos pelo site de documentação** — são artefatos de referência.

## Como fazer alterações

### CSS

Cada HTML tem seu próprio `<style>` no `<head>`. O CSS não é compartilhado entre páginas.

**Para mudar um estilo:**
1. Abra o HTML da página afetada
2. Encontre a regra CSS no bloco `<style>`
3. Edite diretamente

**Se a mudança afeta todas as páginas** (ex: nav, `.page`, `.cover`, `.section-header`), aplique em todos os 4 arquivos. Cada página tem sua cópia destes estilos.

### Responsividade

Cada página tem dois breakpoints:
- `@media (max-width: 768px)` — tablets
- `@media (max-width: 480px)` — phones

Regras responsivas ficam nos blocos de media query no final do `<style>` de cada página.

### Dark mode

Dark mode usa a classe `.dark` no `<html>`. Os tokens de cor mudam via CSS custom properties definidas em `.dark { }`. O toggle é feito via JavaScript no final de cada página.

### Navegação

A nav é duplicada em cada HTML — não é um componente compartilhado. Mudanças na nav devem ser replicadas nos 4 arquivos.

### Adicionando uma seção

1. Adicione um `<section id="nome-da-secao">` no HTML
2. Adicione o link correspondente no `<nav class="ds-toc">` (table of contents lateral)
3. Siga o padrão de markup existente:

```html
<section id="nome">
  <div class="section-header">
    <div class="overline">Categoria</div>
    <h2>Título da Seção</h2>
    <p>Descrição breve.</p>
  </div>
  <!-- conteúdo -->
</section>
```

## Convenções

- **Sem classes utilitárias globais** — todo CSS é escopo da página
- **IDs em seções** para deep linking e TOC
- **Overlines** usam `font-size: 11px`, `letter-spacing: 0.1em`, `text-transform: uppercase`
- **Headings** usam a font family `var(--font-display)` (Aeonik Fono)
- **Body text** usa `var(--font-body)` (Aeonik)
- **Border radius padrão:** 12px para cards, 8px para inputs/botões, 20px para containers grandes
- **Espaçamento base:** múltiplos de 4px

## Deploy

Push para `main` no GitHub dispara deploy automático na Vercel.

```
git push origin main
```

Não há CI/CD, testes, ou linting — o site é HTML estático servido diretamente.

## Tokens

A fonte de verdade para decisões de design é o `tokens.json`. Se precisar de qualquer valor (cor, spacing, shadow, motion), consulte esse arquivo primeiro.

Para projetos que consomem o design system:
- **Tailwind:** use `tailwind.config.ts`
- **CSS puro:** use `globals.css`
- **Programático:** use `tokens.json`
