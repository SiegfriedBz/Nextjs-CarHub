import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
import './globals.css'
import { authOptions } from '@/utils/authOptions'
import SessionProvider from '@/context/SessionProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://car-hub-jade-two.vercel.app'),
  title: 'Car Hub',
  openGraph: {
    images: '/opengraph-image.png',
    title: 'Car Hub',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
    url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='en' className='scroll-smooth'>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={roboto.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
        <ToastContainer position='bottom-right' />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-5D8965JFGP`}
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5D8965JFGP');
        `}
        </Script>
      </body>
    </html>
  )
}
