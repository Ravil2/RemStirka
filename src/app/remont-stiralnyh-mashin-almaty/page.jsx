import Hero from '@/components/Hero'
import Brands from '@/components/Brands'
import Services from '@/components/Services'
import ServicesList from '@/components/ServicesList'
import Reviews from '@/components/Reviews'

export const metadata = {
  title: 'Ремонт стиральных машин Алматы | Выезд мастера на дом — Remstirka.kz',
  description:
    'Ремонт стиральных машин в Алматы. Выезд мастера на дом, гарантия до 1 года. Качественный ремонт любых моделей стиральных машин.',
  alternates: {
    canonical: 'https://remstirka.kz/remont-stiralnyh-mashin-almaty',
  },
  openGraph: {
    title: 'Ремонт стиральных машин в Алматы — Remstirka.kz',
    description:
      'Выезд мастера по ремонту стиральных машин в Алматы. Гарантия до 1 года. Заявки принимаем ежедневно.',
    url: 'https://remstirka.kz/remont-stiralnyh-mashin-almaty',
    siteName: 'Remstirka.kz',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ремонт стиральных машин в Алматы — Remstirka.kz',
    description:
      'Ремонт стиральных машин на дому в Алматы. Быстро, качественно и с гарантией до 1 года.',
  },
}

export default function RepairWashingMachinesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6 sr-only">
        Ремонт стиральных машин в Алматы
      </h1>

      <Hero />
      <Brands />
      <Services />
      <ServicesList />
      <Reviews />

      <h2 className="sr-only">Почему выбирают Remstirka.kz</h2>
      <p className="sr-only">
        Мы предлагаем ремонт стиральных машин в Алматы с выездом мастера на дом.
        Работаем без выходных, гарантия до 3 лет, оригинальные запчасти и
        честные цены. Более 6 лет опыта ремонта любых моделей стиральных машин.
      </p>
    </>
  )
}
