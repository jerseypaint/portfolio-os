import './globals.css'
import { Wallpaper } from './components/Wallpaper'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Desktop } from './components/Desktop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('h-full antialiased', inter.variable, monaSans.variable)}>
      <body className={`bg-gray-950 relative min-h-[100dvh]`}>
          <Wallpaper />        
            <Desktop>
              {children}
            </Desktop>
      </body>
    </html>
  )
}
