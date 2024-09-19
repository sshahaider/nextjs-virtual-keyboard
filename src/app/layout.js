import { Poppins } from 'next/font/google'

import './globals.css'
import Provider from '@/components/Provider';

import Header from '@/components/Header'
import Script from 'next/script';
import Footer from '@/components/Footer';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800']
});


const meta = {
  title: "KeyboardOS - Your Language, Your Keyboard",
  dec: 'Discover the best free online keyboards for every language and enjoy a seamless typing experience - on keyboardos.com',
  link: 'https://keyboardos.com/'
}

export const metadata = {
  title: meta.title,
  description: meta.dec,
  keywords: ['KeyboardOS', 'keyboardos.com', 'Free online Keyboard'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  alternates: {
    canonical: meta.link
  },
  openGraph: {
    title: meta.title,
    description: meta.dec,
    url: meta.link,
    images: [`${meta.link}logo.png`],
    locale: 'en-US',
    siteName: 'KeyboardOS',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (

    <html lang="en" >
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
    `}
      </Script>
      <body className={font.className}>
        <Provider>
          <Header />
          <main className="pt-5 pb-12 w-full px-3 md:w-full md:px-10 lg:max-w-6xl lg:mx-auto">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
