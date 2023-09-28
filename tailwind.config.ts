import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui",
    addCommonColors: false,
    themes: {
      dark: {
        colors: {
          content1: {
            DEFAULT: "#FFFFFF",
            foreground: "#111111"
          },
          default: {
            DEFAULT: "#111111",
            foreground: "#FFFFFF"
          },
          primary: {
            DEFAULT: "#FFFFFF",
            foreground: "#111111",
            "50": "#FFFFFF",
            "100": "#F0F0F0",
          },
          background: "#111111",
          foreground: "#888888"
        }
      },
      light: {
        colors: {
          content1: {
            DEFAULT: "#111111",
            foreground: "#FFFFFF"
          },
          default: {
            DEFAULT: "#FFFFFF",
            foreground: "#111111"
          },
          primary: {
            DEFAULT: "#111111",
            foreground: "#FFFFFF",
            "50": "#111111",
            "100": "#222222",
            // "200": "#E8E8E8",
            // "300": "#BCBCBC",
            // "400": "#7A7A7A",
            // "500": "#222222",
            // "600": "#1D1819",
            // "700": "#181112",
            // "800": "#130A0D",
            // "900": "#100609"
          },
          background: "#FFFFFF",
          foreground: "#666666"
        }
      }
    }
  })],
}
export default config
