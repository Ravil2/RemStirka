import TermsOfService from '@/components/TermsOfUse'

export const metadata = {
  title: 'Пользовательское соглашение | RemStirka.kz',
  description:
    'Пользовательское соглашение RemStirka.kz. Правила использования сайта и условия оказания услуг по ремонту стиральных машин в Алматы.',
  alternates: {
    canonical: 'https://remstirka.kz/terms',
  },
  openGraph: {
    title: 'Пользовательское соглашение | RemStirka.kz',
    description:
      'Пользовательское соглашение RemStirka.kz. Правила использования сайта и условия оказания услуг.',
    url: 'https://remstirka.kz/terms',
    siteName: 'RemStirka.kz',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
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
        name: 'Пользовательское соглашение',
        item: 'https://remstirka.kz/terms',
      },
    ],
  }

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Пользовательское соглашение',
    url: 'https://remstirka.kz/terms',
    description:
      'Пользовательское соглашение RemStirka.kz, регулирующее условия использования сайта и оказания услуг по ремонту стиральных машин.',
    inLanguage: 'ru',
    isPartOf: {
      '@type': 'WebSite',
      name: 'RemStirka',
      url: 'https://remstirka.kz',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <TermsOfService />
    </>
  )
}
