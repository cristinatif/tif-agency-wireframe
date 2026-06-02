import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TIF Agency - Strategic Marketing & Creative Services',
  description: 'TIF Agency delivers strategic marketing, creative services, and digital solutions for global brands.',
  generator: 'v0.app',
  openGraph: {
    title: 'TIF Agency - Strategic Marketing & Creative Services',
    description: 'TIF Agency delivers strategic marketing, creative services, and digital solutions for global brands.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-text-primary">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
