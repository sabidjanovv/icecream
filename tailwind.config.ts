import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_bg: "#F2CEDA",
        btn_color: "#D23166",
        text_color: "#150101",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka-one)", "cursive"],
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1157px",
      },
    },
  },
  plugins: [],
} satisfies Config;
