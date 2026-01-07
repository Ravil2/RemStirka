import PrivacyPolicy from '@/components/PrivacyPolicy'

export const metadata = {
  title: 'Политика конфиденциальности | RemStirka.kz',
  description:
    'Политика конфиденциальности RemStirka.kz. Узнайте, как мы собираем, используем и защищаем ваши персональные данные при оказании услуг по ремонту стиральных машин в Алматы.',
  alternates: {
    canonical: 'https://remstirka.kz/privacy',
  },
  openGraph: {
    title: 'Политика конфиденциальности | RemStirka.kz',
    description:
      'Политика конфиденциальности RemStirka.kz. Узнайте, как мы защищаем ваши персональные данные.',
    url: 'https://remstirka.kz/privacy',
    siteName: 'RemStirka.kz',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
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
        name: 'Политика конфиденциальности',
        item: 'https://remstirka.kz/privacy',
      },
    ],
  }

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Политика конфиденциальности',
    url: 'https://remstirka.kz/privacy',
    description:
      'Политика конфиденциальности RemStirka.kz. Узнайте, как мы собираем, используем и защищаем ваши персональные данные.',
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
      <PrivacyPolicy />
    </>
  )
}
