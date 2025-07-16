import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
})

export const metadata = {
  title: 'RemStirka — Ремонт стиральных машин в Алматы',
  description:
    'Профессиональный ремонт стиральных машин, холодильников и сушилок в Алматы. Быстро, качественно и с гарантией.',
  keywords: [
    'ремонт стиральных машин Алматы',
    'ремонт бытовой техники',
    'ремонт холодильников',
    'мастер по ремонту стиральных машин Алматы',
    'ремонт сушилок',
    'RemStirka',
  ],
  authors: [
    {
      name: 'Yusupzhanov Ravil',
      url: 'https://t.me/Zyko2442',
    },
  ],
  creator: 'RemStirka',
  publisher: 'RemStirka',
  robots: 'index, follow',
  metadataBase: new URL('https://remstirka.kz'),
  openGraph: {
    title: 'RemStirka — Ремонт стиральных машин в Алматы',
    description:
      'Ремонт стиральных машин и другой бытовой техники в Алматы. Срочный выезд, гарантия, доступные цены.',
    url: 'https://remstirka.kz',
    siteName: 'RemStirka',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RemStirka — ремонт стиральных машин в Алматы',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'RemStirka',
              image: 'https://remstirka.kz/images/og-image.jpg',
              url: 'https://remstirka.kz',
              telephone: '+7 747 700 0871',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Алматы',
                addressCountry: 'KZ',
              },
              description:
                'Профессиональный ремонт стиральных машин, холодильников и сушилок в Алматы. Срочный выезд, гарантия, доступные цены.',
              areaServed: 'Алматы',
              openingHours: 'Mo-Su 09:00-21:00',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+7 747 700 0871',
                contactType: 'customer support',
              },
            }),
          }}
        />
      </head>
      <body className={`${rubik.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
