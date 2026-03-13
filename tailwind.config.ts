import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    // ─── Override default screens to align with token breakpoints ───
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      // ─── Ume Brand Colors mapped to shadcn CSS variables ───
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // ─── Ume Brand Palette (direct access) ───
        ume: {
          "cinza-escuro": "#1A1A1A",
          "verde-escuro": "#014751",
          "verde-medio": "#038C52",
          "verde-claro": "#09CF7C",
          roxo: "#974AFD",
          lavanda: "#CEC1F7",
          menta: "#ABF4C4",
          "cinza-claro": "#F2F2F2",
          branco: "#FFFFFF",
        },
        // ─── Ume Extended Scales ───
        green: {
          50: "#E6FAF0",
          100: "#B3F1D5",
          200: "#80E8BA",
          300: "#4DDF9F",
          400: "#09CF7C",
          500: "#07B56C",
          600: "#038C52",
          700: "#026B3F",
          800: "#014A2C",
          900: "#014751",
        },
        purple: {
          50: "#F3ECFE",
          100: "#E1CFFC",
          200: "#CEC1F7",
          300: "#B88FFE",
          400: "#974AFD",
          500: "#7B30E0",
          600: "#6020B8",
          700: "#4A1890",
          800: "#351068",
          900: "#200A40",
        },
        chart: {
          1: "#09CF7C",
          2: "#014751",
          3: "#038C52",
          4: "#974AFD",
          5: "#CEC1F7",
          6: "#ABF4C4",
        },
      },

      // ─── Ume Typography ───
      fontFamily: {
        display: [
          "Aeonik Fono",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: ["Aeonik", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Aeonik", "Helvetica Neue", "Arial", "sans-serif"],
      },

      fontSize: {
        display: ["3.5rem", { lineHeight: "4rem", letterSpacing: "-0.02em" }],     // 56px → 64px
        h1: ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.02em" }],          // 48px → 60px
        h2: ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em" }],       // 36px → 44px
        h3: ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.02em" }],           // 24px → 32px
        h4: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],       // 20px → 28px
        h5: ["1.125rem", { lineHeight: "1.5rem", letterSpacing: "-0.01em" }],       // 18px → 24px
        h6: ["1rem", { lineHeight: "1.5rem", letterSpacing: "-0.01em" }],           // 16px → 24px
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }],                         // 18px → 28px
        body: ["1rem", { lineHeight: "1.5rem" }],                                   // 16px → 24px
        "body-sm": ["0.875rem", { lineHeight: "1.5rem" }],                          // 14px → 24px
        caption: ["0.75rem", { lineHeight: "1.25rem" }],                            // 12px → 20px
        overline: ["0.6875rem", { lineHeight: "1.25rem", letterSpacing: "0.1em" }], // 11px → 20px
      },

      // ─── Ume Border Radius ───
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ─── Ume Box Shadows ───
      boxShadow: {
        "ume-sm": "0 1px 3px rgba(0,0,0,0.08)",
        "ume-md": "0 4px 12px rgba(0,0,0,0.1)",
        "ume-lg": "0 8px 24px rgba(0,0,0,0.12)",
        "ume-xl": "0 16px 48px rgba(0,0,0,0.16)",
        // ─── Brand Signature: Glass Glow ───
        "ume-glow":
          "0 0 20px rgba(9,207,124,0.15), 0 0 60px rgba(9,207,124,0.05)",
        "ume-glow-strong":
          "0 0 30px rgba(9,207,124,0.25), 0 0 80px rgba(9,207,124,0.1)",
        "ume-glow-purple":
          "0 0 20px rgba(151,74,253,0.15), 0 0 60px rgba(151,74,253,0.05)",
        // ─── Elevation Levels ───
        "elevation-0": "none",
        "elevation-1": "0 1px 3px rgba(0,0,0,0.08)",
        "elevation-2": "0 4px 12px rgba(0,0,0,0.1)",
        "elevation-3": "0 8px 24px rgba(0,0,0,0.12)",
        "elevation-4": "0 16px 48px rgba(0,0,0,0.16)",
      },

      // ─── Ume Brand Animations: "Progressão visual" ───
      keyframes: {
        // Grafismo-inspired: elements that "grow" into view
        "ume-grow": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        // Progressive reveal — items appear in sequence
        "ume-rise": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        // Subtle glass shimmer (reflects the crystal grafismo)
        "ume-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Gradient flow — breathing gradient motion
        "ume-gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // shadcn defaults
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "ume-grow": "ume-grow 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)",
        "ume-rise": "ume-rise 0.5s cubic-bezier(0.05, 0.7, 0.1, 1)",
        "ume-shimmer": "ume-shimmer 3s ease-in-out infinite",
        "ume-gradient-flow": "ume-gradient-flow 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s cubic-bezier(0.2, 0, 0, 1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.2, 0, 0, 1)",
      },

      // ─── Ume 4px Base Unit Spacing ───
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
      },

      // ─── Ume Brand Backdrop Blur (glass effect) ───
      backdropBlur: {
        glass: "12px",
        "glass-heavy": "24px",
      },

      // ─── Ume Prose Max-Width (line-length / measure) ───
      maxWidth: {
        prose: "65ch",
        "prose-wide": "75ch",
        "prose-narrow": "45ch",
      },

      // ─── Ume Z-Index Scale ───
      zIndex: {
        base: "0",
        dropdown: "100",
        sticky: "200",
        fixed: "300",
        drawer: "400",
        "modal-backdrop": "500",
        modal: "600",
        popover: "700",
        toast: "800",
        max: "9999",
      },

      // ─── Ume Easing Functions ───
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        accelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
        decelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
        emphasis: "cubic-bezier(0.2, 0, 0, 1.4)",
      },

      // ─── Ume Duration Scale ───
      transitionDuration: {
        fastest: "100ms",
        fast: "200ms",
        normal: "300ms",
        slow: "400ms",
        slower: "500ms",
        slowest: "700ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
