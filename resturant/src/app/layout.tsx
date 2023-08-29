import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Notification from '@/Components/Notification'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import Menu from '@/Components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
