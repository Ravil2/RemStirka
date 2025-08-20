import LandingContent from '@/components/LandingContent'

export const metadata = {
  title: 'Ремонт стиральных машин Алматы — Remstirka.kz',
  description:
    'Ремонт стиральных машин в Алматы на дому. Выезд мастера в день обращения, гарантия до 1 года. Качественный ремонт любых моделей.',
  alternates: {
    canonical: 'https://remstirka.kz/',
  },
  openGraph: {
    title: 'Ремонт стиральных машин Алматы — Remstirka.kz',
    description:
      'Ремонт стиральных машин в Алматы. Выезд мастера, гарантия до 1 года. Заявки принимаем ежедневно.',
    url: 'https://remstirka.kz/',
    siteName: 'Remstirka.kz',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ремонт стиральных машин Алматы — Remstirka.kz',
    description:
      'Профессиональный ремонт стиральных машин в Алматы. Выезд мастера на дом и гарантия до 1 года.',
  },
}

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6 sr-only">
        Ремонт стиральных машин в Алматы на дому
      </h1>

      <LandingContent />

      <h2 className="sr-only">
        Профессиональный ремонт стиральных машин в Алматы
      </h2>
      <p className="sr-only">
        Компания Remstirka.kz занимается ремонтом стиральных машин любых
        брендов. Мастера приезжают в день обращения, диагностика и ремонт
        выполняются с использованием оригинальных запчастей. Гарантия на работы
        — до 1 года.
      </p>
    </>
  )
}
