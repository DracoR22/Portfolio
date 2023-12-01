'use client'

import { Sora } from 'next/font/google'
import './globals.css'
import Nav from '@/components/navigation/Nav'
import Header from '@/components/navigation/Header'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

   const pathname = usePathname()

  return (
    <html lang="en">
      <body className={`${sora.className} page text-white bg-cover bg-no-repeat font-sora relative`}>
       
          <motion.div >
            {/* <Transition/> */}
             <Nav/>
             <Header/>
             <ToastContainer autoClose={3000} position='top-center' theme='colored'/>
              {children}
          </motion.div>
      
      </body>
    </html>
  )
}
