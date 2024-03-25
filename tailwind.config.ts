import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      minHeight: {
        'screen-header': 'calc(100vh - 40px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
