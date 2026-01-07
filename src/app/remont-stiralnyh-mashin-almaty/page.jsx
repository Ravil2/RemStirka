import Hero from '@/components/Hero'
import Brands from '@/components/Brands'
import Services from '@/components/Services'
import ServicesList from '@/components/ServicesList'
import Reviews from '@/components/Reviews'

export const metadata = {
  title: 'Ремонт стиральных машин Алматы на дому | Выезд мастера за 2 часа — RemStirka.kz',
  description:
    'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти, работаем с 2019 года. Выезд в течение 2 часов. Ремонт всех брендов: Samsung, LG, Bosch, Electrolux. Звоните: +7 747 700 08 71',
  keywords: [
    'ремонт стиральных машин Алматы',
    'ремонт стиральных машин на дому Алматы',
    'вызов мастера по ремонту стиральных машин Алматы',
    'ремонт стиральных машин срочно Алматы',
    'мастер по ремонту стиральных машин Алматы',
    'ремонт стиральных машин Samsung Алматы',
    'ремонт стиральных машин LG Алматы',
    'ремонт стиральных машин Bosch Алматы',
  ],
  alternates: {
    canonical: 'https://remstirka.kz/remont-stiralnyh-mashin-almaty',
  },
  openGraph: {
    title: 'Ремонт стиральных машин Алматы на дому | Выезд мастера за 2 часа',
    description:
      'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти. Выезд в течение 2 часов.',
    url: 'https://remstirka.kz/remont-stiralnyh-mashin-almaty',
    siteName: 'RemStirka.kz',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://remstirka.kz/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ремонт стиральных машин в Алматы на дому',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ремонт стиральных машин Алматы на дому | Выезд мастера за 2 часа',
    description:
      'Профессиональный ремонт стиральных машин в Алматы. Выезд мастера на дом, гарантия до 1 года, оригинальные запчасти.',
    images: ['https://remstirka.kz/images/og-image.jpg'],
  },
}

export default function RepairWashingMachinesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://remstirka.kz/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ремонт стиральных машин Алматы',
        item: 'https://remstirka.kz/remont-stiralnyh-mashin-almaty',
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Ремонт стиральных машин',
    provider: {
      '@type': 'LocalBusiness',
      name: 'RemStirka',
      url: 'https://remstirka.kz',
      telephone: '+77477000871',
    },
    areaServed: {
      '@type': 'City',
      name: 'Алматы',
    },
    description:
      'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KZT',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <h1 className="sr-only">
        Ремонт стиральных машин в Алматы на дому — RemStirka.kz
      </h1>

      <Hero />
      <Brands />
      <Services />
      <ServicesList />
      <Reviews />

      <section className="sr-only" aria-label="О сервисе RemStirka">
        <h2>Почему выбирают RemStirka.kz для ремонта стиральных машин</h2>
        <p>
          Мы предлагаем профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом.
          Работаем ежедневно с 8:00 до 21:00, гарантия до 1 года, оригинальные запчасти и
          честные цены. Более 6 лет опыта ремонта любых моделей стиральных машин всех популярных брендов.
          Выезд мастера в течение 2 часов после звонка.
        </p>
      </section>
    </>
  )
}
