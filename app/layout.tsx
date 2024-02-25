import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './Components/nav/Navbar'
import Footer from './Components/footer/Footer'

const poppins = Poppins({ subsets: ['latin'], weight:['400'] })

export const metadata: Metadata = {
  title: 'Student-Share',
  description: 'Student-Share',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
       <div className='flex flex-col min-h-screen'>
       <Navbar/>
       <main className='flex-grow'>{children}</main>
       <Footer/>
       </div>
        </body>
    </html>
  )
}

