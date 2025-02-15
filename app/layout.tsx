import type { Metadata } from 'next'
import { Inter, Lilita_One } from 'next/font/google'
import './globals.css'
import dotenv from 'dotenv'
dotenv.config()

const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guess what??',
  description: 'Pictionary + Chinese Whisper = Guess what??',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={lilitaOne.className}>{children}</body>
    </html>
  )
}
