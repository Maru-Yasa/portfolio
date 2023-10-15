import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import SmoothScroller from '@/components/smooth-scroller'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Maruyasa',
  description: 'I built this',
  openGraph: {
    images: "/assets/me.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
