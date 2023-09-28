import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as  NextThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
        <Toaster />
      </NextThemeProvider>
    </NextUIProvider>
  )
}