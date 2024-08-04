import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#3B5998",
      },
    },
  },
  plugins: [],
} satisfies Config;
