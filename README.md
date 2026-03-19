<p align="center">
  <img src="https://storage.googleapis.com/prd-static-files-api/brands/ume_new_brand/logo/PNG/LOGO_UME_VERDE%20CLARO_PNG.png" alt="Ume" height="80">
</p>


# Ume Design System
Design System oficial da Ume — foundations, components e patterns para produtos digitais da marca Ume.

**Live demo site:** https://ume-design-system.vercel.app/


## Estrutura
```
design-system/
├── index.html             # Landing page — visão geral do DS
├── foundations.html       # Cores, tipografia, grid, espaçamento, elevação, motion, ícones
├── components.html        # Componentes UI (shadcn/ui): botões, inputs, cards, tabelas, tabs, badges, alerts, modais
├── patterns.html          # Padrões de composição: app shell, sidebar, login, home, dashboard, formulários, mobile
├── globals.css            # CSS global de referência — variáveis CSS, utilities, dark mode (para projetos consumidores)
├── tokens.json            # Design tokens em formato JSON (DTCG-like) — todas as decisões de design como dados
├── tailwind.config.ts     # Configuração Tailwind de referência — mapeia tokens para classes utilitárias
├── fonts/                 # Aeonik e Aeonik Fono (OTF) — tipografia proprietária
├── logos/                 # Logos Ume (SVG) — variações de cor
├── README.md              # Este arquivo
├── AGENTS.md              # Instruções para agentes de código
└── DESIGN.md              # Identidade visual e princípios de design
```

## Stack
- **Fonts:** Aeonik (body) + Aeonik Fono (display) — fontes proprietárias em OTF
- **Icons:** Google Material Symbols Rounded (CDN)
- **Referência para projetos:** shadcn/ui + Tailwind CSS + Next.js

## Versão
v1.1 - Ume 2026
