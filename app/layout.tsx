'use client'

import { Sora } from 'next/font/google'
import './globals.css'
import Nav from '@/components/navigation/Nav'
import Header from '@/components/navigation/Header'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/transition/Transition'

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

   const router = useRouter()
   const pathname = usePathname()

  return (
    <html lang="en">
      <body className={`${sora.className} page text-white bg-cover bg-no-repeat font-sora relative`}>
        <AnimatePresence mode='wait'>
          <motion.div key={pathname}>
            <Transition/>
            <Nav/>
             <Header/>
              {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}
