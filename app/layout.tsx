import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import SmoothScroller from '@/components/smooth-scroller'

export const metadata: Metadata = {
  title: 'Maruyasa',
  description: 'I built this',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <SmoothScroller>
            {children}
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  )
}
