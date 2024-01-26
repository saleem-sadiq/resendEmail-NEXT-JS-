import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      lineHeight: {
        main: "110%",
        secondary: "134%",
      },
      screens: {
        xs: "360px",
        sm: "500px",
        md: "640px",
        lg: "768px",
        lg2: "850px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
        "4xl": "1920px",
        "5xl": "2200px",
      },
      fontSize: {
        70: "4.375rem", // 70px
        h1: "4rem", // 64px
        60: "3.75rem", // 60px
        "56": "3.5rem", // 56pxF
        h2: "2.875rem", // 46px
        42: "2.625rem", // 42px
        40: "2.5rem", // 40px
        36: "2.25rem", // 36px
        32: "2rem", // 32px
        28: "1.75rem", // 28px
        26: "1.625rem", // 26px
        24: "1.5rem", // 24px
        22: "1.375rem", // 22px
        21: "1.313rem", // 21px
        18: "1.125rem", // 18px
        16: "1rem", // 16px
        14: "0.875rem", // 14px
        13: "0.813rem", // 13px
        11: "0.688rem", // 11px
      },
      colors: {
        primary: {
          50: "#F4F3FC",
          100: "#E7E5EE",
          150: "#E3E2ED",
          175: "#E3E2EDCC",
          200: "#CBCAE9",
          300: "#d5d4f3",
          350: "#B3B3DD",
          400: "#B0AFC6",
          450: "#6D69D6",
          470: "#6373E5",
          500: "#2f29c4",
        },
        black: {
          100: "#d2d2d2",
          300: "#605F60",
          400: "#3F3F3F",
          500: "#1d1c21",
        },
        "custom-orange": "#FB8F6D",
        "white-v2": "#ADADAD",
        "white-v3": "#B2B1AC",
        "light-background": "#FBFAF2",
        "orange-primary": "#FF3D00",
        "red-primary": "#FF5656",
        "green-primary": "#72E26F",
        // Shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      }
    },
  },
  plugins: [],
};
export default config;
