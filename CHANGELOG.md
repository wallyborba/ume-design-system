# Changelog

Todas as mudanças notáveis no Ume Design System serão documentadas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Unreleased]

## [2.2.0] - 2026-03-19

### Added
- Página `playground.html` — playground interativo standalone para componentes
- Controles de variant/size/state para Buttons, Inputs, Badges, Cards, Alerts, Tabs
- Engine `playground.js` (vanilla JS, zero framework) com controles, preview ao vivo, code panel e deep linking
- Estilos do playground em `playground.css`
- `package.json` com dev server (`npm run dev`)
- Presets (variações pré-definidas) como atalhos rápidos
- Toggle dark/light mode por playground individual
- Deep linking via URL hash (`#button?variant=destructive&size=lg`)
- Botão "Copy" no code panel com feedback visual
- Notas de acessibilidade inline por componente
- `CHANGELOG.md` com histórico de versões

### Changed
- Link "Playground" adicionado à nav de todas as páginas
- 4º card na landing page apontando para o playground
- Atualizado `AGENTS.md` com convenções do playground e guia de contribuição
- Atualizado `README.md` com instruções do dev server

## [2.1.0] - 2026-03-12

### Added
- Component Canvas com scroll horizontal em `components.html`
- 20 células de componentes (cards, forms, buttons, table, metrics, charts, stepper, etc.)
- Novos componentes: Range/Slider, File Upload, Progress Bars, Stepper, Tags, Avatar Group, Donut Chart, Sparkline
- Shimmer skeleton com tom verde

### Changed
- Responsividade mobile aprimorada em todas as 4 páginas

## [2.0.0] - 2026-03-01

### Added
- Design System completo com 4 páginas HTML
- Foundations: cores, tipografia, grid, espaçamento, elevação, motion, ícones
- Components: buttons, inputs, badges, cards, alerts, avatars, table, tabs, modal, toast, tooltip, pagination, breadcrumb, skeleton
- Patterns: dashboard, list page, detail page, form page, empty states, loading states
- `globals.css` com variáveis CSS e utilities
- `tokens.json` em formato DTCG
- `tailwind.config.ts` mapeando tokens para classes
- Dark mode via classe `.dark`
- Fontes Aeonik e Aeonik Fono
- Deploy automático na Vercel
