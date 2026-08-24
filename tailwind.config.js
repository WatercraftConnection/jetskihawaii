/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      colors: {
        // Ocean scale — the redesign palette. Existing primary/secondary are
        // left untouched below so the other pages keep rendering.
        abyss: "#041424",
        navy: "#062339",
        deep: "#093553",
        ocean: "#0d7490",
        lagoon: "#1092b4",
        foam: "#7dd3e8",
        sun: {
          DEFAULT: "#FFD100",
          dim: "#e6bc00",
        },
        ink: "#0d1b26",
        slate2: "#5a6b78",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#003366", // Darker blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#FFD100", // Slightly darker yellow
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#005792", // Darker accent blue
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        btn: "12px",
        card: "16px",
        panel: "20px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(4,20,36,.10)",
        "card-hover": "0 20px 50px rgba(4,20,36,.20)",
        sun: "0 6px 20px rgba(255,209,0,.28)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(to bottom, #005792, #003366)",
        "hero-gradient": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

