import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Head } from 'next/document'

export const metadata: Metadata = {
  title: 'Maruyasa',
  description: 'I built this',
  openGraph: {
    images: "/assets/me.png"
  },
  keywords: ["maruyasa", "ma'ruf", "ma'ruf ilyasa", "Maru-Yasa", "maru yasa"]
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
        <Analytics />
      </body>
    </html>
  )
}
