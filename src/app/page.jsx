import LandingContent from '@/components/LandingContent'

export const metadata = {
  title: 'Ремонт стиральных машин Алматы на дому | Выезд мастера за 2 часа — RemStirka.kz',
  description:
    'Ремонт стиральных машин в Алматы на дому с выездом мастера в течение 2 часов. Гарантия до 1 года, оригинальные запчасти, работаем с 2019 года. Ремонт всех брендов: Samsung, LG, Bosch, Electrolux и др. Звоните: +7 747 700 08 71',
  keywords: [
    'ремонт стиральных машин Алматы',
    'ремонт стиральных машин на дому Алматы',
    'вызов мастера по ремонту стиральных машин Алматы',
    'ремонт стиральных машин срочно Алматы',
    'мастер по ремонту стиральных машин Алматы',
    'ремонт стиральных машин недорого Алматы',
  ],
  alternates: {
    canonical: 'https://remstirka.kz/',
  },
  openGraph: {
    title: 'Ремонт стиральных машин Алматы на дому | Выезд мастера за 2 часа',
    description:
      'Профессиональный ремонт стиральных машин в Алматы с выездом мастера на дом. Гарантия до 1 года, оригинальные запчасти. Выезд в течение 2 часов. Работаем с 2019 года.',
    url: 'https://remstirka.kz/',
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

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Сколько стоит ремонт стиральной машины в Алматы?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Стоимость ремонта стиральной машины зависит от сложности поломки. Диагностика от 2000 тенге. Цена ремонта определяется после диагностики. Мы предлагаем честные цены без скрытых платежей.',
        },
      },
      {
        '@type': 'Question',
        name: 'Как быстро приедет мастер по ремонту стиральных машин?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мастер приезжает в течение 2 часов после вашего звонка. В экстренных случаях возможен выезд в течение часа. Работаем ежедневно с 8:00 до 21:00.',
        },
      },
      {
        '@type': 'Question',
        name: 'Даете ли вы гарантию на ремонт стиральных машин?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы предоставляем гарантию до 1 года на все выполненные работы и установленные запчасти. Гарантийный талон выдается после ремонта.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какие бренды стиральных машин вы ремонтируете?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мы ремонтируем стиральные машины всех популярных брендов: Samsung, LG, Bosch, Electrolux, Indesit, Beko, Ariston, Whirlpool и другие. Используем оригинальные запчасти.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ремонтируете ли вы стиральные машины на дому?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы выполняем ремонт стиральных машин на дому у клиента. Мастер приезжает со всем необходимым оборудованием и запчастями. В большинстве случаев ремонт выполняется за один визит.',
        },
      },
      {
        '@type': 'Question',
        name: 'Что делать, если стиральная машина не включается?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Если стиральная машина не включается, проверьте: подключение к сети, наличие напряжения в розетке, не сработал ли автомат. Если проблема не в этом, вызовите нашего мастера для диагностики. Чаще всего это проблема с электроникой или блоком управления.',
        },
      },
    ],
  }

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
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <h1 className="sr-only">
        Ремонт стиральных машин в Алматы на дому — RemStirka.kz
      </h1>

      <LandingContent />

      <section className="sr-only" aria-label="О компании RemStirka">
        <h2>Профессиональный ремонт стиральных машин в Алматы</h2>
        <p>
          Компания RemStirka.kz занимается профессиональным ремонтом стиральных машин любых
          брендов в Алматы с 2019 года. Наши мастера приезжают в день обращения, диагностика и ремонт
          выполняются с использованием оригинальных запчастей. Гарантия на работы
          — до 1 года. Выезд мастера в течение 2 часов. Работаем со всеми популярными брендами:
          Samsung, LG, Bosch, Electrolux, Indesit, Beko, Ariston, Whirlpool.
        </p>
      </section>
    </>
  )
}
