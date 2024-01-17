import { Inter } from 'next/font/google'
import Providers from '@/redux/provider'
import './globals.scss'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'All todo',
  description: 'All todo is here',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body  className={`${inter.className} body`}>{children}</body>
      </html>
    </Providers>
  )
}
