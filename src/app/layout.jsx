import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'RemStirka — Ремонт стиральных машин в Алматы | Выезд мастера на дом',
    template: '%s | RemStirka.kz',
  },
  description:
    'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти, работаем с 2019 года. Выезд в течение 2 часов. Звоните: +7 747 700 08 71',
  keywords: [
    'ремонт стиральных машин Алматы',
    'ремонт стиральных машин на дому Алматы',
    'мастер по ремонту стиральных машин Алматы',
    'ремонт бытовой техники Алматы',
    'ремонт холодильников Алматы',
    'ремонт сушилок Алматы',
    'ремонт стиральных машин Samsung Алматы',
    'ремонт стиральных машин LG Алматы',
    'ремонт стиральных машин Bosch Алматы',
    'ремонт стиральных машин Electrolux Алматы',
    'сервис ремонта стиральных машин Алматы',
    'вызов мастера по ремонту стиральных машин Алматы',
    'RemStirka',
    'ремонт стиральных машин Алматы недорого',
    'ремонт стиральных машин Алматы срочно',
  ],
  authors: [{ name: 'RemStirka', url: 'https://remstirka.kz' }],
  creator: 'RemStirka',
  publisher: 'RemStirka',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://remstirka.kz'),
  alternates: {
    canonical: 'https://remstirka.kz',
  },
  openGraph: {
    title: 'RemStirka — Ремонт стиральных машин в Алматы | Выезд мастера на дом',
    description:
      'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти. Выезд в течение 2 часов. Звоните: +7 747 700 08 71',
    url: 'https://remstirka.kz',
    siteName: 'RemStirka',
    images: [
      {
        url: 'https://remstirka.kz/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RemStirka — профессиональный ремонт стиральных машин в Алматы',
        type: 'image/jpeg',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RemStirka — Ремонт стиральных машин в Алматы',
    description:
      'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года.',
    images: ['https://remstirka.kz/images/og-image.jpg'],
    creator: '@remstirka',
  },
  verification: {
    google: 'googled626d0824e1a1fb9',
    yandex: '07e4a7c54d370ac6',
  },
  category: 'Ремонт бытовой техники',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://remstirka.kz',
              name: 'RemStirka',
              alternateName: 'Ремстирка',
              image: 'https://remstirka.kz/images/og-image.jpg',
              logo: 'https://remstirka.kz/images/og-image.jpg',
              url: 'https://remstirka.kz',
              telephone: '+77477000871',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Алматы',
                addressRegion: 'Алматы',
                addressCountry: 'KZ',
              },
              description:
                'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти, работаем с 2019 года. Выезд в течение 2 часов.',
              areaServed: {
                '@type': 'City',
                name: 'Алматы',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '21:00',
                },
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+77477000871',
                  contactType: 'customer service',
                  areaServed: 'KZ',
                  availableLanguage: ['Russian', 'Kazakh'],
                },
              ],
              sameAs: [
                'https://wa.me/77477000871',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1',
              },
              review: [
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Алия Нургазинова',
                  },
                  datePublished: '2025-05-15',
                  reviewBody:
                    'Мастер приехал через час после звонка, быстро диагностировал проблему и починил стиральную машину. Все объяснил, дал гарантию на работу. Очень вежливый и профессиональный сервис!',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                    worstRating: '1',
                  },
                },
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Арман Жунусов',
                  },
                  datePublished: '2025-06-03',
                  reviewBody:
                    'Ребята спасли нашу стиральную машину Bosch, которая перестала отжимать. Сначала обращались в другой сервис - не смогли помочь. Здесь же все починили за один визит, запчасти оригинальные. Рекомендую!',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                    worstRating: '1',
                  },
                },
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Дамир Каримов',
                  },
                  datePublished: '2025-06-10',
                  reviewBody:
                    'Лучший сервис по ремонту техники в Алматы! Чинили сложную поломку в стиральной машине LG - в других местах сразу говорили, что проще новую купить. Здесь нашли решение и сделали все за разумные деньги.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                    worstRating: '1',
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'RemStirka',
              url: 'https://remstirka.kz',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://remstirka.kz/?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
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
