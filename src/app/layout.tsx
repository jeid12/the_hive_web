import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

// Nature Beauty font by Billy Argel Fonts
const natureBeauty = localFont({
  src: '../../public/fonts/NatureBeauty.ttf',
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thehive.game'),
  title: {
    default: 'The Hive | Indie Game Adventure',
    template: '%s | The Hive',
  },
  description:
    'Enter The Hive - an immersive indie game experience. Explore, survive, and thrive in a world buzzing with adventure.',
  keywords: [
    'The Hive',
    'indie game',
    'adventure game',
    'Phaser 3',
    'browser game',
    'survival game',
    'exploration',
  ],
  authors: [{ name: 'Kevin Ishimwe' }],
  creator: 'Kevin Ishimwe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thehive.game',
    siteName: 'The Hive',
    title: 'The Hive | Indie Game Adventure',
    description:
      'Enter The Hive - an immersive indie game experience. Explore, survive, and thrive.',
    images: [
      {
        url: '/og-image.png', // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: 'The Hive - Indie Game Adventure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hive | Indie Game Adventure',
    description:
      'Enter The Hive - an immersive indie game experience. Explore, survive, and thrive.',
    images: ['/og-image.png'], // TODO: Add actual Twitter card image
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${natureBeauty.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
